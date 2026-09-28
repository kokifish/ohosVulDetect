#!/usr/bin/env python3
"""FP-bait 隔离门禁：near-miss 陷阱常量与 manifest 规则常量必须双向不包含
（弱子串检测器区分的前提）；const-only 陷阱允许精确回声（AND 断链设计本体），
但须确认其 mimics 规则存在。bait 记录不得与 manifest 记录同源。

退出码：任一 FAIL → 1。
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def consts_of(det):
    out = []
    for c in det.get('constants', []):
        if isinstance(c, str) and len(c) >= 6:
            out.append(c)
    return out


def main() -> int:
    m = json.load(open(os.path.join(ROOT, 'groundtruth', 'manifest.json')))
    b = json.load(open(os.path.join(ROOT, 'groundtruth', 'bait.json')))
    by_id = {v['id']: v for v in m['vulns']}
    rule_consts, rule_sources = set(), set()
    for v in m['vulns']:
        rule_consts.update(consts_of(v.get('detection', {})))
        rule_sources.add(v['source'])

    fails, warns = [], []
    for c in b['cases']:
        if c['mimics'] not in by_id:
            fails.append(f"{c['id']}: mimics 目标 {c['mimics']} 不在 manifest")
        if c['source'] in rule_sources:
            fails.append(f"{c['id']}: bait 源与 manifest 记录同源")
        for bc in consts_of(c['signals']):
            if c['mode'] == 'near-miss':
                for rc in rule_consts:
                    if bc in rc or rc in bc:
                        fails.append(f"{c['id']}: 常量 {bc!r} 与规则常量 {rc!r} 存在包含关系")
                        break
        if c['mode'] == 'const-only':
            mimicked = consts_of(by_id[c['mimics']]['detection']) if c['mimics'] in by_id else []
            if not any(bc in mimicked or mc in [bc] for bc in consts_of(c['signals']) for mc in mimicked):
                warns.append(f"{c['id']}: const-only 常量未精确回声任何规则常量（设计意图核对）")

    print(f"== FP-bait 隔离自检：{len(b['cases'])} 陷阱 × 规则常量 {len(rule_consts)} 个")
    if fails:
        print('\nFAIL:')
        for f in fails:
            print(f"  {f}")
    if warns:
        print('\nWARN:')
        for w in warns:
            print(f"  {w}")
    if not fails and not warns:
        print('clean')
    print(f"\nresult: {'FAIL' if fails else 'OK'} (fail={len(fails)} warn={len(warns)})")
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(main())
