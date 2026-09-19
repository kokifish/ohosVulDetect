#!/usr/bin/env python3
"""孪生 FP 静态自检门禁：漏洞检测规则信号 × 安全孪生，双面扫描。

背景：安全孪生与漏洞"同形"（同 API 族、相似常量）。若某孪生包含了某条漏洞规则的
全部或关键信号，按该规则字面匹配的检测器会把安全孪生误报为漏洞（FP）。oracle 因
"规则要求全中 + record 域判定"不受影响，但选择性弱的规则会让稍弱的检测器出 FP，
损害基准区分度。本脚本把重叠固化为可复现口径：

FAIL（任一命中即 exit 1）：
  - detection-FULL  孪生 detection 信号覆盖某漏洞规则的全部 call+constants
  - detection-CONST 孪生 detection 与漏洞规则共享任一常量（部分重叠也收紧）
  - source-FULL     漏洞规则的全部长常量（>= MIN_CONST_LEN）出现在孪生函数体内
  - source-MISSING  manifest 的孪生 function 在 source 文件中找不到（语料漂移）
WARN（仅报告，设计内相似或低风险）：
  - detection-CALL  仅共享 call 片段（孪生同形设计本性）
  - source-PARTIAL  部分长常量出现在孪生函数体内
说明：
  - 孪生已统一到各分类 Twins.ets（简化轮），source 面必须按 manifest 的 function
    字段提取孪生自身函数体，不能按文件粒度（会把同文件其他孪生的常量错算进来）。
  - 自有孪生（规则的配对孪生）仅豁免 call 级同形；常量级仍须隔离——漏洞规则常量
    出现在自己孪生的 detection/source 中同样是"稍弱检测器 FP"隐患。
  - 常量比对为子串感知（较长方 >= MIN_CONST_LEN），防 'https://' 前缀这类包络差异；
    短常量（< MIN_CONST_LEN，如 'aes'、'md5'）在源码面属泛化 token，不参与匹配；
    detection 面为声明规则，不做长度过滤。

用法：python3 tools/check_twin_fp.py
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MIN_CONST_LEN = 10


def func_body(path, fn):
    """提取 export function <fn> 的函数体（到下一个行首 '}'）；找不到返回 None。"""
    if not os.path.exists(path):
        return None
    src = open(path, encoding='utf-8').read()
    m = re.search(r'^export (?:async )?function %s\b' % re.escape(fn), src, re.M)
    if not m:
        return None
    end = src.find('\n}', m.start())
    return src[m.start():end if end != -1 else len(src)]


def signals(entry):
    d = entry['detection']
    return set(d.get('call') or []), set(str(c) for c in (d.get('constants') or []))


def const_hit(rule_consts, cand):
    """子串感知常量重叠：规则常量与候选（常量或源码文本）包含即命中，
    较长方须 >= MIN_CONST_LEN（排除 'aes'/'md5' 类泛化 token 噪声）。"""
    out = set()
    for c in rule_consts:
        if isinstance(cand, str):
            # 源码文本面：直接子串
            if len(c) >= MIN_CONST_LEN and c in cand:
                out.add(c)
        else:
            # detection 面：与孪生常量做双向子串
            for t in cand:
                if max(len(c), len(t)) >= MIN_CONST_LEN and (c in t or t in c):
                    out.add(c)
    return out


def main():
    m = json.load(open(os.path.join(ROOT, 'groundtruth', 'manifest.json')))
    vulns = [v for v in m['vulns'] if v.get('expected')]
    twins = [t for t in m['vulns'] if not t.get('expected')]

    fails, warns = [], []
    bodies = {}
    for t in twins:
        bodies[t['id']] = func_body(os.path.join(ROOT, t['source']), t['function'])

    for t in twins:
        tc, tk = signals(t)
        tb = bodies[t['id']]
        if tb is None:
            fails.append(f"source-MISSING {t['id']}: {t['function']} not found in {t['source']}")
        own = None
        for v in vulns:
            if v.get('twin') == t['id']:
                own = v  # 自有孪生：call 级同形是设计，常量级仍须隔离
                continue
            vc, vk = signals(v)
            long_vk = {c for c in vk if len(c) >= MIN_CONST_LEN}
            # detection 面（跨孪生）
            if vc and vk and vc <= tc and vk <= tk:
                fails.append(f"detection-FULL {t['id']} 完全覆盖规则 {v['id']} "
                             f"(calls={sorted(vc & tc)} consts={sorted(vk & tk)})")
            elif const_hit(vk, tk):
                fails.append(f"detection-CONST {t['id']} ~ 规则 {v['id']} 共享常量 "
                             f"{sorted(const_hit(vk, tk))}")
            elif vc & tc:
                warns.append(f"detection-CALL {t['id']} ~ 规则 {v['id']} 共享 call {sorted(vc & tc)}")
            # source 面（跨孪生）
            if tb is not None:
                hit = sorted(const_hit(long_vk, tb))
                if hit:
                    tag = 'source-FULL' if hit == sorted(long_vk) else 'source-PARTIAL'
                    line = f"{tag} {t['id']} ~ 规则 {v['id']} 函数体内命中 {hit}"
                    (fails if tag == 'source-FULL' else warns).append(line)
        # 自有孪生的常量隔离（漏洞规则常量不得出现在自己的孪生里）
        if own is not None:
            oc, ok = signals(own)
            long_ok = {c for c in ok if len(c) >= MIN_CONST_LEN}
            if const_hit(ok, tk):
                fails.append(f"detection-CONST {t['id']} ~ 自有规则 {own['id']} 共享常量 "
                             f"{sorted(const_hit(ok, tk))}")
            if tb is not None:
                hit = sorted(const_hit(long_ok, tb))
                if hit:
                    tag = 'source-FULL' if hit == sorted(long_ok) else 'source-PARTIAL'
                    line = f"{tag} {t['id']} ~ 自有规则 {own['id']} 函数体内命中 {hit}"
                    (fails if tag == 'source-FULL' else warns).append(line)

    print(f"== 孪生 FP 自检：{len(vulns)} 规则 × {len(twins)} 孪生 "
          f"(MIN_CONST_LEN={MIN_CONST_LEN}) ==")
    if fails:
        print(f"\nFAIL ({len(fails)}):")
        for f in fails:
            print(f"  {f}")
    if warns:
        print(f"\nWARN ({len(warns)}):")
        for w in warns:
            print(f"  {w}")
    if not fails and not warns:
        print("clean: 无任何重叠")
    print(f"\nresult: {'FAIL' if fails else 'OK'}"
          f" (fail={len(fails)} warn={len(warns)})")
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(main())
