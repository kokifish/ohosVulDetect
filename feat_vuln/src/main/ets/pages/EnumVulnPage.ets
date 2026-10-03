import { Case, DemoScaffold } from 'lib_common';
import { ovdEnum001 } from '../vulns/enum/OVD-ENUM-001';
import { ovdEnum001S } from '../vulns/enum/Twins';

// 跨 record 枚举面：ENUM-001 误选宽松策略成员（双指令分离形态）；001S 选 STRICT。
@Entry
@Component
struct EnumVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'cross-record enum misuse face',
        cases: [
          new Case('enum-001 lenient policy', () => ovdEnum001()),
          new Case('enum-001S strict policy', () => ovdEnum001S())
        ]
      })
    }
    .height('100%')
  }
}
