#!/usr/bin/env python3
"""源码 vs 逆向工具 IR 逐函数结构化比对（Layer 1：自动化清单核对）。

对每个源码函数（feat_vuln/feat_api 的 export function 与页面 build 闭包所在的 record），
从源码抽取：字符串字面量、数字字面量、API 调用名、控制流关键词（await/for/while/try/throw/new）；
从 test.out 对应方法块抽取同构要素，报告缺失项。
ArkGuard 属性混淆会改写"属性名样"字符串（已知 FN 形态），缺失项交给人工/LLM 裁决。

用法：python3 compare_src_ir.py <test.out> [--root ohosVulDetect根目录]
"""
import argparse
import collections
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

STR_RE = re.compile(r"'([^']*)'|\"([^\"]*)\"")
NUM_RE = re.compile(r"\b(\d+(?:\.\d+)?)\b")
CALL_RE = re.compile(r"\.([A-Za-z_][A-Za-z0-9_]*)\s*\(")
FUNC_RE = re.compile(r"export\s+(?:async\s+)?function\s+([A-Za-z0-9_]+)")
# 控制流关键词 → IR 形态
CF_MAP = {
    "await": "__await|__asyncfunction",
    "for": r"jmp jump_label",  # 回边存在即可（宽松）
    "while": r"jmp jump_label",
    "try": r"try_begin_label",
    "throw": r": throw",
    "new ": r"newobjrange|__newobj",
}


def _strip_comments(code: str) -> str:
    # 先词法化再剥注释：跳过 '...'/"..."/`...` 内部，避免误伤 http:// 等
    out, i, n = [], 0, len(code)
    while i < n:
        c = code[i]
        if c in "'\"`":
            j = i + 1
            while j < n and code[j] != c:
                j += 2 if code[j] == "\\" else 1
            out.append(code[i : j + 1])
            i = j + 1
        elif code.startswith("//", i):
            j = code.find("\n", i)
            i = n if j < 0 else j
        elif code.startswith("/*", i):
            j = code.find("*/", i)
            i = n if j < 0 else j + 2
        else:
            out.append(c)
            i += 1
    return "".join(out)


def src_facts(code: str) -> dict:
    code = _strip_comments(code)
    # 模板字面量在 IR 中反编译为 concat 链，其静态分段单独核对
    tmpl_segs = []
    for t in re.findall(r"`([^`]*)`", code):
        tmpl_segs += [s for s in re.split(r"\$\{[^}]*\}", t) if len(s) >= 3]
    code = re.sub(r"`[^`]*`", "''", code)
    return {
        "strs": [m.group(1) if m.group(1) is not None else m.group(2) for m in STR_RE.finditer(code)] + tmpl_segs,
        "nums": [m.group(1) for m in NUM_RE.finditer(code)],
        "calls": {m.group(1) for m in CALL_RE.finditer(code)},
        "cf": {k for k in CF_MAP if re.search(rf"\b{k.strip()}\b", code)},
    }


def load_blocks(test_out: str):
    pat = re.compile(r"^AsmMethod: \d+ (\S+)", re.M)
    ms = list(pat.finditer(test_out))
    return [
        (m.group(1), test_out[m.start(): ms[i + 1].start() if i + 1 < len(ms) else len(test_out)])
        for i, m in enumerate(ms)
    ]


def record_text(blocks, key: str) -> str:
    return "\n".join(t for sig, t in blocks if key in sig)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("test_out")
    ap.add_argument("--root", default=str(ROOT))
    args = ap.parse_args()

    blocks = load_blocks(pathlib.Path(args.test_out).read_text(errors="ignore"))
    by_record = collections.defaultdict(str)
    for sig, text in blocks:
        rec = sig.split("#")[0].rstrip(".")
        by_record[rec] += text + "\n"

    report, n_fn = [], 0
    for sub in ("feat_vuln", "feat_api"):
        for f in sorted((pathlib.Path(args.root) / sub / "src/main/ets").rglob("*.ets")):
            code = f.read_text(errors="ignore")
            rel = str(f.relative_to(pathlib.Path(args.root) / sub))
            rec_key = "&" + sub + ".src.main.ets." + rel.replace("src/main/ets/", "").replace("/", ".").rsplit(".", 1)[0] + "&"
            ir = next((v for k, v in by_record.items() if k.rstrip("&") in rec_key.rstrip("&") or rec_key.rstrip("&") in k.rstrip("&")), "")
            if not ir:
                report.append((rel, "<record-missing>", "IR record not found"))
                continue
            for m in FUNC_RE.finditer(code):
                name, n_fn = m.group(1), n_fn + 1
                # 函数体：从声明到下一个 export/文件尾
                tail = code[m.end():]
                nxt = re.search(r"\nexport |\n@(Component|Struct|Entry|Builder)", tail)
                body = code[m.start(): m.end() + (nxt.start() if nxt else len(tail))]
                facts = src_facts(body)
                # 找该函数的 IR 块（#*#name 或 >#name），找不到则用 record 域
                fn_ir = ""
                for sig, text in blocks:
                    if rec_key.rstrip("&") in sig and (f"#*#{name}" in sig or f">{name}" in sig or sig.endswith(f".{name}")):
                        fn_ir = text
                        break
                scope = fn_ir if fn_ir else ir
                where = "fn" if fn_ir else "record"
                miss = []
                # 闭包（编译为独立方法）内的调用/常量在 record 域核对
                wide = scope if where == "record" else scope + "\n" + ir
                for s in facts["strs"]:
                    if len(s) >= 3 and s not in wide and f'"{s}"' not in wide:
                        miss.append(f'str:{s[:40]}')
                for n in facts["nums"]:
                    forms = {n, f"{float(n)}", f"{n}.0"}
                    if n in ("0", "1", "2") or any(x in wide for x in forms):
                        continue
                    miss.append(f"num:{n}")
                for c in facts["calls"]:
                    if c not in wide and f'"{c}"' not in wide:
                        miss.append(f"call:{c}")
                for k in facts["cf"]:
                    if not re.search(CF_MAP[k], wide):
                        miss.append(f"cf:{k.strip()}")
                if miss:
                    report.append((rel, f"{name}({where})", ", ".join(miss[:8])))

    print(f"functions scanned: {n_fn}; records missing: {sum(1 for r in report if r[1]=='<record-missing>')}")
    print(f"functions with gaps: {sum(1 for r in report if r[1]!='<record-missing>')}")
    for rel, fn, miss in report:
        print(f"  {rel:55s} {fn:30s} {miss}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
