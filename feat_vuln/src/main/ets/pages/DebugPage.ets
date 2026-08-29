import { Runner } from 'lib_common';
import { ovdDebug001 } from '../vulns/debug/OVD-DEBUG-001';
import { ovdDebug002 } from '../vulns/debug/OVD-DEBUG-002';

@Entry
@Component
struct DebugPage {
  @State lines: string[] = [];
  @State admin: string = 'false';
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('debug leftovers').fontSize(20).margin(8)
      Text(`ovd_is_admin=${this.admin}`).fontSize(13).fontColor('#CC0000')
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 isDebug').margin(4).onClick(() => this.runner.run('001', () => ovdDebug001()))
        Button('002 pin').margin(4).onClick(() => {
          this.runner.run('002', () => {
            const r = ovdDebug002('0000');
            this.admin = AppStorage.get<string>('ovd_is_admin') ?? 'false';
            return r;
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
