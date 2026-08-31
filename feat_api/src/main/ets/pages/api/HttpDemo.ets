import { http } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { BENCH, Case, DemoScaffold, Logger } from 'lib_common';

// 覆盖：callback / Promise / async-await / 流式 + 事件订阅 / 枚举常量 / 请求头 Record。
@Entry
@Component
struct HttpDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'http (NetworkKit)',
        cases: [
          new Case('request-cb', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const req: http.HttpRequest = http.createHttp();
            req.request(`${BENCH.API_BASE}/get`, (err: BusinessError, data: http.HttpResponse) => {
              if (err) {
                log(`request-cb ev ❌ ${JSON.stringify(err)}`);
              } else {
                log(`request-cb ev ✅ status=${data.responseCode}`);
              }
              req.destroy();
            });
            return 'sent';
          }),
          new Case('request-await', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const req = http.createHttp();
            const resp: http.HttpResponse = await req.request(`${BENCH.API_BASE}/get`);
            const len = JSON.stringify(resp.result ?? '').length;
            req.destroy();
            return `status=${resp.responseCode} len=${len}`;
          }),
          new Case('post-enum', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
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
          }),
          new Case('requestInStream', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const req = http.createHttp();
            let chunks = 0;
            req.on('dataReceive', (d: ArrayBuffer) => {
              chunks += 1;
            });
            req.on('dataEnd', () => {
              log(`stream ev ✅ dataEnd chunks=${chunks}`);
              req.destroy();
            });
            req.requestInStream(`${BENCH.API_BASE}/bytes/4096`, (err: BusinessError) => {
              if (err) {
                log(`stream ev ❌ ${JSON.stringify(err)}`);
              }
            });
            return 'streaming';
          })
        ]
      })

    }
    .height('100%')
  }
}
