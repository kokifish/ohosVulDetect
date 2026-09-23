#!/usr/bin/env python3
"""样本矩阵构建器：用 gen_heavy_farm.py 的环境变量旋钮产出三档指令压力梯度的
api26-release .app 到 build/samples/，供父项目按档位选样本。

  small  — 极小农场（biz=1 / UI=24 / API cap=2）：单模块份额 ~30% 档
  medium — 定点 40–50% 单模块份额档（biz=1，全量 api/kit/ui 固定面）
  heavy  — 极端档（默认提交规模，≥5M 指令 / ≈60k 函数，~93%）

流程：设环境变量重生成 farm → 构建 api26-release → 收集副本 → 还原默认 farm。
结束后工作区与进入前一致（farm 以默认参数重生成）。构建走 build.py（含 ohpm/hvigor）。

用法：python3 tools/build_samples.py [--profiles small,medium,heavy] [--skip-build]
"""
import argparse
import os
import pathlib
import shutil
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))

PROFILES: dict[str, dict[str, str] | None] = {
    "small": {"OVD_HEAVY_BIZ_FILES": "1", "OVD_HEAVY_UI_STRUCTS": "24", "OVD_HEAVY_API_CAP": "2"},
    "medium": {"OVD_HEAVY_BIZ_FILES": "1"},
    "heavy": None,
}


def regen(env: dict[str, str] | None) -> None:
    e = os.environ.copy()
    for k in list(e):
        if k.startswith("OVD_HEAVY_"):
            del e[k]
    if env:
        e.update(env)
    r = subprocess.run([sys.executable, str(ROOT / "tools" / "gen_heavy_farm.py")],
                       env=e, capture_output=True, text=True)
    if r.returncode != 0:
        print(r.stdout, r.stderr)
        raise SystemExit("ERROR: farm 重生成失败")


def build_release() -> None:
    r = subprocess.run([sys.executable, str(ROOT / "build.py"), "--sdk", "api26",
                        "--mode", "release"], cwd=ROOT)
    if r.returncode != 0:
        raise SystemExit("ERROR: build.py 失败")


def main() -> int:
    ap = argparse.ArgumentParser(description="build tiered stress samples")
    ap.add_argument("--profiles", default="small,medium,heavy")
    ap.add_argument("--skip-build", action="store_true",
                    help="不重新构建：heavy 直接用 build/out 现产物（其余档仍需构建）")
    args = ap.parse_args()
    names = [n.strip() for n in args.profiles.split(",") if n.strip()]
    for n in names:
        if n not in PROFILES:
            print(f"ERROR: 未知档位 {n}（可选 {', '.join(PROFILES)}）")
            return 1

    samples_dir = ROOT / "build" / "samples"
    samples_dir.mkdir(parents=True, exist_ok=True)
    src_app = ROOT / "build" / "out" / "ohosVulDetect-api26-release-unsigned.app"
    try:
        for name in names:
            env = PROFILES[name]
            if name == "heavy" and args.skip_build and src_app.exists():
                regen(env)
            else:
                regen(env)
                build_release()
            if not src_app.exists():
                raise SystemExit(f"ERROR: 未找到 {src_app}")
            dst = samples_dir / f"ohosVulDetect-sample-{name}.app"
            shutil.copy2(src_app, dst)
            print(f"== sample[{name}] → {dst}")
        # 汇总各档份额
        for name in names:
            app = samples_dir / f"ohosVulDetect-sample-{name}.app"
            r = subprocess.run([sys.executable, str(ROOT / "tools" / "check_module_share.py"),
                                "--app", str(app), "--no-gate"], capture_output=True, text=True)
            heavy_line = next((l for l in r.stdout.split("\n") if "feat_heavy" in l), "")
            print(f"share[{name:6}] {heavy_line.strip()}")
    finally:
        regen(None)  # 还原默认语料
    print("done（farm 已还原为默认规模）")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
