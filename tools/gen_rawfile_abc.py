#!/usr/bin/env python3
"""rawfile abc 语料生成器：es2abc(script 模式) 编译 tools/rawfile_src/bench_script.js
→ feat_vuln/src/main/resources/rawfile/bench_script.abc。

该 abc 是「包内非 ets 目录的独立 abc」语料形态：不进任何 modules.abc，
运行期由 feat_vuln cpp 侧 napi_run_script_path 执行（仅接受 rawfile 路径，
自动拼 /data/storage/el1/bundle/ 前缀，每次执行新建独立 JS 上下文）。

产物 abc 为二进制语料，与源 .js 一同提交；改源后须重跑本生成器（工具链升级后同样）。

用法：python3 tools/gen_rawfile_abc.py [--es2abc <es2abc 路径>]
"""
import argparse
import os
import pathlib
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
ES2ABC = os.environ.get(
    "ES2ABC",
    "/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/"
    "ets/build-tools/ets-loader/bin/ark/build-mac/bin/es2abc",
)
SRC = ROOT / "tools" / "rawfile_src" / "bench_script.js"
OUT = ROOT / "feat_vuln" / "src" / "main" / "resources" / "rawfile" / "bench_script.abc"


def main() -> int:
    ap = argparse.ArgumentParser(description="build rawfile abc corpus")
    ap.add_argument("--es2abc", default=ES2ABC)
    args = ap.parse_args()
    if not pathlib.Path(args.es2abc).exists():
        print(f"ERROR: es2abc 不存在: {args.es2abc}（可用 --es2abc 或环境变量 ES2ABC 覆盖）")
        return 1
    OUT.parent.mkdir(parents=True, exist_ok=True)
    cmd = [args.es2abc, str(SRC), "--output", str(OUT)]
    print(f"+ {' '.join(cmd)}")
    r = subprocess.run(cmd)
    if r.returncode != 0:
        return 1
    print(f"OK: {OUT} ({OUT.stat().st_size} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
