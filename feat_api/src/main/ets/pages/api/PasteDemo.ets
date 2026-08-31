import { pasteboard } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// 粘贴板良性用法（非敏感数据）：createData + setData/getData/clear + MIMETYPE 枚举。
@Entry
@Component
struct PasteDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'pasteboard (benign)',
        cases: [
          new Case('paste-roundtrip', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const pb: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
            const data: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'bench-non-sensitive');
            await pb.setData(data);
            const got: pasteboard.PasteData = await pb.getData();
            const text = got.getPrimaryText();
            const has: boolean = await pb.hasData();
            await pb.clear();
            return `text=${text} has=${has}`;
          }),
          new Case('paste-html', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const pb = pasteboard.getSystemPasteboard();
            const html: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_HTML,
              '<b>bench</b> html paste');
            await pb.setData(html);
            const cnt: number = await pb.getData().then((d: pasteboard.PasteData) => d.getRecordCount());
            return `records=${cnt}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
