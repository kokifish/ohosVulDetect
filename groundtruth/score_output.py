#!/usr/bin/env python3
"""基准评分器 v2（函数级谓词 + record 级常量 + 孪生按 vuln 规则评测）。

匹配规则（对 manifest 每条）：
- constants：在源文件 record 域内全部命中（scope=global 时全域）；
  布尔/数字按逆向工具 IR 文本形态归一化（true→TRUE，int→"n" 与 "n.0" 皆可命中）；
- call：全部 token 在函数块（无则 record 域）命中，token 裸形态或 "引号" 形态均可；
- predicate：IR 谓词（return-true / empty-array / fixed-nonce）在函数块判定；
- skip：标记为 skip 的条目不计入 TP/FN（难度用例，另行列出）；
- native 条目在 .so 字符串匹配；manifest 条目在 module.json 匹配；
- 孪生（expected=false）：用其 twin_of 条目的规则在孪生 record 上判定，命中即 FP。

用法：python3 score_output.py <test.out> <app文件> [manifest.json]
"""
import json
import pathlib
import re
import sys
import tempfile
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent

PREDICATES = {
    "return-true": lambda blk: "return TRUE" in blk,
    "empty-array": lambda blk: "emptyarray{}" in blk,
    "fixed-nonce": lambda blk: "bench-fixed-nonce" in blk,
}


def load_blocks(test_out: str):
    pattern = re.compile(r"^AsmMethod: \d+ (\S+)", re.M)
    matches = list(pattern.finditer(test_out))
    return [(m.group(1), test_out[m.start():matches[i + 1].start() if i + 1 < len(matches) else len(test_out)])
            for i, m in enumerate(matches)]


def record_key(source: str) -> str:
    return "." + source.split("ets/")[-1].replace("/", ".").rsplit(".", 1)[0] + "&"


def record_text(blocks, source: str) -> str:
    key = record_key(source)
    return "\n".join(text for sig, text in blocks if key in sig)


def function_block(blocks, source: str, function: str):
    key = record_key(source)
    for sig, text in blocks:
        if key in sig and (f"#*#{function}" in sig or f">{function}" in sig):
            return text
    return None


def norm_constants(constants):
    """布尔/数字归一化为 IR 文本形态；字符串原样。返回 [(名字, [候选文本])]。"""
    out = []
    for c in constants:
        if isinstance(c, bool):
            out.append((c, ["TRUE" if c else "FALSE"]))
        elif isinstance(c, (int, float)):
            forms = {str(c), f"{float(c)}"}
            out.append((c, forms))
        else:
            out.append((c, [c]))
    return out


def extract_from_app(app_path: str, hap_suffix: str, inner_suffixes: tuple[str, ...]) -> dict[str, bytes]:
    """从 .app 中取指定 hap，再从 hap 内取 module.json / .so 等。"""
    got: dict[str, bytes] = {}
    with tempfile.TemporaryDirectory() as td:
        with zipfile.ZipFile(app_path) as z:
            hap = next((n for n in z.namelist() if n.endswith(hap_suffix)), None)
            if not hap:
                sys.exit(f"ERROR: app 内未找到 {hap_suffix}")
            z.extract(hap, td)
            with zipfile.ZipFile(pathlib.Path(td) / hap) as h:
                for m in h.namelist():
                    if "module.json" in m or any(m.endswith(s) for s in inner_suffixes):
                        got.setdefault(m, h.read(m))
    return got


def main() -> int:
    test_out_path, app_path = sys.argv[1], sys.argv[2]
    manifest_path = sys.argv[3] if len(sys.argv) > 3 else str(ROOT / "groundtruth" / "manifest.json")

    test_out = pathlib.Path(test_out_path).read_text(encoding="utf-8", errors="ignore")
    blocks = load_blocks(test_out)
    blobs = extract_from_app(app_path, "feat_vuln-default.hap", (".so",))
    so_text = next((b.decode("utf-8", "ignore") for k, b in blobs.items() if k.endswith("libentry.so")), "")
    module_json = next((b.decode("utf-8", "ignore") for k, b in blobs.items() if "module.json" in k), "")
    if not module_json:
        sys.exit("ERROR: app 内未找到 feat_vuln module.json")

    manifest = json.loads(pathlib.Path(manifest_path).read_text())
    by_id = {v["id"]: v for v in manifest["vulns"]}

    def hit_of(det: dict, source: str, function: str):
        rec = record_text(blocks, source)
        if not rec:
            return False, "block-not-found"
        fn = function_block(blocks, source, function)
        where = test_out if det.get("scope") == "global" else rec
        consts = norm_constants([c for c in det.get("constants", [])])
        c_ok = all(any(f in where for f in forms) for _, forms in consts)
        calls = det.get("call", [])
        scope_txt = fn if fn is not None else where
        # 回调/闭包编译为独立方法块：函数块未全中时降级 record 域并标注
        scope_tag = "fn"
        if calls and fn is not None and not all(tok in fn or f'"{tok}"' in fn for tok in calls):
            scope_txt, scope_tag = where, "rec"
        k_ok = all(tok in scope_txt or f'"{tok}"' in scope_txt for tok in calls)
        pred = det.get("predicate")
        p_ok = PREDICATES[pred](fn if fn is not None else rec) if pred else True
        hit = c_ok and k_ok and p_ok
        return hit, f"consts={sum(any(f in where for f in fm) for _, fm in consts)}/{len(consts)} " \
                   f"calls={sum(1 for t in calls if t in scope_txt or chr(34)+t+chr(34) in scope_txt)}/{len(calls)}" \
                   f"{' pred=' + ('1' if p_ok else '0') if pred else ''} {scope_tag}"

    rows, skipped = [], []
    for v in manifest["vulns"]:
        det = v.get("detection", {})
        if det.get("skip"):
            skipped.append(v["id"])
            continue
        dtype = det.get("type", "")
        if dtype == "native":
            hit, detail = all(c in so_text for c in det.get("constants", [])), "so-strings"
        elif dtype == "manifest":
            if v["source"].endswith(".json5") or v["source"].endswith(".json"):
                src = (ROOT / v["source"]).read_text(encoding="utf-8")  # 编译后不以原始形态存在，按源文件核验
                hit, detail = all(c in src for c in det.get("constants", [])), "source-config"
            else:
                hit, detail = all(c in module_json for c in det.get("constants", [])), "module.json"
        elif not v.get("expected", True) and "twin_of" in v:
            hit, detail = hit_of(by_id[v["twin_of"]].get("detection", {}), v["source"], v.get("function", "-"))
            detail = f"rule-of-{v['twin_of']}: {detail}"
        else:
            hit, detail = hit_of(det, v["source"], v.get("function", "-"))
        rows.append((v["id"], v["expected"], hit, detail))

    tp = sum(1 for _, e, h, _ in rows if e and h)
    fn = sum(1 for _, e, h, _ in rows if e and not h)
    fp = sum(1 for _, e, h, _ in rows if not e and h)
    tn = sum(1 for _, e, h, _ in rows if not e and not h)
    prec = tp / (tp + fp) if tp + fp else 0.0
    rec = tp / (tp + fn) if tp + fn else 0.0
    f1 = 2 * prec * rec / (prec + rec) if prec + rec else 0.0
    fpr = fp / (fp + tn) if fp + tn else 0.0

    print(f"{'id':22} {'exp':5} {'hit':4} detail")
    for rid, e, h, d in rows:
        print(f"{rid:22} {str(e):5} {str(h):4} {d}{'' if e == h else ('  <-- FN' if e else '  <-- FP(twin)')}")
    if skipped:
        print(f"skip（不计分）: {', '.join(skipped)}")
    print(f"\nTP={tp} FN={fn} FP={fp} TN={tn}")
    print(f"precision={prec:.3f} recall={rec:.3f} F1={f1:.3f} Youden={rec - fpr:.3f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
