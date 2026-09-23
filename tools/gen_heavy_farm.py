#!/usr/bin/env python3
"""feat_heavy 极端大模块生成器（指令农场）。

目标：feat_heavy 独立 modules.abc ≥500 万指令 / ~6 万函数（release 口径），作为逆向工具链
超大单模块压力样本；内容为「有意义」的业务形态语料，顺带覆盖 @ohos/Kit 未覆盖模块。

四个原型（全部生成物，勿手改；改本生成器后重新生成，CI 以 git diff 验证确定性）：
  biz  farm/biz/BizNNNN.ts      纯计算业务函数（校验/变换/状态机/聚合；值从参数派生防折叠）
  api  farm/apiwrap/OvwNN.ts    @ohos 包装（default import + 零参 get/is/query 调用 + try/catch）
  kit  farm/kitwrap/Ktw*.ts     Kit 包装（openharmony 静态具名 import；hms 动态 import 可捕获）
  ui   farm/ui/UicompSetNN.ets  组件业务组合 struct（安全组件面板 + 事件回调回连 biz 函数）
配套：farm/index.ts（懒构建注册表 + 抽样器）、farm/ui/UiStage.ets（if-链选择渲染）。
页面 pages/HeavyFarmPage.ets 为手写薄壳，仅调用 farm/index.ts 导出的抽样器。

原料：tools/heavy_api_catalog.json（gen_heavy_catalog.py 从本地 SDK 提取，提交进仓库）；
FP 隔离：读 groundtruth/manifest.json 提取 detection 常量与调用 token，命中即拒绝生成。
"""
import json
import os
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
ETS = ROOT / 'feat_heavy' / 'src' / 'main' / 'ets'
CATALOG = pathlib.Path(__file__).resolve().parent / 'heavy_api_catalog.json'
MANIFEST = ROOT / 'groundtruth' / 'manifest.json'

# ---- 规模旋钮（指令密度实测标定，目标 release ≥5M 指令 / ~60k 函数）----
# 环境变量可覆盖（OVD_HEAVY_*，供 tools/build_samples.py 产出样本矩阵）；
# 默认值即提交语料的规模，CI 确定性门禁在无环境变量下运行。
BIZ_FILES = int(os.environ.get('OVD_HEAVY_BIZ_FILES', '90'))
BIZ_FUNCS = int(os.environ.get('OVD_HEAVY_BIZ_FUNCS', '43'))
BIZ_STMTS = int(os.environ.get('OVD_HEAVY_BIZ_STMTS', '52'))
BIZ_ASYNC_EVERY = 10     # 每 N 个函数产 1 个 async 孪生
API_FNS_CAP = int(os.environ.get('OVD_HEAVY_API_CAP', '8'))
API_PER_FILE = 24        # apiwrap 每文件模块数
KIT_STATIC_FNS = 4       # 每 openharmony Kit 静态包装数
KIT_HMS_DYN = 2          # 每 hms Kit 动态 import 包装数
UI_STRUCTS = int(os.environ.get('OVD_HEAVY_UI_STRUCTS', '240'))
UI_PER_FILE = 2          # 每文件 struct 数

ALWAYS_BANNED = ['http://', 'https://', 'password', 'passwd', 'secret', 'token',
                 'BEGIN RSA PRIVATE KEY', 'BEGIN PUBLIC KEY', 'AES256', 'idcard']
WORDS = ['order', 'sku', 'batch', 'ledger', 'coupon', 'freight', 'invoice', 'pickup',
         'warehouse', 'region', 'tariff', 'rebate', 'quota', 'parcel', 'transit', 'audit',
         'policy', 'vendor', 'client', 'portal', 'ticket', 'journey', 'carrier', 'customs',
         'depot', 'balance', 'settle', 'payout', 'refund', 'stocktake', 'dispatch',
         'routeplan', 'shelf', 'crate', 'pallet', 'waybill', 'dock', 'bay']

# 安全面收窄：即使零参 get/is/query 也不碰（规则信号/隐私/副作用/安全敏感）
UNSAFE_MODULES = {
    'security.cryptoFramework', 'security.huks', 'security.huksExternalCrypto',
    'security.cert', 'security.certManager', 'security.certManagerDialog',
    'security.asset', 'security.identifySensitiveContent',
    'net.http', 'web.webview', 'data.distributedKVStore', 'data.relationalStore',
    'data.dataShare', 'pasteboard', 'nfc.controller', 'nfc.tag', 'nfc.cardEmulation',
    'secureElement', 'telephony.sms', 'userIAM.faceAuth', 'userIAM.userAuth',
    'userIAM.userAccessCtrl', 'notificationManager', 'notificationExtensionSubscription',
    'reminderAgent', 'reminderAgentManager', 'request', 'print',
}

# 已知方法面的容器类（class 原型增强：实例化 + 一次具名方法调用 + length 读取）
# 2 元容器 → set(k, v)；1 元容器 → 存 string（实参类型随实例化元数走，避免 number→string）
CLASS_METHOD_2 = {'HashMap': 'set', 'TreeMap': 'set', 'LightWeightMap': 'set'}
CLASS_METHOD_1 = {'HashSet': 'add', 'LightWeightSet': 'add', 'ArrayList': 'add',
                  'LinkedList': 'add', 'Queue': 'add', 'Stack': 'push', 'Vector': 'add'}


class LCG:
    """确定性伪随机（固定常数，跨运行/跨平台一致）。"""

    def __init__(self, seed: int):
        self.s = seed & 0xFFFFFFFFFFFFFFFF

    def nxt(self, a: int, b: int) -> int:
        self.s = (self.s * 6364136223846793005 + 1442695040888963407) & 0xFFFFFFFFFFFFFFFF
        return a + ((self.s >> 33) % (b - a + 1))


def sanitize(name: str) -> str:
    return re.sub(r'[^A-Za-z0-9]', '_', name)


# ---------------- manifest 黑名单 ----------------

def load_banned() -> tuple[list[str], list[str]]:
    data = json.loads(MANIFEST.read_text(encoding='utf-8'))
    consts: set[str] = set(ALWAYS_BANNED)
    tokens: set[str] = set()

    def walk(o):
        if isinstance(o, dict):
            for k, v in o.items():
                if k == 'call' and isinstance(v, list):
                    tokens.update(str(x) for x in v)
                walk(v)
        elif isinstance(o, list):
            for x in o:
                walk(x)
        elif isinstance(o, str):
            consts.add(o)

    walk(data.get('vulns', []))
    return sorted(consts), sorted(tokens)


def excluded_modules(apis: dict, tokens: list[str]) -> set[str]:
    bad = set(UNSAFE_MODULES)
    for name, info in apis.items():
        if info.get('fa_only'):
            bad.add(name)  # FA-only API 在 Stage 模型编译报错
            continue
        for t in tokens:
            if len(t) >= 4 and (t in name or name in t):
                bad.add(name)
                break
    return bad


def gen_inst(n: int) -> str:
    """泛型实例化串：按声明元数补齐，1 → <string>，2 → <string, number>。"""
    if n <= 0:
        return ''
    if n == 1:
        return '<string>'
    return '<' + ', '.join(['string'] + ['number'] * (n - 1)) + '>'


def kit_excluded(kit_name: str, kit_info: dict, excluded: set[str], tokens: list[str]) -> bool:
    ln = kit_name.lower()
    if any(len(t) >= 4 and t.lower() in ln for t in tokens):
        return True
    for imp in kit_info.get('imports', {}).values():
        if imp['module'][6:-5] in excluded:
            return True
    return False


# ---------------- biz 原型 ----------------

def t_arith(rng, f, u):
    return [f'  acc = (acc * 31 + {rng.nxt(97, 9999)}) % 65521;']


def t_arith2(rng, f, u):
    return [f'  acc = acc + {rng.nxt(11, 999)} - (acc % {rng.nxt(7, 97)});']


def t_concat(rng, f, u):
    w = WORDS[rng.nxt(0, len(WORDS) - 1)]
    return [f"  buf += '{w}{u}-' + acc.toString();"]


def t_templ(rng, f, u):
    return [f'  buf += `q{u}:${{acc % 97}}`;']


def t_push(rng, f, u):
    return ['  arr.push(acc % 1000);']


def t_sort(rng, f, u):
    return ['  arr.sort((a: number, b: number): number => a - b);',
            f'  acc = (acc + arr.length * {rng.nxt(3, 41)}) % 65521;']


def t_mapset(rng, f, u):
    return [f"  m01.set('k{u}', acc % 997);"]


def t_mapget(rng, f, u):
    return [f"  if (m01.has('k{u}')) {{",
            f"    const gv{u}: number = m01.get('k{u}') as number;",
            f'    acc = (acc + gv{u}) % 10007;',
            '  }']


def t_ifelse(rng, f, u):
    return [f"  if (acc % {rng.nxt(5, 31)} === 0) {{ buf += 'even{u}'; }} else {{ buf += 'odd'; }}"]


def t_switch(rng, f, u):
    return ['  switch (acc & 3) {',
            f"    case 0: buf += 's0{u}'; break;",
            f'    case 1: acc += {rng.nxt(3, 29)}; break;',
            f"    case 2: buf += 's2'; acc -= {rng.nxt(3, 19)}; break;",
            "    default: buf += 'sd';",
            '  }']


def t_for(rng, f, u):
    return [f'  for (let i{u} = 0; i{u} < {rng.nxt(3, 12)}; i{u}++) {{',
            f'    acc = (acc + i{u} * 13 + {rng.nxt(7, 997)}) % 100003;',
            '  }']


def t_while(rng, f, u):
    return [f'  let w{u}: number = acc % 23;',
            f'  while (w{u} > 4) {{ w{u} = Math.floor(w{u} / 2); }}',
            f'  acc += w{u};']


def t_try(rng, f, u):
    return [f"  try {{ if (acc % 29 === {rng.nxt(2, 23)}) {{ throw new Error('synthetic-{u}'); }}"
            f" acc += {rng.nxt(5, 61)}; }} catch (e) {{ acc = (acc + 17) % 65521; }}"]


def t_class(rng, f, u):
    return ['  acc = u.step(acc % 613) % 65521;',
            f"  buf += u.name('x{u}');"]


def t_closure(rng, f, u):
    return [f'  const cf{u}: Array<(x: number) => number> = [];',
            f'  cf{u}.push((x: number): number => (x * 3 + acc) % 65521);',
            f'  cf{u}.push((x: number): number => (x + {rng.nxt(11, 199)}) % 10007);',
            f'  acc = cf{u}[acc & 1](acc % 9973);']


def t_strops(rng, f, u):
    return [f"  const ix{u}: number = buf.indexOf('p{f}');",
            f"  if (ix{u} > 12) {{ buf = buf.substring(0, 32); }} else if (ix{u} >= 0) {{ buf += 'i'; }}"]


def t_literal(rng, f, u):
    return [f"  const rc{u}: Rec{f} = {{ id: acc % 1000, tag: 't{u}', score: acc % 100 }};",
            f'  acc = (acc + rc{u}.score) % 65521;',
            f'  buf += rc{u}.tag;']


def t_ternary(rng, f, u):
    return [f"  buf += (acc > 500 ? 'hi{u}' : 'lo') + acc.toString(16);"]


def t_arrmap(rng, f, u):
    return [f'  const db{u}: number[] = arr.map((v: number): number => v + (acc % 13));',
            f'  acc = (acc + db{u}.length) % 65521;']


def t_tags(rng, f, u):
    return [f"  const t0{u}: string = tags.length > 0 ? tags[0] : 'none';",
            f'  buf += t0{u};']


# 模板池不含 t_sort：数组 sort 闭包密度过高致函数数超标，已移出
TEMPLATES = [t_arith, t_arith2, t_concat, t_templ, t_push, t_mapset, t_mapget,
             t_ifelse, t_switch, t_for, t_while, t_try, t_class, t_closure, t_strops,
             t_literal, t_ternary, t_arrmap, t_tags]


def biz_function(fidx: int, j: int, salt: int) -> str:
    rng = LCG(salt * 1000003 + fidx * 97 + j)
    lines: list[str] = []
    lines.append(f'export function biz_{fidx:04d}_{j:02d}(seed: number, raw: string): string {{')
    lines.append(f'  let acc: number = (seed * 31 + raw.length + {salt % 9973}) % 100003;')
    lines.append("  let buf: string = raw.length.toString(16) + ':';")
    lines.append("  const tags: string[] = raw.split('-');")
    lines.append('  const m01: Map<string, number> = new Map<string, number>();')
    lines.append('  const arr: number[] = [];')
    lines.append(f'  const u: Unit{fidx} = new Unit{fidx}(acc);')
    uq = 0
    for i in range(BIZ_STMTS):
        if i in (BIZ_STMTS // 3, 2 * BIZ_STMTS // 3):
            tpl = t_closure  # 每函数强制 2 处闭包（数组间接调用，防 release 内联；保函数数达标）
        else:
            tpl = TEMPLATES[rng.nxt(0, len(TEMPLATES) - 1)]
        lines += tpl(rng, fidx, uq)
        uq += 1
    lines.append("  return buf + '|' + acc.toString(16) + '|' + u.name(tags.length.toString());")
    lines.append('}')
    return '\n'.join(lines)


def biz_async(fidx: int, j: int) -> str:
    n = f'biz_{fidx:04d}_{j:02d}'
    return (f'export async function {n}a(seed: number, raw: string): Promise<string> {{\n'
            f'  const head: string = {n}(seed + 1, raw);\n'
            f'  const tick: number = await Promise.resolve(seed % 17);\n'
            f"  return head + '@' + tick.toString();\n"
            f'}}')


def gen_biz_file(idx: int) -> str:
    out = [f'// Biz{idx:04d}.ts — feat_heavy 生成业务语料（勿手改，改 tools/gen_heavy_farm.py 重新生成）', '']
    out.append('export type BizFn = (seed: number, raw: string) => string;')
    out.append('export type ABizFn = (seed: number, raw: string) => Promise<string>;')
    out.append('')
    out.append(f'interface Rec{idx} {{ id: number; tag: string; score: number; }}')
    out.append('')
    out.append(f'class Unit{idx} {{')
    out.append('  private base: number;')
    out.append('  constructor(base: number) { this.base = ((base % 9973) + 9973) % 9973; }')
    out.append('  step(x: number): number { this.base = (this.base * 31 + x) % 65521; return this.base; }')
    out.append("  name(tag: string): string { return 'u' + this.base.toString(16) + tag; }")
    out.append('  get total(): number { return this.base; }')
    out.append('}')
    out.append('')
    syncs: list[str] = []
    asyncs: list[str] = []
    for j in range(BIZ_FUNCS):
        out.append(biz_function(idx, j, salt=idx * 131 + j))
        out.append('')
        syncs.append(f'biz_{idx:04d}_{j:02d}')
        if j % BIZ_ASYNC_EVERY == BIZ_ASYNC_EVERY - 1:
            out.append(biz_async(idx, j))
            out.append('')
            asyncs.append(f'biz_{idx:04d}_{j:02d}a')
    out.append(f'export function reg_{idx:04d}(): BizFn[] {{')
    out.append(f'  return [{", ".join(syncs)}];')
    out.append('}')
    out.append('')
    out.append(f'export function rega_{idx:04d}(): ABizFn[] {{')
    out.append(f'  return [{", ".join(asyncs)}];' if asyncs else '  return [];')
    out.append('}')
    return '\n'.join(out) + '\n'


# ---------------- apiwrap 原型 ----------------

def api_module_wrappers(name: str, info: dict, seq0: int, salt: int) -> tuple[list[str], list[str], list[str]]:
    """返回 (包装函数块列表, import 行列表, 包装函数名列表)。"""
    alias = f'ovw{seq0:04d}'
    imp = f"import {alias} from '@ohos.{name}';"
    sname = sanitize(name)
    blocks: list[str] = []
    wrappers: list[str] = []

    def wrap_val(fn: str, body: list[str]):
        lines = [f'export function {fn}(seed: number): string {{',
                 f"  let out: string = 'val|{name}|' + ((seed * 7 + {salt % 7919}) % 9973).toString();",
                 '  try {'] + body + [
            '  } catch (err) {',
            "    out += '|!e' + String((err as BusinessError).code);",
            '  }',
            '  return out;',
            '}']
        blocks.append('\n'.join(lines))
        wrappers.append(fn)

    if info['kind'] == 'value':
        fns = info['fns'][:API_FNS_CAP]
        for w in range(0, len(fns), 2):
            grp = fns[w:w + 2]
            body = [f'    out += \'|{f2}=\' + JSON.stringify({alias}.{f2}());' for f2 in grp]
            wrap_val(f'ovw_{sname}_{w // 2:02d}', body)
    elif info['kind'] == 'class':
        cls = next((c for c in info['classes'] if c['name'] == info['default']), None)
        if cls is None:
            return [], [], []  # 目录缺同名类条目（缩进异常等），交由 dyn 兜底
        gen = gen_inst(cls['gen_n'])
        if cls['name'] in CLASS_METHOD_2:
            meth = CLASS_METHOD_2[cls['name']]
            fn = f'ovw_{sname}_00'
            wrap_val(fn, [f'    const inst = new {alias}{gen}();',
                          f"    inst.{meth}('k' + (seed % 89).toString(), seed % 17);",
                          f"    out += '|{meth}ok|len=' + inst.length.toString();"])
        elif cls['name'] in CLASS_METHOD_1:
            meth = CLASS_METHOD_1[cls['name']]
            fn = f'ovw_{sname}_00'
            wrap_val(fn, [f'    const inst = new {alias}{gen}();',
                          f"    inst.{meth}('v' + (seed % 97).toString());",
                          f"    out += '|{meth}ok|len=' + inst.length.toString();"])
        else:
            fn = f'ovw_{sname}_00'
            blocks.append('\n'.join([
                f'export function {fn}(seed: number): string {{',
                f'  const holder: {alias}{gen} | null = null;',
                f"  const state: string = holder === null ? 'none' : 'some';",
                f"  return 'cls|{name}|' + state + '|' + ((seed + {salt % 613}) % 997).toString();",
                '}']))
            wrappers.append(fn)
    else:  # type kind：interface/type 只能类型位引用
        if not info['default']:
            return [], [], []
        fn = f'ovw_{sname}_00'
        lines = [f'export function {fn}(seed: number): string {{',
                 f'  const holder: {alias} | null = null;',
                 f"  const state: string = holder === null ? 'none' : 'some';",
                 f"  return 'type|{name}|' + state"
                 f" + '|' + ((seed + {salt % 613}) % 997).toString();",
                 '}']
        blocks.append('\n'.join(lines))
        wrappers.append(fn)
    return blocks, [imp], wrappers


# 运行时抽样白名单：纯本地快速读取模块（其余包装仅在 abc 中存在，不参与运行时抽样）
SAFE_APIS = {'hilog', 'systemTime', 'i18n', 'hichecker'}


def gen_api_files(catalog: dict, excluded: set[str]) -> tuple[list[tuple[str, str]], list[str]]:
    files: list[tuple[str, str]] = []
    names = sorted(n for n in catalog['apis'] if n not in excluded and catalog['apis'][n]['default'])
    # value 且无安全零参函数的模块：default 导出多为纯命名空间，typeof/取值不合法，
    # 全部走动态 import 包装（覆盖字面量保留，运行时可捕获）
    dyn_names = [n for n in names
                 if (catalog['apis'][n]['kind'] == 'value' and not catalog['apis'][n]['fns'])
                 or (catalog['apis'][n]['kind'] == 'class'
                     and not any(c['name'] == catalog['apis'][n]['default'] for c in catalog['apis'][n]['classes']))]
    names = [n for n in names if n not in dyn_names]
    groups = [names[i:i + API_PER_FILE] for i in range(0, len(names), API_PER_FILE)]
    for gidx, group in enumerate(groups):
        body: list[str] = [f'// Ovw{gidx:02d}.ts — feat_heavy 生成 @ohos 包装语料（勿手改）', '']
        body.append("import { BusinessError } from '@kit.BasicServicesKit';")
        wrappers_all: list[str] = []
        for k, name in enumerate(group):
            blocks, imps, wrappers = api_module_wrappers(name, catalog['apis'][name], k, 777 + gidx * 977 + k)
            body += imps
            for b in blocks:
                body.append('')
                body.append(b)
            wrappers_all += wrappers
        body.append('')
        body.append('export type ApiFn = (seed: number) => string;')
        body.append('')
        body.append(f'export function areg_{gidx:02d}(): ApiFn[] {{')
        body.append(f'  return [{", ".join(wrappers_all)}];')
        body.append('}')
        safe_mods = [m for m in group if m in SAFE_APIS]
        safe_fns = [f'ovw_{sanitize(m)}_00' for m in safe_mods]
        body.append('')
        body.append(f'export function asafe_{gidx:02d}(): ApiFn[] {{')
        body.append(f'  return [{", ".join(safe_fns)}];')
        body.append('}')
        files.append((f'Ovw{gidx:02d}.ts', '\n'.join(body) + '\n'))
    dyn: list[str] = ['// OvwDyn.ts — feat_heavy 生成 @ohos 动态 import 包装'
                      '（default 命名空间模块，运行时可捕获，勿手改）', '']
    dyn.append("import { BusinessError } from '@kit.BasicServicesKit';")
    dyn_fns: list[str] = []
    for n in dyn_names:
        dsalt = 900 + len(dyn_fns)
        fn = f'ovd_{sanitize(n)}'
        dyn.append(f'export async function {fn}(seed: number): Promise<string> {{')
        dyn.append('  try {')
        dyn.append(f"    const m = await import('@ohos.{n}');")
        dyn.append("    const probe: string = typeof m === 'object' ? 'ns' : 'other';")
        dyn.append(f"    return 'odyn|{n}|ok|' + probe + '|' + ((seed * 3 + {dsalt % 6421}) % 6421).toString();")
        dyn.append('  } catch (err) {')
        dyn.append(f"    return 'odyn|{n}|err|' + String((err as BusinessError).code);")
        dyn.append('  }')
        dyn.append('}')
        dyn.append('')
        dyn_fns.append(fn)
    dyn.append('export type ADynFn = (seed: number) => Promise<string>;')
    dyn.append('')
    dyn.append('export function aregdyn(): ADynFn[] {')
    dyn.append(f'  return [{", ".join(dyn_fns)}];')
    dyn.append('}')
    files.append(('OvwDyn.ts', '\n'.join(dyn) + '\n'))
    return files, dyn_names


# ---------------- kitwrap 原型 ----------------

def gen_kit_files(catalog: dict, excluded: set[str], tokens: list[str]) -> list[tuple[str, str]]:
    salt = 424242

    def is_value_name(kit_info: dict, name: str) -> bool:
        """名字可作 value 引用（typeof 安全）才进静态包装；类型名一律不用
        （泛型/纯类型在类型位引用不可靠），dets 名不能在 .ts import。"""
        imp = kit_info.get('imports', {}).get(name)
        if not imp or imp.get('dets'):
            return False
        if not imp['module'].startswith('@ohos.'):
            return False
        api = catalog['apis'].get(imp['module'][6:])
        if not api:
            return False
        ok_kinds = ('class', 'const', 'enum', 'function')
        if imp['named']:
            return api.get('value_kinds', {}).get(name) in ok_kinds
        return (api.get('default') == name and api.get('default_kind') in ('class', 'const'))

    static_body: list[str] = ['// Ktw.ts — feat_heavy 生成 openharmony Kit 静态包装（勿手改）', '']
    static_body.append("import { BusinessError } from '@kit.BasicServicesKit';")
    bindings: set[str] = set()
    static_fns: list[str] = []
    dyn_fallback_kits: list[str] = []
    kits = {k: v for k, v in catalog['kits'].items()
            if v['origin'] == 'openharmony' and v['names'] and k not in excluded
            and not kit_excluded(k, v, excluded, tokens)}
    for kit in sorted(kits):
        info = kits[kit]
        taken = 0
        for w in range(KIT_STATIC_FNS):
            name = info['names'][w % len(info['names'])]
            if not is_value_name(info, name):
                continue
            if name in bindings:
                continue
            bindings.add(name)
            imp_line = f"import {{ {name} }} from '@kit.{kit}';"
            use = f"    out += '|{name}=' + (typeof {name});"
            fn = f'ktw_{sanitize(kit)}_{w:02d}'
            static_body.append(imp_line)
            static_body.append('')
            static_body.append(f'export function {fn}(seed: number): string {{')
            static_body.append(f"  let out: string = 'ktw|{kit}|' + ((seed * 5 + {salt % 7919}) % 7919).toString();")
            static_body.append('  try {')
            static_body.append(use)
            static_body.append('  } catch (err) {')
            static_body.append("    out += '|!e';")
            static_body.append('  }')
            static_body.append('  return out;')
            static_body.append('}')
            static_body.append('')
            static_fns.append(fn)
            taken += 1
            if taken >= KIT_STATIC_FNS:
                break
        if taken == 0:
            dyn_fallback_kits.append(kit)
    static_body.append('export type KitFn = (seed: number) => string;')
    static_body.append('')
    static_body.append('export function kreg(): KitFn[] {')
    static_body.append(f'  return [{", ".join(static_fns)}];')
    static_body.append('}')
    files = [('Ktw.ts', '\n'.join(static_body) + '\n')]

    dyn_body: list[str] = ['// KtwDyn.ts — feat_heavy 生成 Kit 动态 import 包装'
                           '（hms 全量 + openharmony 无静态名兜底；运行时可捕获，勿手改）', '']
    dyn_body.append("import { BusinessError } from '@kit.BasicServicesKit';")
    dyn_fns: list[str] = []
    hk = {k: v for k, v in catalog['kits'].items()
          if v['origin'] == 'hms' and v['names'] and k not in excluded
          and not kit_excluded(k, v, excluded, tokens)}
    for kit in sorted(hk) + sorted(dyn_fallback_kits):
        rounds = KIT_HMS_DYN if kit in hk else 1
        for w in range(rounds):
            fn = f'ktw_{sanitize(kit)}_d{w:02d}'
            salt += 1
            dyn_body.append(f'export async function {fn}(seed: number): Promise<string> {{')
            dyn_body.append('  try {')
            dyn_body.append(f"    const m = await import('@kit.{kit}');")
            dyn_body.append("    const probe: string = typeof m === 'object' ? 'ns' : 'other';")
            dyn_body.append(f"    return 'dyn|{kit}|ok|' + probe + '|' + ((seed * 3 + {salt % 6421}) % 6421).toString();")
            dyn_body.append('  } catch (err) {')
            dyn_body.append(f"    return 'dyn|{kit}|err|' + String((err as BusinessError).code);")
            dyn_body.append('  }')
            dyn_body.append('}')
            dyn_body.append('')
            dyn_fns.append(fn)
    dyn_body.append('export type DKFn = (seed: number) => Promise<string>;')
    dyn_body.append('')
    dyn_body.append('export function dreg(): DKFn[] {')
    dyn_body.append(f'  return [{", ".join(dyn_fns)}];')
    dyn_body.append('}')
    files.append(('KtwDyn.ts', '\n'.join(dyn_body) + '\n'))
    return files


# ---------------- ui 原型 ----------------

def ui_struct(k: int) -> str:
    bizf = k % BIZ_FILES
    variant = k % 4
    s = ['@Component']
    s.append(f'export struct Uicomp{k:04d} {{')
    s.append(f'  @State private idx: number = {k % 89 + 3};')
    s.append("  @State private log: string = 'idle';")
    s.append('')
    s.append('  private run(shift: number): void {')
    s.append(f"    this.log = biz_{bizf:04d}_{k % BIZ_FUNCS:02d}(this.idx + shift, 'ui');")
    s.append('  }')
    s.append('')
    s.append('  private rows(): string[] {')
    s.append('    const out: string[] = [];')
    s.append('    for (let i = 0; i < 5; i++) {')
    s.append("      out.push('row ' + ((this.idx + i) % 50).toString());")
    s.append('    }')
    s.append('    return out;')
    s.append('  }')
    s.append('')
    s.append('  build() {')
    s.append('    Column({ space: 8 }) {')
    s.append(f"      Text('Panel {k}').fontSize(16).fontWeight(FontWeight.Medium)")
    s.append("      Text(this.log).fontSize(12).fontColor('#336699')")
    s.append("      Button('Run ' + this.idx.toString()).onClick(() => this.run(1))")
    if variant == 0:
        s.append('      Row({ space: 6 }) {')
        s.append("        Text('A').fontColor('#2288CC')")
        s.append('        Blank()')
        s.append("        Text('B').fontColor('#CC8822')")
        s.append("      }.width('92%')")
        s.append('      Progress({ value: this.idx % 100, total: 100 })')
        s.append('      LoadingProgress().width(32).height(32)')
    elif variant == 1:
        s.append('      Stack({ alignContent: Alignment.Center }) {')
        s.append("        Text('stacked').fontColor('#557799')")
        s.append('      }.height(40)')
        s.append('      Toggle({ type: ToggleType.Checkbox, isOn: true })')
        s.append("      Divider().strokeWidth(1).color('#DDDDDD')")
        s.append("      Image($r('app.media.startIcon')).width(28).height(28)")
    elif variant == 2:
        s.append('      List({ space: 4 }) {')
        s.append('        ForEach(this.rows(), (item: string) => {')
        s.append('          ListItem() { Text(item).fontSize(12) }')
        s.append('        }, (item: string) => item)')
        s.append('      }.height(96)')
        s.append('      Flex({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap }) {')
        s.append("        Text('fx1').fontSize(12)")
        s.append("        Text('fx2').fontSize(12)")
        s.append('      }')
    else:
        s.append('      Grid() {')
        s.append('        ForEach(this.rows(), (item: string) => {')
        s.append('          GridItem() { Text(item).fontSize(11) }')
        s.append('        }, (item: string) => item)')
        s.append("      }.columnsTemplate('1 1').height(88)")
        s.append('      Scroll() {')
        s.append('        Column({ space: 4 }) {')
        s.append("          Text('scroll-a').fontSize(12)")
        s.append("          Text('scroll-b').fontSize(12)")
        s.append('        }')
        s.append('      }.height(72)')
        s.append("      TextInput({ placeholder: 'input ' + this.idx.toString() })")
        s.append('        .onChange((v: string) => { this.log = v; })')
    s.append('    }')
    s.append('    .padding(12)')
    s.append("    .width('100%')")
    s.append('  }')
    s.append('}')
    return '\n'.join(s)


def gen_ui_files() -> list[tuple[str, str]]:
    files: list[tuple[str, str]] = []
    total_files = UI_STRUCTS // UI_PER_FILE
    for g in range(total_files):
        body = [f'// UicompSet{g:03d}.ets — feat_heavy 生成组件组合语料（勿手改）', '']
        for k in range(g * UI_PER_FILE, (g + 1) * UI_PER_FILE):
            body.append(f"import {{ biz_{k % BIZ_FILES:04d}_{k % BIZ_FUNCS:02d} }} from '../biz/Biz{k % BIZ_FILES:04d}';")
        body.append('')
        for k in range(g * UI_PER_FILE, (g + 1) * UI_PER_FILE):
            body.append(ui_struct(k))
            body.append('')
        files.append((f'UicompSet{g:03d}.ets', '\n'.join(body) + '\n'))
    return files


def gen_ui_stage() -> str:
    total_files = UI_STRUCTS // UI_PER_FILE
    body = ['// UiStage.ets — feat_heavy 生成组件选择器（勿手改）', '']
    for g in range(total_files):
        for k in range(g * UI_PER_FILE, (g + 1) * UI_PER_FILE):
            body.append(f"import {{ Uicomp{k:04d} }} from './UicompSet{g:03d}';")
    body.append('')
    body.append('@Component')
    body.append('export struct UiStage {')
    body.append('  @Prop sel: number = 0;')
    body.append('')
    body.append('  build() {')
    body.append('    Column() {')
    for k in range(UI_STRUCTS):
        kw = '    if' if k == 0 else '    else if'
        body.append(f'{kw} (this.sel === {k}) {{ Uicomp{k:04d}() }}')
    body.append('    }')
    body.append('  }')
    body.append('}')
    return '\n'.join(body) + '\n'


# ---------------- index（注册表 + 抽样器）----------------

def gen_index(ng: int) -> str:
    body = ['// index.ts — feat_heavy 注册表与抽样器（勿手改）', '']
    for i in range(BIZ_FILES):
        body.append(f"import {{ reg_{i:04d}, rega_{i:04d} }} from './biz/Biz{i:04d}';")
    for g in range(ng):
        body.append(f"import {{ areg_{g:02d} }} from './apiwrap/Ovw{g:02d}';")
    body.append("import { aregdyn } from './apiwrap/OvwDyn';")
    for g in range(ng):
        body.append(f"import {{ asafe_{g:02d} }} from './apiwrap/Ovw{g:02d}';")
    body.append("import { kreg } from './kitwrap/Ktw';")
    body.append("import { dreg } from './kitwrap/KtwDyn';")
    body.append('')
    body.append('export type BizFn = (seed: number, raw: string) => string;')
    body.append('export type ABizFn = (seed: number, raw: string) => Promise<string>;')
    body.append('export type ApiFn = (seed: number) => string;')
    body.append('export type ADynFn = (seed: number) => Promise<string>;')
    body.append('export type KitFn = (seed: number) => string;')
    body.append('export type DKFn = (seed: number) => Promise<string>;')
    body.append('')
    for name, single, rtype, plural in (
            ('Biz', 'reg_', 'BizFn', True),
            ('Biza', 'rega_', 'ABizFn', True),
            ('Api', 'areg_', 'ApiFn', True),
            ('Apidyn', 'aregdyn', 'ADynFn', False),
            ('Kit', 'kreg', 'KitFn', False),
            ('Kitdyn', 'dreg', 'DKFn', False)):
        body.append(f'let c{name}Cache: {rtype}[] | null = null;')
        body.append(f'export function collect{name}(): {rtype}[] {{')
        body.append(f'  if (c{name}Cache === null) {{')
        if plural:
            reg_list = ', '.join(f'{single}{i:04d}' for i in range(BIZ_FILES)) if name.startswith('Biz') \
                else ', '.join(f'areg_{g:02d}' for g in range(ng))
            body.append(f'    const regs: Array<() => {rtype}[]> = [{reg_list}];')
            body.append(f'    const all: {rtype}[] = [];')
            body.append('    for (const r of regs) {')
            body.append(f'      const a: {rtype}[] = r();')
            body.append('      for (const f of a) { all.push(f); }')
            body.append('    }')
        else:
            body.append(f'    const all: {rtype}[] = {single}();')
        body.append(f'    c{name}Cache = all;')
        body.append('  }')
        body.append(f'  return c{name}Cache;')
        body.append('}')
        body.append('')
    body.append('export async function heavyBizSample(stride: number): Promise<string> {')
    body.append('  const all: BizFn[] = collectBiz();')
    body.append('  let acc: number = 0;')
    body.append('  let calls: number = 0;')
    body.append('  for (let i = 0; i < all.length; i += stride) {')
    body.append("    const res: string = all[i]((i * 131) % 99991, 'smpl');")
    body.append('    acc = (acc + res.length * 7) % 1000000007;')
    body.append('    calls++;')
    body.append('  }')
    body.append('  const aall: ABizFn[] = collectBiza();')
    body.append('  let acalls: number = 0;')
    body.append('  for (let i = 0; i < aall.length && acalls < 6; i += stride) {')
    body.append("    const res: string = await aall[i]((i * 137) % 99991, 'smpl');")
    body.append('    acc = (acc + res.length * 11) % 1000000007;')
    body.append('    acalls++;')
    body.append('  }')
    body.append("  return 'biz n=' + all.length.toString() + ' calls=' + calls.toString()")
    body.append("    + ' async=' + acalls.toString() + ' acc=' + acc.toString();")
    body.append('}')
    body.append('')
    body.append('export function heavyApiSample(): string {')
    body.append('  // 只抽样 SAFE 白名单包装（同步系统 API 可能在主线程长阻塞，全量仅存在于 abc）')
    for g in range(ng):
        body.append(f'  const safe{g}: ApiFn[] = asafe_{g:02d}();')
    joined = '[(]'.join(f'...safe{g}' for g in range(ng)) if False else None
    spread = ', '.join(f'...safe{g}' for g in range(ng))
    body.append(f'    const all: ApiFn[] = [{spread}];')
    body.append('  let acc: number = 0;')
    body.append('  let calls: number = 0;')
    body.append('  for (let i = 0; i < all.length; i++) {')
    body.append('    const res: string = all[i]((i * 139) % 99991);')
    body.append('    acc = (acc + res.length * 13) % 1000000007;')
    body.append('    calls++;')
    body.append('  }')
    body.append("  return 'api safe=' + all.length.toString() + ' total=' + collectApi().length.toString()")
    body.append("    + ' acc=' + acc.toString();")
    body.append('}')
    body.append('')
    body.append('export async function heavyApiDynSample(max: number): Promise<string> {')
    body.append('  const all: ADynFn[] = collectApidyn();')
    body.append('  const picks: ADynFn[] = [];')
    body.append('  for (let i = 0; i < all.length && picks.length < max; i += 29) {')
    body.append('    picks.push(all[i]);')
    body.append('  }')
    body.append('  let ok: number = 0;')
    body.append('  let err: number = 0;')
    body.append('  for (const p of picks) {')
    body.append('    const r: string = await p((i * 163) % 99991);'.replace('(i * 163)', '(picks.indexOf(p) * 163)'))
    body.append("    if (r.indexOf('|err|') >= 0) { err++; } else { ok++; }")
    body.append('  }')
    body.append("  return 'apidyn n=' + all.length.toString() + ' ok=' + ok.toString()")
    body.append("    + ' err=' + err.toString();")
    body.append('}')
    body.append('')
    body.append('export function heavyKitSample(): string {')
    body.append('  const all: KitFn[] = collectKit();')
    body.append('  let acc: number = 0;')
    body.append('  for (let i = 0; i < all.length; i += 11) {')
    body.append('    const res: string = all[i]((i * 149) % 99991);')
    body.append('    acc = (acc + res.length * 17) % 1000000007;')
    body.append('  }')
    body.append("  return 'kit n=' + all.length.toString() + ' acc=' + acc.toString();")
    body.append('}')
    body.append('')
    body.append('export async function heavyKitDynSample(max: number): Promise<string> {')
    body.append('  const all: DKFn[] = collectKitdyn();')
    body.append('  const picks: DKFn[] = [];')
    body.append('  for (let i = 0; i < all.length && picks.length < max; i += 7) {')
    body.append('    picks.push(all[i]);')
    body.append('  }')
    body.append('  let ok: number = 0;')
    body.append('  let err: number = 0;')
    body.append('  let s: number = 0;')
    body.append('  for (const p of picks) {')
    body.append('    const r: string = await p((s * 151) % 99991);')
    body.append('    s++;')
    body.append("    if (r.indexOf('|err|') >= 0) { err++; } else { ok++; }")
    body.append('  }')
    body.append("  return 'kitdyn n=' + all.length.toString() + ' ok=' + ok.toString()")
    body.append("    + ' err=' + err.toString();")
    body.append('}')
    body.append('')
    body.append('export function heavyCounts(): string {')
    body.append("  return 'biz=' + collectBiz().length.toString()")
    body.append("    + ' biza=' + collectBiza().length.toString()")
    body.append("    + ' api=' + collectApi().length.toString()")
    body.append("    + ' kit=' + collectKit().length.toString()")
    body.append("    + ' kitdyn=' + collectKitdyn().length.toString();")
    body.append('}')
    return '\n'.join(body) + '\n'


# ---------------- main ----------------

def hygiene(all_text: str, consts: list[str], tokens: list[str]) -> None:
    for c in consts:
        if len(c) >= 8 and c in all_text:
            raise SystemExit(f'FP 黑名单命中常量: {c!r}')
    for t in tokens:
        if len(t) >= 5 and t in all_text:
            raise SystemExit(f'FP 黑名单命中调用 token: {t!r}')


def main() -> int:
    catalog = json.loads(CATALOG.read_text(encoding='utf-8'))
    consts, tokens = load_banned()
    excluded = excluded_modules(catalog['apis'], tokens)
    written = 0
    named_funcs = 0
    d = ETS / 'farm' / 'biz'
    d.mkdir(parents=True, exist_ok=True)
    for f in d.glob('*.ts'):
        f.unlink()
    for i in range(BIZ_FILES):
        (d / f'Biz{i:04d}.ts').write_text(gen_biz_file(i), encoding='utf-8')
        written += 1
        named_funcs += BIZ_FUNCS + (BIZ_FUNCS // BIZ_ASYNC_EVERY) + 2

    d = ETS / 'farm' / 'apiwrap'
    d.mkdir(parents=True, exist_ok=True)
    for f in d.glob('*.ts'):
        f.unlink()
    api_files, dyn_names = gen_api_files(catalog, excluded)
    for name, text in api_files:
        (d / name).write_text(text, encoding='utf-8')
        written += 1
        named_funcs += text.count('export function')
    print(f'  api_dyn_modules={len(dyn_names)}')
    n_api_files = len([f for f, _ in api_files if f != 'OvwDyn.ts'])

    d = ETS / 'farm' / 'kitwrap'
    d.mkdir(parents=True, exist_ok=True)
    for f in d.glob('*.ts'):
        f.unlink()
    for name, text in gen_kit_files(catalog, excluded, tokens):
        (d / name).write_text(text, encoding='utf-8')
        written += 1
        named_funcs += text.count('export function')

    d = ETS / 'farm' / 'ui'
    d.mkdir(parents=True, exist_ok=True)
    for f in list(d.glob('*.ets')) + list(d.glob('*.ts')):
        f.unlink()
    for name, text in gen_ui_files():
        (d / name).write_text(text, encoding='utf-8')
        written += 1
    (d / 'UiStage.ets').write_text(gen_ui_stage(), encoding='utf-8')
    written += 1
    named_funcs += UI_STRUCTS * 5

    (ETS / 'farm' / 'index.ts').write_text(gen_index(n_api_files), encoding='utf-8')
    written += 1

    # FP 卫生自检
    all_text: list[str] = []
    for p in (ETS / 'farm').rglob('*.ts'):
        all_text.append(p.read_text(encoding='utf-8'))
    for p in (ETS / 'farm').rglob('*.ets'):
        all_text.append(p.read_text(encoding='utf-8'))
    hygiene('\n'.join(all_text), consts, tokens)

    n_open = sum(1 for kname, k in catalog['kits'].items()
                 if k['origin'] == 'openharmony' and k['names'] and kname not in excluded
                 and not kit_excluded(kname, k, excluded, tokens))
    n_hms = sum(1 for kname, k in catalog['kits'].items()
                if k['origin'] == 'hms' and k['names'] and kname not in excluded
                and not kit_excluded(kname, k, excluded, tokens))
    print(f'gen_heavy_farm: files={written} named_funcs~={named_funcs}')
    print(f'  biz={BIZ_FILES}x{BIZ_FUNCS}(+async/{BIZ_ASYNC_EVERY}) api_files={n_api_files} '
          f'kit_open={n_open} kit_hms={n_hms} ui_structs={UI_STRUCTS}')
    print(f'  excluded_modules={len(excluded)} (manifest 黑名单 + 安全面收窄)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
