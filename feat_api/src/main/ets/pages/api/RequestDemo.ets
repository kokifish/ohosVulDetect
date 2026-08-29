import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { request } from '@kit.BasicServicesKit';
import { BENCH, Runner } from 'lib_common';

// request.agent 后台下载代理（Action.DOWNLOAD 枚举 + 任务事件订阅）。
@Entry
@Component
struct RequestDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('request.agent download').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('agent-download').margin(4).onClick(() => {
          this.runner.run('agent-download', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const task: request.agent.Task = await request.agent.create(ctx, {
              action: request.agent.Action.DOWNLOAD,
              url: `${BENCH.API_BASE}/bytes/2048`,
              title: 'bench-download'
            });
            task.on('completed', (progress: request.agent.Progress) => {
              this.lines.push(`ev completed ${JSON.stringify(progress)}`);
            });
            task.on('failed', (progress: request.agent.Progress) => {
              this.lines.push(`ev failed ${JSON.stringify(progress)}`);
            });
            await task.start();
            return `task=${task.tid} started`;
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
