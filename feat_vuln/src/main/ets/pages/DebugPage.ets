import { Case, DemoScaffold } from 'lib_common';
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
          })
        ]
      })

    }
    .height('100%')
  }
}
