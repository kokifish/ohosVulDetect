import { webSocket } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { BENCH, Case, DemoScaffold } from 'lib_common';

// webSocket 全事件订阅（open/message/close/error）+ send + off。
@Entry
@Component
struct WebSocketDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'webSocket',
        cases: [
          // 依赖公网 echo（原 echo.websocket.org 已停运，2026-09-15 换 postman-echo）；公网抖动仍可能致 send 偶发失败
          new Case('ws-echo', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const ws: webSocket.WebSocket = webSocket.createWebSocket();
            ws.on('open', (err: BusinessError, value: Object) => {
              log(`ws ev open ${JSON.stringify(value ?? {})}`);
              ws.send('bench-ping', (serr: BusinessError) => {
                if (serr) {
                  log(`ws send failed ${JSON.stringify(serr)}`);
                } else {
                  log('ws send ok (echo pending)');
                }
              });
            });
            ws.on('message', (err: BusinessError, value: string | ArrayBuffer) => {
              log(`ws ev message ${JSON.stringify(value)}`);
              ws.off('message');
              ws.close((cerr: BusinessError) => {
                log(cerr ? `ws close failed ${JSON.stringify(cerr)}` : 'ws ev closed');
              });
            });
            ws.on('error', (err: BusinessError) => {
              log(`ws ev error ${JSON.stringify(err)}`);
            });
            ws.connect(BENCH.WS_ECHO, (err: BusinessError) => {
              if (err) {
                log(`ws connect failed ${JSON.stringify(err)}`);
              }
            });
            return 'connecting';
          })
        ]
      })

    }
    .height('100%')
  }
}
