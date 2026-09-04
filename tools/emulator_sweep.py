#!/usr/bin/env python3
"""模拟器自动化遍历：进入每个 demo 页并点击全部按钮，收集 ✅/❌ 结果行。

用法：
  python3 tools/emulator_sweep.py feat_api   # 遍历 feat_api 列表（api-/ui-/lang- 页）
  python3 tools/emulator_sweep.py feat_vuln  # 遍历 feat_vuln 分类页（cat- 页）

前置：
  1. 已 `bm install` 对应包（API24 镜像装 emulator product，API26 镜像装 default product 均可，见 docs/BENCHMARK.md）；
  2. 模拟器已启动（API24: Emulator -start ovdbench；API26 镜像亦可）；
  3. hdc 路径默认取 DevEco SDK，可用环境变量 HDC 覆盖。

双环境自适应（启动时探测一次）：
  - API ≥ 26：`aa start` 拒绝 exported:false 的 ability（错误 10103001），改走 entry 壳路由
    （启动 EntryAbility → 点 "API Coverage"/"Vuln Challenges" 按钮）；
  - 分辨率按 `hidumper -s RenderService` 实测值做比例坐标滑动（新镜像 1320x2232，旧 1260x2720）。

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
SHELL_BTN = 'API Coverage'  # feat_api 模式的壳入口按钮文案；feat_vuln 模式改为 'Vuln Challenges'
SCREEN_W, SCREEN_H = 1260, 2720  # 探测失败时的回退分辨率
USE_SHELL_ROUTE = False


def sh(cmd):
    r = subprocess.run(f'{HDC} shell "{cmd}"', shell=True, capture_output=True, text=True, timeout=30)
    return r.stdout


def detect_env():
    """探测 API 版本与分辨率；API≥26 时启用壳路由。"""
    global SCREEN_W, SCREEN_H, USE_SHELL_ROUTE
    ver = sh("param get const.ohos.apiversion").strip()
    try:
        if int(ver) >= 26:
            USE_SHELL_ROUTE = True
    except ValueError:
        pass
    m = re.search(r'render resolution=(\d+)x(\d+)', sh("hidumper -s RenderService -a screen"))
    if m:
        SCREEN_W, SCREEN_H = int(m.group(1)), int(m.group(2))
    print(f"# env: api={ver or '?'} screen={SCREEN_W}x{SCREEN_H} shell_route={USE_SHELL_ROUTE}",
          file=sys.stderr)


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


def swipe_up(wait=1.5):
    """按分辨率比例上滑列表（不同镜像分辨率不同，绝对坐标会落进导航区）。"""
    subprocess.run(f'{HDC} shell "uitest uiInput swipe {SCREEN_W // 2} {int(SCREEN_H * 0.8)} '
                   f'{SCREEN_W // 2} {int(SCREEN_H * 0.2)} 300"', shell=True, capture_output=True)
    time.sleep(wait)


def goto_list():
    sh("aa force-stop com.koki.VD")
    time.sleep(1.0)
    if not USE_SHELL_ROUTE:
        sh(f"aa start -a {ABILITY} -b com.koki.VD")
        time.sleep(3.5)
        return
    sh("aa start -a EntryAbility -b com.koki.VD")
    time.sleep(4.5)
    for a in nodes(dump()):
        if SHELL_BTN in a.get('text', ''):
            click(*center(a['bounds']), 4.5)
            return
    print(f"# WARN: 壳入口按钮 {SHELL_BTN!r} 未找到", file=sys.stderr)


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
                swipe_up()
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
    detect_env()
    if mode == 'feat_vuln':
        ABILITY = 'VulnAbility'
        SHELL_BTN = 'Vuln Challenges'
        visit_rows(['cat-'], budget_seconds=600)
    else:
        visit_rows(['api-', 'ui-', 'lang-'], budget_seconds=1200)
    print(json.dumps(results, ensure_ascii=False, indent=1))
