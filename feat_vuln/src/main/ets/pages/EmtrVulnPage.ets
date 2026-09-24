import { Case, DemoScaffold } from 'lib_common';
import { ovdEmtr001 } from '../vulns/emtr/OVD-EMTR-001';
import { ovdEmtr001S } from '../vulns/emtr/Twins';

// 进程事件面：EMTR-001 令牌经固定 eventId 广播可被任意组件截获；001S 只发聚合计数。
@Entry
@Component
struct EmtrVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'in-process event token leak',
        cases: [
          new Case('emtr-001 token broadcast', () => ovdEmtr001()),
          new Case('emtr-001S count only', () => ovdEmtr001S())
        ]
      })
    }
    .height('100%')
  }
}
