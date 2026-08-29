import { common, Want } from '@kit.AbilityKit';
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { BENCH, Runner } from 'lib_common';

// Want/bundleManager/openLink：显式跨 HAP 拉起 + 自查 bundle 信息 + 隐式 link。
@Entry
@Component
struct AbilityDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('Want / bundleManager / openLink').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('bundle-self').margin(4).onClick(() => {
          this.runner.run('bundle-self', async () => {
            const info: bundleManager.BundleInfo = await bundleManager.getBundleInfoForSelf(
              bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
            return `${info.name} v${info.versionName}`;
          });
        })
        Button('want-explicit').margin(4).onClick(() => {
          this.runner.run('want-explicit', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const want: Want = {
              bundleName: BENCH.BUNDLE,
              abilityName: 'ApiAbility',
              parameters: { 'from': 'AbilityDemo' }
            };
            await ctx.startAbility(want);
            return 'started self';
          });
        })
        Button('openLink').margin(4).onClick(() => {
          this.runner.run('openLink', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            await ctx.openLink('https://httpbin.org/get');
            return 'link opened';
          });
        })
        Button('terminate').margin(4).onClick(() => {
          this.runner.run('terminate', () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            ctx.terminateSelf().catch((e: BusinessError) => {
              this.lines.push(`terminate ❌ ${JSON.stringify(e)}`);
            });
            return 'terminating';
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
