// MediaLibraryKit：photoAccessHelper 媒体库实例与照片检索（getPhotoAccessHelper/getAssets）。
// READ_IMAGEVIDEO 为 user_grant：未授权环境按 BusinessError 201 记录（调用面即语料）。
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { abilityAccessCtrl, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct MediaLibDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'MediaLibraryKit',
        cases: [
          new Case('request perms', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const atManager = abilityAccessCtrl.createAtManager();
              const r = await atManager.requestPermissionsFromUser(ctx, ['ohos.permission.READ_IMAGEVIDEO']);
              return `granted=${r.permissions.length} auth=${r.authResults.join(',')}`;
            } catch (e) {
              const err = e as BusinessError;
              return `perm-err=${err.code}`;
            }
          }),
          new Case('get helper', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
              return `helper ok type=${typeof helper.getAssets}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`helper fail: ${err.code} ${err.message}`);
              return `helper-err=${err.code}`;
            }
          }),
          new Case('getAssets (empty fetch)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
              const result = await helper.getAssets({} as photoAccessHelper.FetchOptions);
              const n = result.getCount();
              result.close();
              return `assets=${n}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`fetch fail: ${err.code} ${err.message}`);
              return `fetch-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
