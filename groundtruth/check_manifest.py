#!/usr/bin/env python3
"""groundtruth/manifest.json 与源码双向一致性校验。

校验项：
1. 每条 .ets 条目：源文件存在 + `// VULN: <id>` / `// SAFE: <id>` 标记 + function 名出现；
2. 反向：源码中所有 `// VULN: OVD-*` / `// SAFE: OVD-*` 标记必须登记在 manifest；
3. id 唯一；twin/twin_of 互指；native/manifest 条目校验常量在对应文件中存在。
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from manifest_signals import DETECTION_TYPES, PREDICATE_NAMES  # noqa: E402

MARKER = re.compile(r"//\s*(VULN|SAFE):\s*(OVD-[A-Z0-9-]+)")


def main() -> int:
    manifest = json.loads((ROOT / "groundtruth" / "manifest.json").read_text(encoding="utf-8"))
    vulns = manifest["vulns"]
    ids = [v["id"] for v in vulns]
    by_id = {v["id"]: v for v in vulns}
    errors: list[str] = []

    dup = {i for i in ids if ids.count(i) > 1}
    if dup:
        errors.append(f"重复 id: {sorted(dup)}")

    vuln_cnt = sum(1 for v in vulns if v.get("expected", True))
    if vuln_cnt != len(vulns) - vuln_cnt:
        errors.append(f"vuln({vuln_cnt}) != twin({len(vulns) - vuln_cnt}) 计数不平")
    for v in vulns:
        det = v.get("detection", {})
        dtype = det.get("type", "")
        if dtype not in DETECTION_TYPES:
            errors.append(f"{v['id']}: 未知 detection.type `{dtype}`")
        if det.get("predicate") and det["predicate"] not in PREDICATE_NAMES:
            errors.append(f"{v['id']}: 未知 predicate `{det['predicate']}`")
        src = v.get("source", "")
        mod = v.get("module", "")
        if mod and not src.startswith(mod + "/"):
            errors.append(f"{v['id']}: module `{mod}` 与 source 前缀 `{src.split('/')[0]}` 不一致")

    for v in vulns:
        src = ROOT / v["source"]
        if not src.exists():
            errors.append(f"{v['id']}: 源文件缺失 {v['source']}")
            continue
        text = src.read_text(encoding="utf-8")
        if src.suffix in (".ets", ".ts"):
            marker = f"// VULN: {v['id']}" if v["expected"] else f"// SAFE: {v['id']}"
            if marker not in text:
                errors.append(f"{v['id']}: 缺少标记 `{marker}` ({v['source']})")
            fn = v.get("function", "-")
            if fn not in ("-",) and fn not in text:
                errors.append(f"{v['id']}: 函数 `{fn}` 未出现在 {v['source']}")
        else:
            for c in v.get("detection", {}).get("constants", []):
                if isinstance(c, str) and c not in text:
                    errors.append(f"{v['id']}: 常量 `{c}` 未出现在 {v['source']}")
        for a, b_key in (("twin", "twin_of"), ("twin_of", "twin")):
            ref = v.get(a)
            if ref and ref in by_id and v["id"] not in (by_id[ref].get(a), by_id[ref].get(b_key)):
                errors.append(f"{v['id']}: twin 关系不互指 ({a}={ref})")

    registered = set(ids)
    scan_globs: list[pathlib.Path] = []
    for mod in ("feat_vuln", "entry", "feat_api", "feat_heavy", "feat_compfarm",
                "lib_common", "lib_shared"):
        scan_globs += list(ROOT.glob(f"{mod}/src/main/ets/**/*.ets"))
        scan_globs += list(ROOT.glob(f"{mod}/src/main/ets/**/*.ts"))
    scan_globs += list(ROOT.glob("feat_vuln/src/main/cpp/*.cpp"))
    for f in scan_globs:
        for kind, mid in MARKER.findall(f.read_text(encoding="utf-8", errors="ignore")):
            if mid not in registered:
                errors.append(f"源码标记未登记 manifest: {mid} ({f.relative_to(ROOT)})")
            elif ("VULN" == kind) != by_id[mid]["expected"]:
                errors.append(f"{mid}: 标记类别({kind})与 expected 不一致")

    true_cnt = sum(1 for v in vulns if v["expected"])
    print(f"manifest entries: {len(vulns)} (vuln={true_cnt}, twin={len(vulns) - true_cnt})")
    if errors:
        print("FAIL:")
        for e in errors:
            print(f"  - {e}")
        return 1
    print("OK: manifest 双向一致")
    return 0


if __name__ == "__main__":
    sys.exit(main())
