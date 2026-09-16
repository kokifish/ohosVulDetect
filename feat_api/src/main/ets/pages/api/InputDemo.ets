// InputKit：输入设备枚举（getDeviceList/getDevice/getKeyboardType）。
// 无权限、无 UI：确定性查询，模拟器可全链路验证。
import { inputDevice } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct InputDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'InputKit',
        cases: [
          new Case('device list', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const ids = await inputDevice.getDeviceList();
              return `devices=${ids.length} ids=${ids.join(',')}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`list fail: ${err.code} ${err.message}`);
              return `list-err=${err.code}`;
            }
          }),
          new Case('device detail', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const ids = await inputDevice.getDeviceList();
              if (ids.length === 0) {
                return 'no-device';
              }
              const d = await inputDevice.getDevice(ids[0]);
              return `name=${d.name} sources=${d.sources.length}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`detail fail: ${err.code} ${err.message}`);
              return `detail-err=${err.code}`;
            }
          }),
          new Case('keyboard type', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const ids = await inputDevice.getDeviceList();
              if (ids.length === 0) {
                return 'no-device';
              }
              const kt = await inputDevice.getKeyboardType(ids[0]);
              return `keyboardType=${kt}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`kbd fail: ${err.code} ${err.message}`);
              return `kbd-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
