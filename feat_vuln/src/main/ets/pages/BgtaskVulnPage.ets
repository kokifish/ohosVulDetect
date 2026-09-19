import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdBgtask001 } from '../vulns/bgtask/OVD-BGTASK-001';
import { ovdBgtask001S } from '../vulns/bgtask/Twins';

@Entry
@Component
struct BgtaskVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'background task abuse',
        cases: [
          // ENV 约定：模拟器无连续任务授权，startBackgroundRunning 内码进 ✅ 行（同 feat_api BgTaskDemo）
          new Case('BGTASK-001 bg-exfil', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdBgtask001(ctx)),
          new Case('BGTASK-001S transient', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdBgtask001S(ctx)),
        ],
      })
    }
    .height('100%')
  }
}
