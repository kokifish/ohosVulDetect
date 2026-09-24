import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdWifi001 } from '../vulns/wifi/OVD-WIFI-001';
import { ovdWifi001S } from '../vulns/wifi/Twins';

// Wi-Fi 凭据面：WIFI-001 热点口令硬编码+明文偏好双落盘；001S 只记信号分桶。
@Entry
@Component
struct WifiVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'wifi credential exposure',
        cases: [
          new Case('wifi-001 psk plaintext', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdWifi001(ctx)),
          new Case('wifi-001S signal bucket', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdWifi001S(ctx))
        ]
      })
    }
    .height('100%')
  }
}
