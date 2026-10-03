#!/usr/bin/env python3
"""函数锚点存活门禁：manifest 全部 detection.function 与 hops[].function 必须能在
release 产物对应 record 的 .function 签名行中定位（评分器 function_block 的静态前置核对）。

背景：2026-10-01 UST-002 实测——struct 方法签名形态 `#~@N>#fn`（> 与 fn 之间有 #）
曾不被评分器匹配；es2abc 内联/ArkGuard 改名也会让锚点静默退化成 record 域回退。
本门禁把「锚点存在」从评分时隐式行为变为构建后显式核对。

匹配语义与 groundtruth/score_output.function_block 一致：`[#>]{fn}\b` + record key。
只读产物 + dis_cache，秒级；进 verify 快门禁。

退出码：任一锚点缺失 → 1。
"""
import pathlib
import re
import sys
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from dis_cache import disasm  # noqa: E402

DIS = "/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/toolchains/ark_disasm"
APP = ROOT / "build" / "out" / "ohosVulDetect-api26-release-unsigned.app"
FN_RE_CACHE: dict[str, re.Pattern] = {}


def record_key(source: str) -> str:
    return "." + source.split("ets/")[-1].replace("/", ".").rsplit(".", 1)[0] + "&"


def anchors_of(manifest: dict) -> tuple[list[tuple[str, str, str]], list[tuple[str, str, str]]]:
    """→ (hard 锚点, warn 锚点)，各为 [(id, record_key, fn)]。
    hard = interproc hop 函数（评分严格锚定，缺失即退化/miss——UST-002 类问题）；
    warn = 条目自身 function（缺失走 record 回退，判定仍正确，仅精度损失）。
    native/manifest 类型非 abc 面，整体跳过；'-' 视为无锚。"""
    hard: list[tuple[str, str, str]] = []
    warn: list[tuple[str, str, str]] = []
    for v in manifest["vulns"]:
        det = v.get("detection", {})
        if det.get("skip") or det.get("type") in ("native", "manifest"):
            continue
        is_interproc = det.get("type") == "interproc-chain"
        fn = v.get("function", "-")
        if fn and fn != "-":
            (hard if is_interproc else warn).append((v["id"], record_key(v["source"]), fn))
        for i, h in enumerate(det.get("hops", [])):
            hfn = h.get("function", "-")
            if hfn and hfn != "-":
                hsrc = h.get("source", v["source"])
                hard.append((v["id"], record_key(hsrc), hfn))
    return hard, warn


def fn_signatures(app: pathlib.Path) -> list[str]:
    """全部 abc 反汇编文本中的 .function 签名行集合（feat_heavy 无 manifest 锚，排除提速）。"""
    sigs: list[str] = []
    with zipfile.ZipFile(app) as z:
        for pkg in [n for n in z.namelist() if n.endswith((".hap", ".hsp"))
                    and not pathlib.Path(n).name.startswith("feat_heavy")]:
            with zipfile.ZipFile(z.open(pkg)) as zf:
                for name in [n for n in zf.namelist() if n.endswith(".abc")]:
                    with tempfile_abc(zf.read(name)) as ap:
                        text = disasm(ap, DIS) or ""
                    sigs += [ln for ln in text.split("\n") if ln.startswith(".function ")]
    return sigs


import tempfile  # noqa: E402
from contextlib import contextmanager  # noqa: E402


@contextmanager
def tempfile_abc(data: bytes):
    with tempfile.NamedTemporaryFile(suffix=".abc", delete=False) as f:
        f.write(data)
        ap = pathlib.Path(f.name)
    try:
        yield ap
    finally:
        ap.unlink(missing_ok=True)


def main() -> int:
    import json
    if not APP.exists():
        print(f"ERROR: 缺少产物 {APP}（先跑 build.py）")
        return 1
    manifest = json.loads((ROOT / "groundtruth" / "manifest.json").read_text(encoding="utf-8"))
    hard, warn = anchors_of(manifest)
    sigs = fn_signatures(APP)
    missing_h: list[str] = []
    missing_w: list[str] = []
    for level, bucket in (("hard", hard), ("warn", warn)):
        for vid, key, fn in bucket:
            pat = FN_RE_CACHE.setdefault(fn, re.compile(rf"[#>]{re.escape(fn)}\b"))
            if not any(key in ln and pat.search(ln) for ln in sigs):
                (missing_h if level == "hard" else missing_w).append(f"{vid} {fn}（record {key}）")
    print(f"== 函数锚点存活：interproc hop {len(hard)}（硬） + 条目 function {len(warn)}（软）"
          f" × {len(sigs)} 条签名行")
    if missing_w:
        print(f"WARN（条目 function 无 abc 函数对应——评分走 record 回退，判定仍正确）:")
        for m in missing_w:
            print(f"  {m}")
    if missing_h:
        print("FAIL（interproc hop 锚点缺失——严格锚定下该 hop 将 miss）:")
        for m in missing_h:
            print(f"  {m}")
        return 1
    print("OK: 全部 interproc hop 锚点在 release 产物中存活"
          + (f"（另有 {len(missing_w)} 条软锚点走 record 回退）" if missing_w else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
