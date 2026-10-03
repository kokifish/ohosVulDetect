#!/usr/bin/env python3
"""评测折叠划分建议：按族（43 族）分层抽样，输出 train/test 划分 JSON。

用途：全集公开语料无 heldout 指引时，外部工具若在全集上调试规则即失去泛化意义。
本脚本给出确定性（固定种子 + 排序）的按族分层划分建议：
  - 每族内按条目 id 排序后取 ~20% 进 test（至少 1 对），其余 train；
  - 划分单位是「漏洞条目 + 其孪生」整对（同一对的 vuln/twin 不拆开）。

输出 JSON：{"seed", "strategy", "totals", "families": {族: {"train": [...], "test": [...]}}}。
划分仅是建议——manifest 本身不区分 train/test，评分器照常全集评分。

用法：python3 tools/split_folds.py [--out <path>]   # 缺省打印到 stdout
"""
import argparse
import json
import pathlib
import random
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SEED = 2026
TEST_RATIO = 0.2


def main() -> int:
    ap = argparse.ArgumentParser(description="按族分层 train/test 划分建议")
    ap.add_argument("--out", help="输出 JSON 路径（缺省打印 stdout）")
    args = ap.parse_args()

    manifest = json.loads((ROOT / "groundtruth" / "manifest.json").read_text(encoding="utf-8"))
    by_id = {v["id"]: v for v in manifest["vulns"]}
    pairs: dict[str, list[str]] = {}
    for v in manifest["vulns"]:
        if not v.get("expected", True):
            continue
        pairs.setdefault(v["id"].split("-")[1], []).append(v["id"])

    rng = random.Random(SEED)
    result: dict[str, dict[str, list[str]]] = {}
    n_train = n_test = 0
    for fam in sorted(pairs):
        ids = sorted(pairs[fam])
        rng.shuffle(ids)
        n_test_fam = max(1, round(len(ids) * TEST_RATIO))
        test_ids = sorted(ids[:n_test_fam])
        train_ids = sorted(ids[n_test_fam:])
        result[fam] = {"train": [], "test": []}
        for vid in test_ids:
            e = by_id[vid]
            result[fam]["test"] += [vid, e["twin"]]
            n_test += 2
        for vid in train_ids:
            e = by_id[vid]
            result[fam]["train"] += [vid, e["twin"]]
            n_train += 2

    out = {
        "seed": SEED,
        "strategy": "stratified-by-family 80/20（划分单位=漏洞+孪生整对；确定性可复现）",
        "totals": {"families": len(pairs), "train_entries": n_train,
                   "test_entries": n_test, "total": n_train + n_test},
        "families": result,
    }
    text = json.dumps(out, ensure_ascii=False, indent=1) + "\n"
    if args.out:
        pathlib.Path(args.out).write_text(text, encoding="utf-8")
        print(f"fold 划分建议已写出: {args.out}（train={n_train} test={n_test}）")
    else:
        print(text)
    return 0


if __name__ == "__main__":
    sys.exit(main())
