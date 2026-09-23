// VULN: OVD-WEB-008 条件式调试开关——仅当构建标签不等于硬编码字符串时开启 Web 调试：
// 比较方向一翻、标签一改即开，属"表面有门禁"的调试残留（CWE-489/1295）。
// 孪生 008S 无条件显式关闭。
import { webview } from '@kit.ArkWeb';

const RELEASE_TAG = 'ovd-release-tag-4c2e';

export function ovdWeb008(controller: webview.WebviewController, tag: string): string {
  if (tag !== RELEASE_TAG) {
    webview.WebviewController.setWebDebuggingAccess(true);
    return 'web008 debug enabled (tag mismatch)';
  }
  return 'web008 debug gated by tag';
}
