import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdA11y001 } from '../vulns/a11y/OVD-A11Y-001';
import { ovdA11y002 } from '../vulns/a11y/OVD-A11Y-002';
import { ovdA11y001S, ovdA11y002S } from '../vulns/a11y/Twins';

@Entry
@Component
struct A11yVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'AccessibilityKit vulns',
        cases: [
          new Case('A11Y-001 state-exfil', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdA11y001()),
          new Case('A11Y-001S local-state', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdA11y001S()),
          new Case('A11Y-002 polling', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdA11y002()),
          new Case('A11Y-002S on-demand', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdA11y002S()),
        ],
      })
    }
    .height('100%')
  }
}
