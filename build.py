#!/usr/bin/env python3
"""ohosVulDetect 基准 App 一键构建。

构建轴：SDK 版本（api26 / api24）× 构建模式（release / debug）× 样本档位（small / medium）。

用法（--sdk 与 --mode 可自由组合）：
  python3 build.py                    # 默认全量：标准 4 变体（api26+api24 × release+debug）
                                      # + 两档梯度样本（small/medium；heavy 档=标准 api26-release 本身）
  python3 build.py --sdk api26        # 仅 API 26（SDK 26.0.0，正式语料），双模式
  python3 build.py --sdk api24        # 仅 API 24（compatibleSdkVersion 6.1.1(24)，旧模拟器镜像安装用）
  python3 build.py --mode release     # 仅 release（ArkGuard 混淆全开），双 SDK
  python3 build.py --mode debug       # 仅 debug（不混淆）
  python3 build.py --clean            # 构建前清理
  python3 build.py --no-samples       # 跳过三档样本（只出标准 4 变体）
  python3 build.py --samples-only     # 只构建三档样本（跳过标准 4 变体）

产物路径：
  build/out/ohosVulDetect-<sdk>-<mode>-unsigned.app    标准 4 变体（api26 含 heavy 农场）
  build/out/feat_heavy-api26-release-unsigned.hap      heavy 单模块单体（压测载体，仅此一个单模块包）
  build/samples/ohosVulDetect-sample-<tier>.app        两档样本（small/medium，均 api26-release；heavy 档 = 标准 api26-release 本身）

三档样本说明：构建前用 OVD_HEAVY_* 环境变量重生成 feat_heavy 语料（small≈12 万指令 /
medium≈47 万 / heavy≈642 万，即默认规模），构建后还原默认语料；档位差异见
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

# 三档样本的 farm 规模旋钮；heavy 档 = 标准 api26-release 本身（同一构建，不单独产出）
TIER_ENVS = {
    "small": {"OVD_HEAVY_BIZ_FILES": "1", "OVD_HEAVY_BIZ_FUNCS": "43",
              "OVD_HEAVY_GIANT_STMTS": "0",
              "OVD_HEAVY_UI_STRUCTS": "24", "OVD_HEAVY_API_CAP": "2"},
    "medium": {"OVD_HEAVY_BIZ_FILES": "1", "OVD_HEAVY_BIZ_FUNCS": "170",
               "OVD_HEAVY_GIANT_STMTS": "0"},
}


def run(cmd: list[str], **kw) -> subprocess.CompletedProcess:
    print(f"+ {' '.join(str(c) for c in cmd)}")
    return subprocess.run([str(c) for c in cmd], cwd=ROOT, check=False, **kw)


def env() -> dict:
    e = os.environ.copy()
    e["PATH"] = f"{NODE_BIN}:{OHPM_BIN}:{e.get('PATH', '')}"
    e["DEVECO_SDK_HOME"] = SDK_HOME
    return e


def write_sidecar(dst: pathlib.Path, sdk: str, mode: str) -> None:
    """产物旁写 <名>.meta.json 基础画像（变体/字节/模块清单/apiVersion）。
    外部消费者拿到工件即见构成，不依赖读仓库；指令/record 级完整画像由
    tools/gen_corpus_meta.py 落同名 sidecar（构建后 Mandatory 步骤覆盖本文件）。"""
    import json
    import zipfile
    meta: dict = {"artifact": dst.name, "sdk": sdk, "mode": mode,
                  "bytes": dst.stat().st_size,
                  "note": "basic profile; run tools/gen_corpus_meta.py for instruction/record-level stats (overrides this file)"}
    try:
        with zipfile.ZipFile(dst) as z:
            meta["zip_raw_bytes"] = sum(i.file_size for i in z.infolist())
            meta["zip_stored_bytes"] = sum(i.compress_size for i in z.infolist())
            meta["modules"] = [i.filename.rsplit('/', 1)[-1].split('-')[0]
                               for i in z.infolist() if i.filename.endswith(('.hap', '.hsp'))]
            if "pack.info" in z.namelist():
                pack = json.loads(z.read("pack.info"))
                meta["bundle"] = pack["summary"]["app"]["bundleName"]
                mods = pack["summary"]["modules"]
                if mods and mods[0].get("apiVersion"):
                    meta["api_version"] = mods[0]["apiVersion"]
    except (zipfile.BadZipFile, KeyError, ValueError):
        pass
    dst.with_suffix(dst.suffix + ".meta.json").write_text(
        json.dumps(meta, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")


def collect_obf_meta(sdks: list[str], mode: str) -> None:
    """release 构建：把各模块 obfuscation 缓存的 nameCache/systemApiCache 收进
    build/out/<artifact>.obfmeta/——官方名称还原坐标系（改名映射 + SDK API 白名单），
    供外部消费者做名称对照/还原评测。debug 不混淆，无此产物。"""
    if mode != "release":
        return
    for sdk in sdks:
        product = PRODUCT_OF[sdk]
        dst_dir = BUILD_OUT / f"ohosVulDetect-{sdk}-{mode}-unsigned.obfmeta"
        if dst_dir.exists():
            shutil.rmtree(dst_dir)
        dst_dir.mkdir(parents=True, exist_ok=True)
        found = 0
        for mod in sorted(p for p in ROOT.iterdir()
                          if p.is_dir() and (p / "build-profile.json5").exists()):
            base = mod / "build" / product / "cache"
            for nc in sorted(base.glob("*/default@CompileArkTS/esmodule/release/obfuscation/nameCache.json")):
                shutil.copy2(nc, dst_dir / f"{mod.name}.nameCache.json")
                sac = nc.parent / "systemApiCache.json"
                if sac.exists():
                    shutil.copy2(sac, dst_dir / f"{mod.name}.systemApiCache.json")
                found += 1
        print(f"== obfmeta[{sdk}-{mode}] {found} 模块 → build/out/{dst_dir.name}/")


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
            # 单模块包不收集（.app 内即含全部 hap/hsp，按需 unzip 派生）；
            # 仅保留 feat_heavy 单体（api26-release，外部单体压测的实证载体）
            if f.suffix != ".app" and not (f.stem.startswith("feat_heavy")
                                           and sdk == "api26" and mode == "release"):
                continue
            stem = f.stem.split("-")
            new_name = f"{stem[0]}-{sdk}-{mode}-" + "-".join(stem[2:]) + f.suffix
            dst = out_dir / new_name
            shutil.copy2(f, dst)
            write_sidecar(dst, sdk, mode)
            copied.append(dst)
    collect_obf_meta(sdks, mode)
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


def build_tier_fast(name: str, e: dict) -> bool:
    """样本瘦身构建：只重编 feat_heavy（farm 旋钮只影响该模块），以标准 api26-release
    .app 为底做 zip 条目级替换 feat_heavy-default.hap——省去全模块 assembleHap +
    assembleApp 链（其余模块源码未变，字节级复用）。失败返回 False（回退全链）。"""
    import zipfile
    regen_farm(TIER_ENVS.get(name))
    shutil.rmtree(ROOT / "feat_heavy" / "build", ignore_errors=True)
    r = run([HVIGORW, "--no-daemon", "assembleHap", "--mode", "module",
             "-p", "product=default", "-p", "buildMode=release",
             "-p", "module=feat_heavy@default"], env=e)
    if r.returncode != 0:
        return False
    outdir = ROOT / "feat_heavy" / "build" / "default" / "outputs" / "default"
    new_hap = next((outdir / n for n in ("feat_heavy-default.hap", "feat_heavy-default-unsigned.hap")
                    if (outdir / n).exists()), None)
    if new_hap is None:
        return False
    base = BUILD_OUT / "ohosVulDetect-api26-release-unsigned.app"
    if not (new_hap.exists() and base.exists()):
        return False
    dst = SAMPLES_DIR / f"ohosVulDetect-sample-{name}.app"
    with zipfile.ZipFile(base) as zin, \
            zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = new_hap.read_bytes() if item.filename == "feat_heavy-default.hap" \
                else zin.read(item.filename)
            zout.writestr(item, data)
    print(f"== sample[{name}] → {dst}（zip 替换 feat_heavy hap）")
    return True


def build_tier(name: str, e: dict) -> None:
    """构建单档样本：优先 zip 替换瘦身链；失败回退全链（api26-release 全量构建）。"""
    if build_tier_fast(name, e):
        return
    print(f"== sample[{name}] 瘦身链失败，回退全链")
    regen_farm(TIER_ENVS.get(name))
    shutil.rmtree(ROOT / "feat_heavy" / "build", ignore_errors=True)
    build_api26_release(e)
    src = BUILD_OUT / "ohosVulDetect-api26-release-unsigned.app"
    dst = SAMPLES_DIR / f"ohosVulDetect-sample-{name}.app"
    shutil.copy2(src, dst)
    print(f"== sample[{name}] → {dst}")


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
        # 注意：瘦身体身链不写 build/out；若回退全链，标准 api26-release .app（含
        # obfmeta sidecar）会被样本档 farm 状态覆盖——单跑 --samples-only 后需重跑
        # 标准链（或全量 build.py）再 verify
        SAMPLES_DIR.mkdir(parents=True, exist_ok=True)
        for tier in ("small", "medium"):
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
