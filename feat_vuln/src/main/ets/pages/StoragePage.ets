import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdStor001 } from '../vulns/storage/OVD-STOR-001';
import { ovdStor001S } from '../vulns/storage/OVD-STOR-001S';
import { ovdStor002 } from '../vulns/storage/OVD-STOR-002';
import { ovdStor004 } from '../vulns/storage/OVD-STOR-004';

@Entry
@Component
struct StoragePage {
  build() {
    Column() {
      DemoScaffold({
        title: 'insecure storage',
        subtitle: '(003 securityLevel:S1 见 db/BenchDb.ets)',
        cases: [
          new Case('001 prefs-token', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return ovdStor001(ctx, 'eyJhbGciOiJIUzI1NiJ9.bench-payload.benchsig');
          }),
          new Case('001S asset', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdStor001S('eyJhbGciOiJIUzI1NiJ9.bench-payload.benchsig')),
          new Case('002 cred-file', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return ovdStor002(ctx);
          }),
          new Case('004 pii-cache', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return ovdStor004(ctx);
          })
        ]
      })

    }
    .height('100%')
  }
}
