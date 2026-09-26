import { Case, DemoScaffold } from 'lib_common';
import { ovdLog002S } from '../vulns/log/Twins';
import { common } from '@kit.AbilityKit';
import { ovdLog001 } from '../vulns/log/OVD-LOG-001';
import { ovdLog001S } from '../vulns/log/Twins';
import { ovdLog002 } from '../vulns/log/OVD-LOG-002';
import { ovdLog003 } from '../vulns/log/OVD-LOG-003';
import { ovdLog003S } from '../vulns/log/Twins';

@Entry
@Component
struct LogPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'sensitive logging',
        cases: [
          new Case('001 public-token', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdLog001('bench')),
          new Case('001S private', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdLog001S('bench')),
          new Case('002 pwd', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdLog002('Admin@123')),
          new Case('002S masked', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdLog002S('bench-user')),
          new Case('log-003 pii hilog', () => ovdLog003()),
          new Case('log-003S count-only', () => ovdLog003S()),
        ]
      })

    }
    .height('100%')
  }
}
