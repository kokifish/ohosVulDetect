import { connection } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

// connection：Promise 查询 + createNetConnection 事件订阅/注销。
@Entry
@Component
struct NetConnDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'net.connection',
        cases: [
          new Case('hasDefaultNet', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const has: boolean = await connection.hasDefaultNet();
            return `has=${has}`;
          }),
          new Case('capabilities', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const handle: connection.NetHandle = await connection.getDefaultNet();
            const caps: connection.NetCapabilities = await connection.getNetCapabilities(handle);
            return `type=${JSON.stringify(caps.networkCap ?? [])}`;
          }),
          new Case('netAvailable-on', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const conn: connection.NetConnection = connection.createNetConnection();
            conn.on('netAvailable', (h: connection.NetHandle) => {
              log(`ev netAvailable id=${h.netId}`);
            });
            conn.register((err: BusinessError) => {
              log(err ? `register ❌ ${JSON.stringify(err)}` : 'ev registered');
              setTimeout(() => {
                conn.unregister(() => {
                  log('ev unregistered');
                });
              }, 2000);
            });
            return 'registering';
          })
        ]
      })

    }
    .height('100%')
  }
}
