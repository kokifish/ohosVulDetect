#!/usr/bin/env python3
"""样本矩阵构建器（兼容壳）：实际能力已并入 build.py --samples-only（zip 替换瘦身链，
失败自动回退全链）。本脚本仅转发并附加份额汇总打印；--profiles 子集选择已退役
（两档 Always 全出，heavy 档=标准 api26-release 本身）。新用法一律直接跑
python3 build.py --samples-only。
"""
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent


def main() -> int:
    if "--profiles" in sys.argv:
        print("NOTE: --profiles 已退役（两档 Always 全出）")
    r = subprocess.run([sys.executable, str(ROOT / "build.py"), "--samples-only"])
    if r.returncode != 0:
        return r.returncode
    for tier in ("small", "medium"):
        share = subprocess.run(
            [sys.executable, str(ROOT / "tools" / "check_module_share.py"),
             "--app", str(ROOT / "build" / "samples" / f"ohosVulDetect-sample-{tier}.app"),
             "--no-gate"], capture_output=True, text=True)
        for ln in share.stdout.split("\n"):
            if "feat_heavy" in ln:
                print(f"sample-{tier:7} {ln.strip()}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
