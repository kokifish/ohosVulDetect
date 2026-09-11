#!/usr/bin/env python3
"""生成方法名注入压力源文件（entry/src/main/ets/methname/MethNameStressLab.ts）。

红队实证（2026-09-11，逐探针最小模块归因）：对象字面量的字符串键方法/存取器是
「合法 TS、es2abc 可编译、运行时正常」的形态，但键内容会成为 abc 里的**方法名本体**
（`.function any #*#<键>(...)`，ark_disasm 零转义打印），构成对下游 .function 行解析的
直接注入面。命中模式（详见 docs/BENCHMARK.md 红队节）：
  R1 键含换行   → .function 行断行无括号 → _process_method_1st_line IndexError →
                  methods 任务 chunk 整体报废（整模块方法丢失，最致命）
  R2 键含 (     → 方法名截断 + 参数错位 → methods/literals 双丢
  R3 键含空格+<tok>+{ → method_type 劫持 + literals 全丢
  R4 引号/逗号键 → 结构存活但 literal 方法三元组丢失（只剩 method_amount）
放 entry 壳模块：影响面最小（不进 feat_api/feat_vuln 评分语料），仅为工具链提供攻击载荷。

用法：python3 tools/gen_methname_stress.py   （在 ohosVulDetect 子模块根目录执行）
生成后由 entry/pages/Index.ets aboutToAppear 挂载（防 tree-shake + 运行时校验和）。
"""
import argparse
import pathlib

HEADER = "// 本文件由 tools/gen_methname_stress.py 生成，勿手改。"

# (slug, 键字面量内部文本(双引号形态), 形态说明)
KEYS: list[tuple[str, str, str]] = [
    ("nl_method", "n\nl", "R1 换行键方法：.function 行断行无括号 → 整 chunk 方法丢失"),
    ("nl_getter", "g\r\ng", "R1 换行键 getter（CR+LF）"),
    ("paren_method", 'a(b', "R2 括号键：名字截断 + 参数错位"),
    ("paren_only", '(', "R2 纯括号键：方法名坍缩为 #*#"),
    ("static_tok", 'x <static> {', "R3 空格+<tok>+{：method_type 劫持"),
    ("fake_sig", 'f(any a0) <static> {', "R3 完整伪造签名键"),
    ("lang_line", '.language ECMAScript', "R3 伪造 .language 行片段"),
    ("quote_method", 'm"q', "R4 引号键：literal 方法三元组丢失"),
    ("comma_getset", 's, v', "R4 逗号键 getter/setter"),
    ("dbl_quote", '\"\"', "R4 双引号键"),
    ("mangle_pre", '#*#x', "键=改写前缀形态：#*##*#x 前缀叠加"),
    ("label_key", 'jump_label_0:', "键=label 形态"),
    ("esslot_key", 'L_ESSlotNumberAnnotation:', "键=方法边界标记形态"),
    ("offset_key", '[offset:0x9, name_value:zz]', "键=池条目形态"),
    ("cjk_key", '方法\"名', "非 ASCII 键（结构应存活，污染下游命名）"),
    ("field_nl", "f\nf", "换行键普通字段（literal 面）"),
]


def enc_key(k: str) -> str:
    """键 Python 内容 -> TS 双引号字面量。"""
    out = []
    for ch in k:
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
        elif o < 0x20 or o == 0x7F:
            out.append(f"\\u{o:04x}")
        else:
            out.append(ch)
    return "".join(out)


def main() -> int:
    ap = argparse.ArgumentParser(description="generate method-name injection stress source")
    ap.add_argument("--outdir", default="entry/src/main/ets/methname", help="输出目录（相对子模块根）")
    args = ap.parse_args()
    outdir = pathlib.Path(args.outdir)
    out = outdir / "MethNameStressLab.ts"

    lines = [
        HEADER,
        "// 方法名注入语料：对象字面量字符串键方法/存取器——键内容成为 abc 方法名本体",
        "// （.function any #*#<键>(...)），对下游 .function 行解析构成注入面。命中模式与",
        "// 归因见 tools/gen_methname_stress.py 文档字符串与 docs/BENCHMARK.md 红队节。",
        "// 运行时无风险：全部为合法 TS 对象字面量语义。",
    ]
    for i, (slug, key, note) in enumerate(KEYS):
        lines.append(f"// {slug}: {note}")
        if slug == "comma_getset":
            lines.append(f"export const mn{i}_getset = {{ get \"{enc_key(key)}\"(): number {{ return {i}; }}, set \"{enc_key(key)}\"(v: number) {{ }} }};")
        elif slug == "nl_getter":
            lines.append(f"export const mn{i}_get = {{ get \"{enc_key(key)}\"(): number {{ return {i}; }} }};")
        elif slug == "field_nl":
            lines.append(f"export const mn{i}_field: Record<string, number> = {{ \"{enc_key(key)}\": {i} }};")
        else:
            lines.append(f"export const mn{i}_{slug} = {{ \"{enc_key(key)}\"(): number {{ return {i}; }} }};")
    lines += [
        "",
        "// 运行时校验和：遍历全部对象计数键位（防 tree-shake；值正确性由 sweep/冒烟核对）。",
        "export function methNameStressChecksum(): string {",
        "  let cnt = 0;",
    ]
    for i, (slug, _, _) in enumerate(KEYS):
        if slug == "comma_getset":
            lines.append(f"  cnt += Object.keys(mn{i}_getset).length;")
        elif slug == "nl_getter":
            lines.append(f"  cnt += Object.keys(mn{i}_get).length;")
        elif slug == "field_nl":
            lines.append(f"  cnt += Object.keys(mn{i}_field).length;")
        else:
            lines.append(f"  cnt += Object.keys(mn{i}_{slug}).length;")
    lines += [
        '  return `methname keys=${cnt}`;',
        "}",
        "",
    ]
    outdir.mkdir(parents=True, exist_ok=True)
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"generated: {out} (keys={len(KEYS)})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
