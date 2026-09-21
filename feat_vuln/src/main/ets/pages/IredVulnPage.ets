import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdIred001 } from '../vulns/ired/OVD-IRED-001';
import { ovdIred001S } from '../vulns/ired/Twins';

// Intent 重定向面：IRED-001 外部投喂字段原样转投 startAbility；001S 白名单门控。
@Entry
@Component
struct IredVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'intent redirection',
        cases: [
          new Case('ired-001 forward untrusted', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdIred001(ctx, 'ovd.ired.forward', 'ovd://ired/bench-target')),
          new Case('ired-001S allowlist', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdIred001S(ctx, 'ovd.ired.forward', 'ovd://ired/bench-target'))
        ]
      })
    }
    .height('100%')
  }
}
