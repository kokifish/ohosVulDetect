import { socket } from '@kit.NetworkKit';
import { BENCH, Runner } from 'lib_common';

// TCP/UDP/TLS 三种 socket：工厂构造 + on 事件 + await。
@Entry
@Component
struct SocketDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('socket TCP/UDP/TLS').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('tcp-connect-send').margin(4).onClick(() => {
          this.runner.run('tcp', async () => {
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
          });
        })
        Button('udp-bind-sendTo').margin(4).onClick(() => {
          this.runner.run('udp', async () => {
            const udp = socket.constructUDPSocketInstance();
            await udp.bind({ address: '0.0.0.0', port: 0 });
            await udp.send({ data: 'bench-udp', address: { address: BENCH.TCP_HOST, port: 80 } });
            udp.close();
            return 'udp sent';
          });
        })
        Button('tls-connect').margin(4).onClick(() => {
          this.runner.run('tls', async () => {
            const tls = socket.constructTLSSocketInstance();
            await tls.connect({
              address: { address: BENCH.TCP_HOST, port: 443 },
              secureOptions: { useRemoteCipherPrefer: true }
            });
            const proto = tls.getProtocol();
            await tls.close();
            return `tls ${proto ?? 'connected'}`;
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
