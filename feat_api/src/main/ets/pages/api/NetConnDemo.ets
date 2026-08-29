import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Runner } from 'lib_common';

// connection：Promise 查询 + createNetConnection 事件订阅/注销。
@Entry
@Component
struct NetConnDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('net.connection').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('hasDefaultNet').margin(4).onClick(() => {
          this.runner.run('hasDefaultNet', async () => {
            const has: boolean = await connection.hasDefaultNet();
            return `has=${has}`;
          });
        })
        Button('capabilities').margin(4).onClick(() => {
          this.runner.run('capabilities', async () => {
            const handle: connection.NetHandle = await connection.getDefaultNet();
            const caps: connection.NetCapabilities = await connection.getNetCapabilities(handle);
            return `type=${JSON.stringify(caps.networkCap ?? [])}`;
          });
        })
        Button('netAvailable-on').margin(4).onClick(() => {
          this.runner.run('netAvailable-on', () => {
            const conn: connection.NetConnection = connection.createNetConnection();
            conn.on('netAvailable', (h: connection.NetHandle) => {
              this.lines.push(`ev netAvailable id=${h.netId}`);
            });
            conn.register((err: BusinessError) => {
              this.lines.push(err ? `register ❌ ${JSON.stringify(err)}` : 'ev registered');
              setTimeout(() => {
                conn.unregister(() => {
                  this.lines.push('ev unregistered');
                });
              }, 2000);
            });
            return 'registering';
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
