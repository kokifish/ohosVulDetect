#!/usr/bin/env python3
"""ohosVulDetect 基准 App 一键构建。

用法：
  python3 build.py                  # release 构建（ArkGuard 混淆全开），两个 product 全出
  python3 build.py --product default   # 仅 default（API 26 全量语料）
  python3 build.py --product emulator  # 仅 emulator（compatibleSdkVersion 6.1.1(24)，模拟器安装用）
  python3 build.py --debug          # debug 构建（不混淆）
  python3 build.py --clean          # 构建前清理

产物：build/outputs/<product>/ohosVulDetect-<product>-{signed|unsigned}.app
各模块 hap：*/build/<product>/outputs/default/*.hap
混淆规则：各模块 obfuscation-rules.txt（默认全开；若某规则导致运行异常，在对应文件中加 keep 名单）。
"""
import argparse
import os
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent
DEVECO_HOME = pathlib.Path(os.environ.get("DEVECO_STUDIO_HOME", "/Applications/DevEco-Studio.app"))
NODE_BIN = DEVECO_HOME / "Contents/tools/node/bin"
OHPM_BIN = DEVECO_HOME / "Contents/tools/ohpm/bin"
HVIGORW = DEVECO_HOME / "Contents/tools/hvigor/bin/hvigorw"
SDK_HOME = os.environ.get("DEVECO_SDK_HOME", str(DEVECO_HOME / "Contents/sdk"))

PRODUCTS = ["default", "emulator"]


def run(cmd: list[str], **kw) -> subprocess.CompletedProcess:
    print(f"+ {' '.join(str(c) for c in cmd)}")
    return subprocess.run([str(c) for c in cmd], cwd=ROOT, check=False, **kw)


def env() -> dict:
    e = os.environ.copy()
    e["PATH"] = f"{NODE_BIN}:{OHPM_BIN}:{e.get('PATH', '')}"
    e["DEVECO_SDK_HOME"] = SDK_HOME
    return e


def main() -> int:
    ap = argparse.ArgumentParser(description="ohosVulDetect benchmark app build")
    ap.add_argument("--product", choices=PRODUCTS + ["all"], default="all",
                    help="default=API26 语料；emulator=API24 模拟器变体；all=两者")
    ap.add_argument("--debug", action="store_true", help="debug 构建（不启用混淆）")
    ap.add_argument("--clean", action="store_true", help="构建前清理")
    args = ap.parse_args()

    missing = [p for p in (HVIGORW, NODE_BIN, OHPM_BIN) if not p.exists()]
    if missing:
        print(f"ERROR: DevEco 工具缺失: {missing}（可用 DEVECO_STUDIO_HOME 覆盖安装路径）")
        return 1

    products = PRODUCTS if args.product == "all" else [args.product]
    mode = "debug" if args.debug else "release"
    e = env()

    if args.clean:
        r = run([HVIGORW, "--no-daemon", "clean"], env=e)
        if r.returncode != 0:
            return r.returncode

    print(f"== ohpm install ==")
    r = run([OHPM_BIN / "ohpm", "install", "--all"], env=e)
    if r.returncode != 0:
        return r.returncode

    for product in products:
        print(f"\n== assembleHap product={product} mode={mode} ==")
        r = run([HVIGORW, "--no-daemon", "assembleHap", "--mode", "module",
                 "-p", f"product={product}", "-p", f"buildMode={mode}"], env=e)
        if r.returncode != 0:
            return r.returncode
        print(f"== assembleApp product={product} mode={mode} ==")
        r = run([HVIGORW, "--no-daemon", "assembleApp", "--mode", "project",
                 "-p", f"product={product}", "-p", f"buildMode={mode}"], env=e)
        if r.returncode != 0:
            return r.returncode

    print("\n== 构建产物 ==")
    ok = False
    for product in products:
        out = ROOT / f"build/outputs/{product}"
        for f in sorted(out.glob("*.app")) if out.exists() else []:
            size = f.stat().st_size / 1024 / 1024
            print(f"  {f.relative_to(ROOT)}  ({size:.2f} MB)")
            ok = True
        for hap in ROOT.glob(f"*/build/{product}/outputs/default/*.hap"):
            print(f"  {hap.relative_to(ROOT)}  ({hap.stat().st_size / 1024:.0f} KB)")
    if not ok:
        print("ERROR: 未找到 .app 产物")
        return 1
    print("\nOK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
