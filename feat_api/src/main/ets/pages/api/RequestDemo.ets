import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { request } from '@kit.BasicServicesKit';
import { BENCH, Case, DemoScaffold } from 'lib_common';

// request.agent 后台下载代理（Action.DOWNLOAD 枚举 + 任务事件订阅）。
@Entry
@Component
struct RequestDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'request.agent download',
        cases: [
          new Case('agent-download', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const task: request.agent.Task = await request.agent.create(ctx, {
              action: request.agent.Action.DOWNLOAD,
              url: `${BENCH.API_BASE}/bytes/2048`,
              title: 'bench-download'
            });
            task.on('completed', (progress: request.agent.Progress) => {
              log(`ev completed ${JSON.stringify(progress)}`);
            });
            task.on('failed', (progress: request.agent.Progress) => {
              log(`ev failed ${JSON.stringify(progress)}`);
            });
            await task.start();
            return `task=${task.tid} started`;
          })
        ]
      })

    }
    .height('100%')
  }
}
