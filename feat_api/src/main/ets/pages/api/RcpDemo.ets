import { rcp } from '@kit.RemoteCommunicationKit';
import { BENCH, Runner } from 'lib_common';

// Remote Communication Kit：createSession 工厂 + get/post + fetch(Request) + close。
@Entry
@Component
struct RcpDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('rcp (RemoteCommunicationKit)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('session-get').margin(4).onClick(() => {
          this.runner.run('session-get', async () => {
            const cfg: rcp.SessionConfiguration = { baseAddress: BENCH.API_BASE };
            const session: rcp.Session = rcp.createSession(cfg);
            const resp: rcp.Response = await session.get('/get');
            const status: number = resp.statusCode;
            session.close();
            return `status=${status}`;
          });
        })
        Button('session-post').margin(4).onClick(() => {
          this.runner.run('session-post', async () => {
            const cfg: rcp.SessionConfiguration = { baseAddress: BENCH.API_BASE };
            const session: rcp.Session = rcp.createSession(cfg);
            const resp: rcp.Response = await session.post('/post', 'bench-body');
            const status: number = resp.statusCode;
            session.close();
            return `status=${status}`;
          });
        })
        Button('session-fetch').margin(4).onClick(() => {
          this.runner.run('session-fetch', async () => {
            const cfg: rcp.SessionConfiguration = { baseAddress: BENCH.API_BASE };
            const session: rcp.Session = rcp.createSession(cfg);
            const req: rcp.Request = new rcp.Request(`${BENCH.API_BASE}/get`, 'GET');
            const resp: rcp.Response = await session.fetch(req);
            const status: number = resp.statusCode;
            session.close();
            return `fetch status=${status}`;
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
