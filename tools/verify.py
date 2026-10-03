#!/usr/bin/env python3
"""单一验证入口：一条命令跑完构建后全部门禁（替代 AGENTS Mandatory 的逐条手跑）。

用法：
  python3 tools/verify.py            # 快门禁（并行，源码级，秒级）+ 重门禁（产物级，共享反汇编缓存）
  python3 tools/verify.py --fast     # 仅快门禁（改动迭代期）
退出码：任一 FAIL → 1（CI/脚本可直接消费）。
门禁集与 CI（gates.yml）同源：生成器确定性走 tools/check_determinism.py（CI 同款脚本）。
"""
import os
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# isa.yaml 位于私有工具链仓库，路径不落公开仓库——一律经 ISA_YAML 环境变量注入
ISA_YAML = os.environ.get("ISA_YAML", "")

FAST = [
    ("manifest 双向一致", ["python3", "groundtruth/check_manifest.py"]),
    ("孪生 FP 隔离", ["python3", "tools/check_twin_fp.py"]),
    ("bait FP 隔离", ["python3", "tools/check_bait_fp.py"]),
    ("keep 规则新鲜度", ["python3", "tools/check_keep_rules.py"]),
    ("函数锚点存活", ["python3", "tools/check_fn_anchors.py"]),
    ("页面注册一致", ["python3", "tools/sync_pages.py"]),
    ("评分器回归基线", ["python3", "tools/check_score_regression.py"]),
    ("信号双态存活（debug×release）", ["python3", "tools/check_signal_dual_state.py"]),
    ("组件/Kit/@ohos 覆盖对账", ["python3", "tools/check_corpus_coverage.py"]),
    ("组件内 API 对账", ["python3", "tools/check_component_api_coverage.py"]),
]
HEAVY = [
    ("生成器确定性（9 生成器重生成）", ["python3", "tools/check_determinism.py"]),
    ("语料画像一致性（--check 含重算）", ["python3", "tools/gen_corpus_meta.py", "--check"]),
    ("feat_heavy 份额门禁", ["python3", "tools/check_module_share.py"]),
    ("指令覆盖", ["python3", "tools/check_opcode_coverage.py", "--dump-dir", "compare_dis"]),
]


def run(name: str, cmd: list[str]) -> tuple[str, bool, float, str, str]:
    env = dict(os.environ)
    env["ISA_YAML"] = ISA_YAML
    t0 = time.time()
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, env=env)
    dt = time.time() - t0
    tail = (r.stdout or "").strip().splitlines()[-1:] or ["(no output)"]
    return name, r.returncode == 0, dt, tail[0][:100], ((r.stdout or "") + (r.stderr or ""))[-2000:]


def main() -> int:
    only_fast = "--fast" in sys.argv
    if not only_fast and not ISA_YAML:
        print("ERROR: 重门禁的指令覆盖需要 ISA_YAML 环境变量指向 isa.yaml"
              "（私有路径不入库；--fast 不需要）")
        return 1
    ok = True
    t0 = time.time()
    print("== verify: 快门禁（并行） ==")
    with ThreadPoolExecutor(max_workers=4) as ex:
        results = list(ex.map(lambda g: run(g[0], g[1]), FAST))
    for name, ok_i, dt, tail, full in results:
        print(f"[{'OK  ' if ok_i else 'FAIL'}] {name} ({dt:.1f}s) — {tail}")
        if not ok_i:
            ok = False
            print(full)
    if not only_fast:
        print("== verify: 重门禁（共享反汇编缓存） ==")
        for name, cmd in HEAVY:
            name, ok_i, dt, tail, full = run(name, cmd)
            print(f"[{'OK  ' if ok_i else 'FAIL'}] {name} ({dt:.1f}s) — {tail}")
            if not ok_i:
                ok = False
                print(full)
    print(f"\nresult: {'OK' if ok else 'FAIL'} (verify 总耗时 {time.time() - t0:.1f}s)")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
