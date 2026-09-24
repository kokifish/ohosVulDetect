import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdDev001 } from '../vulns/dev/OVD-DEV-001';
import { ovdDev001S } from '../vulns/dev/Twins';

// 设备指纹面：DEV-001 多字段拼接指纹明文持久化；001S 只记系统版本大类。
@Entry
@Component
struct DevVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'device fingerprint persistence',
        cases: [
          new Case('dev-001 fingerprint', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDev001(ctx)),
          new Case('dev-001S os family', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDev001S(ctx))
        ]
      })
    }
    .height('100%')
  }
}
