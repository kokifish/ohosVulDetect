import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { Case, DemoScaffold } from 'lib_common';

// window：getLastWindow → 全屏/系统栏/方向（枚举）→ 子窗口 createWindow/show/destroy。
@Entry
@Component
struct WindowDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'window',
        cases: [
          new Case('fullscreen-toggle', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const win: window.Window = await window.getLastWindow(ctx);
            await win.setWindowLayoutFullScreen(true);
            await win.setWindowSystemBarProperties({ statusBarContentColor: '#ffffff' });
            await win.setPreferredOrientation(window.Orientation.AUTO_ROTATION);
            await new Promise<void>((resolve: () => void) => setTimeout(resolve, 500));
            await win.setWindowLayoutFullScreen(false);
            await win.setPreferredOrientation(window.Orientation.PORTRAIT);
            return 'fullscreen toggled';
          }),
          new Case('keep-screen-on', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const win = await window.getLastWindow(ctx);
            await win.setWindowKeepScreenOn(true);
            setTimeout(() => {
              win.setWindowKeepScreenOn(false).catch((e: BusinessError) => {
                log(`keepOn ❌ ${JSON.stringify(e)}`);
              });
            }, 1000);
            return 'keepScreenOn on';
          })
        ]
      })

    }
    .height('100%')
  }
}
