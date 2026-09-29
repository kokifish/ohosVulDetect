#!/usr/bin/env python3
"""反汇编共享缓存：abc 内容 md5 → 反汇编文本（build/dis_cache/）。

module_share / corpus_meta / opcode_coverage 各自独立反汇编同一批 abc，
feat_heavy 22MB 单次 23s、一个验证周期重复 3 次——统一走本缓存后仅首次付费。
abc 任何变更即换 md5 键，天然失效。
"""
import hashlib
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / "build" / "dis_cache"


def disasm(abc: pathlib.Path, ark_disasm: str) -> str:
    """返回 abc 的反汇编文本（缓存命中零开销；miss 时反汇编一次并落缓存）。"""
    h = hashlib.md5(abc.read_bytes()).hexdigest()
    hit = CACHE / f"{abc.stem}.{h}.dis"
    if hit.exists():
        return hit.read_text(errors="ignore")
    CACHE.mkdir(parents=True, exist_ok=True)
    out = CACHE / f".tmp.{h}"
    r = subprocess.run([ark_disasm, str(abc), str(out)], capture_output=True, text=True)
    if r.returncode != 0 or not out.exists():
        out.unlink(missing_ok=True)
        return ""
    text = out.read_text(errors="ignore")
    out.rename(hit)
    return text
