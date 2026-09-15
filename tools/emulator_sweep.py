#!/usr/bin/env python3
"""模拟器自动化遍历：进入每个 demo 页并点击全部按钮，收集 ✅/❌ 结果行。

用法：
  python3 tools/emulator_sweep.py feat_api   # 遍历 feat_api 列表（api-/ui-/lang- 页）
  python3 tools/emulator_sweep.py feat_vuln  # 遍历 feat_vuln 分类页（cat- 页）
  python3 tools/emulator_sweep.py feat_vuln 1800   # 第二参数覆盖遍历预算（秒）

前置：
  1. 已 `bm install` 对应包（API24 镜像装 api24 包，API26 镜像装 api26 包，见 docs/BENCHMARK.md）；
  2. 模拟器已启动（API24: Emulator -start ovdbench；API26 镜像亦可）；
  3. hdc 路径默认取 DevEco SDK，可用环境变量 HDC 覆盖。

双环境自适应（启动时探测一次）：
  - API ≥ 26：`aa start` 拒绝 exported:false 的 ability（错误 10103001），改走 entry 壳路由
    （启动 EntryAbility → 点 "API Coverage"/"Vuln Challenges" 按钮）；
  - 分辨率按 `hidumper -s RenderService` 实测值做比例坐标滑动（新镜像 1320x2232，旧 1260x2720）。

按钮遍历按文本去重后全量点击（此前上限 8 个，大页尾部案例漏遍历），每轮点击后即采集
结果行并在日志区翻屏合并——DemoScaffold 结果区是 layoutWeight 滚动区，案例多时尾部
✅/❌ 行在首屏外。

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
    swipe_region(0.8, 0.2, wait)


def swipe_region(y_from_frac, y_to_frac, wait=1.5):
    """在屏幕竖向指定比例区间内上滑（0.8→0.2 即列表翻页，0.45→0.15 即按钮区小翻）。"""
    subprocess.run(f'{HDC} shell "uitest uiInput swipe {SCREEN_W // 2} {int(SCREEN_H * y_from_frac)} '
                   f'{SCREEN_W // 2} {int(SCREEN_H * y_to_frac)} 300"', shell=True, capture_output=True)
    time.sleep(wait)


def dismiss_dialog():
    """关掉挡屏的系统对话框（如无浏览器镜像上 openLink 弹的「No options to open with」）。
    该对话框属系统进程，goto_list 的 force-stop 关不掉，会盖住壳入口按钮导致遍历提前终止。"""
    tree = dump()
    hit = [t for t in (a.get('text', '') for a in nodes(tree))
           if t in ('No options to open with', '选择打开方式', '无法打开')]
    if not hit:
        return False
    for a in nodes(tree):
        if a.get('text', '') in ('OK', '确定'):
            click(*center(a['bounds']), 1.2)
            return True
    return False


def goto_list():
    sh("aa force-stop com.koki.VD")
    time.sleep(1.0)
    if not USE_SHELL_ROUTE:
        sh(f"aa start -a {ABILITY} -b com.koki.VD")
        time.sleep(3.5)
        return
    sh("aa start -a EntryAbility -b com.koki.VD")
    time.sleep(4.5)
    dismiss_dialog()
    for a in nodes(dump()):
        if SHELL_BTN in a.get('text', ''):
            click(*center(a['bounds']), 4.5)
            return
    print(f"# WARN: 壳入口按钮 {SHELL_BTN!r} 未找到", file=sys.stderr)


results = {}
visited = set()


def collect_result_lines(tree, seen):
    for a in nodes(tree):
        t = a.get('text', '')
        if t and ('✅' in t or '❌' in t or t.startswith('ev ')):
            seen.add(t)


def collect_with_settle(seen, max_polls=6, stable_needed=2):
    """轮询采集：重电池页（如 lang-runtime selfcheck 全电池重跑）结果行落地慢，
    单次 dump 会边界错过。连续 stable_needed 次无新行即视为沉降。"""
    stable = 0
    for _ in range(max_polls):
        n = len(seen)
        collect_result_lines(dump(), seen)
        stable = stable + 1 if len(seen) == n else 0
        if stable >= stable_needed:
            return
        time.sleep(3.0)


def page_anchor():
    """页面锚文本 = dump 顺序首个含字母的文本（页标题最先渲染；时钟浮层节点在最后）。"""
    for a in nodes(dump()):
        t = a.get('text', '')
        if t and any(c.isalpha() for c in t):
            return t
    return ''


def reopen_page(prefix):
    """回到列表并重新进入指定页（用例内真实导航跳走后的恢复路径）。"""
    goto_list()
    for _ in range(10):
        hit = [a for a in nodes(dump()) if a.get('text', '').startswith(prefix)]
        if hit:
            click(*center(hit[0]['bounds']), 2.5)
            return True
        swipe_up()
    return False


PERM_ALLOW = ('始终允许', '仅本次允许', '允许', 'Allow')  # 优先常驻授权


def post_click(anchor):
    """点击后处置：吞系统对话框 + 自动允许权限/通知弹窗；返回是否仍在目标页。"""
    tree = dump()
    texts = [a.get('text', '') for a in nodes(tree)]
    if any(t in ('No options to open with', '选择打开方式', '无法打开') for t in texts):
        for a in nodes(tree):
            if a.get('text', '') in ('OK', '确定'):
                click(*center(a['bounds']), 1.2)
                tree = dump()
                texts = [a.get('text', '') for a in nodes(tree)]
                break
    if any(t in PERM_ALLOW for t in texts):
        # 权限/通知授权弹窗：基准要求授权态（更多 API 面可达），按优先级点击允许
        for want in PERM_ALLOW:
            for a in nodes(tree):
                if a.get('text', '') == want and a.get('type') == 'Button':
                    click(*center(a['bounds']), 1.5)
                    tree = dump()
                    texts = [a.get('text', '') for a in nodes(tree)]
                    break
            if not any(t in PERM_ALLOW for t in texts):
                break
    return (not anchor) or anchor in texts


def page_signature():
    # 忽略无字母的文本（系统时钟浮层每分钟跳动会造成假"变化"）
    return tuple(sorted(a.get('text', '') for a in nodes(dump())
                        if a.get('text', '') and any(c.isalpha() for c in a['text'])))


def click_verified(b, waits=(3.0, 10.0, 20.0)):
    """点击并验证生效（页面文本签名变化）。

    实测：注入点击在 UI 线程忙时（重电池 handler + GC 尾巴，可长达 ~20s）会被静默吞掉，
    空闲后重试即恢复。逐级加大间隔重试；轮询窗口本身就是页面空闲期。
    页面文本无任何变化的点击（含时钟每分钟跳动造成的偶发假阳性）由外层多轮补击兜底。
    """
    for w in waits:
        before = page_signature()
        click(*center(b['bounds']), w)
        for _ in range(6):
            if page_signature() != before:
                return True
            time.sleep(2.0)
    return False


def run_page_buttons(page_name, max_rounds=2):
    """点击当前页全部 Button（快速点击 + 兜底验证式重击），合并收集结果行。

    三个已知缺陷的修复：
    1. 旧版只点前 8 个按钮——大页（如 CryptoPage 14 案例）尾部案例漏遍历；
    2. 注入点击在 UI 线程忙时会被静默吞掉（重电池 handler + GC 尾巴可长达 ~20s）；
    3. 日志区是 layoutWeight 滚动区，多行结果首屏外的 ✅/❌ 采不到。
    快路径：普通间隔顺序点击 + 补击轮（绝大多数页在此收敛，耗时与旧版同量级）。
    兜底：应有信号却 0 行（lang 页有 selfcheck 按钮、api/cat 页有 Case 按钮）才逐按钮
    做长间隔验证式重击——空闲窗口正是被吞点击的解药。
    """
    clicked_known = set()
    seen = set()
    prev = -1
    time.sleep(2.0)  # 进页过渡沉降：过早点首屏 dump 会拿到列表页残留按钮而串页
    anchor = page_anchor()
    # 进页先做验证式自检：selfcheck 的全电池重跑依赖干净堆，且导航后 UI 忙会吞点击——
    # click_verified 的递增空闲窗口正好同时解决两者；等电池跑过再点就永远出不来了。
    sc_btn = None
    for a in nodes(dump()):
        if a.get('type') == 'Button' and 'selfcheck' in a.get('text', ''):
            sc_btn = a
            break
    if page_name.startswith('lang-') and sc_btn is not None:
        click_verified(sc_btn)
        collect_with_settle(seen)
    for rnd in range(max_rounds):
        tree = dump()
        btns = [a for a in nodes(tree)
                if a.get('type') == 'Button' and a.get('clickable') == 'true' and a.get('text', '')]
        new = [b for b in btns if b['text'] not in clicked_known]
        clicked_known.update(b['text'] for b in new)
        targets = btns if (rnd > 0 or len(new) < len(btns)) else new
        # selfcheck 按钮优先：其全电池重跑依赖干净堆，须先于其他电池执行
        targets = sorted(targets, key=lambda b: 0 if 'selfcheck' in b.get('text', '') else 1)
        for b in targets:
            click(*center(b['bounds']), 3.0)
            if not post_click(anchor):
                # 部分漏洞用例会真实导航跳页（如 INJ-004 无白名单 pushUrl，漏洞语义本身）：
                # 重回本页继续点剩余按钮，已出信号按集合去重不受影响
                if not reopen_page(page_name):
                    break
                time.sleep(2.0)
                anchor = page_anchor()
        collect_with_settle(seen)
        if rnd >= 1 and not new and len(seen) == prev:
            break
        prev = len(seen)
    if not seen or (not page_name.startswith(('lang-', 'ui-'))):
        # api/cat 页每个 Case 按钮都应出一条信号：行数 < 按钮数 = 有点击被吞，验证式补击；
        # lang 页仅 selfcheck 出信号（进页已优先处理）；ui 页 by design 无 ✅/❌ 行。
        tree = dump()
        btns = [a for a in nodes(tree)
                if a.get('type') == 'Button' and a.get('clickable') == 'true' and a.get('text', '')]
        if page_name.startswith('lang-'):
            fallback = [] if seen else [b for b in btns if 'selfcheck' in b.get('text', '')]
        elif page_name.startswith('ui-'):
            fallback = []
        else:
            fallback = btns if len(seen) < len(btns) else []
        for b in fallback:
            click_verified(b)
            collect_with_settle(seen)
    stall = 0
    for _ in range(8):
        collect_result_lines(dump(), seen)
        n = len(seen)
        swipe_region(0.85, 0.45)
        stall = stall + 1 if len(seen) == n else 0
        if stall >= 2:
            break
    dismiss_dialog()
    results[page_name] = sorted(seen)


LIST_HEADERS = ('API 域覆盖', '漏洞挑战')  # 列表页就绪信号


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
            for _try in range(10):
                swipe_up()
                tree2 = dump()
                if any(a.get('text', '').startswith(p) and a.get('text', '') not in visited
                       for a in nodes(tree2) for p in prefix_list):
                    found = True
                    break
            if not found:
                # 列表加载/滚动抖动 + 冷启动 UI 忙时滑动注入也会被吞：重启应用复核，
                # 复核前等列表就绪（模块加载慢，就绪信号 = 页头文本），三轮不成才放弃
                ok = False
                for _attempt in range(3):
                    goto_list()
                    for _ready in range(6):
                        if any(a.get('text', '') in LIST_HEADERS for a in nodes(dump())):
                            break
                        time.sleep(3.0)
                    time.sleep(2.0)
                    tree2 = dump()
                    if any(a.get('text', '').startswith(p) and a.get('text', '') not in visited
                           for a in nodes(tree2) for p in prefix_list):
                        ok = True
                        break
                if ok:
                    continue
                print('# WARN: 未发现未访问行，遍历结束', file=sys.stderr)
                break
            continue
        name = rows[0][0]
        x, y = center(rows[0][1])
        click(x, y, 2.0)
        print(f'# visit {name}', file=sys.stderr)
        run_page_buttons(name)
        visited.add(name)
        goto_list()


if __name__ == '__main__':
    mode = sys.argv[1] if len(sys.argv) > 1 else 'feat_api'
    budget_override = int(sys.argv[2]) if len(sys.argv) > 2 else None
    detect_env()
    if mode == 'feat_vuln':
        ABILITY = 'VulnAbility'
        SHELL_BTN = 'Vuln Challenges'
        visit_rows(['cat-'], budget_seconds=budget_override or 900)
    else:
        visit_rows(['api-', 'ui-', 'lang-'], budget_seconds=budget_override or 1200)
    print(json.dumps(results, ensure_ascii=False, indent=1))
