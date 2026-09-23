#!/usr/bin/env python3
"""组件内 API 覆盖对账：解析 SDK component d.ts 中每个组件 Attribute 类的特有方法
（不含 CommonMethod 继承的通用方法），对账语料 .ets 中的 `.方法(` 调用出现次数。

口径：
  - 组件全集 = component_config.json（137）；
  - 声明源 = ets/component/*.d.ts 中 `declare class <X>Attribute`（蛇形文件名，
    组件名按 config 键反查；无声明的组件记 no-decl，结构性不可覆盖）；
  - 组件特有方法 = 该 Attribute class body 内 `name(...): *Attribute` 方法
    （至 class 结束或下一个 declare；CommonMethod 通用方法不在组件 d.ts 内，天然区分）；
  - 语料命中 = feat_*/entry/lib_* 源 .ets 中出现 `.name(`（跨页面任意位置）。

用法：python3 tools/check_component_api_coverage.py [--json out.json]
退出码恒 0（对账报告，不做失败门禁）；缺口清单用于指导语料扩展。
"""
import glob
import json
import os
import re
import sys
from collections import OrderedDict

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SDK = os.environ.get("DEVECO_SDK_HOME", "/Applications/DevEco-Studio.app/Contents/sdk")
COMPONENTS = OrderedDict()
CORPUS_MODULES = ["entry", "feat_api", "feat_vuln", "feat_heavy", "feat_compfarm", "lib_common", "lib_shared"]
SKIP_METHODS = {"constructor"}


def snake(name: str) -> str:
    out = re.sub(r"(?<=[a-z0-9])([A-Z])", r"_\1", name).lower()
    return out


def load_sdk_component_dir():
    ets = None
    for cand in sorted(glob.glob(os.path.join(SDK, "*", "openharmony", "ets"))):
        ets = cand
    cfg = os.path.join(ets, "component", "component_config.json")
    with open(cfg, encoding="utf-8") as fh:
        names = list(json.load(fh).keys())
    return ets, names


def parse_component_dts(dts_path: str, comp_name: str):
    """从 d.ts 提取 comp_name 组件的 Attribute 方法名集合（含事件/链式/静态调用形态）。"""
    text = open(dts_path, encoding="utf-8", errors="replace").read()
    methods = set()
    # Attribute class body：declare class XxxAttribute extends ... { ... }
    m = re.search(rf"declare class {comp_name}Attribute\b[^{{]*\{{", text)
    if not m:
        return None
    start = m.end()
    depth = 1
    i = start
    while i < len(text) and depth > 0:
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
        i += 1
    body = text[start:i - 1]
    for mm in re.finditer(r"^\s+([a-zA-Z_]\w*)\s*(?:<[^>]*>)?\s*\(", body, re.M):
        name = mm.group(1)
        if name not in SKIP_METHODS:
            methods.add(name)
    return methods


def main() -> int:
    ets, names = load_sdk_component_dir()
    comp_dir = os.path.join(ets, "component")

    # 语料全文（.ets）
    corpus = []
    for mod in CORPUS_MODULES:
        root = os.path.join(REPO, mod, "src", "main", "ets")
        for dirpath, _dirs, files in os.walk(root):
            for f in files:
                if f.endswith(".ets"):
                    corpus.append(os.path.join(dirpath, f))
    corpus_text = "\n".join(open(p, encoding="utf-8", errors="replace").read() for p in corpus)

    # 每组件：找 d.ts → 提取方法 → 对账
    rows = []
    tot_have = tot_all = 0
    no_decl = []
    dts_files = sorted(glob.glob(os.path.join(comp_dir, "*.d.ts")))
    for name in names:
        snake_name = snake(name)
        dts = None
        for cand in (os.path.join(comp_dir, snake_name + ".d.ts"),):
            if os.path.exists(cand):
                dts = cand
                break
        if dts is None:
            # 文件名不规整：内容反查（声明 class 与 config 名完全一致）
            for f in dts_files:
                if re.search(rf"declare class {name}Attribute\b", open(f, encoding="utf-8", errors="replace").read()):
                    dts = f
                    break
        if dts is None:
            no_decl.append(name)
            continue
        methods = parse_component_dts(dts, name)
        if methods is None:
            no_decl.append(name)
            continue
        if not methods:
            # Attribute 类为空：组件无链式特有 API，构造出现即覆盖
            covered = bool(re.search(rf"\b{name}\s*\(", corpus_text))
            if covered:
                rows.append((name, 1, 1, []))
                tot_have += 1
                tot_all += 1
            else:
                no_decl.append(name)
            continue
        have = sorted(m for m in methods if re.search(rf"\.{re.escape(m)}\s*\(", corpus_text))
        lack = sorted(m for m in methods if m not in have)
        tot_have += len(have)
        tot_all += len(methods)
        rows.append((name, len(have), len(methods), lack))

    rows.sort(key=lambda r: (-(r[1] / r[2] if r[2] else 1), r[0]))
    print(f"# SDK: {comp_dir}  组件 {len(names)}  no-decl {len(no_decl)}")
    print(f"# 组件特有 API: 语料已调用 {tot_have}/{tot_all}（{100.0 * tot_have / max(tot_all, 1):.1f}%）")
    print(f"# no-decl（结构性不可覆盖）: {', '.join(no_decl)}")
    print()
    print(f"{'component':30} {'have':>5} {'all':>5}  missing")
    for name, h, a, lack in rows:
        mark = "OK " if not lack else f"{h}/{a}"
        print(f"{name:30} {mark:>8}  {', '.join(lack[:12])}{' …' if len(lack) > 12 else ''}")

    if "--json" in sys.argv:
        out = sys.argv[sys.argv.index("--json") + 1]
        with open(out, "w", encoding="utf-8") as fh:
            json.dump({
                "no_decl": no_decl,
                "components": [
                    {"name": n, "have": h, "all": a, "missing": lack}
                    for n, h, a, lack in rows
                ],
            }, fh, ensure_ascii=False, indent=1)
        print(f"# JSON → {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
