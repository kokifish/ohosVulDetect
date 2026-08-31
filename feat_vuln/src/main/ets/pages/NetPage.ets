import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdNet001 } from '../vulns/net/OVD-NET-001';
import { ovdNet001S } from '../vulns/net/OVD-NET-001S';
import { ovdNet002 } from '../vulns/net/OVD-NET-002';
import { ovdNet004Usage } from '../vulns/net/OVD-NET-004';
import { ovdNet005 } from '../vulns/net/OVD-NET-005';

@Entry
@Component
struct NetPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'cleartext / cert validation',
        subtitle: '(003 onSslErrorReceive-confirm 见 WebPage)',
        cases: [
          new Case('001 http-login', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet001('bench', 'Admin@123')),
          new Case('001S https', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet001S('bench', 'Admin@123')),
          new Case('002 ws-lan', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet002()),
          new Case('004 alwaysTrue', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet004Usage('api.bench.example')),
          new Case('005 emptyPins', (ctx: common.UIAbilityContext, log: (s: string) => void) => `pin ok=${ovdNet005('api.bench.example')}`)
        ]
      })

    }
    .height('100%')
  }
}
