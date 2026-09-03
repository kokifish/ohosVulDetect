#!/usr/bin/env python3
"""生成词法环境 wide 变体压力源文件（wide.newlexenvwithname/ldlexvar/stlexvar）。

生成 feat_api/src/main/ets/pages/lang/LexWideLab.ets：单一函数内 COUNT 个局部 const，
全部被同一个箭头函数捕获。es2panda 的词法环境槽位只分配给"被捕获的变量"，按捕获顺序编号；
单作用域被捕获变量 > 127（MAX_INT8）时，newlexenvwithname/ldlexvar/stlexvar 全部转 wide 形态。

用法：python3 tools/gen_lexwide_stress.py   （在 ohosVulDetect 子模块根目录执行）
生成后由 pages/lang/RuntimeDemo.ets 挂载（防 tree-shake 并做运行时验证）。
"""
import argparse
import pathlib

HEADER = "// 本文件由 tools/gen_lexwide_stress.py 生成，勿手改。"
PACK = 8


def gen(out: pathlib.Path, count: int) -> None:
    lines = [
        HEADER,
        f"// 单一作用域 {count} 个从参数 base 派生的 const（字面量会被 release 常量折叠、消除捕获），",
        "// 全部被箭头函数捕获；阈值 127，留余量。",
        "export function lexWideStress(base: number): number {",
    ]
    lines += [f"  const c{i} = base + {i + 1};" for i in range(count)]
    terms = [f"c{i}" for i in range(count)]
    picks = []
    for i in range(0, len(terms), PACK):
        name = f"pick{i // PACK}"
        lines.append(f"  const {name} = (): number => " + " + ".join(terms[i:i + PACK]) + ";")
        picks.append(name)
    # 经数组 + 循环间接调用，阻止 release 内联（内联会整体消除词法环境，wide 变体随之消失）。
    lines += [
        "  const pickers: Array<() => number> = [" + ", ".join(picks) + "];",
        "  let s = 0;",
        "  for (const p of pickers) {",
        "    s += p();",
        "  }",
        "  return s;",
        "}",
        "",
    ]
    out.write_text("\n".join(lines))


def main() -> int:
    ap = argparse.ArgumentParser(description="generate lexical-env wide-variant stress source")
    ap.add_argument("--count", type=int, default=136, help="被捕获变量数（默认 136，>127 触发 wide）")
    ap.add_argument("--outdir", default="feat_api/src/main/ets/pages/lang", help="输出目录（相对子模块根）")
    args = ap.parse_args()
    outdir = pathlib.Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    gen(outdir / "LexWideLab.ets", args.count)
    print(f"generated: {outdir / 'LexWideLab.ets'} (captured vars={args.count})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
