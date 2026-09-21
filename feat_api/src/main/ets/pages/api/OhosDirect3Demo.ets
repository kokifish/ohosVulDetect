// @ohos 直连面第三批：bundle 元信息 / 多模态输入设备 / 配置常量 / 电源 / 媒体查询 /
// 调试器 / 故障日志 / 检测规则。只读或可撤销，错误码内码化。
// 注：appRecovery 有意不落——enableAppRecovery 会改变应用崩溃行为（自动重启），
// 恰好掩盖基准依赖的 jscrash 证据，与本基准语义冲突。
import bundleManager from '@ohos.bundle.bundleManager';
import inputDevice from '@ohos.multimodalInput.inputDevice';
import power from '@ohos.power';
import mediaquery from '@ohos.mediaquery';
import hidebug from '@ohos.hidebug';
import faultLogger from '@ohos.faultLogger';
import hichecker from '@ohos.hichecker';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct OhosDirect3Demo {
  build() {
    Column() {
      DemoScaffold({
        title: '@ohos direct face #3',
        cases: [
          new Case('bundle self', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const info = bundleManager.getBundleInfoForSelfSync(0);
            return `bundle name=${info.name} ver=${info.versionCode}`;
          }),
          new Case('inputDevice list', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const devices = await inputDevice.getDeviceList();
            return `inputDevice count=${devices.length}`;
          }),
          new Case('power state', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const on: boolean = await power.isScreenOn();
            return `power screenOn=${on} active=${power.isActive()}`;
          }),
          new Case('mediaquery match', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const listener = mediaquery.matchMediaSync('(width>=300)');
            return `mediaquery matches=${listener.matches}`;
          }),
          new Case('hidebug cpu', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const cpu: number = hidebug.getCpuUsage();
            return `hidebug cpu>=0>${cpu >= 0}`;
          }),
          new Case('faultLogger query', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const logs = await faultLogger.querySelfFaultLog(faultLogger.FaultType.CPP_CRASH);
            return `faultLog entries=${logs.length}`;
          }),
          new Case('hichecker contains', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const contained: boolean = hichecker.contains(hichecker.RULE_CAUTION_PRINT_LOG);
            return `hichecker contained=${contained}`;
          })
        ],
      })
    }
    .height('100%')
  }
}
