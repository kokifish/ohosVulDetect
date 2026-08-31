import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { BenchDb } from '../db/BenchDb';
import { ovdInj001 } from '../vulns/inj/OVD-INJ-001';
import { ovdInj001S } from '../vulns/inj/OVD-INJ-001S';
import { ovdInj002 } from '../vulns/inj/OVD-INJ-002';
import { ovdInj003 } from '../vulns/inj/OVD-INJ-003';
import { ovdInj004 } from '../vulns/inj/OVD-INJ-004';

@Entry
@Component
struct InjPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'injection',
        cases: [
          new Case('001 sqli', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const store = await BenchDb.getStore(ctx, 'vuln.db');
            const r = await ovdInj001(store, "x' OR '1'='1");
            return r;
          }),
          new Case('001S predicates', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const store = await BenchDb.getStore(ctx, 'vuln.db');
            return await ovdInj001S(store, "x' OR '1'='1");
          }),
          new Case('002 delete', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const store = await BenchDb.getStore(ctx, 'vuln.db');
            return await ovdInj002(store, "x' OR '1'='1");
          }),
          new Case('003 traversal', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return ovdInj003(ctx, '../../../../../../etc/hosts');
          }),
          new Case('004 json-nav', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdInj004('{"page":"pages/Index","fn":"getToken"}'))
        ]
      })

    }
    .height('100%')
  }
}
