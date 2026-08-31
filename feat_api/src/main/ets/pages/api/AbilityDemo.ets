import { common, Want } from '@kit.AbilityKit';
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { BENCH, Case, DemoScaffold } from 'lib_common';

// Want/bundleManager/openLink：显式跨 HAP 拉起 + 自查 bundle 信息 + 隐式 link。
@Entry
@Component
struct AbilityDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'Want / bundleManager / openLink',
        cases: [
          new Case('bundle-self', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const info: bundleManager.BundleInfo = await bundleManager.getBundleInfoForSelf(
              bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
            return `${info.name} v${info.versionName}`;
          }),
          new Case('want-explicit', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const want: Want = {
              bundleName: BENCH.BUNDLE,
              abilityName: 'ApiAbility',
              parameters: { 'from': 'AbilityDemo' }
            };
            await ctx.startAbility(want);
            return 'started self';
          }),
          new Case('openLink', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            await ctx.openLink('https://httpbin.org/get');
            return 'link opened';
          }),
          new Case('terminate', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            ctx.terminateSelf().catch((e: BusinessError) => {
              log(`terminate ❌ ${JSON.stringify(e)}`);
            });
            return 'terminating';
          })
        ]
      })

    }
    .height('100%')
  }
}
