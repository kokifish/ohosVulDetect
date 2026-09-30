import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdWrk001 } from '../vulns/wrk/OVD-WRK-001';
import { ovdWrk002 } from '../vulns/wrk/OVD-WRK-002';
import { ovdWrk001S, ovdWrk002S } from '../vulns/wrk/Twins';

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
            ovdWrk001S(log)),
          new Case('wrk-002 worker-side sink', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdWrk002(ctx, log)),
          new Case('wrk-002S aggregate sink', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdWrk002S(ctx, log))
        ]
      })
    }
    .height('100%')
  }
}
