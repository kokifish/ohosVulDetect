import { pasteboard } from '@kit.BasicServicesKit';
import { Runner } from 'lib_common';

// 粘贴板良性用法（非敏感数据）：createData + setData/getData/clear + MIMETYPE 枚举。
@Entry
@Component
struct PasteDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('pasteboard (benign)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('paste-roundtrip').margin(4).onClick(() => {
          this.runner.run('paste-roundtrip', async () => {
            const pb: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
            const data: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'bench-non-sensitive');
            await pb.setData(data);
            const got: pasteboard.PasteData = await pb.getData();
            const text = got.getPrimaryText();
            const has: boolean = await pb.hasData();
            await pb.clear();
            return `text=${text} has=${has}`;
          });
        })
        Button('paste-html').margin(4).onClick(() => {
          this.runner.run('paste-html', async () => {
            const pb = pasteboard.getSystemPasteboard();
            const html: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_HTML,
              '<b>bench</b> html paste');
            await pb.setData(html);
            const cnt: number = await pb.getData().then((d: pasteboard.PasteData) => d.getRecordCount());
            return `records=${cnt}`;
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
