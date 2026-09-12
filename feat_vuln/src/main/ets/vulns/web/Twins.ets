// SAFE 孪生集合（web）：OVD-WEB-001S..007S（WebView 安全配置面），合并文件，勿手改。
import { webview } from '@kit.ArkWeb';

// SAFE: OVD-WEB-001S 发布包关闭 Web 调试（CWE-489 加固）
export function ovdWeb001S(): string {
  return 'web debugging off in release builds (no debug-access api call)';
}

// SAFE: OVD-WEB-002S 原生桥方法白名单，敏感能力不暴露（CWE-749 加固）
const BRIDGE_ALLOWLIST: string[] = ['getVersion', 'shareText'];
export function ovdWeb002S(method: string): boolean {
  return BRIDGE_ALLOWLIST.includes(method);
}

// SAFE: OVD-WEB-003S 用户输入经 encodeURIComponent 转义后才允许进入脚本侧（CWE-94 加固）
export function ovdWeb003S(userInput: string): string {
  return `safe payload: ${encodeURIComponent(userInput)}`;
}

// SAFE: OVD-WEB-004S 混合内容禁止：仅加载 https 资源（CWE-319 加固）
const MIXED: MixedMode = MixedMode.None;
export function ovdWeb004S(): string {
  return `mixed content mode=${MIXED}`;
}

// SAFE: OVD-WEB-005S 本地文件不进 WebView，仅 https 白名单域（CWE-79 加固）
const URL_ALLOWLIST: string[] = ['https://bench.example.com/home'];
export function ovdWeb005S(url: string): string {
  return URL_ALLOWLIST.includes(url) ? `load allowed: ${url}` : 'load refused: not in https allowlist';
}

// SAFE: OVD-WEB-006S 外部 URL 与白名单全等比较后才加载（CWE-601 加固）
const EXT_URL_ALLOWLIST: string[] = ['https://bench.example.com/help'];
export function ovdWeb006S(externalUrl: string): string {
  return EXT_URL_ALLOWLIST.includes(externalUrl) ? `load ok: ${externalUrl}` : 'external url refused';
}

// SAFE: OVD-WEB-007S 桥方法先校验当前页面 host 白名单再分发（CWE-749 加固）
const BRIDGE_HOSTS: string[] = ['bench.example.com'];
export function ovdWeb007S(controller: webview.WebviewController, method: string): string {
  let host = '';
  try {
    const u = controller.getUrl();
    host = u.replace('https://', '').replace('http://', '').split('/')[0];
  } catch (e) {
    return 'bridge refused: url unavailable';
  }
  if (!BRIDGE_HOSTS.includes(host)) {
    return `bridge refused: origin ${host} not allowlisted`;
  }
  return `bridge allowed for ${host}: ${method}`;
}
