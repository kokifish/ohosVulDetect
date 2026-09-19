import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdKeylog001 } from '../vulns/keylog/OVD-KEYLOG-001';
import { ovdKeylog002 } from '../vulns/keylog/OVD-KEYLOG-002';
import { ovdKeylog001S, ovdKeylog002S, ovdKeylog003S } from '../vulns/keylog/Twins';
import { ovdKeylog003 } from '../vulns/keylog/OVD-KEYLOG-003';

@Entry
@Component
struct KeylogPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'input monitoring vulns',
        cases: [
          new Case('KEYLOG-001 key monitor', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdKeylog001()),
          new Case('KEYLOG-001S local-input', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdKeylog001S()),
          new Case('KEYLOG-002 hotkey-log', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdKeylog002(ctx)),
          new Case('KEYLOG-002S no-aggregation', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdKeylog002S(ctx)),
          new Case('KEYLOG-003 join-batch', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdKeylog003()),
          new Case('KEYLOG-003S in-place', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdKeylog003S()),
        ],
      })
    }
    .height('100%')
  }
}
