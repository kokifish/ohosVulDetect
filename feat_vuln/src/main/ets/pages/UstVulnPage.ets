import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdUst001 } from '../vulns/ust/OVD-UST-001';
import { ovdUst2Arm, Ust2WatchComp } from '../vulns/ust/OVD-UST-002';
import { ovdUst001S, ovdUst2ArmS, Ust2WatchCompS } from '../vulns/ust/Twins';

// UI 状态污染面：UST-001 令牌持久化进全局状态仓（磁盘+跨页双通道）；001S 仅内存聚合。
@Entry
@Component
struct UstVulnPage {
  build() {
    Column() {
      Ust2WatchComp()
      Ust2WatchCompS()
      DemoScaffold({
        title: 'ui state persistence exposure',
        cases: [
          new Case('ust-001 persistProp token', () => ovdUst001()),
          new Case('ust-001S memory-only', () => ovdUst001S()),
          new Case('ust-002 watch-callback sink', (ctx: common.UIAbilityContext) =>
            ovdUst2Arm(ctx)),
          new Case('ust-002S aggregate watch', (ctx: common.UIAbilityContext) =>
            ovdUst2ArmS(ctx))
        ]
      })
    }
    .height('100%')
  }
}
