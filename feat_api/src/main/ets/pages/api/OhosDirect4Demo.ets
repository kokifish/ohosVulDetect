// @ohos 直连面第四批：数据谓词 / 旧 dataAbility 助手 / 错误管理 / 埋点 / USB 枚举 / 窗口。
// 全部只读或可撤销，错误码内码化。
import dataSharePredicates from '@ohos.data.dataSharePredicates';
import dataAbility from '@ohos.data.dataAbility';
import errorManager from '@ohos.app.ability.errorManager';
import hiTraceMeter from '@ohos.hiTraceMeter';
import usbManager from '@ohos.usbManager';
import window from '@ohos.window';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct OhosDirect4Demo {
  build() {
    Column() {
      DemoScaffold({
        title: '@ohos direct face #4',
        cases: [
          new Case('dataSharePredicates', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const p = new dataSharePredicates.DataSharePredicates();
            p.equalTo('bench-field', 'bench-value').limit(2, 0);
            return `predicates built>${p !== undefined}`;
          }),
          new Case('dataAbility rdbPredicates', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const ap = new dataAbility.DataAbilityPredicates();
            ap.equalTo('bench-field', 'bench-value');
            const rp = dataAbility.createRdbPredicates('bench-table', ap);
            return `rdbPredicates built>${rp !== undefined}`;
          }),
          new Case('errorManager register', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const id = errorManager.on('error', {
              onUnhandledException: (message: string): void => {
              }
            });
            errorManager.off('error', id);
            return `errorManager on/off id=${id}`;
          }),
          new Case('hiTraceMeter marks', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            hiTraceMeter.startTrace('bench-direct4', 41);
            hiTraceMeter.traceByValue('bench-value', 41);
            hiTraceMeter.finishTrace('bench-direct4', 41);
            return 'hiTraceMeter begin/value/finish done';
          }),
          new Case('usbManager devices', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const devices = usbManager.getDevices();
            return `usb devices=${devices.length}`;
          }),
          new Case('window last', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const w = await window.getLastWindow(ctx);
            return `window id=${w.getWindowProperties().id}`;
          })
        ],
      })
    }
    .height('100%')
  }
}
