// DrmKit：媒体密钥系统（createMediaKeySystem/getStatistics/getMaxContentProtectionLevel）。
// 无权限；模拟器无 DRM 插件时走确定性错误路径（graceful）。
import { drm } from '@kit.DrmKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct DrmDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'DrmKit',
        cases: [
          new Case('key system', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const ks = drm.createMediaKeySystem('com.vd-bench.clearkey');
              const stats = ks.getStatistics();
              return `keySystem ok stats=${stats.length}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`keySystem fail: ${err.code} ${err.message}`);
              return `keySystem-err=${err.code}`;
            }
          }),
          new Case('protection level', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const ks = drm.createMediaKeySystem('com.vd-bench.clearkey');
              const level = ks.getMaxContentProtectionLevel();
              return `level=${level}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`level fail: ${err.code} ${err.message}`);
              return `level-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
