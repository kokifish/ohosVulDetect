import { Case, DemoScaffold } from 'lib_common';
import { ovdAuth004 } from '../vulns/auth/OVD-AUTH-004';
import { ovdAuth005 } from '../vulns/auth/OVD-AUTH-005';
import { ovdAuth006 } from '../vulns/auth/OVD-AUTH-006';
import { ovdAuth002S, ovdAuth003S, ovdAuth004S, ovdAuth005S, ovdAuth006S } from '../vulns/auth/Twins';
import { common } from '@kit.AbilityKit';
import { ovdAuth001 } from '../vulns/auth/OVD-AUTH-001';
import { ovdAuth001S } from '../vulns/auth/OVD-AUTH-001S';
import { ovdAuth002 } from '../vulns/auth/OVD-AUTH-002';
import { ovdAuth003 } from '../vulns/auth/OVD-AUTH-003';

@Entry
@Component
struct AuthPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'auth / session / randomness',
        cases: [
          new Case('001 hardcoded', (ctx: common.UIAbilityContext, log: (s: string) => void) => `ovdAuth001('admin','Admin@123')=${ovdAuth001('admin', 'Admin@123')}`),
          new Case('001S salted', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth001S('admin', 'Admin@123')),
          new Case('002 license', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth002()),
          new Case('003 weakToken', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth003()),
          new Case('002S server-license', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth002S(true, false)),
          new Case('003S crypto-random', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth003S()),
          new Case('004 trust-client', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth004()),
          new Case('005 pay-ATL1', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth005()),
          new Case('006 fixed-challenge', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth006()),
          new Case('004S server-token', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth004S(true)),
          new Case('005S ATL3-bio', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth005S()),
          new Case('006S fresh-challenge', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth006S()),
        ]
      })

    }
    .height('100%')
  }
}
