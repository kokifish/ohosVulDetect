#!/usr/bin/env python3
"""单一验证入口：一条命令跑完构建后全部门禁（替代 AGENTS Mandatory 的逐条手跑）。

用法：
  python3 tools/verify.py            # 快门禁（源码级，秒级）+ 重门禁（产物级，~1-2min，共享反汇编缓存）
  python3 tools/verify.py --fast     # 仅快门禁（改动迭代期）
退出码：任一 FAIL → 1（CI/脚本可直接消费）。
"""
import os
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ISA_YAML = os.environ.get("ISA_YAML", os.path.expanduser("~/git_space/ohre_dev/ohre/abcre/dis/enum/isa.yaml"))

FAST = [
    ("manifest 双向一致", ["python3", "groundtruth/check_manifest.py"]),
    ("孪生 FP 隔离", ["python3", "tools/check_twin_fp.py"]),
    ("bait FP 隔离", ["python3", "tools/check_bait_fp.py"]),
    ("keep 规则新鲜度", ["python3", "tools/check_keep_rules.py"]),
    ("页面注册一致", ["python3", "tools/sync_pages.py"]),
    ("评分器回归基线", ["python3", "tools/check_score_regression.py"]),
    ("信号双态存活（debug×release）", ["python3", "tools/check_signal_dual_state.py"]),
    ("组件/Kit/@ohos 覆盖对账", ["python3", "tools/check_corpus_coverage.py"]),
    ("组件内 API 对账", ["python3", "tools/check_component_api_coverage.py"]),
]
HEAVY = [
    ("语料画像一致性（--check 含重算）", ["python3", "tools/gen_corpus_meta.py", "--check"]),
    ("feat_heavy 份额门禁", ["python3", "tools/check_module_share.py"]),
    ("指令覆盖", ["python3", "tools/check_opcode_coverage.py", "--dump-dir", "compare_dis"]),
]


def run(name: str, cmd: list[str]) -> bool:
    env = dict(os.environ)
    env["ISA_YAML"] = ISA_YAML
    t0 = time.time()
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, env=env)
    dt = time.time() - t0
    tail = (r.stdout or "").strip().splitlines()[-1:] or ["(no output)"]
    mark = "OK  " if r.returncode == 0 else "FAIL"
    print(f"[{mark}] {name} ({dt:.1f}s) — {tail[0][:100]}")
    if r.returncode != 0:
        print((r.stdout or "")[-1500:])
        print((r.stderr or "")[-500:])
    return r.returncode == 0


def main() -> int:
    only_fast = "--fast" in sys.argv
    ok = True
    print("== verify: 快门禁 ==")
    for name, cmd in FAST:
        ok = run(name, cmd) and ok
    if not only_fast:
        print("== verify: 重门禁（共享反汇编缓存） ==")
        for name, cmd in HEAVY:
            ok = run(name, cmd) and ok
    print(f"\nresult: {'OK' if ok else 'FAIL'}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
