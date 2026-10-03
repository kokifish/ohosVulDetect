import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdB64001 } from '../vulns/b64/OVD-B64-001';
import { ovdB64001S } from '../vulns/b64/Twins';

// base64 编码面：B64-001 编码串运行时解码后落盘（文本层无凭据明文）；001S 只解码聚合。
@Entry
@Component
struct B64VulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'base64-encoded credential face',
        cases: [
          new Case('b64-001 decode+store', (ctx: common.UIAbilityContext) =>
            ovdB64001(ctx)),
          new Case('b64-001S aggregate', (ctx: common.UIAbilityContext) =>
            ovdB64001S(ctx))
        ]
      })
    }
    .height('100%')
  }
}
