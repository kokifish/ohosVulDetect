import { socket } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';
import { BENCH, Case, DemoScaffold } from 'lib_common';

// TCP/UDP/TLS 三种 socket：工厂构造 + on 事件 + await。
@Entry
@Component
struct SocketDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'socket TCP/UDP/TLS',
        cases: [
          new Case('tcp-connect-send', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const tcp = socket.constructTCPSocketInstance();
            let got = 0;
            tcp.on('message', (info: socket.SocketMessageInfo) => {
              got += info.message.byteLength;
            });
            await tcp.connect({ address: { address: BENCH.TCP_HOST, port: 80 }, timeout: 8000 });
            await tcp.send({ data: 'HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n' });
            await new Promise<void>((resolve: () => void) => setTimeout(resolve, 1500));
            tcp.off('message');
            await tcp.close();
            return `tcp sent, recv=${got}B`;
          }),
          new Case('udp-bind-sendTo', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const udp = socket.constructUDPSocketInstance();
            await udp.bind({ address: '0.0.0.0', port: 0 });
            await udp.send({ data: 'bench-udp', address: { address: BENCH.TCP_HOST, port: 80 } });
            udp.close();
            return 'udp sent';
          }),
          new Case('tls-connect', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const tls = socket.constructTLSSocketInstance();
            await tls.connect({
              address: { address: BENCH.TCP_HOST, port: 443 },
              secureOptions: { useRemoteCipherPrefer: true }
            });
            const proto = tls.getProtocol();
            await tls.close();
            return `tls ${proto ?? 'connected'}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
