import { Runner } from 'lib_common';
import { ovdLog001 } from '../vulns/log/OVD-LOG-001';
import { ovdLog001S } from '../vulns/log/OVD-LOG-001S';
import { ovdLog002 } from '../vulns/log/OVD-LOG-002';

@Entry
@Component
struct LogPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('sensitive logging').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 public-token').margin(4).onClick(() => this.runner.run('001', () => ovdLog001('bench')))
        Button('001S private').margin(4).onClick(() => this.runner.run('001S', () => ovdLog001S('bench')))
        Button('002 pwd').margin(4).onClick(() => this.runner.run('002', () => ovdLog002('Admin@123')))
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
