#!/usr/bin/env python3
"""生成器确定性门禁：全部纯源码生成器原地重生成，对比跑前/跑后输出快照。

语义：生成器对当前源（manifest/SDK 清单等）而言必须幂等——跑一遍后若输出文件
发生变化，说明提交态输出已过期（源变了没重生成），FAIL 并提示随改动一并提交。
快照对比而非 git diff：本地脏树（开发者对输出文件的未提交手改）不产生误报，
CI（干净树）下与"git diff --exit-code"语义等价。verify.py 与 CI（gates.yml）
共用本脚本（单源）。

gen_rawfile_abc / gen_patch_abc 依赖本地 SDK 工具链（es2abc / ark_disasm），
不在此列（同 CI 约定）。
退出码：任一生成器运行失败或输出漂移 → 1。
"""
import hashlib
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
GENERATORS = [
    "tools/gen_string_stress.py",
    "tools/gen_lexwide_stress.py",
    "tools/gen_sendable_stress.py",
    "tools/gen_wide_stress.py",
    "tools/gen_stown_stress.py",
    "tools/gen_methname_stress.py",
    "tools/gen_recursion_stress.py",
    "tools/gen_vulns_overview.py",
    "tools/gen_heavy_farm.py",
]
# 生成器可能写入的输出范围（模块源码 + VULNS.md），只对这些 tracked 文件做快照
SCAN_DIRS = ["feat_api/src", "feat_heavy/src", "feat_vuln/src", "entry/src",
             "feat_compfarm/src", "lib_common/src", "lib_shared/src", "docs/VULNS.md"]


def snapshot() -> dict[str, str]:
    ls = subprocess.run(["git", "ls-files", "--"] + SCAN_DIRS, cwd=ROOT,
                        capture_output=True, text=True).stdout.split()
    out: dict[str, str] = {}
    for f in ls:
        p = ROOT / f
        if p.exists():
            out[f] = hashlib.sha256(p.read_bytes()).hexdigest()
    return out


def main() -> int:
    before = snapshot()
    dirty = subprocess.run(["git", "status", "--porcelain", "--"] + SCAN_DIRS, cwd=ROOT,
                           capture_output=True, text=True).stdout.strip()
    if dirty:
        print("WARN: 生成输出路径存在未提交改动——确定性重生成会覆盖手改（生成物约定勿手改）")
    for gen in GENERATORS:
        r = subprocess.run([sys.executable, gen], cwd=ROOT, capture_output=True, text=True)
        if r.returncode != 0:
            print(f"FAIL: {gen} 运行失败")
            print((r.stdout or "")[-400:])
            print((r.stderr or "")[-300:])
            return 1
    after = snapshot()
    changed = sorted(f for f in set(before) | set(after) if before.get(f) != after.get(f))
    if changed:
        print(f"FAIL: 生成器输出与提交态漂移 {len(changed)} 个文件（已就地重生成，随本轮改动一并提交）:")
        for f in changed[:12]:
            print(f"  {f}")
        return 1
    print(f"OK: {len(GENERATORS)} 生成器重生成无漂移")
    return 0


if __name__ == "__main__":
    sys.exit(main())
