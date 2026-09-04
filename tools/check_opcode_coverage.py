#!/usr/bin/env python3
"""指令覆盖统计：反汇编当前全部模块 abc（可叠加历史反汇编快照 .dis），统计指令覆盖率。

口径：
- 已用 = 当前 build 产物 + --dis-dir 快照目录（默认 compare_dis/，可为空）中出现的指令助记符并集。
  典型用法：release 构建后 `--dump-dir compare_dis` 落快照 → debug 构建后再跑本脚本（自动并入），
  得到 release∪debug 并集（debug 贡献 debugger/newlexenvwithname/wide.newlexenvwithname）。
- 全集 = ohre 仓库 isa.yaml 的 sig 列表（--isa-yaml 覆盖）。
- 差集分类：deprecated/experimental、wide、其他（结构性不可达清单见 docs/BENCHMARK.md）。

用法（在 ohosVulDetect 子模块根目录）：
  python3 tools/check_opcode_coverage.py --dump-dir compare_dis
"""
import argparse
import pathlib
import re
import subprocess
import sys
import tempfile

MODULES = ["entry", "feat_api", "feat_vuln", "lib_shared"]
PRODUCTS = ["default", "emulator"]
OPCODE_RE = re.compile(r"^\s+([a-z][a-z0-9._]+)", re.M)
NOISE = {"u8", "u32", "u1", "i8", "i32", "f64"}


def main() -> int:
    ap = argparse.ArgumentParser(description="opcode coverage across module abc files")
    ap.add_argument("--ark-disasm", dest="ark_disasm", default="/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/toolchains/ark_disasm")
    ap.add_argument("--isa-yaml", dest="isa_yaml", default=str(pathlib.Path.home() / "git_space/ohre_dev/ohre/abcre/dis/enum/isa.yaml"))
    ap.add_argument("--dump-dir", dest="dump_dir", default="compare_dis", help="反汇编快照目录（并集用；空则仅统计当前产物）")
    args = ap.parse_args()

    root = pathlib.Path(__file__).resolve().parent.parent
    isa_path = pathlib.Path(args.isa_yaml)
    if not isa_path.exists():
        print(f"ERROR: isa.yaml 不存在: {isa_path}（可用 --isa-yaml 覆盖）")
        return 1
    full = set(re.findall(r"sig: ([a-z0-9._]+)", isa_path.read_text()))

    used: set[str] = set()
    dump = pathlib.Path(args.dump_dir)
    dump.mkdir(parents=True, exist_ok=True)
    for f in sorted(dump.glob("*.dis")):
        used |= {m.group(1) for m in OPCODE_RE.finditer(f.read_text(errors="ignore"))}

    seen_any = dump.exists() and any(dump.glob("*.dis"))
    with tempfile.TemporaryDirectory() as td:
        for m in MODULES:
            for p in PRODUCTS:
                abc = root / m / "build" / p / "intermediates" / "loader_out" / "default" / "ets" / "modules.abc"
                if not abc.exists():
                    continue
                out = pathlib.Path(td) / f"{m}_{p}.dis"
                r = subprocess.run([args.ark_disasm, str(abc), str(out)], capture_output=True, text=True)
                if r.returncode != 0 or not out.exists():
                    print(f"WARN: 反汇编失败 {m}/{p}: {abc}", file=sys.stderr)
                    continue
                seen_any = True
                text = out.read_text(errors="ignore")
                used |= {mm.group(1) for mm in OPCODE_RE.finditer(text)}
                if True:
                    out.rename(dump / f"{m}_{p}.dis")  # 落快照，供下次并集
    if not seen_any:
        print("ERROR: 未找到任何 modules.abc 或快照（先跑 build.py）")
        return 1
    used -= NOISE

    unused = sorted(full - used)
    extra = sorted(used - full)
    dep = [x for x in unused if x.startswith(("deprecated.", "experimental."))]
    wide = [x for x in unused if x.startswith("wide.")]
    other = [x for x in unused if not x.startswith(("deprecated.", "experimental.", "wide."))]

    print(f"已用 {len(used & full)}/{len(full)}；未用 {len(unused)}"
          f"（deprecated/experimental {len(dep)}，wide {len(wide)}，其他 {len(other)}）")
    if extra:
        print(f"出现但不在 isa.yaml 的助记符: {extra}")
    print("未用-其他:", " ".join(other))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
