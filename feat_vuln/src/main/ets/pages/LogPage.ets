import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdLog001 } from '../vulns/log/OVD-LOG-001';
import { ovdLog001S } from '../vulns/log/OVD-LOG-001S';
import { ovdLog002 } from '../vulns/log/OVD-LOG-002';

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
          new Case('002 pwd', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdLog002('Admin@123'))
        ]
      })

    }
    .height('100%')
  }
}
