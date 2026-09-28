import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdWrk001 } from '../vulns/wrk/OVD-WRK-001';
import { ovdWrk001S } from '../vulns/wrk/Twins';

// worker 通信面：WRK-001 令牌经 postMessage 跨线程投递；001S 只投递聚合计数。
@Entry
@Component
struct WrkVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'worker messaging exposure',
        cases: [
          new Case('wrk-001 token postMessage', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdWrk001(log)),
          new Case('wrk-001S aggregate only', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdWrk001S(log))
        ]
      })
    }
    .height('100%')
  }
}
