// SAFE: OVD-WEB-008S 无条件显式关闭 Web 调试（无条件分支门）。
// 独立文件：与 WEB-001S 的 record 域隔离（同文件共享会令 001S 被误判 FP）。
import { webview } from '@kit.ArkWeb';

export function ovdWeb008S(controller: webview.WebviewController, tag: string): string {
  webview.WebviewController.setWebDebuggingAccess(false);
  return 'web008S debug explicitly off (tag ignored)';
}
