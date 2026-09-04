#!/usr/bin/env python3
"""生成"巨型参数/规模索引"型 wide 变体压力源文件（.ts）。

生成 feat_api/src/main/ets/pages/lang/WideFormsLab.ts：
- COUNT 个 `export let` + 同模块读取        → wide.ldlocalmodulevar（const 会被 release 折叠，必须 let）
- import IMPORT_N 个 SendableWideData 的 w 绑定 → wide.ldexternalmodulevar（import 表索引 >127）
- 128+ 实参构造 + new                       → wide.newobjrange（imm = new 实参个数）
- 函数数组取出的动态调用，128+ 实参          → wide.callthisrange
- 直接动态调用，128+ 实参                    → wide.callrange（≥4 参的动态调用即出基础 callrange）
- rest 前形参 ≥128 + ...rest                → wide.copyrestargs（imm = rest 前形参个数）
- 128+ 个排除键的对象 rest 解构              → wide.createobjectwithexcludedkeys

wide 阈值统一 MAX_INT8=127。与非 wide 的 callrange（≥4 参动态调用）一并覆盖。
用法：python3 tools/gen_wide_stress.py   （在 ohosVulDetect 子模块根目录执行）
"""
import argparse
import pathlib

HEADER = "// 本文件由 tools/gen_wide_stress.py 生成，勿手改。"


def gen_data(out: pathlib.Path, imports_n: int) -> None:
    # 跨文件 const 不会被 release 常量折叠（同文件才会），可直接 const。
    lines = [HEADER, ""]
    lines += [f"export const w{i}: number = {i + 1};" for i in range(imports_n)]
    out.write_text("\n".join(lines) + "\n")


def gen(out: pathlib.Path, count: int, imports_n: int) -> None:
    lines = [HEADER]
    lines.append(f"import {{ {', '.join(f'w{i}' for i in range(imports_n))} }} from './WideFormsData';")
    lines.append("")
    # let（可变模块变量）不可被 release 常量折叠。
    lines += [f"export let g{i}: number = {i};" for i in range(count)]
    lines += [
        "",
        "export function localReadWide(): number {",
        "  let s = 0;",
    ]
    lines += [f"  s += g{i};" for i in range(count)]
    lines += ["  return s;", "}", ""]
    lines += [
        "export function externalReadWide(): number {",
        "  let s = 0;",
    ]
    lines += [f"  s += w{i};" for i in range(imports_n)]
    lines += ["  return s;", "}", ""]
    params = ", ".join(f"a{i}: number" for i in range(count))
    args = ", ".join(str(i % 10) for i in range(count))
    lines += [
        f"class BigCtor {{",
        f"  constructor({params}) {{}}",
        "}",
        "",
        "export function newWide(): number {",
        f"  const c = new BigCtor({args});",
        "  return c ? 1 : 0;",
        "}",
        "",
        f"function takesMany({params}): number {{",
        f"  return a0 + a{count - 1};",
        "}",
        "",
        "export function callRangeWide(): number {",
        "  const fs: ((...a: number[]) => number)[] = [takesMany as any];",
        f"  return fs[0]({args});",
        "}",
        "",
        "export function callRangeDirect(): number {",
        "  const f: Function = takesMany as any;",
        "  return f(1, 2, 3, 4, 5);",
        "}",
        "",
    ]
    mapped = ", ".join(f"m{i}: number" for i in range(128))
    lines += [
        f"export function restWide({mapped}, ...rest: number[]): number {{",
        "  // 勿读 m0：>127 形参的调用在部分槽位发生参数错位（实测 m0 得到运行时内部对象，",
        "  // toString 为 'Cannot get source code'）；copyrestargs 触发只依赖 rest 前形参数量。",
        "  return rest.length;",
        "}",
        "",
        # 调用包装：防 ArkGuard 剥离未被页面调用的导出。
        f"export function restWideCall(): number {{",
        f"  return restWide({', '.join(['1'] * 130)});",
        "}",
        "",
        "export function excludedWide(o: Record<string, number>): number {",
        f"  const {{ {', '.join(f'e{i}' for i in range(count))}, ...tail }} = o as any;",
        "  return Object.keys(tail).length;",
        "}",
        "",
    ]
    out.write_text("\n".join(lines))


def main() -> int:
    ap = argparse.ArgumentParser(description="generate arg-scale wide-variant stress source")
    ap.add_argument("--count", type=int, default=130, help="巨型参数/导出数（默认 130，>127 触发 wide）")
    ap.add_argument("--imports", dest="imports_n", type=int, default=136, help="import 绑定数（默认 136，复用 SendableWideData 的 w0..w135）")
    ap.add_argument("--outdir", default="feat_api/src/main/ets/pages/lang", help="输出目录（相对子模块根）")
    args = ap.parse_args()
    outdir = pathlib.Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    gen_data(outdir / "WideFormsData.ts", args.imports_n)
    gen(outdir / "WideFormsLab.ts", args.count, args.imports_n)
    print(f"generated: {outdir / 'WideFormsLab.ts'}, {outdir / 'WideFormsData.ts'} (count={args.count} imports={args.imports_n})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
