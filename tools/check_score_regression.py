#!/usr/bin/env python3
"""评分器回归基线：合成 test.out + 固定 manifest 代表集 → score_output 判定快照锁定。

score_output.py 的任何口径变化（命中范围/归一化/记录域切换）都会改变这里的
TP/FN 结果——父项目跨版本对比前先过本门禁，杜绝"评分口径漂移被误读为工具回退"。
代表集覆盖全部 detection 形态：api-call+constant / string-literal / call-chain /
interproc（含跨模块 per-hop source）/ predicate / safe-twin。
"""
import json
import os
import pathlib
import re
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
APP = ROOT / "build" / "out" / "ohosVulDetect-api26-release-unsigned.app"

# 代表条目 → 期望（True=应命中）。跨模块 interproc 的合成块含双记录域材料。
CASES = {
    "OVD-STOR-001": True,     # api-call+constant（putSync+auth_token）
    "OVD-PASTE-005": True,    # api-call（setData）
    "OVD-DEBUG-002": True,    # string-literal（0000）
    "OVD-XMOD-002": True,     # call-chain（getPreferencesSync+putSync）
    "OVD-TNT-001": True,      # interproc（同模块双 hop）
    "OVD-TNT-005": True,      # interproc 跨模块（HAR source + feature sink）
    "OVD-WIFI-001": True,     # 模块名形态 call token
    "OVD-UST-001": True,      # persistProp + 常量
    "OVD-STOR-001S": False,   # safe-twin：孪生记录按其规则应不命中
    "OVD-TNT-005S": False,
}


def rec_sig(source: str) -> str:
    return "." + source.split("ets/")[-1].replace("/", ".").rsplit(".", 1)[0] + "&"


def synth_test_out(manifest: dict) -> str:
    by_id = {v["id"]: v for v in manifest["vulns"]}
    parts = []
    for cid in CASES:
        e = by_id[cid]
        is_twin = not e.get("expected", True)
        rule = by_id.get(e.get("twin_of", ""), e)
        det = rule["detection"]
        mat = []
        for c in det.get("constants", []):
            mat.append(str(c))
        for tok in det.get("call", []):
            mat.append(f'"{tok}"')
        for h in det.get("hops", []):
            hsrc = h.get("source", e["source"])
            if is_twin and hsrc == e["source"]:
                continue  # 孪生自身的 sink hop 无规则材料（判定 miss 的关键）
            hmat = [str(c) for c in h.get("constants", [])] + \
                   [f'"{tok}"' for tok in h.get("call", [])]
            parts.append(f"AsmMethod: 1 {rec_sig(hsrc)}.#*#{h.get('function', '-')}\n"
                         + "\n".join(f"  {m}" for m in hmat) + "\n  return\n")
        # 入口记录块：本体放规则材料；孪生只放安全材料（判定应 miss）
        if not det.get("hops") or is_twin:
            own_mat = [] if is_twin else mat
            parts.append(f"AsmMethod: 2 {rec_sig(e['source'])}.#*#{e.get('function', '-')}\n"
                         + "\n".join(f"  {m}" for m in (own_mat or ["\"aggregate-safe-only\""]))
                         + "\n  return\n")
    return "".join(parts)


def main() -> int:
    if not APP.exists():
        print(f"ERROR: 缺少 {APP}（先跑 build.py）")
        return 1
    manifest = json.loads((ROOT / "groundtruth" / "manifest.json").read_text(encoding="utf-8"))
    by_id = {v["id"]: v for v in manifest["vulns"]}
    missing = [c for c in CASES if c not in by_id]
    if missing:
        print(f"ERROR: 代表条目不在 manifest: {missing}")
        return 1
    with tempfile.NamedTemporaryFile("w", suffix=".out", delete=False) as f:
        f.write(synth_test_out(manifest))
        tout = f.name
    r = subprocess.run([sys.executable, str(ROOT / "groundtruth" / "score_output.py"),
                        tout, str(APP)], capture_output=True, text=True)
    os.unlink(tout)
    hits = {m.group(1): m.group(2) == "True"
            for m in re.finditer(r"^(OVD-[A-Z0-9-]+)\s+\S+\s+(True|False)\s", r.stdout, re.M)}
    bad = [(cid, hits.get(cid), want) for cid, want in CASES.items() if hits.get(cid) != want]
    print(f"== 评分器回归基线：{len(CASES)} 代表条目 × 合成 test.out")
    if bad:
        print("FAIL（口径漂移）:")
        for cid, got, want in bad:
            print(f"  {cid}: got={got} want={want}")
        return 1
    print("OK: 全形态判定与快照一致")
    return 0


if __name__ == "__main__":
    sys.exit(main())
