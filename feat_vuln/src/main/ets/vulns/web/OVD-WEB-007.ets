// VULN: OVD-WEB-007 原生桥不校验页面来源域名，任意页可调用敏感桥方法（CWE-749/346）
import { webview } from '@kit.ArkWeb';
export function ovdWeb007(controller: webview.WebviewController, method: string): string {
  // bridge-no-origin-check：不比对 getUrl 的 host，直接分发（页面未就绪也不能掩盖漏洞信号）
  try {
    controller.runJavaScript(`${method}('bridge-no-origin-check')`);
  } catch (e) {
    // 分发失败属环境态（页面未加载），漏洞信号在无来源校验本身
  }
  return `bridge call dispatched: ${method} (bridge-no-origin-check)`;
}
