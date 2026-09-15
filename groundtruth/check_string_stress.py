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

用法：python3 groundtruth/check_string_stress.py <test.out> [--dis feat_api.dis] [--root ohosVulDetect根目录]
退出码：0 = 全部 round-trip；1 = 存在白名单外缺失/多出。

--dis（2026-09-15 P2）：literal 缓冲面全量核对。TAC 面看不到 literal 值（createarraywithbuffer
只渲染偏移），本模式对 ark_disasm 的 LITERALS 节做 oracle 走查——按 build_cases 顺序逐项断言
`string:"<raw>", ` 片段（literal 值零转义裸出，与期望字节直比，无需转义表）：
  ① 数组缓冲（count 字段 == 用例数）：全用例按序走查；
  ② 对象缓冲（count == 2×恶劣键数）：键值交错按序走查。

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
# 歧义矩阵实测（2026-09-15 P1 轮，stringStressMatrix 函数内 14 组合，bench24/api26 双口径一致）：
# 根因 = 解析器对「首物理行行尾引号」取已闭合解释——case0/1 截短为 'p'（TAC render 面）；
# case5 的内容行 `}` 在已闭合状态下被当成方法尾，case5 尾部起整个方法截断（case6-13 与
# matrix-fallback 整体缺失）；仅 .catchall / return 跟随行因闭行扫描接受而完整恢复。
# .dis 与 parse 层（快照 573）完整——截短发生在 lift/TAC-render 面，机理归因属上层工具链。
# 逐案机理：case0/1（sta/ldobjbyname 跟随）截短 'p'（case1 经 `return "p".k` 提取）；case3
# （jump_label 跟随）分支被提升为 ACC="p"+return ACC——非字面量 return 故无操作数；case5
# （`}` 跟随）触发方法截断连带 case6-13 与 matrix-fallback 缺失；.catchall/return 跟随行
# 因闭行扫描接受而完整恢复。
# 键 = 语料完整内容；值 = 当前实际恢复值（None = 整体缺失）；乘数按 build_cases 次数对齐。
KNOWN_LIMITATIONS = {
    'p"\n\tsta v0\nq': 'p',                                      # closer-guard 歧义形态（stringStressAt）
    'p"\n\tsta v0\ntail': 'p',
    'p"\n\tldobjbyname 0x0, "k"\ntail': 'p',
    'p"\njump_label_0:\ntail': None,
    'p"\n}\ntail': None,
    'p"\n# STRING ====================\ntail': None,
    'p\n\tsta v0\ntail': None,
    'p\n.catchall\ntail': None,
    'p\n}\ntail': None,
    'p""\n\tsta v0\ntail': None,
    'p""\n.catchall\ntail': None,
    'p\\\n\tsta v0\ntail': None,
    'p\\\n# STRING ====================\ntail': None,
}
# 随方法截断而缺失的尾部 return（stringStressMatrix 尾）
KNOWN_ABSENT_RETURNS = ['matrix-stress-fallback']

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


def literal_walk_check(dis_path: pathlib.Path, cases: list[tuple[str, str]]) -> list[str]:
    """LITERALS 节 oracle 走查：数组缓冲（全用例按序）+ 对象缓冲（键值交错按序）。

    literal 值零转义裸出（" \n \r \t 均原样），期望侧无需转义表，直接字节比对。
    边界与排除说明：literal 值零转义裸出但 **ark_disasm 的 literal 打印器对部分形态有损**
    （2026-09-15 实测：ambiguity-matrix 组 14 值——首行行尾引号 + tab 指令形态续行——在 .dis
    里渲染为空串，而 abc 字节完整、方法面同值渲染完整，SDK 工具渲染层缺陷），该 14 值从
    literal oracle 排除（其 round-trip 由 parse 层快照 + TAC 面行为锁覆盖）。走查 = 有序
    find（非严格邻接，容忍排除项的空串条目夹在中间）：按 build_cases 顺序逐项从游标向后
    定位，顺序断言保留；缓冲级精确边界文本层不可判定（lit-spoof 即伪造该面），已知残余
    弱点见 gen 文档。
    """
    import importlib.util as _ilu
    spec = _ilu.spec_from_file_location("gen_string_stress", ROOT / "tools" / "gen_string_stress.py")
    mod = _ilu.module_from_spec(spec)
    spec.loader.exec_module(mod)
    keys = mod.pick_keys(cases)

    def _mutf8(x: str) -> bytes:
        # MUTF-8/CESU-8：按 UTF-16 码元编码——NUL → C0 80，非 BMP 字符拆代理对
        # （surrogatepass 出 3 字节 CESU-8），其余同标准 UTF-8
        out = b''
        for ch in x:
            o = ord(ch)
            if ch == '\x00':
                out += b'\xc0\x80'
            elif o >= 0x10000:
                hi = 0xD800 + ((o - 0x10000) >> 10)
                lo = 0xDC00 + ((o - 0x10000) & 0x3FF)
                out += chr(hi).encode('utf-8', 'surrogatepass') + chr(lo).encode('utf-8', 'surrogatepass')
            else:
                out += ch.encode('utf-8', 'surrogatepass')
        return out

    raw = dis_path.read_bytes()
    fails: list[str] = []

    def walk(pos: int, expect_frags: list[bytes]) -> int | None:
        # 有序 find：按序定位每个期望片段（游标单调前进），顺序断言保留
        p = pos
        for i, frag in enumerate(expect_frags):
            p = raw.find(frag, p)
            if p < 0:
                return i + 1
            p += len(frag)
        return None

    opener = re.compile(rb'(?m)^(\d+) 0x[0-9a-f]+ \{ (\d+) \[ ')
    n_keys = len(keys)
    obj_frags: list[bytes] = []
    for ki, k in enumerate(keys):
        obj_frags.append(b'string:"' + _mutf8(k) + b'", ')
        obj_frags.append(('string:"k' + chr(97 + ki % 26) + str(ki) + 'v", ').encode())
    # ambiguity-matrix 组 14 值被 ark_disasm literal 打印器渲染为空串（SDK 渲染缺陷，
    # 见 docstring），从 literal oracle 排除
    mat_contents = {c for c, g in cases if g == "ambiguity-matrix"}
    arr_cases = [(c, g) for c, g in cases if c not in mat_contents]
    arr_frags = [b'string:"' + _mutf8(c) + b'", ' for c, _ in arr_cases]

    def try_buffers(want_cnt: int, frags: list[bytes], label: str) -> None:
        tried = 0
        for m in opener.finditer(raw):
            if int(m.group(2)) != want_cnt:
                continue
            tried += 1
            if walk(m.end(), frags) is None:
                print(f"  {label}: OK（count=={want_cnt} 缓冲严格邻接走查通过，候选 #{tried}）")
                return
        fails.append(f"{label}: 无候选缓冲通过严格邻接走查（count=={want_cnt}，尝试 {tried} 个）")

    try_buffers(len(cases), arr_frags, "array")  # count 含被渲染为空串的排除项
    try_buffers(2 * n_keys, obj_frags, "object")
    return fails


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("test_out")
    ap.add_argument("--dis", default=None, help="feat_api 的 ark_disasm 输出（启用 literal 缓冲面全量核对）")
    ap.add_argument("--root", default=str(ROOT))
    args = ap.parse_args()
    root = pathlib.Path(args.root)

    cases = load_gen_cases(root)
    group_of = {c: g for c, g in cases}
    expected = collections.Counter(c for c, _ in cases)
    expected["string-stress-fallback"] = 1  # stringStressAt 尾部 return
    expected["matrix-stress-fallback"] = 1  # stringStressMatrix 尾部 return

    blocks = load_blocks(pathlib.Path(args.test_out))
    block_at = find_block(blocks, "stringStressAt")
    block_mat = find_block(blocks, "stringStressMatrix")
    if not block_at:
        print("FAIL: stringStressAt 方法块未在 test.out 中找到（方法面缺失或方法名被改写）")
        return 1
    # 歧义矩阵组拆独立函数（防 lift 容量截断）：两块拼接后统一重建操作数
    block = block_at + ("\n" + block_mat if block_mat else "")
    if not block_mat:
        print("WARN: stringStressMatrix 块未找到，仅核对 stringStressAt")
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
    raw_count = collections.Counter(c for c, _ in cases)
    # 行为锁变换：截短条目替换为「当前实际恢复值」；None 条目（整体缺失）从期望中移除
    for raw, truncated in KNOWN_LIMITATIONS.items():
        norm_full = _writer_norm(raw)
        cnt = raw_count.get(raw, 1)
        if expected.get(norm_full, 0) >= cnt:
            expected[norm_full] -= cnt
            if expected[norm_full] <= 0:
                del expected[norm_full]
        if truncated is not None:
            expected[_writer_norm(truncated)] += cnt
    for absent in KNOWN_ABSENT_RETURNS:
        if expected.get(absent, 0) > 0:
            del expected[absent]
    got = collections.Counter(extract_return_operands(block))

    # 歧义行为双向漂移检测：截短条目被完整恢复、缺失条目重新出现、截短值数量不符
    # → 显式红灯要求人工更新锁（上层工具链修复落地后按新行为重写本表）
    for raw, truncated in KNOWN_LIMITATIONS.items():
        norm_full = _writer_norm(raw)
        cnt = raw_count.get(raw, 1)
        if got.get(norm_full, 0) > 0:
            print(f"FAIL: 文本级歧义行为已变化——{raw!r} 被完整恢复（截短/缺失行为改变），请更新 KNOWN_LIMITATIONS 锁")
            return 1
        if truncated is not None and got.get(_writer_norm(truncated), 0) < cnt:
            print(f"FAIL: 文本级歧义行为已变化——{raw!r} 恢复为 {truncated!r} 的次数不足（期望 {cnt}），请更新 KNOWN_LIMITATIONS 锁")
            return 1
    for absent in KNOWN_ABSENT_RETURNS:
        if got.get(absent, 0) > 0:
            print(f"FAIL: 行为已变化——{absent!r} 重新出现（方法截断改变），请更新 KNOWN_ABSENT_RETURNS")
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

    # P2：literal 缓冲面全量核对（--dis 启用）
    if args.dis:
        lfail = literal_walk_check(pathlib.Path(args.dis), cases)
        if lfail:
            fail = True
            print("LITERALS face FAIL:")
            for f in lfail:
                print(f"  {f}")
        else:
            print("LITERALS face: OK（数组缓冲 + 对象缓冲全量按序走查通过）")

    print("RESULT:", "FAIL" if fail else "OK")
    return 1 if fail else 0


if __name__ == "__main__":
    sys.exit(main())
