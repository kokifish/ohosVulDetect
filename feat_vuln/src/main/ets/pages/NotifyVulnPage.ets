import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdNotif001 } from '../vulns/notify/OVD-NOTIF-001';
import { ovdNotif001S } from '../vulns/notify/Twins';

// 通知面：NOTIF-001 敏感载荷上通知栏（锁屏/通知中心/穿戴可读）；001S 聚合摘要。
@Entry
@Component
struct NotifyVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'notification content exposure',
        cases: [
          new Case('notif-001 secret publish', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdNotif001(ctx)),
          new Case('notif-001S digest publish', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdNotif001S(ctx))
        ]
      })
    }
    .height('100%')
  }
}
