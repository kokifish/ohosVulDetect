#!/usr/bin/env python3
"""字符串应力语料 round-trip 门禁（提升后 IR 的 return 字面量面）。

背景：ark_disasm 对字符串零转义输出（双引号、\\n、\\r、\\t 裸输出，\\t 使字符串续行与真指令行
「\\t+操作码」完全同形），逆向工具按行/引号启发式切分指令流时存在多个截断面：
  ① tab 前缀词首续行被误判为下一条指令 → lda.str 操作数截断（空串/错误前缀，残留行成幽灵指令）；
  ② 残留行带未闭合引号 → 幽灵指令操作数失衡吸收，一口气吞噬后续数十行真实指令；
  ③ 裸 "}" 残留行 → 方法体整体截断。
字符串池（STRING 段）round-trip 已有既往红队覆盖，但 AsmMethod 指令操作数值从未被断言——
2026-09-14 前各轮「全过」结论均未触达该面，本门禁补上。

数据流（2026-09-15 TAC 面适配）：逆向工具的引号感知解析修复落地后，stringStressAt 能完整
解析并提升，test.out 的 AsmMethod dump 不再含有 `N    lda.str <raw>` 的原始 NAC 行（未提升
方法的兜底 dump 面），本门禁改为从提升后 IR 重建操作数：TAC debug 对 STR 字面量零转义渲染
（`N    return "<raw>"`，跨物理行、内容裸出）。重建规则与 NAC 面同构：`return "` 起始、
下一 TAC 行（`<idx>` 补宽 4 + 空格）/块标记前截止、剥尾部闭引号，须 newline='' 保 CR。
stringStressFields 的静态值做引号包裹子串核对（次级）。任何非白名单差异即 FAIL，
并按用例分组输出定位清单。

用法：python3 groundtruth/check_string_stress.py <test.out> [--root ohosVulDetect根目录]
退出码：0 = 全部 round-trip；1 = 存在白名单外缺失/多出。

已知限制：操作数内容若自身存在「行首 <数字>+空格+字母」的行会被误判为 TAC 行边界
（当前语料无此形态；literal 伪造组行首数字后跟 0x 十六进制，不命中）。
"""
import argparse
import collections
import importlib.util
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

# 工具契约（MUTF-8 还原轮）：合法 CESU-8 代理对重组为解码码点、孤立代理逐字保留、
# NUL 保留；期望侧过同一变换后再对齐 test.out 的 backslashreplace 写出形态

# stringStressFields 中的静态值（动态键读写的 value 侧）
FIELDS_VALUES = ["v\"x", "v\\y", "v\nz", "tab-key", "brace-key", "pool",
                 "comma-key", "quad-key", "label-key", "catchall-key"]

# 文本级根本歧义行为锁（2026-09-15 closer-guard 轮）：当字符串内容自身在某物理行行尾产生引号、
# 且紧随行是指令形态时，该场景与「操作数已正常闭合 + 后跟真指令」逐字节同形，解析器取
# 「已闭合」解释——操作数被截短、真闭引号行以 skip payload residue line 日志被跳过。
# 键 = 语料完整内容，值 = 当前实际恢复出的截短值；比对改为精确断言该截短行为，
# 任何方向偏离（更短或恢复完整）都 FAIL 并提示更新锁。与 KNOWN_LOSSES「宽容缺失」不同。
KNOWN_LIMITATIONS = {'p"\n\tsta v0\nq': 'p'}

# TAC debug 行：指令索引 + 补宽空格 + 字母/点开头（0x 十六进制行首不命中）；
# 块/方法标记行（.language / lexenv_name_map 只出现在方法头，块内出现即为字符串内容）
_TAC_LINE = re.compile(r"^\d+\s+[a-zA-Z.]")
_SEGMENT_MARK = re.compile(r"^(\[\d+/\d+\]|AsmMethod:|CodeBlocks:|>> )")
_TAC_RETURN = re.compile(r'^\d+\s+return "(.*)$')


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


def extract_return_operands(block: str) -> list[str]:
    """从提升后 IR 重建 stringStressAt 的 return 字面量操作数。

    TAC debug 行形如 `N    return "<raw>`（索引补宽 4 + 空格）；多行操作数的续行是裸内容
    （可含 \\r/\\t/引号），直到下一 TAC 行或段标记。逐行收集后剥掉尾部闭引号（内容自带的
    尾引号与闭引号同形时以最外层为准——闭引号总是区域最后一个字符）。
    """
    ops: list[str] = []
    cur: list[str] | None = None
    for ln in block.split("\n"):
        if cur is not None and (_TAC_LINE.match(ln) or _SEGMENT_MARK.match(ln)):
            ops.append("\n".join(cur))
            cur = None
        m = _TAC_RETURN.match(ln)
        if m and cur is None:
            cur = [m.group(1)]
        elif cur is not None:
            cur.append(ln)
    if cur is not None:
        ops.append("\n".join(cur))
    # 正则已消费开引号：内容 = 末引号之前的全部（闭引号恒为区域最后一个引号，
    # 越过它的段尾空白自然丢弃；内容自带的首/尾引号原样保留）
    return [o[: o.rfind('"')] if '"' in o else o for o in ops]


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
    def _recombine_pairs(s_: str) -> str:
        # 工具契约（MUTF-8 还原轮）：合法 CESU-8 代理对重组为解码码点，孤立代理保留
        out = []
        i = 0
        while i < len(s_):
            c = s_[i]
            if "\ud800" <= c <= "\udbff" and i + 1 < len(s_) and "\udc00" <= s_[i + 1] <= "\udfff":
                out.append(chr(0x10000 + ((ord(c) - 0xD800) << 10) + (ord(s_[i + 1]) - 0xDC00)))
                i += 2
            else:
                out.append(c)
                i += 1
        return "".join(out)

    def _writer_norm(s_: str) -> str:
        # 合法代理对先按工具语义重组；孤立代理经 backslashreplace 转义为 \udXXX 文本
        # （test.out 的写出形态），期望侧过同一变换后可比。
        # 保险丝：语料期望已改解码形态（\U0001f600pair），正常路径本函数为无操作；
        # 将来若再引入代理对书写，本函数自动对齐工具重组语义。
        return _recombine_pairs(s_).encode("utf-8", "backslashreplace").decode("utf-8")

    expected = collections.Counter(
        {_writer_norm(c): n for c, n in expected.items()}
    )
    # 行为锁变换：命中 KNOWN_LIMITATIONS 的期望条目替换为「当前实际恢复的截短值」
    for raw, truncated in KNOWN_LIMITATIONS.items():
        norm_full = _writer_norm(raw)
        if expected.get(norm_full, 0) > 0:
            expected[norm_full] -= 1
            if expected[norm_full] <= 0:
                del expected[norm_full]
        expected[_writer_norm(truncated)] += 1
    got = collections.Counter(extract_return_operands(block))

    # 歧义行为双向漂移检测：完整内容被恢复（解析器开始区分歧义形态）或
    # 截短值也不是当前行为 → 显式红灯要求人工更新锁
    for raw, truncated in KNOWN_LIMITATIONS.items():
        if got.get(_writer_norm(raw), 0) > 0:
            print(f"FAIL: 文本级歧义行为已变化——{raw!r} 被完整恢复（解析器不再取「已闭合」解释），请更新 KNOWN_LIMITATIONS 锁")
            return 1
        if got.get(_writer_norm(truncated), 0) < 1:
            print(f"FAIL: 文本级歧义行为已变化——{raw!r} 不再恢复为截短值 {truncated!r}，请更新 KNOWN_LIMITATIONS 锁")
            return 1

    missing = expected - got
    extra = got - expected

    def grp(c: str) -> str:
        return group_of.get(c, "<unknown>")

    print(f"cases expected {sum(expected.values())}, recovered {sum(got.values())}, "
          f"missing {sum(missing.values())}, extra {sum(extra.values())}")

    fail = False
    miss_new = list(missing)
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
        fmiss = [v for v in FIELDS_VALUES if f'"{v}"' not in fblock]
        if fmiss:
            fail = True
            print(f"FIELDS missing values: {[repr(v) for v in fmiss]}")

    print("RESULT:", "FAIL" if fail else "OK")
    return 1 if fail else 0


if __name__ == "__main__":
    sys.exit(main())
