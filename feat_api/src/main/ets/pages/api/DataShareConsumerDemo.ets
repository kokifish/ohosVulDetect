import { dataShare, dataSharePredicates } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// DataShare 消费侧：本版 SDK 侧消费接口为 createDataProxyHandle（旧 createDataShareHelper 已移除）。
@Entry
@Component
struct DataShareConsumerDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'dataShare consumer (cross-HAP)',
        cases: [
          new Case('proxy-handle', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const handle: dataShare.DataProxyHandle = await dataShare.createDataProxyHandle();
            return `proxy handle: ${handle !== undefined}`;
          }),
          new Case('predicates-chain', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const pred = new dataSharePredicates.DataSharePredicates()
              .equalTo('name', 'alice')
              .orderByAsc('id')
              .limit(0, 5);
            return `predicates built`;
          })
        ]
      })

    }
    .height('100%')
  }
}
