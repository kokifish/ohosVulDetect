import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdSen001 } from '../vulns/sen/OVD-SEN-001';
import { ovdSen001S } from '../vulns/sen/Twins';

// 并发面（taskpool/@Concurrent）：SEN-001 令牌经结构化克隆跨线程并明文落盘；001S 只传聚合。
@Entry
@Component
struct SenVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'taskpool concurrency exposure',
        cases: [
          new Case('sen-001 token via taskpool', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdSen001(ctx)),
          new Case('sen-001S aggregate only', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdSen001S(ctx))
        ]
      })
    }
    .height('100%')
  }
}
