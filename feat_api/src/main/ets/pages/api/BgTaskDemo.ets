import { common, wantAgent } from '@kit.AbilityKit';
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { Runner } from 'lib_common';

// 后台任务：startBackgroundRunning/stop（BackgroundMode 枚举）+ requestSuspendDelay。
@Entry
@Component
struct BgTaskDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('backgroundTaskManager').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('bg-running').margin(4).onClick(() => {
          this.runner.run('bg-running', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const waInfo: wantAgent.WantAgentInfo = {
              wants: [{ bundleName: 'com.koki.VD', abilityName: 'ApiAbility' }],
              requestCode: 0
            };
            const wa = await wantAgent.getWantAgent(waInfo);
            await backgroundTaskManager.startBackgroundRunning(ctx,
              backgroundTaskManager.BackgroundMode.DATA_TRANSFER, wa);
            const delayInfo: backgroundTaskManager.DelaySuspendInfo = backgroundTaskManager.requestSuspendDelay('bench-delay', () => {
              this.lines.push('ev suspend-delay expired');
            });
            await new Promise<void>((resolve: () => void) => setTimeout(resolve, 1500));
            backgroundTaskManager.cancelSuspendDelay(delayInfo.requestId);
            await backgroundTaskManager.stopBackgroundRunning(ctx);
            return 'bg started+stopped';
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
