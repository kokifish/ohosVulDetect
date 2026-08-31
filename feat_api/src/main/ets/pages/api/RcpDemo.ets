import { rcp } from '@kit.RemoteCommunicationKit';
import { common } from '@kit.AbilityKit';
import { BENCH, Case, DemoScaffold } from 'lib_common';

// Remote Communication Kit：createSession 工厂 + get/post + fetch(Request) + close。
@Entry
@Component
struct RcpDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'rcp (RemoteCommunicationKit)',
        cases: [
          new Case('session-get', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const cfg: rcp.SessionConfiguration = { baseAddress: BENCH.API_BASE };
            const session: rcp.Session = rcp.createSession(cfg);
            const resp: rcp.Response = await session.get('/get');
            const status: number = resp.statusCode;
            session.close();
            return `status=${status}`;
          }),
          new Case('session-post', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const cfg: rcp.SessionConfiguration = { baseAddress: BENCH.API_BASE };
            const session: rcp.Session = rcp.createSession(cfg);
            const resp: rcp.Response = await session.post('/post', 'bench-body');
            const status: number = resp.statusCode;
            session.close();
            return `status=${status}`;
          }),
          new Case('session-fetch', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const cfg: rcp.SessionConfiguration = { baseAddress: BENCH.API_BASE };
            const session: rcp.Session = rcp.createSession(cfg);
            const req: rcp.Request = new rcp.Request(`${BENCH.API_BASE}/get`, 'GET');
            const resp: rcp.Response = await session.fetch(req);
            const status: number = resp.statusCode;
            session.close();
            return `fetch status=${status}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
