#!/usr/bin/env python3
"""组件 API 农场生成器：解析 SDK component d.ts，为每个组件生成「缺失特有方法」的
链式调用语料页（feat_api/src/main/ets/ui_farm/），配合 tools/check_component_api_coverage.py
把组件内 API 覆盖从按需demo提升到逐方法对账补齐。

生成策略（保守，保证可编译优先）：
  - 只生成对账报表中「缺失」的特有方法（通用 CommonMethod 方法不在组件 d.ts 内）；
  - 参数默认值按首参类型文本映射：enum『X.Y』原样 / boolean→true / number→1 /
    string·ResourceStr·ResourceColor→'ovd' / Color→Color.Red；union 取第一段可映射者；
  - 回调/CustomBuilder/复杂 interface 参数的方法跳过，计入「未生成」清单；
  - 每组件一个 @Builder 函数（组件实例 + 缺失方法链），入口页 api-compfarm 按钮选择性
    渲染；生成物勿手改，改本生成器后重新生成。

用法：python3 tools/gen_component_api_farm.py
"""
import glob
import json
import os
import pathlib
import re
import sys
from collections import OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SDK = os.environ.get("DEVECO_SDK_HOME", "/Applications/DevEco-Studio.app/Contents/sdk")
COMPONENTS = OrderedDict()
CORPUS_MODULES = ["entry", "feat_api", "feat_vuln", "feat_heavy", "feat_compfarm", "lib_common", "lib_shared"]
OUT_DIR = os.path.join(ROOT, "feat_compfarm", "src", "main", "ets", "ui_farm")
COMPONENTS_PER_FILE = 2
SKIP_METHODS = {"constructor"}
# 特殊宿主组件（attribute 语义非通用链式），不进农场

# 方法级排除（编译报错的方法，由 auto-iter 累积）：key = "组件.方法"
EXCLUDE_METHODS = set([("Component3D", "customRender"), ("Counter", "customRender"), ("EmbeddedComponent", "onDrawReady"), ("ResourceColor", "Color"), ("Shape", "mesh"), ("SideBarContainer", "mesh"), ("Tabs", "cachedMaxCount"), ("Text", "cachedMaxCount"), ("Text", "selection"), ("TextPicker", "selection"), ("XComponent", "customRender")])
# 曾全组件排除的 0 覆盖组件（Component3D/Counter/FolderStack/GridCol/StepperItem）
# 已放回农场（2026-09 缺口专项）；编译报错方法由 auto-iter 继续累积进 EXCLUDE_METHODS。
# Particle 构造需要复杂 ParticleOptions（emitter 必填嵌套），生成器无法保守映射，维持排除。
EXCLUDE_COMPONENTS = {"AlphabetIndexer", "CalendarPicker", "Canvas", "CheckboxGroup", "DataPanel", "DatePicker", "Divider", "Gauge", "GridItem", "Image", "ListItem", "Navigator", "Panel", "Particle", "PatternLock", "Progress", "QRCode", "Repeat", "SaveButton", "Span"}
# 宿主约束组件：只能嵌在特定父组件内（GridCol→GridRow / StepperItem→Stepper /
# ImageSpan→Text / TabContent→Tabs），生成时包一层
HOST_OF = {"GridCol": "GridRow", "StepperItem": "Stepper", "ImageSpan": "Text", "TabContent": "Tabs"}
# 必参构造提示（ctor_args 解析不出但 SDK 有必填参数）
CTOR_HINTS = {"ImageSpan": "$r('app.media.startIcon')"}


def snake(name: str):
    return re.sub(r"(?<=[a-z0-9])([A-Z])", r"_\1", name).lower()


def load_component_texts():
    ets = None
    for cand in sorted(glob.glob(os.path.join(SDK, "*", "openharmony", "ets"))):
        ets = cand
    cfg = os.path.join(ets, "component", "component_config.json")
    names = list(json.load(open(cfg, encoding="utf-8")).keys())
    comp_dir = os.path.join(ets, "component")
    texts = {}
    for f in sorted(glob.glob(os.path.join(comp_dir, "*.d.ts"))):
        texts[os.path.basename(f)] = open(f, encoding="utf-8", errors="replace").read()
    return comp_dir, names, texts


def find_dts(name, texts):
    sn = snake(name)
    if sn + ".d.ts" in texts:
        return sn + ".d.ts"
    for fn, tx in texts.items():
        if re.search(rf"declare class {name}Attribute\b", tx):
            return fn
    return None


def class_body(text, cls):
    m = re.search(rf"declare class {cls}\b[^{{]*\{{", text)
    if not m:
        return None
    i = m.end()
    depth = 1
    while i < len(text) and depth > 0:
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
        i += 1
    return text[m.end():i - 1]


def methods_with_sig(text, comp):
    """返回 {方法名: [各重载的首参类型文本]}（Attribute 类体内）。"""
    body = class_body(text, comp + "Attribute")
    if body is None:
        return None
    out = {}
    for mm in re.finditer(r"^\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:", body, re.M):
        name = mm.group(1)
        if name in SKIP_METHODS:
            continue
        args = mm.group(2).strip()
        first = args.split(",")[0].split(":")[-1].strip() if args else ""
        out.setdefault(name, []).append(first)
    return out


def interface_optional(text, comp):
    """组件 Interface call-signature 的参数是否可选（value?: ...）。"""
    m = re.search(rf"interface {comp}Interface\s*[^{{]*\{{", text)
    if not m:
        return True
    body = text[m.end():m.end() + 400]
    mm = re.search(r"\((value|options|\w+)(\?)?\s*:\s*([^)]*)\)\s*:", body)
    if not mm:
        return True
    return mm.group(2) == "?"


def interface_required_fields(text, iface_name, depth=0):
    """解析 interface { name: Type; ... } 的必填字段 → [(name, 默认值)]；解析不了返回 None。"""
    if depth > 2:
        return None
    m = re.search(rf"interface {iface_name}\b[^{{]*\{{", text)
    if not m:
        return None
    i = m.end()
    depth_n = 1
    while i < len(text) and depth_n > 0:
        if text[i] == "{":
            depth_n += 1
        elif text[i] == "}":
            depth_n -= 1
        i += 1
    body = text[m.end():i - 1]
    fields = []
    for fm in re.finditer(r"^\s+([a-zA-Z_]\w*)(\?)?\s*:\s*([^;\n]+)[;\n]", body, re.M):
        fname, opt, ftype = fm.group(1), fm.group(2), fm.group(3).strip()
        if opt:
            continue
        if re.fullmatch(r"[A-Z][A-Za-z0-9]*", ftype.strip()):
            # 嵌套 interface → 递归生成内联对象
            inner_fields = interface_required_fields(text, ftype.strip(), depth + 1)
            if inner_fields is not None:
                inner = ", ".join(f"{k}: {val}" for k, val in inner_fields)
                fields.append((fname, "{ " + inner + " }"))
                continue
            v = default_for(ftype, text)
            if v is None:
                return None
            fields.append((fname, v))
        else:
            v = default_for(ftype, text)
            if v is None:
                return None
            fields.append((fname, v))
    return fields


def ctor_args(text, comp):
    """组件构造实参文本（不含括号）；无需参数返回 ''；无法生成返回 None。
    以「返回 XAttribute 的 call signature」锚定（interface 内可能混有其他成员）。"""
    m = re.search(rf"interface {comp}Interface\s*[^{{]*\{{", text)
    if not m:
        return None  # 组件 Interface 未声明（无法确定构造签名），跳过组件
    body = text[m.end():m.end() + 600]
    mm = re.search(r"\(([^)]*)\)\s*:\s*" + comp + r"Attribute\s*;", body)
    if not mm:
        return ""
    args = mm.group(1).strip()
    if not args:
        return ""
    optional = "?" in args.split(":")[0] if ":" in args else False
    arg_type = args.split(":")[-1].strip()
    if optional:
        return ""
    if re.fullmatch(r"[A-Z][A-Za-z0-9]*", arg_type):
        fields = interface_required_fields(text, arg_type)
        if fields is None:
            return None
        inner = ", ".join(f"{k}: {v}" for k, v in fields)
        return "{ " + inner + " }"
    d = default_for(arg_type)
    return d if d is not None else None


def default_for(type_text: str, dts_text: str | None = None):
    """类型文本 → 生成的实参；None = 跳过。dts_text 用于解析 interface 必填字段。"""
    t = (type_text or "").strip()
    if not t:
        return None  # 空类型文本=签名解析失败，宁可跳过
    m = re.fullmatch(r"Optional<(.+)>", t)
    if m:
        return default_for(m.group(1), dts_text)  # Optional<T> 解包（如 ScrollBar.enableNestedScroll）
    for part in [x.strip() for x in t.split("|")]:
        if re.fullmatch(r"[A-Z][A-Za-z0-9]*\.[A-Z][A-Za-z0-9]*", part):
            return part  # 全局枚举成员 X.Y
        if part == "boolean":
            return "true"
        if part in ("number", "Length", "ResourceNumber"):
            return "1"
        if part in ("string", "ResourceStr", "String"):
            return "'ovd'"
        if part in ("ResourceColor", "Color"):
            return "Color.Red"
        if part == "Resource":
            return "$r('app.media.startIcon')"
        if part.startswith("Array<") or part.endswith("[]"):
            return "[]"
        if part == "VoidCallback" or "=>" in part:
            return "(): void => {}"  # 无参空实现：实参可少于签名形参（TS 可赋值性）
        if part.startswith("Callback<") and part.endswith(">"):
            return f"(v: {part[len('Callback<'):-1]}): void => {{}}"
        if "Callback" in part:
            return None  # 其余未知 Callback 形态跳过
    # 单一大写名：全局枚举取首成员（100% 可编译）；TYPE_HINTS 为无 declare enum 的
    # 全局常量对象成员；interface 对象字面量的类型匹配不可靠（多轮编译实测连锁失败），跳过
    if re.fullmatch(r"[A-Z][A-Za-z0-9]*", t):
        if t in TYPE_HINTS:
            return TYPE_HINTS[t]
        if dts_text is not None:
            m = re.search(rf"declare enum {t}\b[^{{]*\{{\s*([A-Z_0-9a-z]+)\s*=\s*", dts_text)
            if m:
                return f"{t}.{m.group(1)}"
        return None
    return None


# 无 declare enum 的全局常量类型 → 可验证成员；猜错由编译 auto-iter 排除兜底
TYPE_HINTS = {"Alignment": "Alignment.Center"}


def main() -> int:
    comp_dir, names, texts = load_component_texts()

    corpus = []
    for mod in ["entry", "feat_api", "feat_vuln", "feat_heavy", "lib_common", "lib_shared"]:
        root = os.path.join(ROOT, mod, "src", "main", "ets")
        for dirpath, _d, files in os.walk(root):
            # 生成物不算既有覆盖（否则生成器不幂等：二次运行会自我清零）
            if os.path.abspath(dirpath).startswith(os.path.abspath(OUT_DIR)):
                continue
            for f in files:
                if f.endswith(".ets"):
                    corpus.append(os.path.join(dirpath, f))
    corpus_text = "\n".join(open(x, encoding="utf-8", errors="replace").read() for x in corpus)

    farms = []          # (组件, [(方法, 实参)])
    skipped_all = []
    farm_comps = []
    for name in names:
        fn = find_dts(name, texts)
        if fn is None:
            continue
        text = texts[fn]
        if not re.search(rf"declare class {name}Attribute\b", text):
            continue
        if name in EXCLUDE_COMPONENTS:
            continue
        msig = methods_with_sig(text, name)
        if msig is None:
            continue
        if not re.search(rf"\b{name}\s*\(", corpus_text) and not re.search(rf"\.{name.lower()}\(", corpus_text):
            # 组件本体未覆盖的不在本次补齐范围（那些是结构缺失，另一维度）
            pass
        missing = []
        for mname, ttypes in sorted(msig.items()):
            if re.search(rf"\.{re.escape(mname)}\s*\(", corpus_text):
                continue
            if (name, mname) in EXCLUDE_METHODS:
                continue
            dflt = None
            for ttype in ttypes:
                dflt = default_for(ttype, text)
                if dflt is not None:
                    break
            if dflt is None:
                skipped_all.append(f"{name}.{mname}")
                continue
            missing.append((mname, dflt))
        if not missing:
            continue
        ctor = ctor_args(text, name)
        if ctor is None:
            skipped_all.append(f"{name}.<ctor>")
            continue
        if not (ctor or "").strip() and name in CTOR_HINTS:
            ctor = CTOR_HINTS[name]
        farms.append((name, missing, ctor))
        farm_comps.append(name)

    print(f"DEBUG: farms={len(farms)} comps={len(farm_comps)}", flush=True)
    if not farm_comps:
        print("无缺失可生成（仅同步入口页）")
        write_entry_page()
        return 0

    # 生成文件：每 COMPONENTS_PER_FILE 组件一个 .ets
    os.makedirs(OUT_DIR, exist_ok=True)
    for stale in glob.glob(os.path.join(OUT_DIR, "Farm_*.ets")):
        os.remove(stale)
    made = 0
    for fi in range(0, len(farms), COMPONENTS_PER_FILE):
        group = farms[fi:fi + COMPONENTS_PER_FILE]
        lines = [f"// Farm_{fi // COMPONENTS_PER_FILE:02d}.ets — 组件 API 缺口补齐语料（生成，勿手改）", ""]
        for name, calls, ctor in group:
            host = HOST_OF.get(name)
            lines.append("@Component")
            lines.append(f"export struct Farm{name}Comp {{")
            lines.append("  build() {")
            lines.append(f"    Column() {{")
            if host:
                lines.append(f"      {host}() {{")
                lines.append(f"        {name}({ctor})")
                chain_indent = "          "
            else:
                lines.append(f"      {name}({ctor})")
                chain_indent = "        "
            for mname, dflt in calls:
                if dflt:
                    lines.append(f"{chain_indent}.{mname}({dflt})")
                else:
                    lines.append(f"{chain_indent}.{mname}()")
            if host:
                lines.append("      }")
            lines.append("    }")
            lines.append("  }")
            lines.append("}")
            lines.append("")
        made += 1
        (pathlib.Path(OUT_DIR) / f"Farm_{fi // COMPONENTS_PER_FILE:02d}.ets").write_text(
            "\n".join(lines) + "\n", encoding="utf-8")

    write_entry_page()
    n_calls = sum(len(c) for _, c, _ct in farms)
    print(f"gen_component_api_farm: files={made} comps={len(farms)} calls={n_calls} "
          f"skipped={len(skipped_all)}")
    if skipped_all:
        print(f"  skipped(参数复杂): {' '.join(skipped_all[:20])}{' …' if len(skipped_all) > 20 else ''}")
    return 0




def write_entry_page() -> None:
    """入口页与生成物同步：读 Farm_*.ets 的 struct 名生成 if-链 + 组合调用分支。
    ComboFarms.ets 同步重建（跨组件组合调用语料：农场 struct 嵌入 Column/Row/Stack 容器）。"""
    farm_dir = pathlib.Path(OUT_DIR)
    farm_dir.mkdir(parents=True, exist_ok=True)
    byfile: dict[str, list[str]] = {}
    for f in sorted(farm_dir.glob("Farm_*.ets")):
        ns = re.findall(r"export struct (Farm\w+Comp)", f.read_text(encoding="utf-8"))
        if ns:
            byfile[f.stem] = ns
    flat = [n for ns in byfile.values() for n in ns]
    # 重建 ComboFarms（组合调用）：前 12 个 struct 分 3 组嵌入容器
    picks = flat[:12]
    groups = [picks[i:i + 4] for i in range(0, len(picks), 4)]
    containers = ["Column", "Row", "Stack"]
    # struct→所在文件 反查（ArkTS 跨文件自定义组件必须显式 import）
    name_file = {}
    for bn, ns in byfile.items():
        for n in ns:
            name_file[n] = bn
    combo_imports = []
    for group in groups:
        for name in group:
            combo_imports.append(f"import {{ {name} }} from './{name_file[name]}';")
    combo_imports = sorted(set(combo_imports))
    combo_lines = ["// ComboFarms.ets — 跨组件组合调用语料（生成，勿手改）：农场组件嵌入组合容器。", ""]
    combo_lines += combo_imports
    combo_lines.append("")
    for ci, (cont, group) in enumerate(zip(containers, groups), 1):
        combo_lines.append("@Builder")
        combo_lines.append(f"export function farmCombo{ci}() {{")
        cont_arg = "{ space: 6 }" if cont != "Stack" else "{ alignContent: Alignment.Center }"
        combo_lines.append(f"  {cont}({cont_arg}) {{")
        combo_lines.append("    Text('combo layer').fontSize(12)")
        for name in group:
            combo_lines.append(f"    {name}()")
        combo_lines.append("  }")
        combo_lines.append("  .padding(8)")
        combo_lines.append("  }")
        combo_lines.append("")
    (farm_dir / "ComboFarms.ets").write_text("\n".join(combo_lines) + "\n", encoding="utf-8")
    n_combo = len(groups)
    total = len(flat) + n_combo
    imp = "\n".join(f"import {{ {', '.join(ns)} }} from '../ui_farm/{bn}';"
                     for bn, ns in byfile.items())
    branches = []
    for i, n in enumerate(flat):
        kw = "if" if i == 0 else "else if"
        branches.append(f"        {kw} (this.sel === {i}) {{ {n}() }}")
    for i in range(n_combo):
        branches.append(f"        else if (this.sel === {len(flat) + i}) {{ farmCombo{i + 1}() }}")
    page = (
        "// 组件 API 农场入口页（手写薄壳）：选择性渲染各 farm struct（生成物勿手改）。\n"
        "import { Case, DemoScaffold } from 'lib_common';\n"
        + imp + "\n"
        "import { farmCombo1, farmCombo2, farmCombo3 } from '../ui_farm/ComboFarms';\n"
        "\n@Entry\n@Component\nstruct ComponentApiFarmPage {\n"
        "  @State sel: number = 0;\n"
        f"  private readonly total: number = {total};\n\n"
        "  private pick(i: number): void { this.sel = ((i % this.total) + this.total) % this.total; }\n\n"
        "  build() {\n    Column({ space: 8 }) {\n"
        "      Text('Component API Farm').fontSize(20).fontWeight(FontWeight.Bold)\n"
        "      Row({ space: 10 }) {\n"
        "        Button('<').onClick(() => this.pick(this.sel - 1))\n"
        "        Text(`${this.sel + 1}/${this.total}`).fontSize(13)\n"
        "        Button('>').onClick(() => this.pick(this.sel + 1))\n"
        "      }\n"
        "      Scroll() { Column() { Text('farm component ' + (this.sel + 1).toString()).fontSize(12) }.width('100%') }.height(48)\n"
        + "\n".join(branches) + "\n"
        "    }\n    .width('100%').height('100%').padding(12)\n  }\n}\n"
    )
    (pathlib.Path(ROOT) / "feat_compfarm/src/main/ets/pages/ComponentApiFarmPage.ets").write_text(
        page, encoding="utf-8")


if __name__ == "__main__":
    sys.exit(main())
