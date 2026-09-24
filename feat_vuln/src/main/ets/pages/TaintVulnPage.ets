import { Case, DemoScaffold } from 'lib_common';
import { ovdTntSink } from '../vulns/tnt/OVD-TNT-001';
import { ovdTntSink as ovdTntSinkS, ovdTntSink2S } from '../vulns/tnt/Twins';
import { ovdTntSink2 } from '../vulns/tnt/OVD-TNT-002';

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
            ovdTntSink2S())
        ]
      })
    }
    .height('100%')
  }
}
