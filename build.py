#!/usr/bin/env python3
"""ohosVulDetect 基准 App 一键构建。

构建轴只有两个：SDK 版本（api26 / api24）× 构建模式（release 默认 / debug）。

用法（--sdk 与 --mode 可自由组合）：
  python3 build.py                    # 全量：api26+api24 双 SDK × release+debug 双模式（4 变体全出，默认）
  python3 build.py --sdk api26        # 仅 API 26（SDK 26.0.0，正式语料），双模式
  python3 build.py --sdk api24        # 仅 API 24（compatibleSdkVersion 6.1.1(24)，旧模拟器镜像安装用）
  python3 build.py --mode release     # 仅 release（ArkGuard 混淆全开），双 SDK
  python3 build.py --mode debug       # 仅 debug（不混淆）
  python3 build.py --clean            # 构建前清理

产物统一收集到 build/out/，文件名区分 SDK 与模式：
  ohosVulDetect-<sdk>-<mode>-{signed|unsigned}.app
  <模块>-<sdk>-<mode>-{signed|unsigned}.{hap|hsp}
（hvigor 原始产物仍在 build/outputs/<product>/ 与 */build/<product>/outputs/default/，.har/.tgz 中间产物不收集；
 注意 hvigor 强制要求名为 "default" 的 product 存在——default 即 api26，见 build-profile.json5 注释）
混淆规则：各模块 obfuscation-rules.txt（默认全开；若某规则导致运行异常，在对应文件中加 keep 名单）。
"""
import argparse
import os
import pathlib
import shutil
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent
DEVECO_HOME = pathlib.Path(os.environ.get("DEVECO_STUDIO_HOME", "/Applications/DevEco-Studio.app"))
NODE_BIN = DEVECO_HOME / "Contents/tools/node/bin"
OHPM_BIN = DEVECO_HOME / "Contents/tools/ohpm/bin"
HVIGORW = DEVECO_HOME / "Contents/tools/hvigor/bin/hvigorw"
SDK_HOME = os.environ.get("DEVECO_SDK_HOME", str(DEVECO_HOME / "Contents/sdk"))

SDKS = ["api26", "api24"]
MODES = ["release", "debug"]
# hvigor 强制要求存在名为 "default" 的 product，故对外的 sdk 名与内部 product 名做映射
PRODUCT_OF = {"api26": "default", "api24": "api24"}


def run(cmd: list[str], **kw) -> subprocess.CompletedProcess:
    print(f"+ {' '.join(str(c) for c in cmd)}")
    return subprocess.run([str(c) for c in cmd], cwd=ROOT, check=False, **kw)


def env() -> dict:
    e = os.environ.copy()
    e["PATH"] = f"{NODE_BIN}:{OHPM_BIN}:{e.get('PATH', '')}"
    e["DEVECO_SDK_HOME"] = SDK_HOME
    return e


def collect(sdks: list[str], mode: str) -> list[pathlib.Path]:
    """把 hvigor 产物复制收集到 build/out/，文件名改为 <名>-<sdk>-<mode>-<签名态>。"""
    out_dir = ROOT / "build" / "out"
    out_dir.mkdir(parents=True, exist_ok=True)
    copied: list[pathlib.Path] = []
    for sdk in sdks:
        product = PRODUCT_OF[sdk]
        src_app_dir = ROOT / "build" / "outputs" / product
        apps = sorted(src_app_dir.glob("*.app")) if src_app_dir.exists() else []
        parts = sorted(ROOT.glob(f"*/build/{product}/outputs/default/*"))
        for f in [*apps, *parts]:
            if f.suffix not in (".app", ".hap", ".hsp"):
                continue
            # <模块>-<target>-<签名态...> / <app名>-<sdk>-<签名态...> → 中段替换为 <sdk>-<mode>
            stem = f.stem.split("-")
            new_name = f"{stem[0]}-{sdk}-{mode}-" + "-".join(stem[2:]) + f.suffix
            dst = out_dir / new_name
            shutil.copy2(f, dst)
            copied.append(dst)
    return copied


def main() -> int:
    ap = argparse.ArgumentParser(description="ohosVulDetect benchmark app build")
    ap.add_argument("--sdk", choices=SDKS + ["all"], default="all",
                    help="api26=SDK 26.0.0 正式语料；api24=6.1.1(24) 旧模拟器兼容；all=两者（默认）")
    ap.add_argument("--mode", choices=MODES + ["all"], default="all",
                    help="release=ArkGuard 混淆；debug=不混淆；all=两者（默认）")
    ap.add_argument("--clean", action="store_true", help="构建前清理")
    args = ap.parse_args()

    missing = [p for p in (HVIGORW, NODE_BIN, OHPM_BIN) if not p.exists()]
    if missing:
        print(f"ERROR: DevEco 工具缺失: {missing}（可用 DEVECO_STUDIO_HOME 覆盖安装路径）")
        return 1

    sdks = SDKS if args.sdk == "all" else [args.sdk]
    modes = MODES if args.mode == "all" else [args.mode]
    e = env()

    if args.clean:
        r = run([HVIGORW, "--no-daemon", "clean"], env=e)
        if r.returncode != 0:
            return r.returncode

    print(f"== ohpm install ==")
    r = run([OHPM_BIN / "ohpm", "install", "--all"], env=e)
    if r.returncode != 0:
        return r.returncode

    copied: list[pathlib.Path] = []
    for mode in modes:
        for sdk in sdks:
            product = PRODUCT_OF[sdk]
            print(f"\n== assembleHap product={product} sdk={sdk} mode={mode} ==")
            r = run([HVIGORW, "--no-daemon", "assembleHap", "--mode", "module",
                     "-p", f"product={product}", "-p", f"buildMode={mode}"], env=e)
            if r.returncode != 0:
                return r.returncode
            print(f"== assembleApp product={product} sdk={sdk} mode={mode} ==")
            r = run([HVIGORW, "--no-daemon", "assembleApp", "--mode", "project",
                     "-p", f"product={product}", "-p", f"buildMode={mode}"], env=e)
            if r.returncode != 0:
                return r.returncode
            copied += collect([sdk], mode)

    print("\n== 构建产物（build/out/）==")
    apps = [f for f in copied if f.suffix == ".app"]
    for f in sorted(copied):
        print(f"  build/out/{f.name}  ({f.stat().st_size / 1024:.0f} KB)")
    if not apps:
        print("ERROR: 未找到 .app 产物")
        return 1
    print("\nOK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
