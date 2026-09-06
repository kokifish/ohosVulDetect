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
          // ENV(不可修复): 依赖公网 echo 服务器，模拟器网络抖动时 send 可能超时/报错（复测即恢复，非代码问题）
          new Case('ws-echo', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const ws: webSocket.WebSocket = webSocket.createWebSocket();
            ws.on('open', (err: BusinessError, value: Object) => {
              log(`ws ev open ${JSON.stringify(value ?? {})}`);
              ws.send('bench-ping', (serr: BusinessError) => {
                if (serr) {
                  log(`ws send ❌ ${JSON.stringify(serr)}`);
                }
              });
            });
            ws.on('message', (err: BusinessError, value: string | ArrayBuffer) => {
              log(`ws ev message ${JSON.stringify(value)}`);
              ws.off('message');
              ws.close((cerr: BusinessError) => {
                log(cerr ? `ws close ❌ ${JSON.stringify(cerr)}` : 'ws ev closed');
              });
            });
            ws.on('error', (err: BusinessError) => {
              log(`ws ev error ${JSON.stringify(err)}`);
            });
            ws.connect(BENCH.WS_ECHO, (err: BusinessError) => {
              if (err) {
                log(`ws connect ❌ ${JSON.stringify(err)}`);
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
