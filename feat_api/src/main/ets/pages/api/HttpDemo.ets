import { http } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { BENCH, Logger, Runner } from 'lib_common';

// 覆盖：callback / Promise / async-await / 流式 + 事件订阅 / 枚举常量 / 请求头 Record。
@Entry
@Component
struct HttpDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('http (NetworkKit)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap, justifyContent: FlexAlign.Start }) {
        Button('request-cb').margin(4).onClick(() => {
          this.runner.run('request-cb', () => {
            const req: http.HttpRequest = http.createHttp();
            req.request(`${BENCH.API_BASE}/get`, (err: BusinessError, data: http.HttpResponse) => {
              if (err) {
                this.lines.push(`request-cb ev ❌ ${JSON.stringify(err)}`);
              } else {
                this.lines.push(`request-cb ev ✅ status=${data.responseCode}`);
              }
              req.destroy();
            });
            return 'sent';
          });
        })
        Button('request-await').margin(4).onClick(() => {
          this.runner.run('request-await', async () => {
            const req = http.createHttp();
            const resp: http.HttpResponse = await req.request(`${BENCH.API_BASE}/get`);
            const len = JSON.stringify(resp.result ?? '').length;
            req.destroy();
            return `status=${resp.responseCode} len=${len}`;
          });
        })
        Button('post-enum').margin(4).onClick(() => {
          this.runner.run('post-enum', async () => {
            const req = http.createHttp();
            const header: Record<string, string> = { 'Content-Type': 'application/json' };
            const resp: http.HttpResponse = await req.request(`${BENCH.API_BASE}/post`, {
              method: http.RequestMethod.POST,
              header: header,
              extraData: '{"x":1}',
              expectDataType: http.HttpDataType.STRING
            });
            req.destroy();
            return `status=${resp.responseCode}`;
          });
        })
        Button('requestInStream').margin(4).onClick(() => {
          this.runner.run('requestInStream', () => {
            const req = http.createHttp();
            let chunks = 0;
            req.on('dataReceive', (d: ArrayBuffer) => {
              chunks += 1;
            });
            req.on('dataEnd', () => {
              this.lines.push(`stream ev ✅ dataEnd chunks=${chunks}`);
              req.destroy();
            });
            req.requestInStream(`${BENCH.API_BASE}/bytes/4096`, (err: BusinessError) => {
              if (err) {
                this.lines.push(`stream ev ❌ ${JSON.stringify(err)}`);
              }
            });
            return 'streaming';
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
