import { Case, DemoScaffold } from 'lib_common';
import { ovdMicc001 } from '../vulns/micc/OVD-MICC-001';
import { ovdMicc001S } from '../vulns/micc/Twins';

// 麦克风面：MICC-001 无手势静默采集；001S 无采集路径对照。
@Entry
@Component
struct MiccVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'silent mic capture',
        cases: [
          new Case('micc-001 silent capture', () =>
            ovdMicc001()),
          new Case('micc-001S no capture path', () =>
            ovdMicc001S('bench-seed'))
        ]
      })
    }
    .height('100%')
  }
}
