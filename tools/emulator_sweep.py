#!/usr/bin/env python3
"""模拟器自动化遍历：进入每个 demo 页并点击全部按钮，收集 ✅/❌ 结果行。

用法：
  python3 tools/emulator_sweep.py feat_api   # 遍历 feat_api 列表（api-/ui-/lang- 页）
  python3 tools/emulator_sweep.py feat_vuln  # 遍历 feat_vuln 分类页（cat- 页）

前置：
  1. `python3 build.py --product emulator` 已构建，且已在模拟器 `bm install`（见 docs/BENCHMARK.md）；
  2. 模拟器已启动（Emulator -start ovdbench -noWindow）；
  3. hdc 路径默认取 DevEco SDK，可用环境变量 HDC 覆盖。

输出：stdout JSON（{页面: [结果行]}），✅=调用成功，❌=调用返回 BusinessError（被页面捕获展示）。
"""
import json
import os
import re
import subprocess
import sys
import time

HDC = os.environ.get("HDC", "/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/toolchains/hdc")
ABILITY = 'ApiAbility'


def sh(cmd):
    r = subprocess.run(f'{HDC} shell "{cmd}"', shell=True, capture_output=True, text=True, timeout=30)
    return r.stdout


def dump():
    subprocess.run(f'{HDC} shell "uitest dumpLayout -p /data/local/tmp/l.json"', shell=True,
                   capture_output=True, timeout=30)
    subprocess.run(f'{HDC} file recv /data/local/tmp/l.json /tmp/ovd_sweep_l.json', shell=True,
                   capture_output=True, timeout=30)
    try:
        return json.load(open('/tmp/ovd_sweep_l.json'))
    except Exception:
        return []


def nodes(tree):
    out = []

    def walk(a):
        for x in a:
            out.append(x.get('attributes', {}))
            walk(x.get('children', []))

    walk(tree if isinstance(tree, list) else [tree])
    return out


def center(b):
    m = re.findall(r'\d+', b)
    x1, y1, x2, y2 = map(int, m[:4])
    return (x1 + x2) // 2, (y1 + y2) // 2


def click(x, y, wait=1.2):
    subprocess.run(f'{HDC} shell "uitest uiInput click {x} {y}"', shell=True, capture_output=True)
    time.sleep(wait)


def swipe(x1, y1, x2, y2, wait=1.0):
    subprocess.run(f'{HDC} shell "uitest uiInput swipe {x1} {y1} {x2} {y2} 300"', shell=True, capture_output=True)
    time.sleep(wait)


def goto_list():
    sh("aa force-stop com.koki.VD")
    time.sleep(1.0)
    sh(f"aa start -a {ABILITY} -b com.koki.VD")
    time.sleep(3.5)


results = {}
visited = set()


def run_page_buttons(page_name, max_btn=8):
    """在当前 demo 页点击所有 Button 并收集结果行。"""
    tree = dump()
    btns = [a for a in nodes(tree) if a.get('type') == 'Button' and a.get('clickable') == 'true']
    for b in btns[:max_btn]:
        x, y = center(b['bounds'])
        click(x, y, 2.2)
    time.sleep(1.5)
    tree = dump()
    lines = [a.get('text', '') for a in nodes(tree)
             if a.get('text', '') and ('✅' in a.get('text', '') or '❌' in a.get('text', '')
                                       or a.get('text', '').startswith('ev '))]
    results[page_name] = lines


def visit_rows(prefix_list, budget_seconds=600):
    t0 = time.time()
    goto_list()
    while time.time() - t0 < budget_seconds:
        tree = dump()
        rows = []
        for a in nodes(tree):
            t = a.get('text', '')
            if any(t.startswith(p) and t not in visited for p in prefix_list):
                rows.append((t, a['bounds']))
        if not rows:
            found = False
            for _try in range(4):
                swipe(630, 2300, 630, 600, wait=1.5)
                tree2 = dump()
                if any(a.get('text', '').startswith(p) and a.get('text', '') not in visited
                       for a in nodes(tree2) for p in prefix_list):
                    found = True
                    break
            if not found:
                break
            continue
        name = rows[0][0]
        x, y = center(rows[0][1])
        click(x, y, 2.0)
        run_page_buttons(name)
        visited.add(name)
        goto_list()


if __name__ == '__main__':
    mode = sys.argv[1] if len(sys.argv) > 1 else 'feat_api'
    if mode == 'feat_vuln':
        ABILITY = 'VulnAbility'
        visit_rows(['cat-'], budget_seconds=600)
    else:
        visit_rows(['api-', 'ui-', 'lang-'], budget_seconds=900)
    print(json.dumps(results, ensure_ascii=False, indent=1))
