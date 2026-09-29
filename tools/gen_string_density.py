#!/usr/bin/env python3
"""生成单 record 字符串密度极端档（feat_api/src/main/ets/pages/lang/StringDensityLab.ts）。

不平衡口径（区别于 gen_string_stress.py 的解析安全应力）：全部字符串内容集中于
单一编译单元，压测反汇编侧字符串池/LITERALS 段在分布极端化下的行为——
  one-long   单串 ~120KB（源码展开，超 string_stress 超长档 50 倍）
  big-array  单字面量数组 20000 string 元素（LITERALS 段单条巨数组）
  repeat-same 同一标识符引用 5000 次（池应去重为 1 条 + N 操作数引用）
  near-dup   5000 条微差串（池不去重，池条目数爆炸）
挂载：DynamicImportDemo 页 'string-density' case（防 tree-shake + 运行时校验长度）。
用法：python3 tools/gen_string_density.py
"""
import pathlib

N_LONG = 120_000
N_ARRAY = 20_000
N_REPEAT = 5_000
N_NEAR = 5_000


def gen() -> int:
    lines = [
        "// 本文件由 tools/gen_string_density.py 生成，勿手改。",
        "// 单 record 字符串密度极端档（不平衡口径）：one-long / big-array / repeat-same / near-dup。",
        f"export const ONE_LONG: string = '{'d' * N_LONG}';",
        "",
        "export const BIG_ARRAY: string[] = [",
    ]
    lines += [f"  'ba{i:05d}'," for i in range(N_ARRAY)]
    lines += ["];", ""]
    lines.append("const MARKER: string = 'pool-dedup-marker-ovd';")
    lines.append("export const REPEAT_SAME: string[] = [")
    lines += ["  MARKER," if i % 10 else "\n  MARKER," for i in range(N_REPEAT)]
    lines.append("];")
    lines.append("")
    lines.append("export const NEAR_DUP: string[] = [")
    lines += [f"  'nd-{i:06d}-x'," for i in range(N_NEAR)]
    lines.append("];")
    lines.append("")
    lines.append("""export function densityStats(): string {
  let nearLen = 0;
  for (let i = 0; i < NEAR_DUP.length; i += 499) {
    nearLen += NEAR_DUP[i].length;
  }
  return `long=${ONE_LONG.length} arr=${BIG_ARRAY.length} rep=${REPEAT_SAME.length} near=${NEAR_DUP.length} probe=${nearLen}`;
}""")
    out = pathlib.Path("feat_api/src/main/ets/pages/lang/StringDensityLab.ts")
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return N_LONG + N_ARRAY + N_REPEAT + N_NEAR


if __name__ == "__main__":
    n = gen()
    print(f"generated: feat_api/src/main/ets/pages/lang/StringDensityLab.ts (units={n})")
