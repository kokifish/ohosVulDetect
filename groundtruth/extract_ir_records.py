#!/usr/bin/env python3
"""把 test.out 按 record 切分为独立文件，供源码-IR 逐函数比对使用。

用法：python3 extract_ir_records.py <test.out> <outdir>
输出：<outdir>/<record名>.ir（record 内全部方法的完整 IR 文本）
"""
import pathlib
import re
import sys


def main() -> int:
    test_out, outdir = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
    outdir.mkdir(parents=True, exist_ok=True)
    txt = test_out.read_text(errors="ignore")
    pat = re.compile(r"^AsmMethod: \d+ (\S+)", re.M)
    ms = list(pat.finditer(txt))
    rec_files = {}
    for i, m in enumerate(ms):
        sig = m.group(1)
        rec = sig.split("#")[0].strip("&.").replace("&", "_")
        body = txt[m.start(): ms[i + 1].start() if i + 1 < len(ms) else len(txt)]
        rec_files.setdefault(rec, []).append(body)
    for rec, bodies in rec_files.items():
        safe = re.sub(r"[^A-Za-z0-9_.-]", "_", rec)[-120:]
        (outdir / f"{safe}.ir").write_text("\n".join(bodies), encoding="utf-8")
    print(f"records: {len(rec_files)} -> {outdir}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
