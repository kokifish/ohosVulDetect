#!/usr/bin/env python3
"""feat_heavy API 目录提取器：从本地 SDK d.ts 提取 @ohos 模块与 Kit 的可安全引用面，
落盘为 tools/heavy_api_catalog.json（提交进仓库），供 tools/gen_heavy_farm.py 在无 SDK
环境（CI 确定性门禁）下生成 API 农场。

提取口径（保守，保证生成代码可编译、运行时无副作用）：
  @ohos.<name>.d.ts →
    kind=value    有 default 导出（namespace/对象/具体类），可 typeof / 零参函数调用
    kind=class    declare class 且非 abstract，可 new（泛型以 <string, number> 实例化）
    kind=type     仅类型形态（export default interface 等），只能在类型位引用
    fns           顶层缩进 ≤4 空格的零参函数，且名字以 get/is/has/can/check/query 开头
  @kit.<name>.d.ts → origin=openharmony|hms（按目录），names=export { … } 具名导出

SDK 升级后本地重跑本脚本更新目录（不进 CI 门禁，同 gen_rawfile_abc 先例）。
"""
import glob
import json
import os
import re
import sys

SDK = os.environ.get('DEVECO_SDK_HOME', '/Applications/DevEco-Studio.app/Contents/sdk')
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'heavy_api_catalog.json')
SAFE_FN = re.compile(r'^ {0,4}(?:export\s+)?function\s+(\w+)\s*\(\s*\)\s*:', re.M)
SAFE_PREFIX = ('get', 'is', 'has', 'can', 'check', 'query')
DEFAULT_RE = re.compile(r'^export default\s+(?:abstract\s+|declare\s+)?(?:interface\s+|class\s+)?(\w+)', re.M)
DEFAULT_IFACE_RE = re.compile(r'^export default\s+interface\s+(\w+)', re.M)
CLASS_RE = re.compile(r'^ {0,4}(?:export\s+)?(?:declare\s+)?(?:abstract\s+)?class\s+(\w+)\s*(?:<\s*([^>]*)\s*>)?', re.M)
ABSTRACT_RE = re.compile(r'^ {0,2}(?:export\s+)?(?:declare\s+)?abstract\s+class\s+(\w+)', re.M)
KIT_EXPORT_RE = re.compile(r'^export\s*\{([^}]*)\}', re.M)
KIT_IMPORT_RE = re.compile(r"^import\s+(?:(\w+)|\{([^}]*)\})\s+from\s+['\"](@[\w.]+)['\"]", re.M)
VALUE_NAME_RE = re.compile(
    r'^ {0,4}(?:export\s+)?(?:declare\s+)?(?:abstract\s+)?(?:function|class|const|let|enum|namespace)\s+(\w+)', re.M)
VALUE_KIND_RE = re.compile(
    r'^ {0,4}(?:export\s+)?(?:declare\s+)?(?:abstract\s+)?(function|class|const|let|enum|namespace)\s+(\w+)', re.M)


def parse_api(path: str) -> dict:
    text = open(path, encoding='utf-8', errors='replace').read()
    name = os.path.basename(path)[6:-5]
    m = DEFAULT_RE.search(text)
    default = m.group(1) if m else None
    is_iface_default = bool(DEFAULT_IFACE_RE.search(text))
    fns = sorted({f for f in SAFE_FN.findall(text) if f.startswith(SAFE_PREFIX)})
    abstract = set(ABSTRACT_RE.findall(text))
    classes = []
    for cm in CLASS_RE.finditer(text):
        cname = cm.group(1)
        gen_params = cm.group(2)
        gen_n = len([p for p in gen_params.split(',') if p.strip()]) if gen_params else 0
        if cname in abstract:
            continue
        classes.append({'name': cname, 'gen_n': gen_n})
    # default 导出名若只以 interface/type 声明（无同名 class/const/enum/function），
    # 则它是纯类型：只能出现在类型位，不能 typeof / 调用。
    # default 导出物的种类：namespace 的 typeof/类型位使用均不合法（编译器报错），
    # class/const 才能作 value 探测；interface/type 只能类型位引用。
    default_kind = None
    if default:
        d = re.escape(default)
        if re.search(rf'^\s*(?:export\s+)?(?:declare\s+)?namespace\s+{d}\b', text, re.M):
            default_kind = 'namespace'
        elif re.search(rf'\b(?:declare\s+)?class\s+{d}\b', text):
            default_kind = 'class'
        elif (re.search(rf'^\s*(?:export\s+)?(?:const|let|var)\s+{d}\b', text, re.M)
              or re.search(rf'^\s*(?:export\s+)?(?:declare\s+)?enum\s+{d}\b', text, re.M)):
            default_kind = 'const'
        else:
            default_kind = 'interface'
    if is_iface_default or default_kind in ('interface',) or (default is None and not classes):
        kind = 'type'
    elif classes and default_kind == 'class':
        kind = 'class'
    else:
        kind = 'value'
    value_kinds: dict[str, str] = {}
    for vk, vn in VALUE_KIND_RE.findall(text):
        value_kinds.setdefault(vn, vk)
    return {
        'kind': kind,
        'default': default,
        'default_kind': default_kind,
        'fns': fns,
        'classes': classes if kind == 'class' else [],
        'values': sorted({n for n in VALUE_NAME_RE.findall(text)}),
        'value_kinds': value_kinds,
        'fa_only': '@famodelonly' in text.lower(),
    }


def parse_kit(path: str, origin: str, ets_dir: str) -> dict:
    text = open(path, encoding='utf-8', errors='replace').read()
    names = []
    for m in KIT_EXPORT_RE.finditer(text):
        for piece in m.group(1).split(','):
            piece = piece.strip()
            if not piece:
                continue
            piece = piece.split(' as ')[0].strip()
            if re.fullmatch(r'\w+', piece):
                names.append(piece)
    imports = {}
    for m in KIT_IMPORT_RE.finditer(text):
        default_name, named_group, module = m.group(1), m.group(2), m.group(3)
        # .d.ets 声明的标识符不能在 .ts 文件 import（错误 10311005），打标供生成器跳过；
        # 声明文件分布在 ets/api/ 与 ets/arkts/（@arkts.* 系列）
        dets = any(os.path.exists(os.path.join(ets_dir, sub, module + '.d.ets'))
                   for sub in ('api', 'arkts'))
        if default_name:
            imports[default_name] = {'module': module, 'named': False, 'dets': dets}
        else:
            for piece in named_group.split(','):
                piece = piece.strip().split(' as ')[0].strip()
                if piece:
                    imports[piece] = {'module': module, 'named': True, 'dets': dets}
    return {'origin': origin, 'names': sorted(set(names)), 'imports': imports}


def main() -> int:
    apis = {}
    for p in sorted(glob.glob(os.path.join(SDK, '*', 'openharmony', 'ets', 'api', '@ohos.*.d.ts'))):
        name = os.path.basename(p)[6:-5]
        apis[name] = parse_api(p)
    api_dir = os.path.dirname(p) if apis else os.path.join(SDK, 'default', 'openharmony', 'ets', 'api')
    ets_dir = os.path.dirname(api_dir)
    kits = {}
    for origin, pattern in (('openharmony', os.path.join(SDK, '*', 'openharmony', 'ets', 'kits', '@kit.*.d.ts')),
                            ('hms', os.path.join(SDK, '*', 'hms', 'ets', 'kits', '@kit.*.d.ts'))):
        for p in sorted(glob.glob(pattern)):
            name = os.path.basename(p)[5:-5]
            kits[name] = parse_kit(p, origin, ets_dir)
    stat = {}
    for a in apis.values():
        stat[a['kind']] = stat.get(a['kind'], 0) + 1
    stat['fns_total'] = sum(len(a['fns']) for a in apis.values())
    stat['fns_modules'] = sum(1 for a in apis.values() if a['fns'])
    stat['class_modules'] = sum(1 for a in apis.values() if a['classes'])
    stat['kits_open'] = sum(1 for k in kits.values() if k['origin'] == 'openharmony')
    stat['kits_hms'] = sum(1 for k in kits.values() if k['origin'] == 'hms')
    out = {'catalog_version': 1, 'apis': apis, 'kits': kits}
    with open(OUT, 'w', encoding='utf-8') as fh:
        json.dump(out, fh, ensure_ascii=False, indent=1, sort_keys=True)
        fh.write('\n')
    print(f'catalog: {len(apis)} @ohos, {len(kits)} kits → {OUT}')
    print('  ' + ', '.join(f'{k}={v}' for k, v in stat.items()))
    if len(apis) < 400 or len(kits) < 90:
        print('ERROR: 目录规模异常，检查 SDK 路径')
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
