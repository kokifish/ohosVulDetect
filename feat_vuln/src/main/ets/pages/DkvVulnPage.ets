import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdDkv001 } from '../vulns/dkv/OVD-DKV-001';
import { ovdDkv001S } from '../vulns/dkv/Twins';

// 分布式 KV 面：DKV-001 明文令牌入库自动同步；001S 加密 S3 本地库对照。
@Entry
@Component
struct DkvVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'distributed kv sync exposure',
        cases: [
          new Case('dkv-001 plaintext sync', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDkv001(ctx)),
          new Case('dkv-001S encrypted local', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdDkv001S(ctx))
        ]
      })
    }
    .height('100%')
  }
}
