// ConnectivityKit：wifi/bluetooth 只读状态（isWifiActive/getIpInfo/bluetooth access.getState）。
// GET_WIFI_INFO 为 system_grant（module.json5 已声明）；蓝牙在模拟器上可能未启用，错误码进 ✅ 行。
import { wifi, access } from '@kit.ConnectivityKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct ConnDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'ConnectivityKit',
        cases: [
          new Case('wifi active', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              return `wifiActive=${wifi.isWifiActive()}`;
            } catch (e) {
              return `wifi-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('wifi ip info', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const ip = wifi.getIpInfo();
              return `ip=${ip.ipAddress} gw=${ip.gateway}`;
            } catch (e) {
              return `ip-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('bluetooth state', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              return `bt=${access.getState()}`;
            } catch (e) {
              return `bt-err=${(e as BusinessError).code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
