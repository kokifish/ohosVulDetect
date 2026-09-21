#!/usr/bin/env python3
"""docs/VULNS.md 总览表生成器：条数/CWE 从 groundtruth/manifest.json 聚合，
族主题散文维护在本脚本 FAMILY_DESC 内（单源）。生成物落在 VULNS.md 的
<!-- VULNS-OVERVIEW:BEGIN/END --> 标记之间，勿手改表体（改主题请改本脚本后重跑）。

用法：python3 tools/gen_vulns_overview.py
"""
import json
import pathlib
import re
from collections import OrderedDict

ROOT = pathlib.Path(__file__).resolve().parent.parent

# 族显示顺序与主题散文（单源）
FAMILY_DESC = OrderedDict([
    ('SECRET', '硬编码秘密/密钥（含反扫描重组变体）'),
    ('CRYPTO', '弱算法/弱模式/短密钥/固定 IV·nonce'),
    ('NET', '明文传输/证书校验绕过（含存储凭据回传链）'),
    ('WEB', 'WebView 调试/桥暴露/XSS/混合内容/文件访问/开放跳转/无来源校验桥'),
    ('INJ', 'SQL 注入/路径穿越/不安全反序列化导航'),
    ('STOR', '明文存储/低安全级数据库/PII 缓存'),
    ('LOG', '日志泄露令牌/口令'),
    ('IPC', 'exported 面/魔杖参数/TCP 后门/deeplink 穿越/事件提权'),
    ('PERM', '权限申请-不用'),
    ('PASTE', '剪贴板敏感数据（跨设备/常驻监听）'),
    ('PRIV', '设备指纹/持续定位外传（含读→传链）'),
    ('AUTH', '客户端鉴权/可预测令牌/userAuth 误用/跨设备信任'),
    ('DEBUG', '调试开关残留/后门 PIN'),
    ('CONF', '内网端点硬编码'),
    ('NATIVE', '.so 内嵌密钥/原生缓冲区溢出'),
    ('BACK', '备份开启 × 明文令牌'),
    ('FORM', '卡片路由开放跳转/消息未校验（鸿蒙特色）'),
    ('CERT', '自签证书/恒真门/pin 失效放行（DeviceCertificateKit）'),
    ('MEDIA', '相册枚举外传/静默写入/元数据拼接外传（MediaLibraryKit）'),
    ('KEYLOG', '全局热键监听/聚合落盘/join 批量外传（InputKit）'),
    ('DRM', '保护级别不校验/统计越权（DrmKit）'),
    ('SPEECH', '语音会话窃听/引擎滥用（CoreSpeechKit）'),
    ('A11Y', '无障碍态侦察/读屏情报收集（AccessibilityKit）'),
    ('BGTASK', '常驻后台任务掩护静默采集'),
    ('DLINK', '深链参数无白名单执行/开放跳转/子串令牌放行'),
    ('XMOD', '跨模块分布：HAR 硬编码主密钥·会话缓存链 / HSP 明文保险箱·恒真信任'),
    ('CEVT', '公共事件明文广播会话令牌（无订阅方权限门）'),
    ('NOTIF', '通知栏明文携带验证码/会话令牌（锁屏可读）'),
    ('IRED', '不可信 want 字段原样转投 startAbility'),
    ('PWDIN', '密码语义输入框 Normal 明文回显（UI 属性面）'),
])

BEGIN = '<!-- VULNS-OVERVIEW:BEGIN -->'
END = '<!-- VULNS-OVERVIEW:END -->'


def main():
    m = json.loads((ROOT / 'groundtruth' / 'manifest.json').read_text())
    fam = {}
    for v in m['vulns']:
        if not v['expected']:
            continue
        f = v['id'].split('-')[1]
        d = fam.setdefault(f, {'n': 0, 'cwe': []})
        d['n'] += 1
        for c in re.findall(r'CWE-(\d+)', v['cwe']):
            if c not in d['cwe']:
                d['cwe'].append(c)

    unknown = sorted(set(fam) - set(FAMILY_DESC))
    missing = sorted(f for f in FAMILY_DESC if f in fam and False)  # FAMILY_DESC 可含未用族
    if unknown:
        raise SystemExit(f'ERROR: manifest 出现未知族 {unknown}，请在 FAMILY_DESC 补主题后重跑')

    rows = ['| 族 | 条数 | 漏洞主题 | 主要 CWE |', '|---|---|---|---|']
    for f in FAMILY_DESC:
        if f not in fam:
            continue
        rows.append(f"| {f} | {fam[f]['n']} | {FAMILY_DESC[f]} | {'/'.join(fam[f]['cwe'])} |")
    total = sum(d['n'] for d in fam.values())
    table = '\n'.join(rows) + f'\n\n共 {len(fam)} 族 {total} 条（另有同数安全孪生，manifest 总条目 {len(m["vulns"])}）。'

    vp = ROOT / 'docs' / 'VULNS.md'
    s = vp.read_text()
    if BEGIN in s:
        s = re.sub(re.escape(BEGIN) + r'.*?' + re.escape(END), BEGIN + '\n' + table + '\n' + END, s, flags=re.S)
    else:
        # 首次接入：替换「## 总览」下第一张表
        mstart = s.index('## 总览')
        tstart = s.index('| 族 | 条数 |', mstart)
        tend = s.index('\n\n', s.index('|---', tstart))
        s = s[:tstart] + BEGIN + '\n' + table + '\n' + END + s[tend:]
    vp.write_text(s)
    print(f'overview regenerated: {len(fam)} families, {total} vulns')


if __name__ == '__main__':
    main()
