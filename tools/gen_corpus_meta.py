#!/usr/bin/env python3
"""语料画像生成器：实测 build/out 与 build/samples 构建产物 → 仓库根 corpus_meta.json。

外部消费者无需翻文档：本文件给出每个变体的模块构成、指令/函数量与份额、压缩画像、
feat_heavy record 级分布（模块内不均衡度）与推荐用法。一切数字来自产物实测，不手写：
  - .app 外层 zip 条目 → 原始/存储字节（压缩画像；debug 条目零压缩、farm 高压缩比均由此可见）
  - pack.info → 模块类型与 apiVersion
  - 内层 abc → 字节 + ark_disasm 反汇编统计（口径同 check_module_share.py：指令实例数，非去重）
  - record 级分布 → feat_heavy（api26-release 与 small/medium 样本；top1_share = 单 record 份额）

用法（构建后运行）：
  python3 tools/gen_corpus_meta.py            # 生成/覆盖 corpus_meta.json
  python3 tools/gen_corpus_meta.py --check    # 重算并与落盘文件比对，漂移则 exit 1
"""
import argparse
import copy
import hashlib
import json
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from check_module_share import DEFAULT_DIS, NOISE, analyze  # noqa: E402

OUT = ROOT / "corpus_meta.json"
VARIANTS = ["api26-release", "api26-debug", "api24-release", "api24-debug"]
TIERS = ["small", "medium", "heavy"]
REC_RE = re.compile(r"^\.function\s+\S+\s+&([^&]+)&\.")
OP_RE = re.compile(r"^\s+([a-z][a-z0-9._]+)")

MODULE_TAGS = {
    "entry": "HAP 壳：Index 两按钮跨 HAP 拉起 feature",
    "feat_api": "反编译语料主模块：api-/ui-/lang- 路由页 + 受限语言特性（.ts/.js）+ concurrent/workers",
    "feat_vuln": "漏洞语料：带标签漏洞 + 安全孪生，groundtruth/manifest.json 锚定评分",
    "feat_heavy": "指令农场：超大 abc 输入压力样本（模块内不均衡度看 records.top1_share）",
    "feat_compfarm": "组件 API 农场：组件 API 缺口补齐语料",
    "lib_common": "HAR：DemoScaffold/Logger/DemoItem/Runner/Constants（无独立产物，编译进各 HAP 的 abc）",
    "lib_shared": "HSP：静态/动态 import 目标",
}
USAGE = {
    "decompile_and_coverage": "api26-release（全模块 + 农场，正式语料）",
    "vuln_scoring": "4 个标准变体均含 feat_vuln；评分：python3 groundtruth/score_output.py <test.out> <.app>",
    "imbalance_stress": "api26-release：feat_heavy 为 app 内主导模块；模块内不均衡度看 records.top1_share",
    "small_package": "api24-release（无农场模块，包最小）",
    "storage_bloat": "api26-debug 体积大 = debug abc 更大 + .app 外层条目零压缩存储（zip_raw≈zip_stored），指令量与 release 相同，非更高分析工作量",
    "tiered_sampling": "build/samples 三档均 api26-release 口径；heavy 与标准 api26-release 为同一构建的副本",
}
NOTES = [
    "lib_common 为 HAR，无独立包，编译进各依赖方 HAP 的 modules.abc",
    "feat_heavy / feat_compfarm 仅存在于 api26（product=default）变体，api24 变体没有",
    "指令口径：ark_disasm 反汇编文本指令实例数（非去重），同 check_module_share.py",
    "record = 编译单元（源文件级），对应反编译工具看到的模块；HAP/module 与 record 是两个层级",
]


def record_stats(text: str) -> tuple[dict[str, list[int]], dict]:
    """按 .function 行携带的 record（&源文件&）归因指令/函数。
    返回 ({record: [inst, funcs]}, 最大单方法画像 {name, record, instructions})。"""
    stats: dict[str, list[int]] = {}
    cur = "<none>"
    max_m = {"name": "", "record": "", "instructions": 0}
    cur_func_inst = 0
    cur_func_name = ""
    for ln in text.split("\n"):
        m = REC_RE.match(ln)
        if m:
            cur = m.group(1)
            stats.setdefault(cur, [0, 0])
            stats[cur][1] += 1
            cur_func_name = ln.split("&", 2)[-1].split("(", 1)[0].strip().lstrip(".")
            cur_func_inst = 0
            continue
        m = OP_RE.match(ln)
        if m and m.group(1) not in NOISE:
            stats.setdefault(cur, [0, 0])
            stats[cur][0] += 1
            cur_func_inst += 1
            if cur_func_inst > max_m["instructions"]:
                max_m = {"name": cur_func_name, "record": cur, "instructions": cur_func_inst}
    return stats, max_m


def profile_app(app: pathlib.Path, dis: str, with_records: bool) -> dict:
    info: dict = {"app_file": str(app.relative_to(ROOT)), "app_bytes": app.stat().st_size}
    work = pathlib.Path(tempfile.mkdtemp(prefix="ovd_meta_"))
    try:
        with zipfile.ZipFile(app) as z:
            z.extractall(work)
            pack = json.loads(z.read("pack.info")) if "pack.info" in z.namelist() else None
            info["zip_raw_bytes"] = sum(i.file_size for i in z.infolist())
            info["zip_stored_bytes"] = sum(i.compress_size for i in z.infolist())
        mods_meta: dict[str, str] = {}
        api_versions: set[str] = set()
        if pack:
            info["bundle"] = pack["summary"]["app"]["bundleName"]
            for m in pack["summary"]["modules"]:
                d = m.get("distro", {})
                if d.get("moduleName"):
                    mods_meta[d["moduleName"]] = d.get("moduleType", "")
                av = m.get("apiVersion")
                if av:
                    api_versions.add(json.dumps(av, sort_keys=True))
        if api_versions:
            av = json.loads(next(iter(api_versions)))
            info["api_version"] = {"compatible": av.get("compatible"), "target": av.get("target"),
                                   "release_type": av.get("releaseType")}
        modules: list[dict] = []
        for pkg in sorted(work.rglob("*")):
            if pkg.suffix not in (".hap", ".hsp"):
                continue
            name = pkg.name.split("-")[0]
            pdir = pkg.with_suffix("")
            with zipfile.ZipFile(pkg) as zf:
                zf.extractall(pdir)
            abc_bytes = inst = funcs = 0
            rec_stats: dict[str, list[int]] = {}
            max_method = {"name": "", "record": "", "instructions": 0}
            for abc in sorted(pdir.rglob("*.abc")):
                abc_bytes += abc.stat().st_size
                out = work / "x.dis"
                r = subprocess.run([dis, str(abc), str(out)], capture_output=True, text=True)
                if r.returncode != 0:
                    continue
                text = out.read_text(errors="ignore")
                i, f, _ = analyze(text)
                inst += i
                funcs += f
                if with_records and name == "feat_heavy":
                    rs, mm = record_stats(text)
                    for rec, (ri, rf) in rs.items():
                        cur = rec_stats.setdefault(rec, [0, 0])
                        cur[0] += ri
                        cur[1] += rf
                    if mm["instructions"] > max_method["instructions"]:
                        max_method = mm
            entry = {"name": name, "type": mods_meta.get(name, ""), "bytes": pkg.stat().st_size,
                     "abc_bytes": abc_bytes, "instructions": inst, "functions": funcs}
            if rec_stats:
                tops = sorted(rec_stats.items(), key=lambda kv: -kv[1][0])
                total = sum(v[0] for v in rec_stats.values())
                entry["records"] = {
                    "count": len(rec_stats),
                    "top1": {"name": tops[0][0], "instructions": tops[0][1][0],
                             "functions": tops[0][1][1]},
                    "top1_share": round(tops[0][1][0] / total, 4) if total else 0.0,
                    "max_method": {k: max_method[k] for k in ("name", "record", "instructions")
                                   if max_method["instructions"] > 0},
                    "top5": [{"name": n, "instructions": v[0]} for n, v in tops[:5]],
                }
            modules.append(entry)
    finally:
        shutil.rmtree(work, ignore_errors=True)
    total = sum(m["instructions"] for m in modules)
    for m in modules:
        m["inst_share"] = round(m["instructions"] / total, 4) if total else 0.0
    modules.sort(key=lambda m: -m["instructions"])
    info["modules"] = modules
    info["total_instructions"] = total
    info["total_functions"] = sum(m["functions"] for m in modules)
    return info


def write_full_sidecar(path: pathlib.Path, info: dict) -> None:
    """产物旁写全量画像 sidecar（含每模块指令/函数/record 分布），覆盖 build.py 的基础版。"""
    sc = dict(info)
    sc["profile"] = "full (per-module inst/funcs/record dist); repo-level rollup in corpus_meta.json"
    path.with_suffix(path.suffix + ".meta.json").write_text(
        json.dumps(sc, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")


def md5_of(path: pathlib.Path) -> str:
    h = hashlib.md5()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def main() -> int:
    ap = argparse.ArgumentParser(description="build artifacts → corpus_meta.json")
    ap.add_argument("--check", action="store_true", help="重算并与落盘 corpus_meta.json 比对")
    ap.add_argument("--ark-disasm", dest="ark_disasm", default=DEFAULT_DIS)
    args = ap.parse_args()
    if not pathlib.Path(args.ark_disasm).exists():
        print(f"ERROR: ark_disasm 不存在: {args.ark_disasm}")
        return 1

    apps: dict[str, pathlib.Path] = {}
    for v in VARIANTS:
        p = ROOT / "build" / "out" / f"ohosVulDetect-{v}-unsigned.app"
        if not p.exists():
            print(f"ERROR: 缺少产物 {p}（先跑 python3 build.py）")
            return 1
        apps[v] = p
    for t in TIERS:
        p = ROOT / "build" / "samples" / f"ohosVulDetect-sample-{t}.app"
        if not p.exists():
            print(f"ERROR: 缺少样本 {p}（先跑 python3 tools/build_samples.py 或全量 build.py）")
            return 1
        apps[f"sample-{t}"] = p

    variants: dict[str, dict] = {}
    for v in VARIANTS:
        print(f"== profile {apps[v].name}")
        variants[v] = profile_app(apps[v], args.ark_disasm, with_records=(v == "api26-release"))
        write_full_sidecar(apps[v], variants[v])
    tiers: dict[str, dict] = {}
    ref_md5 = md5_of(apps["api26-release"])
    for t in TIERS:
        p = apps[f"sample-{t}"]
        print(f"== profile {p.name}")
        if t == "heavy" and md5_of(p) == ref_md5:
            tiers[t] = copy.deepcopy(variants["api26-release"])
            tiers[t]["app_file"] = str(p.relative_to(ROOT))
            tiers[t]["same_build_as"] = "api26-release"
        else:
            tiers[t] = profile_app(p, args.ark_disasm, with_records=(t != "heavy"))
        write_full_sidecar(p, tiers[t])

    meta = {
        "schema_version": "1.0",
        "generator": "tools/gen_corpus_meta.py",
        "variants": variants,
        "sample_tiers": tiers,
        "module_tags": MODULE_TAGS,
        "usage": USAGE,
        "notes": NOTES,
    }
    text = json.dumps(meta, ensure_ascii=False, indent=1, sort_keys=True) + "\n"
    if args.check:
        if not OUT.exists():
            print(f"ERROR: {OUT} 不存在（先运行不带 --check 的生成命令）")
            return 1
        old = OUT.read_text()
        if old == text:
            print(f"OK: {OUT.name} 与构建产物一致")
            return 0
        import difflib
        diff = list(difflib.unified_diff(old.split("\n"), text.split("\n"), "committed", "regen", lineterm=""))
        print("\n".join(diff[:40]))
        print(f"FAIL: {OUT.name} 与构建产物漂移（{len(diff)} 行 diff；语料变化后先重新生成并提交）")
        return 1
    OUT.write_text(text)
    print(f"== 写出 {OUT}（{len(text)} 字节）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
