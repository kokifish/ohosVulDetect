#!/usr/bin/env python3
"""字符串应力语料 round-trip 门禁（METHODS 段指令操作数面）。

背景：ark_disasm 对字符串零转义输出（双引号、\\n、\\r、\\t 裸输出，\\t 使字符串续行与真指令行
「\\t+操作码」完全同形），逆向工具按行/引号启发式切分指令流时存在多个截断面：
  ① tab 前缀词首续行被误判为下一条指令 → lda.str 操作数截断（空串/错误前缀，残留行成幽灵指令）；
  ② 残留行带未闭合引号 → 幽灵指令操作数失衡吸收，一口气吞噬后续数十行真实指令；
  ③ 裸 "}" 残留行 → 方法体整体截断。
字符串池（STRING 段）round-trip 已有既往红队覆盖，但 AsmMethod 指令操作数值从未被断言——
2026-09-14 前各轮「全过」结论均未触达该面，本门禁补上。

数据流：逆向工具对构建产物输出 test.out（含 AsmMethod debug dump，指令行形如 `N    lda.str <raw>`，
操作数原样裸出、可跨物理行）。本脚本从 tools/gen_string_stress.py 取全部用例期望值，
在 test.out 的 stringStressAt 方法块上重建 lda.str 操作数序列（跨行拼接逐字节还原，须保 CR），
做多重集合比对；stringStressFields 的静态值做子集核对（次级）。任何非白名单差异即 FAIL，
并按用例分组输出定位清单。

用法：python3 groundtruth/check_string_stress.py <test.out> [--root ohosVulDetect根目录]
退出码：0 = 全部 round-trip；1 = 存在白名单外缺失/多出。

已知限制：操作数内容若自身存在「行首 <数字>+空格+字母」的行会被误判为指令边界
（当前语料无此形态；literal 伪造组行首数字后跟 0x 十六进制，不命中）。
"""
import argparse
import collections
import importlib.util
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

# MUTF-8 裸字节导致的既有已记录损失（NUL / 孤立代理对，见 docs/BENCHMARK.md 对应轮次）
KNOWN_LOSSES = {"a\x00b", "x\ud800y", "x\udfffy"}

# stringStressFields 中的静态值（动态键读写的 value 侧）
FIELDS_VALUES = ["v\"x", "v\\y", "v\nz", "tab-key", "brace-key", "pool",
                 "comma-key", "quad-key", "label-key", "catchall-key"]

_INST_LINE = re.compile(r"^\d+\s+[a-zA-Z.]")
_LDASTR_LINE = re.compile(r"^\d+\s+lda\.str (.*)$")


def load_gen_cases(root: pathlib.Path) -> list[tuple[str, str]]:
    spec = importlib.util.spec_from_file_location("gen_string_stress", root / "tools" / "gen_string_stress.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.build_cases()


def load_blocks(test_out: pathlib.Path) -> list[tuple[str, str]]:
    # newline='' 保 CR：CRLF 用例的 \r 是操作数内容的一部分
    txt = test_out.read_text(encoding="utf-8", errors="surrogateescape", newline="")
    pat = re.compile(r"^AsmMethod: \d+ (\S+)", re.M)
    ms = list(pat.finditer(txt))
    return [(m.group(1), txt[m.start(): ms[i + 1].start() if i + 1 < len(ms) else len(txt)])
            for i, m in enumerate(ms)]


def find_block(blocks: list[tuple[str, str]], name: str) -> str:
    for sig, text in blocks:
        if f"#*#{name}" in sig or sig.endswith(f".{name}"):
            return text
    return ""


def extract_ldastr_operands(block: str) -> list[str]:
    """重建 stringStressAt 的 lda.str 操作数序列。

    debug 指令行以「<idx>  <op>」开头；多行操作数的续行是裸内容（可含 \\r/\\t/引号），
    直到下一条指令行。逐行拼接、以 \\n 连接可逐字节还原（内容尾部 \\n 表现为空续行）。
    """
    ops: list[str] = []
    cur: list[str] | None = None
    for ln in block.split("\n"):
        if _INST_LINE.match(ln):
            if cur is not None:
                ops.append("\n".join(cur))
                cur = None
            m = _LDASTR_LINE.match(ln)
            if m:
                cur = [m.group(1)]
        elif cur is not None:
            cur.append(ln)
    if cur is not None:
        ops.append("\n".join(cur))
    return ops


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("test_out")
    ap.add_argument("--root", default=str(ROOT))
    args = ap.parse_args()
    root = pathlib.Path(args.root)

    cases = load_gen_cases(root)
    group_of = {c: g for c, g in cases}
    expected = collections.Counter(c for c, _ in cases)
    expected["string-stress-fallback"] = 1  # stringStressAt 尾部 return

    blocks = load_blocks(pathlib.Path(args.test_out))
    block = find_block(blocks, "stringStressAt")
    if not block:
        print("FAIL: stringStressAt 方法块未在 test.out 中找到（方法面缺失或方法名被改写）")
        return 1
    got = collections.Counter(extract_ldastr_operands(block))

    missing = expected - got
    extra = got - expected

    def grp(c: str) -> str:
        return group_of.get(c, "<unknown>")

    print(f"cases expected {sum(expected.values())}, recovered {sum(got.values())}, "
          f"missing {sum(missing.values())}, extra {sum(extra.values())}")

    fail = False
    miss_known = [c for c in missing if c in KNOWN_LOSSES]
    miss_new = [c for c in missing if c not in KNOWN_LOSSES]
    if miss_known:
        print(f"known losses (MUTF-8 documented, {len(miss_known)}): {[repr(c)[:40] for c in miss_known]}")
    if miss_new:
        fail = True
        by_grp = collections.defaultdict(list)
        for c in miss_new:
            by_grp[grp(c)].append(c)
        print("MISSING (round-trip broken, locate & fix):")
        for g, cs in sorted(by_grp.items()):
            print(f"  [{g}] x{len(cs)}:")
            for c in sorted(cs, key=repr):
                print(f"    {c!r}")
    if extra:
        fail = True
        print("EXTRA (recovered wrong values):")
        for c in sorted(extra.elements(), key=repr):
            print(f"    {c!r}")

    # 次级：stringStressFields 静态值子集核对
    fblock = find_block(blocks, "stringStressFields")
    if not fblock:
        print("WARN: stringStressFields 方法块未找到，次级核对跳过")
    else:
        fops = extract_ldastr_operands(fblock)
        fmiss = [v for v in FIELDS_VALUES if v not in fops]
        if fmiss:
            fail = True
            print(f"FIELDS missing values: {[repr(v) for v in fmiss]}")

    print("RESULT:", "FAIL" if fail else "OK")
    return 1 if fail else 0


if __name__ == "__main__":
    sys.exit(main())
