// InputKit/inputConsumer：按键事件订阅（on/off keyPressed，注册后立即退订）。
// KeyPressedConfig 仅支持音量键；订阅本身不产生持久状态，退订后无残留。
import { inputConsumer } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct InputMonDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'inputConsumer',
        cases: [
          new Case('hotkey on/off', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const hk: inputConsumer.HotkeyOptions = { preKeys: [2019], finalKey: 2020 };
              const cb = (ho: inputConsumer.HotkeyOptions) => {
                log(`ev hotkey ${JSON.stringify(ho)}`);
              };
              inputConsumer.on('hotkeyChange', hk, cb);
              inputConsumer.off('hotkeyChange', hk, cb);
              return `hotkey subscribe+unsubscribe ok`;
            } catch (e) {
              const err = e as BusinessError;
              log(`hotkey fail: ${err.code} ${err.message}`);
              return `hotkey-err=${err.code}`;
            }
          }),
          new Case('hotkey armed only', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const hk2: inputConsumer.HotkeyOptions = { preKeys: [2019], finalKey: 2021 };
              inputConsumer.on('hotkeyChange', hk2, (ho: inputConsumer.HotkeyOptions) => {
                log('ev hotkey fired');
              });
              inputConsumer.off('hotkeyChange', hk2, (ho: inputConsumer.HotkeyOptions) => {});
              return `hotkey armed+released ok`;
            } catch (e) {
              const err = e as BusinessError;
              log(`arm fail: ${err.code} ${err.message}`);
              return `arm-err=${err.code}`;
            }
          })
        ],
      })
    }
    .height('100%')
  }
}
