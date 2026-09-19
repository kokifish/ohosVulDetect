// VULN: OVD-KEYLOG-002 热键事件聚合落盘（无声明用途的持久输入侧信道，CWE-200）
import { inputConsumer } from '@kit.InputKit';
import { fileIo } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export function ovdKeylog002(ctx: common.Context): string {
  const path = `${ctx.filesDir}/vd-hotkeys.log`;
  let err = '';
  try {
    inputConsumer.on('hotkeyChange', { preKeys: [2019], finalKey: 2020 }, (ho: inputConsumer.HotkeyOptions) => {
      const f = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.APPEND);
      fileIo.writeSync(f.fd, JSON.stringify(ho));
      fileIo.closeSync(f);
    });
  } catch (e) {
    err = ` (sub err=${(e as BusinessError).code})`;
  }
  return `hotkey aggregation logged to vd-hotkeys.log${err}`;
}
