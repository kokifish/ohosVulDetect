import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdTntSink } from '../vulns/tnt/OVD-TNT-001';
import { ovdTntSink5 } from '../vulns/tnt/OVD-TNT-005';
import { ovdTntSink6 } from '../vulns/tnt/OVD-TNT-006';
import { ovdTntSink5S, ovdTntSink6S } from '../vulns/tnt/Twins';
import { ovdTntSink as ovdTntSinkS, ovdTntSink2S } from '../vulns/tnt/Twins';
import { ovdTntSink2 } from '../vulns/tnt/OVD-TNT-002';
import { ovdTntSink3 } from '../vulns/tnt/OVD-TNT-003';
import { ovdTntSink4 } from '../vulns/tnt/OVD-TNT-004';
import { ovdTnt007 } from '../vulns/tnt/OVD-TNT-007';
import { ovdTnt008 } from '../vulns/tnt/OVD-TNT-008';
import { ovdTnt009 } from '../vulns/tnt/OVD-TNT-009';
import { ovdTntSink3S, ovdTntSink4S, ovdTnt007S, ovdTnt008S, ovdTnt009S } from '../vulns/tnt/Twins';

// 跨函数污点面：TNT-001 source/sink 分置（interproc 规则）；001S 聚合值对照。
@Entry
@Component
struct TaintVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'interprocedural taint chain',
        cases: [
          new Case('tnt-001 source→relay→sink', () =>
            ovdTntSink()),
          new Case('tnt-001S aggregate', () =>
            ovdTntSinkS()),
          new Case('tnt-002 3-hop chain', () =>
            ovdTntSink2()),
          new Case('tnt-002S aggregate chain', () =>
            ovdTntSink2S()),
          new Case('tnt-003 4-hop chain', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdTntSink3(ctx)),
          new Case('tnt-003S aggregate', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdTntSink3S()),
          new Case('tnt-005 xmod→feature chain', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdTntSink5(ctx)),
          new Case('tnt-005S aggregate', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdTntSink5S()),
          new Case('tnt-006 hsp→feature chain', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdTntSink6(ctx)),
          new Case('tnt-006S aggregate', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdTntSink6S()),
          new Case('tnt-004 pasteboard sink', () =>
            ovdTntSink4()),
          new Case('tnt-004S aggregate', () =>
            ovdTntSink4S()),
          new Case('tnt-007 then-chain', () =>
            ovdTnt007()),
          new Case('tnt-007S aggregate chain', () =>
            ovdTnt007S()),
          new Case('tnt-008 dispatch-table', () =>
            ovdTnt008()),
          new Case('tnt-008S aggregate dispatch', () =>
            ovdTnt008S()),
          new Case('tnt-009 alias-import sink', (ctx: common.UIAbilityContext) =>
            ovdTnt009(ctx)),
          new Case('tnt-009S aggregate alias', (ctx: common.UIAbilityContext) =>
            ovdTnt009S(ctx)),
        ]
      })
    }
    .height('100%')
  }
}
