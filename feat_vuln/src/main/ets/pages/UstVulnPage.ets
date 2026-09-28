import { Case, DemoScaffold } from 'lib_common';
import { ovdUst001 } from '../vulns/ust/OVD-UST-001';
import { ovdUst001S } from '../vulns/ust/Twins';

// UI 状态污染面：UST-001 令牌持久化进全局状态仓（磁盘+跨页双通道）；001S 仅内存聚合。
@Entry
@Component
struct UstVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'ui state persistence exposure',
        cases: [
          new Case('ust-001 persistProp token', () => ovdUst001()),
          new Case('ust-001S memory-only', () => ovdUst001S())
        ]
      })
    }
    .height('100%')
  }
}
