// @ohos 直连面第二批：设备/系统状态只读 + UI 工具库模块（无 Kit 归属或直连即计数）。
// 全部确定性/只读，错误码内码化。
import deviceInfo from '@ohos.deviceInfo';
import batteryInfo from '@ohos.batteryInfo';
import thermal from '@ohos.thermal';
import screenLock from '@ohos.screenLock';
import display from '@ohos.display';
import curves from '@ohos.curves';
import matrix4 from '@ohos.matrix4';
import measure, { MeasureOptions } from '@ohos.measure';
import animator from '@ohos.animator';
import promptAction from '@ohos.promptAction';
import process from '@ohos.process';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct OhosDirect2Demo {
  build() {
    Column() {
      DemoScaffold({
        title: '@ohos direct face #2',
        cases: [
          new Case('deviceInfo', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return `device productModel=${deviceInfo.productModel} api=${deviceInfo.sdkApiVersion}`;
          }),
          new Case('batteryInfo', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return `battery soc=${batteryInfo.batterySOC} charging=${batteryInfo.chargingStatus}`;
          }),
          new Case('thermal level', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return `thermal level=${thermal.getLevel()}`;
          }),
          new Case('screenLock state', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const locked: boolean = await screenLock.isScreenLocked();
            return `screenLock locked=${locked}`;
          }),
          new Case('display list', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const dsps = await display.getAllDisplays();
            return `display count=${dsps.length}`;
          }),
          new Case('curves spring', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const c = curves.springMotion(0.2, 0.8);
            return `curves spring created>${c !== undefined}`;
          }),
          new Case('matrix4 identity', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const m = matrix4.identity().translate({ x: 3, y: 0 });
            return `matrix4 built>${m !== undefined}`;
          }),
          new Case('measure text', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const opts: MeasureOptions = { textContent: 'bench-measure', fontSize: 14 };
            const w: number = measure.measureText(opts);
            return `measure width>${w > 0} w=${w}`;
          }),
          new Case('animator create', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const a = await animator.create({
              duration: 100,
              delay: 0,
              easing: 'linear',
              iterations: 1,
              fill: 'none',
              direction: 'normal',
              begin: 0,
              end: 100
            });
            a.cancel();
            return 'animator created+cancel';
          }),
          new Case('promptAction toast', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            promptAction.showToast({ message: 'bench-direct2', duration: 300 });
            return 'toast shown';
          }),
          new Case('process ids', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return `process uid=${process.uid} pid>${process.pid > 0}`;
          })
        ],
      })
    }
    .height('100%')
  }
}
