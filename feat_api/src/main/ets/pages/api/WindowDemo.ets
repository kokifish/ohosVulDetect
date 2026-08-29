import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';
import { Runner } from 'lib_common';

// window：getLastWindow → 全屏/系统栏/方向（枚举）→ 子窗口 createWindow/show/destroy。
@Entry
@Component
struct WindowDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('window').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('fullscreen-toggle').margin(4).onClick(() => {
          this.runner.run('fullscreen-toggle', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const win: window.Window = await window.getLastWindow(ctx);
            await win.setWindowLayoutFullScreen(true);
            await win.setWindowSystemBarProperties({ statusBarContentColor: '#ffffff' });
            await win.setPreferredOrientation(window.Orientation.AUTO_ROTATION);
            await new Promise<void>((resolve: () => void) => setTimeout(resolve, 500));
            await win.setWindowLayoutFullScreen(false);
            await win.setPreferredOrientation(window.Orientation.PORTRAIT);
            return 'fullscreen toggled';
          });
        })
        Button('keep-screen-on').margin(4).onClick(() => {
          this.runner.run('keep-screen-on', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const win = await window.getLastWindow(ctx);
            await win.setWindowKeepScreenOn(true);
            setTimeout(() => {
              win.setWindowKeepScreenOn(false).catch((e: BusinessError) => {
                this.lines.push(`keepOn ❌ ${JSON.stringify(e)}`);
              });
            }, 1000);
            return 'keepScreenOn on';
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
