import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { BENCH, Runner } from 'lib_common';

// webSocket 全事件订阅（open/message/close/error）+ send + off。
@Entry
@Component
struct WebSocketDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('webSocket').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('ws-echo').margin(4).onClick(() => {
          this.runner.run('ws-echo', () => {
            const ws: webSocket.WebSocket = webSocket.createWebSocket();
            ws.on('open', (err: BusinessError, value: Object) => {
              this.lines.push(`ws ev open ${JSON.stringify(value ?? {})}`);
              ws.send('bench-ping', (serr: BusinessError) => {
                if (serr) {
                  this.lines.push(`ws send ❌ ${JSON.stringify(serr)}`);
                }
              });
            });
            ws.on('message', (err: BusinessError, value: string | ArrayBuffer) => {
              this.lines.push(`ws ev message ${JSON.stringify(value)}`);
              ws.off('message');
              ws.close((cerr: BusinessError) => {
                this.lines.push(cerr ? `ws close ❌ ${JSON.stringify(cerr)}` : 'ws ev closed');
              });
            });
            ws.on('error', (err: BusinessError) => {
              this.lines.push(`ws ev error ${JSON.stringify(err)}`);
            });
            ws.connect(BENCH.WS_ECHO, (err: BusinessError) => {
              if (err) {
                this.lines.push(`ws connect ❌ ${JSON.stringify(err)}`);
              }
            });
            return 'connecting';
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
