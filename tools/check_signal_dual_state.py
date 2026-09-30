#!/usr/bin/env python3
"""信号双态存活门禁：manifest 检测信号的字符串材料必须在 debug 与 release 两个
api26 产物的对应字节面里同时存在。

双层保证：
  1. 材料确实编译/打包进产物（漏接线/tree-shake 静默丢信号会在这里暴露）；
  2. 材料对 ArkGuard 名称改名免疫（debug 有 release 无 = 混淆脆弱信号）。
三面分流（按 entry source 与 detection.type 定面）：
  - abc 面（默认）：detection.constants(str)/call + hops[].constants/call，
    口径与 check_score_regression 合成器一致；在全部 hap/hsp 的 abc 字节里查
    （feat_heavy 除外——farm 黑名单双通道保证不含漏洞材料）；
  - native/资源面：source 为 cpp/资源 json 的条目，材料在 .app 内非 abc 字节
    （.so / 打包资源）里查；
  - 无池材料面：predicate-only、enum-ref 等语义信号，单列不判。
池内字符串相邻存放且长度前缀字节可能可打印，故不做可打印段切分，直接逐 token
子串搜索（abc 面排除 feat_heavy 后总量仅 ~3MB）。

用法：
  python3 tools/check_signal_dual_state.py                 # 默认 api26 debug×release
  python3 tools/check_signal_dual_state.py --manifest X    # 负向测试用
退出码：任一 token 缺席任一变体 / 产物缺失 → 1。
"""
import argparse
import json
import pathlib
import sys
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
NO_POOL_TYPES = {"predicate", "enum-ref"}


def classify(entry: dict) -> str:
    src = entry.get("source", "")
    dtype = entry.get("detection", {}).get("type", "")
    if dtype in NO_POOL_TYPES:
        return "nopool"
    if dtype.startswith("native") or src.endswith((".cpp", ".h", ".c")):
        return "nonabc"
    if dtype == "manifest" or src.endswith(".json"):
        return "nonabc"
    return "abc"


def rule_material(entry: dict) -> list[str]:
    """单条漏洞规则的信号材料（与 check_score_regression 合成器同口径）。"""
    det = entry.get("detection", {})
    mat: list[str] = []
    for c in det.get("constants", []):
        if isinstance(c, str):
            mat.append(c)
    mat += [t for t in det.get("call", []) if isinstance(t, str)]
    for h in det.get("hops", []):
        mat += [str(c) for c in h.get("constants", []) if isinstance(c, str)]
        mat += [t for t in h.get("call", []) if isinstance(t, str)]
    return mat


def app_blobs(app: pathlib.Path) -> tuple[bytes, bytes]:
    """→ (abc 面字节, 非 abc 面字节)。abc 面排除 feat_heavy（farm 不含漏洞材料）。"""
    abc_parts: list[bytes] = []
    rest_parts: list[bytes] = []
    with zipfile.ZipFile(app) as z:
        for name in z.namelist():
            if name.endswith((".hap", ".hsp")):
                if pathlib.Path(name).name.startswith("feat_heavy"):
                    continue
                with zipfile.ZipFile(z.open(name)) as zf:
                    for n in zf.namelist():
                        (abc_parts if n.endswith(".abc") else rest_parts).append(zf.read(n))
            elif not name.endswith((".hap", ".hsp")):
                rest_parts.append(z.read(name))
    return b"".join(abc_parts), b"".join(rest_parts)


def main() -> int:
    ap = argparse.ArgumentParser(description="manifest 信号双态（debug×release）存活门禁")
    ap.add_argument("--manifest", default=str(ROOT / "groundtruth" / "manifest.json"))
    ap.add_argument("--app-debug", default=str(ROOT / "build" / "out" /
                   "ohosVulDetect-api26-debug-unsigned.app"))
    ap.add_argument("--app-release", default=str(ROOT / "build" / "out" /
                   "ohosVulDetect-api26-release-unsigned.app"))
    args = ap.parse_args()

    apps: dict[str, pathlib.Path] = {"debug": pathlib.Path(args.app_debug),
                                     "release": pathlib.Path(args.app_release)}
    missing = [k for k, p in apps.items() if not p.exists()]
    if missing:
        print(f"ERROR: 缺少产物 {missing}（先跑 python3 build.py）")
        return 1
    manifest = json.loads(pathlib.Path(args.manifest).read_text(encoding="utf-8"))

    owners: dict[str, dict[str, set[str]]] = {"abc": {}, "nonabc": {}}
    nopool: list[str] = []
    skipped_nonstr = 0
    for e in manifest["vulns"]:
        if not e.get("expected", True):
            continue  # 孪生与宿主共享同一规则材料，去重
        det = e.get("detection", {})
        skipped_nonstr += sum(1 for c in det.get("constants", []) if not isinstance(c, str))
        face = classify(e)
        if face == "nopool":
            nopool.append(e["id"])
            continue
        mat = rule_material(e)
        for t in mat:
            owners[face].setdefault(t, set()).add(e["id"])

    blobs = {k: app_blobs(p) for k, p in apps.items()}
    absent: list[tuple[str, str, list[str], list[str]]] = []
    for face, toks in owners.items():
        for tok, ids in sorted(toks.items()):
            enc = tok.encode()
            miss = [k for k in apps if enc not in blobs[k][0 if face == "abc" else 1]]
            if miss:
                absent.append((face, tok, sorted(ids), miss))

    print(f"== 信号双态存活：abc 面 {len(owners['abc'])} token × "
          f"native/资源面 {len(owners['nonabc'])} token "
          f"（{len(nopool)} 条无池材料 {','.join(nopool[:4])}..."
          f"；跳过非字符串常量 {skipped_nonstr} 个）")
    if absent:
        print("FAIL:")
        for face, tok, ids, miss in absent[:20]:
            print(f"  [{face} 缺席:{','.join(miss)}] {tok!r}  ← {','.join(ids[:3])}")
        if len(absent) > 20:
            print(f"  ...共 {len(absent)} 个")
        return 1
    print("OK: 全部信号材料在 debug 与 release 两个产物中同时存活（双态免疫）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
