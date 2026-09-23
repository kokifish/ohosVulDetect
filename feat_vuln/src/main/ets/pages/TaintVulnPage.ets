import { Case, DemoScaffold } from 'lib_common';
import { ovdTntSink } from '../vulns/tnt/OVD-TNT-001';
import { ovdTntSink as ovdTntSinkS } from '../vulns/tnt/Twins';

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
            ovdTntSinkS())
        ]
      })
    }
    .height('100%')
  }
}
