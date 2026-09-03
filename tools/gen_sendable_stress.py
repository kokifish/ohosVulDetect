#!/usr/bin/env python3
"""生成 sendable 指令覆盖压力源文件（wide 变体触发器）。

生成两个 ArkTS 文件（放 feat_api/src/main/ets/concurrent/）：
- SendableWideData.ets：导出 EAGER_N + LAZY_N 个 number 常量，供 import 表扩容。
- SendableWideLab.ets ：LOCAL_N 个本模块导出 let 变量 + CLASSES_N 个无构造 @Sendable 类
  + @Sendable 压力函数，引用全部类/全部 import/全部本模块变量。

触发目标（u8 操作数 → u16 wide 变体；es2panda 以 MAX_INT8=127 为界，索引 >127 即 wide）：
- callruntime.widenewsendableenv   : 模块内 @Sendable 类数 > 127（newsendableenv 的 imm 是 env 大小）
- callruntime.widestsendablevar    : func_main_0 存第 128+ 个类（slot ≥ 128）
- callruntime.wideldsendablevar    : @Sendable 函数引用第 128+ 个类（slot ≥ 128）
- callruntime.wideldsendableexternalmodulevar : import 表第 128+ 个非 lazy 绑定
- callruntime.wideldlazysendablemodulevar     : import 表第 128+ 个 lazy 绑定（索引接在全部非 lazy 之后）
- callruntime.wideldsendablelocalmodulevar    : 本模块导出变量第 128+ 个（API18+ 编译才支持本形态）

规模说明：类槽位与 eager import 索引都从 0 计数，必须越过 128，故 CLASSES_N/EAGER_N/LOCAL_N
取阈值+4~8 余量；lazy 绑定索引天然落在全部 eager 之后（≥128 必为 wide），取少量即可。
u8 档指令与 ldsendableclass（@Sendable 类方法自引用）由 SendableLab.ets 覆盖，本生成器只负责 wide 档。

用法：python3 tools/gen_sendable_stress.py   （在 ohosVulDetect 子模块根目录执行）
生成后需在页面挂载 sendWideStress（见 pages/api/SendableDemo.ets）。
"""
import argparse
import pathlib

HEADER = "// 本文件由 tools/gen_sendable_stress.py 生成，勿手改。"
PACK = 8  # 压力函数每行累加的项数


def gen_data(out: pathlib.Path, eager: int, lazy: int) -> None:
    lines = [HEADER, ""]
    lines += [f"export const w{i}: number = {i + 1};" for i in range(eager)]
    # lazy 绑定名用 z 前缀：import 变量索引按名字母序分配，z* 必排全部 w* 之后（≥128 即 wide）。
    lines += [f"export const z{i}: number = {i + 1};" for i in range(lazy)]
    out.write_text("\n".join(lines) + "\n")


def pack_lines(items: list[str]) -> list[str]:
    return ["  s += " + " + ".join(items[i:i + PACK]) + ";" for i in range(0, len(items), PACK)]


def gen_lab(out: pathlib.Path, classes: int, eager: int, lazy: int, local: int) -> None:
    lines = [
        HEADER,
        f"// 压力形态：{classes} 个 @Sendable 类 + {eager} eager + {lazy} lazy import + {local} 本模块变量。",
        "",
    ]
    lines.append(f"import {{ {', '.join(f'w{i}' for i in range(eager))} }} from './SendableWideData';")
    lines.append(f"import lazy {{ {', '.join(f'z{i}' for i in range(lazy))} }} from './SendableWideData';")
    lines.append("")
    # let（可变模块变量）不可被 release 常量折叠：const 会被折叠成字面量，wide localmodulevar 随之消失。
    lines += [f"export let m{i}: number = {i + 1};" for i in range(local)]
    lines.append("")
    for i in range(classes):
        lines += [
            "@Sendable",
            f"class SW{i} {{",
            "  v: number = 1;",
            "}",
            "",
        ]
    lines += [
        "@Sendable",
        "export function sendWideStress(): number {",
        "  let s = 0;",
    ]
    lines += pack_lines([f"new SW{i}().v" for i in range(classes)])
    lines += pack_lines([f"w{i}" for i in range(eager)] + [f"z{i}" for i in range(lazy)])
    lines += pack_lines([f"m{i}" for i in range(local)])
    lines += [
        "  return s;",
        "}",
        "",
    ]
    out.write_text("\n".join(lines))


def main() -> int:
    ap = argparse.ArgumentParser(description="generate sendable wide-variant stress sources")
    ap.add_argument("--classes", type=int, default=136, help="@Sendable 类数量（默认 136，>127 触发 wide）")
    ap.add_argument("--eager", type=int, default=136, help="非 lazy import 绑定数（默认 132）")
    ap.add_argument("--lazy", type=int, default=12, help="lazy import 绑定数（默认 12，索引接在 eager 后必为 wide）")
    ap.add_argument("--local", type=int, default=136, help="本模块导出变量数（默认 136，触发 wideldsendablelocalmodulevar）")
    ap.add_argument("--outdir", default="feat_api/src/main/ets/concurrent", help="输出目录（相对子模块根）")
    args = ap.parse_args()

    outdir = pathlib.Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    gen_data(outdir / "SendableWideData.ets", args.eager, args.lazy)
    gen_lab(outdir / "SendableWideLab.ets", args.classes, args.eager, args.lazy, args.local)
    print(f"generated: {outdir / 'SendableWideData.ets'}, {outdir / 'SendableWideLab.ets'}")
    print(f"  classes={args.classes} eager={args.eager} lazy={args.lazy} local={args.local}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
