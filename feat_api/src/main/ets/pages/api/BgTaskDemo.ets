import { common, wantAgent } from '@kit.AbilityKit';
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { Case, DemoScaffold } from 'lib_common';

// 后台任务：startBackgroundRunning/stop（BackgroundMode 枚举）+ requestSuspendDelay。
@Entry
@Component
struct BgTaskDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'backgroundTaskManager',
        cases: [
          new Case('bg-running', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const waInfo: wantAgent.WantAgentInfo = {
              wants: [{ bundleName: 'com.koki.VD', abilityName: 'ApiAbility' }],
              requestCode: 0
            };
            const wa = await wantAgent.getWantAgent(waInfo);
            await backgroundTaskManager.startBackgroundRunning(ctx,
              backgroundTaskManager.BackgroundMode.DATA_TRANSFER, wa);
            const delayInfo: backgroundTaskManager.DelaySuspendInfo = backgroundTaskManager.requestSuspendDelay('bench-delay', () => {
              log('ev suspend-delay expired');
            });
            await new Promise<void>((resolve: () => void) => setTimeout(resolve, 1500));
            backgroundTaskManager.cancelSuspendDelay(delayInfo.requestId);
            await backgroundTaskManager.stopBackgroundRunning(ctx);
            return 'bg started+stopped';
          })
        ]
      })

    }
    .height('100%')
  }
}
