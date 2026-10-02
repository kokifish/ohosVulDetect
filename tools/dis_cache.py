#!/usr/bin/env python3
"""反汇编共享缓存 + abc 统计口径单源：abc 内容 md5 → 反汇编文本（build/dis_cache/）。

module_share / corpus_meta / opcode_coverage 各自独立反汇编同一批 abc，
feat_heavy 22MB 单次 23s、一个验证周期重复 3 次——统一走本缓存后仅首次付费。
abc 任何变更即换 md5 键，天然失效；条目 7 天未访问自动淘汰（farm 重生成后
旧 md5 永不再命中，防无界膨胀）。
"""
import hashlib
import os
import pathlib
import re
import subprocess
import sys
import time

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / "build" / "dis_cache"

# abc 统计口径单源：指令提取正则与噪声 token（module_share / opcode / corpus_meta 共用）
OPCODE_RE = re.compile(r"^\s+([a-z][a-z0-9._]+)", re.M)
NOISE = {"u8", "u32", "u1", "i8", "i32", "f64"}

_EVICT_SECONDS = 7 * 86400


def _evict_old() -> None:
    now = time.time()
    for f in CACHE.glob("*.dis"):
        try:
            if now - f.stat().st_mtime > _EVICT_SECONDS:
                f.unlink(missing_ok=True)
        except OSError:
            pass


def disasm(abc: pathlib.Path, ark_disasm: str) -> str:
    """返回 abc 的反汇编文本（缓存命中零开销；miss 时反汇编一次并落缓存）。"""
    h = hashlib.md5(abc.read_bytes()).hexdigest()
    hit = CACHE / f"{abc.stem}.{h}.dis"
    if hit.exists():
        os.utime(hit, None)
        return hit.read_text(errors="ignore")
    CACHE.mkdir(parents=True, exist_ok=True)
    out = CACHE / f".tmp.{h}"
    r = subprocess.run([ark_disasm, str(abc), str(out)], capture_output=True, text=True)
    if r.returncode != 0 or not out.exists():
        out.unlink(missing_ok=True)
        return ""
    text = out.read_text(errors="ignore")
    out.rename(hit)
    _evict_old()
    return text
