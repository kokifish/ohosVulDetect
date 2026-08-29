import { Runner } from 'lib_common';
import { ovdNet001 } from '../vulns/net/OVD-NET-001';
import { ovdNet001S } from '../vulns/net/OVD-NET-001S';
import { ovdNet002 } from '../vulns/net/OVD-NET-002';
import { ovdNet004Usage } from '../vulns/net/OVD-NET-004';
import { ovdNet005 } from '../vulns/net/OVD-NET-005';

@Entry
@Component
struct NetPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('cleartext / cert validation').fontSize(20).margin(8)
      Text('(003 onSslErrorReceive-confirm 见 WebPage)').fontSize(11).fontColor('#888888')
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 http-login').margin(4)
          .onClick(() => this.runner.run('001', () => ovdNet001('bench', 'Admin@123')))
        Button('001S https').margin(4)
          .onClick(() => this.runner.run('001S', () => ovdNet001S('bench', 'Admin@123')))
        Button('002 ws-lan').margin(4).onClick(() => this.runner.run('002', () => ovdNet002()))
        Button('004 alwaysTrue').margin(4)
          .onClick(() => this.runner.run('004', () => ovdNet004Usage('api.bench.example')))
        Button('005 emptyPins').margin(4)
          .onClick(() => this.runner.run('005', () => `pin ok=${ovdNet005('api.bench.example')}`))
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
