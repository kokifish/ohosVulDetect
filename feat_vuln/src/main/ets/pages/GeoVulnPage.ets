import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdGeo001 } from '../vulns/geo/OVD-GEO-001';
import { ovdGeo001S } from '../vulns/geo/Twins';

// 位置隐私面：GEO-001 精确坐标明文缓存（ENV：模拟器定位开关默认关闭，报错误码不算回退）；
// 001S 只存 1 度粗化网格。
@Entry
@Component
struct GeoVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'location cache privacy',
        cases: [
          new Case('geo-001 precise cache', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdGeo001(ctx)),
          new Case('geo-001S coarse grid', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdGeo001S(ctx))
        ]
      })
    }
    .height('100%')
  }
}
