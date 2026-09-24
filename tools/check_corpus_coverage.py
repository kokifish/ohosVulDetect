#!/usr/bin/env python3
"""SDK 清单 vs 语料用法对账：ArkUI 组件 / Kit / @ohos API 模块三方差距清单。

取代 docs/ohos.md §5.2/§5.3 的人工对比，升级 SDK 后一键重算差距（§7.3 立项项）。

数据源（SDK 路径可用 --sdk 或环境变量 DEVECO_SDK_HOME 指定）：
  <sdk>/*/openharmony/ets/component/component_config.json   组件名单一事实源
  <sdk>/*/openharmony/ets/kits + <sdk>/*/hms/ets/kits       Kit 全集（端侧+HMS 并集）
  <sdk>/*/openharmony/ets/api/@ohos.*.d.ts                  API 模块全集（顶层，辅助类型子目录不计）
语料源：entry / feat_api / feat_vuln / lib_common / lib_shared 的 src/main/ets 下 .ets/.ts/.js。

识别口径：
  组件（仅 .ets）：Name( 调用形式（ArkTS 声明式语法无 <> 包裹）、new Name、
           Name.show(/open(（对话框全局方法族）、@Name（@CustomDialog 装饰器形态）；
  Kit：字符串字面量 '@kit.X'；@ohos：字符串字面量 '@ohos.y'（含动态 import）。

退出码：语料引用了 SDK 不存在的 @ohos/Kit 模块（清单漂移）→ 1，否则 0。
组件/Kit 的未覆盖仅报告不判失败（覆盖不是 100% 目标）。
"""
import glob
import json
import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODULES = ['entry', 'feat_api', 'feat_vuln', 'feat_heavy', 'lib_common', 'lib_shared']
DEFAULT_SDK = os.environ.get(
    'DEVECO_SDK_HOME', '/Applications/DevEco-Studio.app/Contents/sdk')


def corpus_files():
    for mod in MODULES:
        root = os.path.join(REPO, mod, 'src', 'main', 'ets')
        for dirpath, _dirs, files in os.walk(root):
            for f in files:
                if f.endswith(('.ets', '.ts', '.js')):
                    yield os.path.join(dirpath, f)


def rel(p):
    return os.path.relpath(p, REPO)


FIXTURE = os.path.join(REPO, 'tools', 'sdk_manifest.json')


def load_fixture(path=FIXTURE):
    """无 SDK 环境的清单快照回退（CI）：只含三份名单，漂移检查/覆盖计数可用。"""
    with open(path, encoding='utf-8') as fh:
        data = json.load(fh)
    return None, data['components'], data['kits'], data['apis']


def dump_fixture(sdk_home, path):
    _, comps, kits, apis = load_sdk(sdk_home)
    with open(path, 'w', encoding='utf-8') as fh:
        json.dump({'components': comps, 'kits': kits, 'apis': apis}, fh, indent=1, sort_keys=True)
        fh.write('\n')
    print(f'# fixture → {path} (components={len(comps)} kits={len(kits)} apis={len(apis)})')


def load_sdk_or_fixture(sdk_home, use_fixture=False):
    if use_fixture:
        return load_fixture()
    ets = None
    for cand in sorted(glob.glob(os.path.join(sdk_home, '*', 'openharmony', 'ets'))):
        ets = cand
    if ets and os.path.isdir(ets):
        return load_sdk(sdk_home)
    if os.path.exists(FIXTURE):
        return load_fixture()
    sys.exit(f'ERROR: SDK ets 目录未找到（--sdk {sdk_home}）且无清单快照 {FIXTURE}'
             f'（本地跑一次 --dump-fixture 生成）')


def load_sdk(sdk_home):
    ets = None
    for cand in sorted(glob.glob(os.path.join(sdk_home, '*', 'openharmony', 'ets'))):
        ets = cand
    if not ets or not os.path.isdir(ets):
        sys.exit(f'ERROR: SDK ets 目录未找到（--sdk {sdk_home}）')
    cfg = os.path.join(ets, 'component', 'component_config.json')
    with open(cfg, encoding='utf-8') as fh:
        components = sorted(json.load(fh).keys())
    kit_names = set()
    for p in glob.glob(os.path.join(sdk_home, '*', '*', 'ets', 'kits', '@kit.*.d.ts')):
        kit_names.add(os.path.basename(p)[5:-5])
    kits = sorted(kit_names)
    apis = sorted(os.path.basename(p)[6:-5]
                  for p in glob.glob(os.path.join(ets, 'api', '@ohos.*.d.ts')))
    return ets, components, kits, apis


def main():
    args = sys.argv[1:]
    sdk_home = DEFAULT_SDK
    verbose = False
    json_out = None
    while args:
        a = args.pop(0)
        if a == '--sdk':
            sdk_home = args.pop(0)
        elif a == '--verbose':
            verbose = True
        elif a == '--json':
            json_out = args.pop(0)
        elif a == '--dump-fixture':
            dump_fixture(sdk_home, args.pop(0))
            return 0
        elif a == '--use-fixture':
            pass  # 在 load_sdk_or_fixture 生效（跳过 SDK 探测，强制清单快照）

    ets, components, kits, apis = load_sdk_or_fixture(sdk_home, use_fixture='--use-fixture' in sys.argv)
    print(f'# SDK: {ets or f"fixture {FIXTURE}"}')
    print(f'# SDK 清单: components={len(components)} kits={len(kits)} @ohos={len(apis)}')

    comp_used = {}   # name -> set(relpath)
    kit_used = {}    # name -> set(relpath)
    api_used = {}    # name -> set(relpath)
    comp_patterns = [(n, re.compile(
        rf'\b{re.escape(n)}\s*\(|\bnew\s+{re.escape(n)}\b'
        rf'|\b{re.escape(n)}\s*\.\s*(?:show|open)\s*\(|@{re.escape(n)}\b'))
        for n in components]
    kit_re = re.compile(r"['\"]@kit\.([A-Za-z0-9_]+)['\"]")
    api_re = re.compile(r"['\"]@ohos\.([A-Za-z0-9_.]+?)['\"]")

    for path in corpus_files():
        with open(path, encoding='utf-8', errors='replace') as fh:
            text = fh.read()
        r = rel(path)
        if path.endswith('.ets'):
            for name, pat in comp_patterns:
                if pat.search(text):
                    comp_used.setdefault(name, set()).add(r)
        for m in kit_re.finditer(text):
            kit_used.setdefault(m.group(1), set()).add(r)
        for m in api_re.finditer(text):
            api_used.setdefault(m.group(1).rstrip('.'), set()).add(r)

    # —— 组件 ——
    comp_missing = [c for c in components if c not in comp_used]
    print(f'\n== 组件: {len(comp_used)}/{len(components)}（component_config.json 口径，仅 .ets 识别）==')
    if verbose:
        for c in components:
            if c in comp_used:
                print(f'  ✅ {c}: {", ".join(sorted(comp_used[c])[:3])}')
    print(f'未覆盖 ({len(comp_missing)}): {", ".join(comp_missing)}')

    # —— Kit ——
    kit_missing = [k for k in kits if k not in kit_used]
    kit_unknown = [k for k in kit_used if k not in kits]
    print(f'\n== Kit: {len(kit_used)}/{len(kits)}（@kit.*.d.ts 全集）==')
    if verbose:
        for k in sorted(kit_used):
            print(f'  ✅ @kit.{k}: {", ".join(sorted(kit_used[k])[:3])}')
    print(f'未覆盖 ({len(kit_missing)}): {", ".join("@kit." + k for k in kit_missing)}')

    # —— @ohos API 模块 ——
    api_missing = [a for a in apis if a not in api_used]
    api_unknown = [a for a in api_used if a not in apis]
    print(f'\n== @ohos API 模块: {len(api_used)}/{len(apis)} ==')
    if verbose:
        for a in sorted(api_used):
            print(f'  ✅ @ohos.{a}: {", ".join(sorted(api_used[a])[:3])}')
    print(f'未覆盖 ({len(api_missing)}): {", ".join("@ohos." + a for a in api_missing)}')

    # —— 漂移门禁：引用了 SDK 不存在的模块 ——
    if api_unknown or kit_unknown:
        print('\n!! 语料引用了 SDK 清单中不存在的模块（清单漂移，须归因）:')
        for a in sorted(api_unknown):
            print(f'   @ohos.{a}: {", ".join(sorted(api_used[a]))}')
        for k in sorted(kit_unknown):
            print(f'   @kit.{k}: {", ".join(sorted(kit_used[k]))}')
        return 1
    print('\n漂移检查 OK（语料引用的 @ohos/Kit 模块全部存在于 SDK 清单）')

    if json_out:
        with open(json_out, 'w', encoding='utf-8') as fh:
            json.dump({
                'components': {'covered': sorted(comp_used), 'missing': comp_missing},
                'kits': {'covered': sorted(kit_used), 'missing': kit_missing},
                'apis': {'covered': sorted(api_used), 'missing': api_missing},
            }, fh, ensure_ascii=False, indent=1)
        print(f'# JSON 报告已写入 {json_out}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
