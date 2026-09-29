import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdDimp001 } from '../vulns/dimp/OVD-DIMP-001';
import { ovdDimp002 } from '../vulns/dimp/OVD-DIMP-002';
import { ovdDimp001S, ovdDimp002S, ovdDepSinkS } from '../vulns/dimp/Twins';
import { ovdDepSink } from '../vulns/dimp/OVD-DEP-001';

// 动态加载面：DIMP-001 固定路径 / DIMP-002 拼接路径动态导入调用目标 record 的 sink；
// 孪生同构动态调用安全函数。半混淆形态见 DynTarget.ets 头注。
@Entry
@Component
struct DimpVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'dynamic import exposure',
        cases: [
          new Case('dimp-001 fixed-path sink', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDimp001(ctx)),
          new Case('dimp-001S dynamic safe', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDimp001S(ctx)),
          new Case('dimp-002 concat-path sink', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDimp002(ctx, '')),
          new Case('dimp-002S concat safe', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDimp002S(ctx, '')),
          new Case('dep-001 3-layer chain', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDepSink(ctx)),
          new Case('dep-001S aggregate', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDepSinkS())
        ]
      })
    }
    .height('100%')
  }
}
