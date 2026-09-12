import { Case, DemoScaffold } from 'lib_common';
import { ovdNet002S, ovdNet003S, ovdNet004S, ovdNet005S } from '../vulns/net/Twins';
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
          new Case('005 emptyPins', (ctx: common.UIAbilityContext, log: (s: string) => void) => `pin ok=${ovdNet005('api.bench.example')}`),
          new Case('002S wss', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet002S('bench.example')),
          new Case('003S cancel', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet003S()),
          new Case('004S pin-verify', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet004S('api.bench.example', ['api.bench.example|sha256/AAAA'], 'sha256/AAAA')),
          new Case('005S pins', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNet005S('api.bench.example'))
        ]
      })

    }
    .height('100%')
  }
}
