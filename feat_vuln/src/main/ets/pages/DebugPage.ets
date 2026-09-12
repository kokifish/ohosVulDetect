import { Case, DemoScaffold } from 'lib_common';
import { ovdDebug001S, ovdDebug002S } from '../vulns/debug/Twins';
import { common } from '@kit.AbilityKit';
import { ovdDebug001 } from '../vulns/debug/OVD-DEBUG-001';
import { ovdDebug002 } from '../vulns/debug/OVD-DEBUG-002';

@Entry
@Component
struct DebugPage {
  @State admin: string = 'false';

  build() {
    Column() {
      DemoScaffold({
        status: `ovd_is_admin=${this.admin}`,
      title: 'debug leftovers',
        cases: [
          new Case('001 isDebug', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDebug001()),
          new Case('002 pin', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r = ovdDebug002('0000');
            this.admin = AppStorage.get<string>('ovd_is_admin') ?? 'false';
            return r;
          }),
          new Case('001S debuggable-gate', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDebug001S()),
          new Case('002S server-mfa', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDebug002S(false))
        ]
      })

    }
    .height('100%')
  }
}
