import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdConf001 } from '../vulns/conf/OVD-CONF-001';
import { ovdConf002 } from '../vulns/conf/OVD-CONF-002';

@Entry
@Component
struct ConfPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'config leakage',
        cases: [
          new Case('001 admin-url', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdConf001()),
          new Case('002 debug-ws', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdConf002())
        ]
      })

    }
    .height('100%')
  }
}
