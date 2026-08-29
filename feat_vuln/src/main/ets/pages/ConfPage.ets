import { Runner } from 'lib_common';
import { ovdConf001 } from '../vulns/conf/OVD-CONF-001';
import { ovdConf002 } from '../vulns/conf/OVD-CONF-002';

@Entry
@Component
struct ConfPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('config leakage').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 admin-url').margin(4).onClick(() => this.runner.run('001', () => ovdConf001()))
        Button('002 debug-ws').margin(4).onClick(() => this.runner.run('002', () => ovdConf002()))
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
