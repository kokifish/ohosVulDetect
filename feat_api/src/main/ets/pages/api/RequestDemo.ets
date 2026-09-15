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
            // 公网端点偶发失败（13400001）：失败自动重试一次，两试全败返回错误串（不 throw）
            let task: request.agent.Task | null = null;
            for (let attempt = 0; attempt < 2 && task === null; attempt++) {
              try {
                const t: request.agent.Task = await request.agent.create(ctx, {
                  action: request.agent.Action.DOWNLOAD,
                  url: `${BENCH.API_BASE}/bytes/2048`,
                  title: 'bench-download'
                });
                await t.start();
                task = t;
              } catch (e) {
                log(`start attempt${attempt} err=${(e as BusinessError).code}`);
              }
            }
            if (task === null) {
              return 'start-err=13400001 (retried)';
            }
            task.on('completed', (progress: request.agent.Progress) => {
              log(`ev completed ${JSON.stringify(progress)}`);
            });
            task.on('failed', (progress: request.agent.Progress) => {
              log(`ev failed ${JSON.stringify(progress)}`);
            });
            return `task=${task.tid} started`;
          })
        ]
      })

    }
    .height('100%')
  }
}
