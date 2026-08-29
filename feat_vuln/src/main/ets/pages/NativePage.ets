import { Runner } from 'lib_common';
import { ovdNative001 } from '../vulns/native/OVD-NATIVE-001';
import { ovdNative002 } from '../vulns/native/OVD-NATIVE-002';

@Entry
@Component
struct NativePage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('native layer (libentry.so)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 key-in-so').margin(4).onClick(() => this.runner.run('001', () => ovdNative001('bench-data')))
        Button('002 strcpy').margin(4).onClick(() => this.runner.run('002', () => ovdNative002()))
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
