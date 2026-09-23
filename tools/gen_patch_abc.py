#!/usr/bin/env python3
"""patch abc 语料生成器：把「es2abc 不发射、但真实野生产物存在、工具必须支持」的指令
（裸 isfalse/istrue、比较跳转族、ldthis 族、wide.ldpatchvar 等）以二进制改写方式注入
一个可被 ark_disasm 正常解析的 abc，落盘 feat_vuln rawfile，成为逆向工具鲁棒性样本。

原理（三项实测前提）：
  - ark_disasm 不校验 abc 校验和、容忍任意字节改写（改写后可正常反汇编）；
  - isa.yaml 的 opcode_idx / prefixes / last_*_prefixed_opcode_idx 即完整字节编码
    （非前缀指令字节 = opcode_idx；前缀指令 = prefix_idx<<8 | base_opcode_idx），
    本脚本直接解析 ISA_YAML 自算编码，无手工字节表；
  - 命中判据 = 反汇编中目标助记符计数增加（改写会破坏后续指令流，样本运行期不执行）。

产物为二进制语料，探针源码内嵌于本文件；依赖本地 SDK 工具链（同 gen_rawfile_abc 先例），
不进 CI。用法：python3 tools/gen_patch_abc.py [--out <abc 路径>]
"""
import argparse
import os
import pathlib
import re
import subprocess
import tempfile
from collections import Counter
from multiprocessing import Pool

ROOT = pathlib.Path(__file__).resolve().parent.parent
ES2ABC = os.environ.get(
    "ES2ABC",
    "/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/"
    "ets/build-tools/ets-loader/bin/ark/build-mac/bin/es2abc")
DIS = os.environ.get("ARK_DISASM",
                     "/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony"
                     "/toolchains/ark_disasm")
ISA_YAML = os.environ.get("ISA_YAML")
OUT = ROOT / "feat_vuln" / "src" / "main" / "resources" / "rawfile" / "patch_cooked_001.abc"

TARGETS = [
    "isfalse", "istrue", "definefieldbyname",
    "jeq", "jeqnull", "jequndefined", "jne", "jnenull", "jneundefined",
    "jnstricteq", "jnstricteqnull", "jnstrictequndefined", "jnstricteqz",
    "jstricteq", "jstricteqnull", "jstrictequndefined", "jstricteqz",
    "ldfunction", "ldnewtarget", "ldobjbyindex", "ldsymbol",
    "ldthis", "ldthisbyname", "ldthisbyvalue",
    "stobjbyindex", "stthisbyname", "stthisbyvalue",
    "closeiterator", "createregexpwithliteral",
    "wide.ldpatchvar", "wide.stpatchvar",
    "throw.deletesuperproperty", "throw.undefinedifholewithname",
]

MNEM_RE = re.compile(r"^\t([a-z][a-z0-9._]*)", re.M)

PROBE_JS = """
function branchy(a, b) {
  let r = 0;
  if (a === b) { r = 1; } else if (a == b) { r = 2; } else { r = 3; }
  switch (a) { case 1: r += 10; break; case 2: r += 20; break; default: r += 30; }
  const re = /ab+c/g;
  const s = 'x'.replace(re, '-');
  try { r += JSON.parse('{"k":7}').k; } catch (e) { r -= 1; }
  const o = { p: r };
  delete o.p;
  return r + s.length + o.p;
}
function withthis(a) { this.x = a; return this.x + 1; }
function manylocals(seed) {
  let v000 = seed, v001 = seed, v002 = seed, v003 = seed, v004 = seed, v005 = seed;
  let v006 = seed, v007 = seed, v008 = seed, v009 = seed, v010 = seed, v011 = seed;
  let v012 = seed, v013 = seed, v014 = seed, v015 = seed, v016 = seed, v017 = seed;
  let v018 = seed, v019 = seed, v020 = seed, v021 = seed, v022 = seed, v023 = seed;
  let v024 = seed, v025 = seed, v026 = seed, v027 = seed, v028 = seed, v029 = seed;
  let v030 = seed, v031 = seed, v032 = seed, v033 = seed, v034 = seed, v035 = seed;
  let v036 = seed, v037 = seed, v038 = seed, v039 = seed, v040 = seed, v041 = seed;
  let v042 = seed, v043 = seed, v044 = seed, v045 = seed, v046 = seed, v047 = seed;
  let v048 = seed, v049 = seed, v050 = seed, v051 = seed, v052 = seed, v053 = seed;
  let v054 = seed, v055 = seed, v056 = seed, v057 = seed, v058 = seed, v059 = seed;
  let v060 = seed, v061 = seed, v062 = seed, v063 = seed, v064 = seed, v065 = seed;
  let v066 = seed, v067 = seed, v068 = seed, v069 = seed, v070 = seed, v071 = seed;
  let v072 = seed, v073 = seed, v074 = seed, v075 = seed, v076 = seed, v077 = seed;
  let v078 = seed, v079 = seed, v080 = seed, v081 = seed, v082 = seed, v083 = seed;
  let v084 = seed, v085 = seed, v086 = seed, v087 = seed, v088 = seed, v089 = seed;
  let v090 = seed, v091 = seed, v092 = seed, v093 = seed, v094 = seed, v095 = seed;
  let v096 = seed, v097 = seed, v098 = seed, v099 = seed, v100 = seed, v101 = seed;
  let v102 = seed, v103 = seed, v104 = seed, v105 = seed, v106 = seed, v107 = seed;
  let v108 = seed, v109 = seed, v110 = seed, v111 = seed, v112 = seed, v113 = seed;
  let v114 = seed, v115 = seed, v116 = seed, v117 = seed, v118 = seed, v119 = seed;
  let v120 = seed, v121 = seed, v122 = seed, v123 = seed, v124 = seed, v125 = seed;
  let v126 = seed, v127 = seed, v128 = seed, v129 = seed;
  const obj = { a0: v000, a1: v001, a2: v002, a3: v003, a4: v004 };
  obj.a0 = v129; v000 = obj.a0;
  const arr = [v000, v001, v002, v003];
  arr[1] = v004;
  const re2 = /z*/;
  return v000 + v001 + v126 + v127 + v128 + v129 + obj.a0 + arr[1] + re2.source.length +
    v002 + v003 + v004 + v050 + v100;
}
branchy(3, 5);
manylocals(9);
withthis(1);
"""


def load_opcode_map(isa_path: str) -> dict[str, bytes]:
    """sig → 编码字节。非前缀 = opcode_idx(u8)；前缀 = prefix_idx<<8 | base_idx。
    前缀形态仅当 base_idx ≤ last_<prefix>_prefixed_opcode_idx 时可编码。"""
    import yaml
    d = yaml.safe_load(open(isa_path, encoding="utf-8"))
    prefixes = {p["name"]: int(p["opcode_idx"]) for p in d["prefixes"]}
    info = (d.get("isa_information") or [{}])[0]
    base_idx: dict[str, int] = {}
    for g in d.get("groups", []):
        for ins in g.get("instructions", []):
            sig = ins["sig"].split(" ")[0].strip()
            idx = ins["opcode_idx"]
            idx = idx[0] if isinstance(idx, list) else idx
            base_idx.setdefault(sig, int(idx))
    out: dict[str, bytes] = {}
    for sig, idx in base_idx.items():
        if "." not in sig:
            out[sig] = bytes([idx])
    for pre, pidx in prefixes.items():
        last = info.get(f"last_{pre}_prefixed_opcode_idx")
        for sig, idx in base_idx.items():
            composed = f"{pre}.{sig}"
            if "." not in sig:
                # 组合形态：base_idx ≤ last_*_prefixed 才可编码
                if last is not None and idx <= int(last):
                    out[composed] = bytes([pidx, idx])
            elif sig == composed[len(pre) + 1:]:
                # yaml 直接定义的完整带点 sig：opcode_idx 即前缀后低位字节
                out.setdefault(composed, bytes([pidx, idx]))
    return out


_CTX: dict = {}


def _init_worker(dis_path: str) -> None:
    # spawn 启动模式下 worker 进程不含父进程全局状态，用 initializer 注入
    _CTX["dis"] = dis_path


def _dis_buf(buf: bytes, td: pathlib.Path) -> Counter:
    tag = os.getpid()
    tmp = td / f"it.{tag}.abc"
    outd = td / f"d.{tag}.dis"
    tmp.write_bytes(buf)
    try:
        r = subprocess.run([_CTX["dis"], str(tmp), str(outd)],
                           capture_output=True, text=True, timeout=6.0)
    except subprocess.TimeoutExpired:
        return Counter()
    if r.returncode != 0 or outd.stat().st_size > 5_000_000:
        return Counter()
    return Counter(m.group(1) for m in MNEM_RE.finditer(outd.read_text(errors="ignore")))


def _probe_cell(task):
    """在位置 p 写入目标字节，返回 (p, 目标名, 是否命中)。"""
    p, target, opbytes, base_bytes, base_counts, td = task
    buf = bytearray(base_bytes)
    for i, b in enumerate(opbytes):
        buf[p + i] = b
    if bytes(buf) == base_bytes:
        return (p, target, False)
    c = _dis_buf(bytes(buf), td)
    hit = c.get(target, 0) > base_counts.get(target, 0)
    return (p, target, hit)


def main() -> int:
    ap = argparse.ArgumentParser(description="craft unreachable-opcode abc corpus")
    ap.add_argument("--es2abc", default=ES2ABC)
    ap.add_argument("--ark-disasm", dest="dis", default=DIS)
    ap.add_argument("--isa-yaml", dest="isa_yaml", default=ISA_YAML)
    ap.add_argument("--out", default=str(OUT))
    args = ap.parse_args()
    if not args.isa_yaml or not pathlib.Path(args.isa_yaml).exists():
        print("ERROR: 需 ISA_YAML 环境变量或 --isa-yaml 指向 isa.yaml")
        return 1
    if not (pathlib.Path(args.es2abc).exists() and pathlib.Path(args.dis).exists()):
        print("ERROR: es2abc / ark_disasm 路径不存在")
        return 1
    _CTX["dis"] = args.dis  # 主进程自身的反汇编调用；worker 经 initializer 注入
    opmap = load_opcode_map(args.isa_yaml)
    targets = [(t, opmap[t]) for t in TARGETS if t in opmap]
    dropped = [t for t in TARGETS if t not in opmap]
    if dropped:
        print(f"无编码目标（跳过）: {' '.join(dropped)}")

    with tempfile.TemporaryDirectory() as td_name:
        td = pathlib.Path(td_name)
        src = td / "probe.js"
        src.write_text(PROBE_JS)
        base = td / "probe.abc"
        r = subprocess.run([args.es2abc, str(src), "--output", str(base)], capture_output=True)
        if r.returncode != 0:
            print("ERROR: es2abc 编译失败")
            return 1
        data0 = bytes(base.read_bytes())
        base_counts = _dis_buf(data0, td)

        # 候选位置：活跃字节（改后反汇编文本变化 ⇒ 处于被解析的代码/元数据区）
        active = []
        for p in range(0x40, len(data0)):
            buf = bytearray(data0)
            buf[p] = (buf[p] + 1) % 256
            if _dis_buf(bytes(buf), td) != base_counts:
                active.append(p)
        print(f"活跃字节: {len(active)} / {len(data0) - 0x40}")

        # 每个目标遍历全部活跃位直至命中（前段活跃位多为元数据，非代码区）
        tasks = [(p, t, opbytes, data0, base_counts, td)
                 for t, opbytes in targets for p in active]
        print(f"试探组合: {len(tasks)}")
        with Pool(8, initializer=_init_worker, initargs=(args.dis,)) as pool:
            results = pool.map(_probe_cell, tasks, chunksize=16)

        # 每目标独立 abc：多目标写同一指令流会相互去同步，独立文件各自终验
        first_hit: dict[str, int] = {}
        for p, t, hit in results:
            if hit and t not in first_hit:
                first_hit[t] = p
        out = pathlib.Path(args.out)
        out.parent.mkdir(parents=True, exist_ok=True)
        for stale in out.parent.glob("patch_cooked_*.abc"):
            stale.unlink()
        good: list[str] = []
        miss: list[str] = []
        for i, (t, opbytes) in enumerate(sorted(targets)):
            p = first_hit.get(t)
            if p is None:
                miss.append(t)
                continue
            buf = bytearray(data0)
            for j, b in enumerate(opbytes):
                buf[p + j] = b
            counts = _dis_buf(bytes(buf), td)
            if counts.get(t, 0) > base_counts.get(t, 0):
                fp = out.parent / f"patch_cooked_{i:03d}.abc"
                fp.write_bytes(bytes(buf))
                good.append(t)
            else:
                miss.append(t)
        print(f"落地 {len(good)}/{len(targets)}: {' '.join(good)}")
        if miss:
            print(f"未命中: {' '.join(miss)}")
        if len(good) < 5:
            print("ERROR: 命中过少，产物不落盘")
            return 1
        print(f"产物目录: {out.parent}（patch_cooked_*.abc × {len(good)}）")
        return 0


if __name__ == "__main__":
    raise SystemExit(main())
