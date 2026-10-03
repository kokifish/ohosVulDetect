#!/usr/bin/env python3
"""基准评分器 v2（函数级谓词 + record 级常量 + 孪生按 vuln 规则评测）。

匹配规则（对 manifest 每条）：
- constants：在源文件 record 域内全部命中（scope=global 时全域）；
  布尔/数字按逆向工具 IR 文本形态归一化（true→TRUE，int→"n" 与 "n.0" 皆可命中）；
- call：全部 token 在函数块（无则 record 域）命中，token 裸形态或 "引号" 形态均可；
- predicate：IR 谓词（return-true / empty-array / fixed-nonce）在函数块判定；
- interproc-chain：hops 逐跳在各 hop 指定函数块（无则 record 域）判定，全中才命中——
  单函数内 call+constant 不可 AND 的跨函数污点链用；
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

# 谓词名 → IR 文本短语（单源）：manifest_signals/回归基线引用本表，勿在别处复制映射。
PREDICATE_PHRASES = {
    "return-true": "return TRUE",
    "empty-array": "emptyarray{}",
    "fixed-nonce": "bench-fixed-nonce",
}
PREDICATES = {name: (lambda blk, phrase=phrase: phrase in blk)
              for name, phrase in PREDICATE_PHRASES.items()}


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


_FN_RE_CACHE: dict[str, re.Pattern] = {}


def function_block(blocks, source: str, function: str):
    """命名函数块定位：签名需含 record key，且函数名以 # 或 > 前缀紧邻出现
    （abc 方法名形态 `&rec&.#*#fn` / `&rec&.#~@N>#fn`），词边界防 fnS 前缀误配。"""
    key = record_key(source)
    pat = _FN_RE_CACHE.get(function)
    if pat is None:
        pat = re.compile(rf"[#>]{re.escape(function)}\b")
        _FN_RE_CACHE[function] = pat
    for sig, text in blocks:
        if key in sig and pat.search(sig):
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


def interproc_hit(hops: list, blocks, source: str):
    """逐 hop 评估；hop 可带 source 指向跨模块记录（TNT×XMOD：source 在 HAR/HSP、
    sink 在 feature）。无 source 的 hop 回退入口记录。hop 材料严格锚定命名函数块：
    找不到函数块即该 hop 失败（2026-10-01 下限实验：record 回退会让"每 record 一块的
    无语义 dump 工具"白拿 interproc 分——粒度反转，故取消）。"""
    oks = 0
    for h in hops:
        hsrc = h.get("source", source)
        blk = function_block(blocks, hsrc, h.get("function", "-"))
        if blk is None:
            continue
        c_ok = all(any(f in blk for f in forms)
                   for _, forms in norm_constants(h.get("constants", [])))
        k_ok = all(tok in blk or f'"{tok}"' in blk for tok in h.get("call", []))
        oks += 1 if (c_ok and k_ok) else 0
    return oks == len(hops), f"interproc {oks}/{len(hops)}"


def tier_of(v: dict, by_id: dict) -> str:
    """难度分档（纯 manifest 字段派生，报告性输出；孪生按其规则条目分档）：
    T4 非 abc 面（native/manifest）；T3 跨函数/跨记录（interproc-chain）；
    T2 形态重构（谓词/枚举引用/布尔·数值常量——与参考工具 IR 文本形态约定耦合，
    见 BENCHMARK「评分口径」）；T1 字面直配（其余）。"""
    rule = by_id[v["twin_of"]] if not v.get("expected", True) and "twin_of" in v else v
    det = rule.get("detection", {})
    dtype = det.get("type", "")
    if dtype in ("native", "manifest"):
        return "T4"
    if dtype == "interproc-chain":
        return "T3"
    if det.get("predicate") or dtype == "enum-ref" or \
            any(isinstance(c, (bool, int, float)) for c in det.get("constants", [])):
        return "T2"
    return "T1"


TIERS = [
    ("T1", "字面直配"),
    ("T2", "形态重构(IR文本约定)"),
    ("T3", "跨函数/跨记录"),
    ("T4", "非abc面"),
]


def main() -> int:
    argv = sys.argv[1:]
    export_json: str | None = None
    if "--export-json" in argv:
        i = argv.index("--export-json")
        if i + 1 >= len(argv):
            sys.exit("ERROR: --export-json 需要一个输出路径参数")
        export_json = argv[i + 1]
        argv = argv[:i] + argv[i + 2:]
    if len(argv) < 2:
        sys.exit(__doc__)
    test_out_path, app_path = argv[0], argv[1]
    manifest_path = argv[2] if len(argv) > 2 else str(ROOT / "groundtruth" / "manifest.json")

    test_out = pathlib.Path(test_out_path).read_text(encoding="utf-8", errors="ignore")
    blocks = load_blocks(test_out)
    blobs = extract_from_app(app_path, "feat_vuln-default.hap", (".so",))
    so_text = next((b.decode("utf-8", "ignore") for k, b in blobs.items() if k.endswith("libentry.so")), "")
    module_json = next((b.decode("utf-8", "ignore") for k, b in blobs.items() if "module.json" in k), "")
    if not module_json:
        sys.exit("ERROR: app 内未找到 feat_vuln module.json")

    def extract_resource_text(app_path: str) -> str:
        """feat_vuln 资源面文本（string.json + rawfile），供 resource-face 核验。"""
        got = ""
        with tempfile.TemporaryDirectory() as td:
            with zipfile.ZipFile(app_path) as z:
                hap = next((n for n in z.namelist() if n.endswith("feat_vuln-default.hap")), None)
                if not hap:
                    return got
                z.extract(hap, td)
                with zipfile.ZipFile(pathlib.Path(td) / hap) as h:
                    for m in h.namelist():
                        if m == "resources.index" or (m.startswith("resources/") and (m.endswith(".json") or "/rawfile/" in m)):
                            got += h.read(m).decode("utf-8", "ignore")
        return got

    resource_text = extract_resource_text(app_path)

    manifest = json.loads(pathlib.Path(manifest_path).read_text())
    by_id = {v["id"]: v for v in manifest["vulns"]}

    def hit_of(det: dict, source: str, function: str, twin: bool = False):
        rec = record_text(blocks, source)
        if not rec:
            return False, "block-not-found"
        if det.get("type") == "interproc-chain":
            hit, detail = interproc_hit(det.get("hops", []), blocks, source)
            return hit, detail
        fn = function_block(blocks, source, function)
        # a twin is judged by its own record only: a global-scope rule would find
        # the vulnerable twin's constant elsewhere in the app and false-positive
        where = test_out if det.get("scope") == "global" and not twin else rec
        consts = norm_constants([c for c in det.get("constants", [])])
        c_ok = all(any(f in where for f in forms) for _, forms in consts)
        calls = det.get("call", [])
        scope_txt = fn if fn is not None else where
        # 回调/闭包编译为独立方法块：函数块未全中时降级 record 域并标注
        # （scope_tag 反映调用 token 的实际匹配域；fn 块不存在时标 rec-blk）
        if fn is None:
            scope_txt, scope_tag = where, "rec-blk"
        else:
            scope_txt, scope_tag = fn, "fn"
            if calls and not all(tok in fn or f'"{tok}"' in fn for tok in calls):
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
                # 预留：source 指向 ets/.ts 的 manifest 条目在打包 module.json 内核验（当前无此类条目）
                hit, detail = all(c in module_json for c in det.get("constants", [])), "module.json"
        elif not v.get("expected", True) and "twin_of" in v:
            hit, detail = hit_of(by_id[v["twin_of"]].get("detection", {}), v["source"], v.get("function", "-"), twin=True)
            detail = f"rule-of-{v['twin_of']}: {detail}"
        else:
            hit, detail = hit_of(det, v["source"], v.get("function", "-"))
        rows.append((v["id"], v["expected"], hit, detail, tier_of(v, by_id)))

    tp = sum(1 for _, e, h, _, _ in rows if e and h)
    fn = sum(1 for _, e, h, _, _ in rows if e and not h)
    fp = sum(1 for _, e, h, _, _ in rows if not e and h)
    tn = sum(1 for _, e, h, _, _ in rows if not e and not h)
    prec = tp / (tp + fp) if tp + fp else 0.0
    rec = tp / (tp + fn) if tp + fn else 0.0
    f1 = 2 * prec * rec / (prec + rec) if prec + rec else 0.0
    fpr = fp / (fp + tn) if fp + tn else 0.0

    print(f"{'id':22} {'tier':4} {'exp':5} {'hit':4} detail")
    for rid, e, h, d, tier in rows:
        print(f"{rid:22} {tier:4} {str(e):5} {str(h):4} {d}{'' if e == h else ('  <-- FN' if e else '  <-- FP(twin)')}")
    if skipped:
        print(f"skip（不计分）: {', '.join(skipped)}")

    # 难度分档 sub-F1（报告性；让"满分"可分辨工具真实能力差距）
    by_id_t = by_id
    tstat: dict[str, list[int]] = {t[0]: [0, 0, 0, 0] for t in TIERS}  # n tp fn fp
    for v in manifest["vulns"]:
        if v.get("detection", {}).get("skip"):
            continue
        tid = tier_of(v, by_id_t)
        st = tstat[tid]
        st[0] += 1
        hit = next(h for rid, _, h, _, _ in rows if rid == v["id"])
        if v.get("expected", True):
            st[1] += 1 if hit else 0
            st[2] += 0 if hit else 1
        else:
            st[3] += 1 if hit else 0
    print("\n== 难度分档 sub-F1（报告性输出）==")
    for tid, label in TIERS:
        n, ttp, tfn, tfp = tstat[tid]
        tprec = ttp / (ttp + tfp) if ttp + tfp else 0.0
        trec = ttp / (ttp + tfn) if ttp + tfn else 0.0
        tf1 = 2 * tprec * trec / (tprec + trec) if tprec + trec else 0.0
        print(f"  {tid} {label:22} n={n:3}  TP={ttp:3} FN={tfn:2} FP={tfp:2}  sub-F1={tf1:.3f}")
    rv_total = rv_found = 0
    rv_miss = []
    for v in manifest["vulns"]:
        for val in v.get("resource_values", []):
            rv_total += 1
            if val in resource_text:
                rv_found += 1
            else:
                rv_miss.append(f"{v['id']}:{val}")
    print(f"resource-face（打包产物资源值核验）: {rv_found}/{rv_total}"
          + (f" 缺失: {', '.join(rv_miss)}" if rv_miss else ""))
    print(f"\nTP={tp} FN={fn} FP={fp} TN={tn}")
    print(f"precision={prec:.3f} recall={rec:.3f} F1={f1:.3f} Youden={rec - fpr:.3f}")

    bait_path = pathlib.Path(__file__).parent / "bait.json"
    if bait_path.exists():
        try:
            bait = json.loads(bait_path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError) as e:
            print(f"bait-face: 注册表读取失败 {e}")
            bait = None
        if bait:
            kept = 0
            print("\nbait-face（FP 压力面板：陷阱信号在反编译产物中的保留率，不计入 F1）")
            for c in bait.get("cases", []):
                brec = record_text(blocks, c["source"])
                if not brec:
                    print(f"  {c['id']:24} missing-block")
                    continue
                det = c["signals"]
                consts = norm_constants(det.get("constants", []))
                c_ok = all(any(f in brec for f in forms) for _, forms in consts)
                k_ok = all(tok in brec or f'"{tok}"' in brec for tok in det.get("call", []))
                if c_ok and k_ok:
                    kept += 1
                print(f"  {c['id']:24} preserved={str(c_ok and k_ok):5} consts={c_ok} calls={k_ok} "
                      f"mode={c.get('mode', '-')} mimics={c['mimics']}")
            print(f"bait-face preserved {kept}/{len(bait.get('cases', []))} — "
                  f"每个 preserved 陷阱 = 下游弱检测器一个潜在 FP（隔离由 check_bait_fp.py 保证）")

    if export_json:
        snap = {
            "note": "参考判定快照（机器可读）：真实/合成工具 test.out × 本 app 的 per-entry 判定，"
                    "供第三方工具 diff 对比与评分器自校验。tier 语义见 BENCHMARK「评分口径」。",
            "test_out": test_out_path,
            "app": app_path,
            "summary": {"tp": tp, "fn": fn, "fp": fp, "tn": tn,
                        "precision": round(prec, 4), "recall": round(rec, 4), "f1": round(f1, 4)},
            "tiers": {tid: {"label": label, "n": tstat[tid][0], "tp": tstat[tid][1],
                            "fn": tstat[tid][2], "fp": tstat[tid][3]} for tid, label in TIERS},
            "results": [{"id": rid, "tier": tier, "expected": e, "hit": h, "detail": d}
                        for rid, e, h, d, tier in rows],
        }
        pathlib.Path(export_json).write_text(json.dumps(snap, ensure_ascii=False, indent=1) + "\n",
                                             encoding="utf-8")
        print(f"\n判定快照已导出: {export_json}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
