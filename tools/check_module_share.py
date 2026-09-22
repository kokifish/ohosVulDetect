#!/usr/bin/env python3
"""模块指令份额门禁：解包 build/out 的 .app，ark_disasm 每个模块 abc，
统计指令实例数与函数数（release 口径）。

用法（仓库根目录，构建后运行）：
  python3 tools/check_module_share.py                # 默认 api26-release 产物 + 阈值门禁
  python3 tools/check_module_share.py --app build/out/ohosVulDetect-api24-release-unsigned.app --no-gate

退出码：--module 目标未达 --min-inst / --min-funcs（或 .app 缺失）→ 1。
口径与 check_opcode_coverage 一致（OPCODE_RE − NOISE）；指令数为实例数（非去重）。
feat_heavy 额外按原型前缀分桶（biz_/ovw_/ktw_/uicomp_/reg_/anon 闭包），用于密度归因。
"""
import argparse
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile

OPCODE_RE = re.compile(r"^\s+([a-z][a-z0-9._]+)", re.M)
FUNC_RE = re.compile(r"^\.function\s+[^\s]+\s+([^\s(]+)", re.M)
NOISE = {"u8", "u32", "u1", "i8", "i32", "f64"}
DEFAULT_DIS = ("/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony"
               "/toolchains/ark_disasm")
PREFIXES = ("biz_", "ovw_", "ktw_", "uicomp", "reg_", "rega_", "areg_", "kreg", "dreg",
            "heavyBiz", "heavyApi", "heavyKit", "heavyCounts", "collect")


def bucket(name: str) -> str:
    for p in PREFIXES:
        if name.startswith(p):
            return p.rstrip("_")
    return ("anon" if "#*#" in name else "other")


def analyze(dis_text: str) -> tuple[int, int, dict]:
    """返回 (指令实例数, 函数数, 分桶统计 {bucket: [inst, funcs]})。"""
    lines = dis_text.split("\n")
    inst = 0
    funcs = 0
    cur = "other"
    stats: dict[str, list[int]] = {}
    opcode_at = re.compile(r"^\s+([a-z][a-z0-9._]+)")
    name_re = re.compile(r"^\.function\s+[^\s]+\s+([^\s(]+)")
    for ln in lines:
        m = name_re.match(ln)
        if m:
            funcs += 1
            cur = bucket(m.group(1))
            stats.setdefault(cur, [0, 0])
            stats[cur][1] += 1
            continue
        m = opcode_at.match(ln)
        if m and m.group(1) not in NOISE:
            inst += 1
            stats.setdefault(cur, [0, 0])
            stats[cur][0] += 1
    return inst, funcs, stats


def main() -> int:
    ap = argparse.ArgumentParser(description="per-module instruction share gate")
    ap.add_argument("--app", default="build/out/ohosVulDetect-api26-release-unsigned.app")
    ap.add_argument("--ark-disasm", dest="ark_disasm", default=DEFAULT_DIS)
    ap.add_argument("--module", default="feat_heavy")
    ap.add_argument("--min-inst", dest="min_inst", type=int, default=5_000_000)
    ap.add_argument("--min-funcs", dest="min_funcs", type=int, default=55_000)
    ap.add_argument("--no-gate", dest="no_gate", action="store_true",
                    help="仅报告，不判阈值（api24/debug 等其他变体用）")
    args = ap.parse_args()

    app = pathlib.Path(args.app)
    if not app.exists():
        print(f"ERROR: .app 不存在: {app}（先跑 build.py）")
        return 1
    if not pathlib.Path(args.ark_disasm).exists():
        print(f"ERROR: ark_disasm 不存在: {args.ark_disasm}")
        return 1

    work = pathlib.Path(tempfile.mkdtemp(prefix="ovd_share_"))
    agg: dict[str, list[int]] = {}
    heavy_stats: dict[str, list[int]] = {}
    try:
        with zipfile.ZipFile(app) as z:
            z.extractall(work)
        for pkg in sorted(work.rglob("*")):
            if pkg.suffix not in (".hap", ".hsp"):
                continue
            mod = pkg.name.split("-")[0]
            pdir = pkg.with_suffix("")
            with zipfile.ZipFile(pkg) as zf:
                zf.extractall(pdir)
            for abc in sorted(pdir.rglob("*.abc")):
                out = work / "x.dis"
                r = subprocess.run([args.ark_disasm, str(abc), str(out)],
                                   capture_output=True, text=True)
                if r.returncode != 0:
                    print(f"WARN: 反汇编失败 {mod}: {abc}")
                    continue
                inst, funcs, stats = analyze(out.read_text(errors="ignore"))
                agg.setdefault(mod, [0, 0])
                agg[mod][0] += inst
                agg[mod][1] += funcs
                if mod == args.module:
                    for b, (bi, bf) in stats.items():
                        heavy_stats.setdefault(b, [0, 0])
                        heavy_stats[b][0] += bi
                        heavy_stats[b][1] += bf
        total = sum(v[0] for v in agg.values())
        print(f"== {app.name}  total_inst={total}")
        for mod, (inst, funcs) in sorted(agg.items(), key=lambda kv: -kv[1][0]):
            share = 100.0 * inst / total if total else 0.0
            print(f"  {mod:<12} inst={inst:>9}  share={share:5.1f}%  funcs={funcs}")
        if heavy_stats:
            print(f"  -- {args.module} 原型分桶 --")
            for b, (bi, bf) in sorted(heavy_stats.items(), key=lambda kv: -kv[1][0]):
                per = bi / bf if bf else 0
                print(f"     {b:<10} inst={bi:>9}  funcs={bf:>6}  inst/func={per:6.1f}")
        target = agg.get(args.module, [0, 0])
        if args.no_gate:
            print("gate: off (--no-gate)")
            return 0
        ok = target[0] >= args.min_inst and target[1] >= args.min_funcs
        print(f"gate {args.module}: inst {target[0]} >= {args.min_inst} and "
              f"funcs {target[1]} >= {args.min_funcs} → {'OK' if ok else 'FAIL'}")
        return 0 if ok else 1
    finally:
        shutil.rmtree(work, ignore_errors=True)


if __name__ == "__main__":
    sys.exit(main())
