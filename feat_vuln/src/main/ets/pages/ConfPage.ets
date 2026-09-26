import { Case, DemoScaffold } from 'lib_common';
import { ovdConf001S, ovdConf002S } from '../vulns/conf/Twins';
import { common } from '@kit.AbilityKit';
import { ovdConf001 } from '../vulns/conf/OVD-CONF-001';
import { ovdConf002 } from '../vulns/conf/OVD-CONF-002';
import { ovdConf003 } from '../vulns/conf/OVD-CONF-003';
import { ovdConf003S } from '../vulns/conf/Twins';

@Entry
@Component
struct ConfPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'config leakage',
        cases: [
          new Case('001 admin-url', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdConf001()),
          new Case('002 debug-ws', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdConf002()),
          new Case('001S runtime-endpoint', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdConf001S('https')),
          new Case('002S stripped', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdConf002S()),
          new Case('conf-003 hardcoded key', () => ovdConf003()),
          new Case('conf-003S runtime key', () => ovdConf003S('k'.repeat(24))),
        ]
      })

    }
    .height('100%')
  }
}
