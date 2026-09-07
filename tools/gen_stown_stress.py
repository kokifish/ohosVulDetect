#!/usr/bin/env python3
"""生成 stownbyindex wide 压力源文件（.ts）。

生成 feat_api/src/main/ets/pages/lang/WideStoreLab.ts：
- N 个「函数调用派生值」元素的数组字面量 → 逐元素 stownbyindex imm1, v, imm2(=元素下标)。
  imm2 编码为有符号 16 位，下标 ≥32768（0x8000）即切换 wide.stownbyindex——阈值是 i16 档
  32767，不是常见 wide 的 i8 档 127（探针实证见 docs/BENCHMARK.md 第五轮节）。
- 元素必须是调用派生值：全常量字面量会被吸收进 createarraywithbuffer 的字面量缓冲，不发射逐元素存储。
- 驱动用函数数组取出 + 循环两次调用（防 release 内联；直接调用会被内联）。
用法：python3 tools/gen_stown_stress.py   （在 ohosVulDetect 仓库根目录执行）
"""
import argparse
import pathlib

HEADER = "// 本文件由 tools/gen_stown_stress.py 生成，勿手改。"


def gen(out: pathlib.Path, n: int) -> None:
    if n <= 32768 + 8:
        raise SystemExit(f"count 必须明显大于 32768 才能触发 wide 档（当前 {n}）")
    elements = ", ".join(f"mkSt({i})" for i in range(n))
    last = n - 1
    body = f"""{HEADER}
// wide.stownbyindex：数组字面量逐元素发射 stownbyindex，imm2（元素下标）为有符号 16 位，
// 下标 ≥32768 即 wide.stownbyindex。元素用 mkSt(i) 调用派生（常量元素会进 createarraywithbuffer）。
function mkSt(i: number): number {{ return i * 2 + 1; }}

function wideStoreSt(): number[] {{ return [{elements}]; }}

// 防内联：函数数组取出 + 循环两次调用；返回两次校验和的一半（r[0]=1，r[{last}]={last * 2 + 1}）。
export function stownWide(): number {{
  const fs: Array<() => number[]> = [wideStoreSt];
  let s: number = 0;
  for (let k = 0; k < 2; k++) {{
    const r: number[] = fs[0]();
    s += r[0] + r[{last}];
  }}
  return s / 2;
}}
"""
    out.write_text(body)


def main() -> None:
    ap = argparse.ArgumentParser(description="generate wide.stownbyindex stress source")
    ap.add_argument("--count", type=int, default=32780, help="数组字面量元素数（须 >32768+8）")
    args = ap.parse_args()
    out = pathlib.Path(__file__).resolve().parent.parent / "feat_api/src/main/ets/pages/lang/WideStoreLab.ts"
    gen(out, args.count)
    print(f"generated: {out} (count={args.count})")


if __name__ == "__main__":
    main()
