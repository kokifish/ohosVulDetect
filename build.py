#!/usr/bin/env python3
"""ohosVulDetect 基准 App 一键构建。

构建轴：SDK 版本（api26 / api24）× 构建模式（release / debug）× 样本档位（small / medium / heavy）。

用法（--sdk 与 --mode 可自由组合）：
  python3 build.py                    # 默认全量：标准 4 变体（api26+api24 × release+debug）
                                      # + 三档样本（small/medium/heavy，均为 api26-release）
  python3 build.py --sdk api26        # 仅 API 26（SDK 26.0.0，正式语料），双模式
  python3 build.py --sdk api24        # 仅 API 24（compatibleSdkVersion 6.1.1(24)，旧模拟器镜像安装用）
  python3 build.py --mode release     # 仅 release（ArkGuard 混淆全开），双 SDK
  python3 build.py --mode debug       # 仅 debug（不混淆）
  python3 build.py --clean            # 构建前清理
  python3 build.py --no-samples       # 跳过三档样本（只出标准 4 变体）
  python3 build.py --samples-only     # 只构建三档样本（跳过标准 4 变体）

产物路径：
  build/out/ohosVulDetect-<sdk>-<mode>-unsigned.app    标准 4 变体（api26 含 heavy 农场）
  build/out/<模块>-<sdk>-<mode>-unsigned.{hap|hsp}      每模块产物
  build/samples/ohosVulDetect-sample-<tier>.app        三档样本（均为 api26-release 单变体）

三档样本说明：构建前用 OVD_HEAVY_* 环境变量重生成 feat_heavy 语料（small≈12 万指令 /
medium≈29 万 / heavy≈594 万，即默认规模），构建后还原默认语料；档位差异见
tools/build_samples.py 与 docs/BENCHMARK.md「模块指令份额」。
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
BUILD_OUT = ROOT / "build" / "out"
SAMPLES_DIR = ROOT / "build" / "samples"

# 三档样本的 farm 规模旋钮（heavy=None 即默认规模）；详见 tools/gen_component_api_farm.py
TIER_ENVS = {
    "small": {"OVD_HEAVY_BIZ_FILES": "1", "OVD_HEAVY_UI_STRUCTS": "24", "OVD_HEAVY_API_CAP": "2"},
    "medium": {"OVD_HEAVY_BIZ_FILES": "1"},
    "heavy": None,
}


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
    out_dir = BUILD_OUT
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
            stem = f.stem.split("-")
            new_name = f"{stem[0]}-{sdk}-{mode}-" + "-".join(stem[2:]) + f.suffix
            dst = out_dir / new_name
            shutil.copy2(f, dst)
            copied.append(dst)
    return copied


def regen_farm(env_over: dict | None) -> None:
    """按档位旋钮重生成 feat_heavy 语料；None = 还原默认规模。"""
    e = os.environ.copy()
    for k in [k for k in e if k.startswith("OVD_HEAVY_")]:
        del e[k]
    if env_over:
        e.update(env_over)
    r = subprocess.run([sys.executable, str(ROOT / "tools" / "gen_heavy_farm.py")],
                       env=e, cwd=ROOT, capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stdout[-400:], r.stderr[-400:])
        raise SystemExit("ERROR: feat_heavy 语料重生成失败")


def build_api26_release(e: dict) -> None:
    product = PRODUCT_OF["api26"]
    r = run([HVIGORW, "--no-daemon", "assembleHap", "--mode", "module",
             "-p", f"product={product}", "-p", "buildMode=release"], env=e)
    if r.returncode != 0:
        raise SystemExit("ERROR: assembleHap 失败")
    r = run([HVIGORW, "--no-daemon", "assembleApp", "--mode", "project",
             "-p", f"product={product}", "-p", "buildMode=release"], env=e)
    if r.returncode != 0:
        raise SystemExit("ERROR: assembleApp 失败")
    collect(["api26"], "release")


def build_tier(name: str, e: dict) -> None:
    """构建单档样本：重生成对应规模 farm → api26-release → 收集副本。
    hvigor 增量缓存对 farm 文件增删不敏感（实测跳过重编），须清模块构建目录强制全编。"""
    regen_farm(TIER_ENVS.get(name))
    shutil.rmtree(ROOT / "feat_heavy" / "build", ignore_errors=True)
    build_api26_release(e)
    src = BUILD_OUT / "ohosVulDetect-api26-release-unsigned.app"
    dst = SAMPLES_DIR / f"ohosVulDetect-sample-{name}.app"
    shutil.copy2(src, dst)
    print(f"== sample[{name}] → {dst}")


def copy_heavy_sample() -> None:
    src = BUILD_OUT / "ohosVulDetect-api26-release-unsigned.app"
    dst = SAMPLES_DIR / "ohosVulDetect-sample-heavy.app"
    shutil.copy2(src, dst)
    print(f"== sample[heavy] → {dst}（复用标准 api26-release）")


def main() -> int:
    ap = argparse.ArgumentParser(description="ohosVulDetect benchmark app build")
    ap.add_argument("--sdk", choices=SDKS + ["all"], default="all",
                    help="api26=SDK 26.0.0 正式语料；api24=6.1.1(24) 旧模拟器兼容；all=两者（默认）")
    ap.add_argument("--mode", choices=MODES + ["all"], default="all",
                    help="release=ArkGuard 混淆；debug=不混淆；all=两者（默认）")
    ap.add_argument("--clean", action="store_true", help="构建前清理")
    g = ap.add_argument_group("样本档位（默认构建）")
    g.add_argument("--no-samples", action="store_true", help="跳过三档样本构建")
    g.add_argument("--samples-only", action="store_true", help="只构建三档样本（跳过标准 4 变体）")
    args = ap.parse_args()

    missing = [pp for pp in (HVIGORW, NODE_BIN, OHPM_BIN) if not pp.exists()]
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

    print("== ohpm install ==")
    r = run([OHPM_BIN / "ohpm", "install", "--all"], env=e)
    if r.returncode != 0:
        return r.returncode

    copied: list[pathlib.Path] = []
    if args.samples_only:
        SAMPLES_DIR.mkdir(parents=True, exist_ok=True)
        for tier in ("small", "medium", "heavy"):
            build_tier(tier, e)
        regen_farm(None)
    else:
        if not args.no_samples:
            # 三档样本先行（small/medium 各一次 api26-release 构建；构建后还原默认语料）
            SAMPLES_DIR.mkdir(parents=True, exist_ok=True)
            for tier in ("small", "medium"):
                build_tier(tier, e)
            regen_farm(None)
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
        if not args.no_samples and "api26" in sdks and "release" in modes:
            # 标准 api26-release 即 heavy 档（默认 farm），直接复制为样本
            SAMPLES_DIR.mkdir(parents=True, exist_ok=True)
            copy_heavy_sample()

    print("\n== 构建产物 ==")
    for f in sorted(BUILD_OUT.glob("*")):
        print(f"  build/out/{f.name}  ({f.stat().st_size / 1024:.0f} KB)")
    if SAMPLES_DIR.exists():
        for f in sorted(SAMPLES_DIR.glob("*.app")):
            print(f"  build/samples/{f.name}  ({f.stat().st_size / 1024:.0f} KB)")
    apps = list(BUILD_OUT.glob("ohosVulDetect-*.app"))
    if not apps:
        print("ERROR: 未找到 .app 产物")
        return 1
    print("\nOK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
