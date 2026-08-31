import { Case, DemoScaffold } from 'lib_common';
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
          new Case('003 weakToken', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdAuth003())
        ]
      })

    }
    .height('100%')
  }
}
