import { taskpool, collections } from '@kit.ArkTS';
import { common } from '@kit.AbilityKit';
import { heavySum, SendablePoint, pointNorm, sumSendableArray } from '../../concurrent/HeavyCalc';
import { Case, DemoScaffold } from 'lib_common';

// taskpool：@Concurrent 函数执行、@Sendable 对象/集合跨线程。
@Entry
@Component
struct TaskPoolDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'taskpool + @Concurrent + @Sendable',
        cases: [
          // 注意：带 Priority 枚举第 3 参在 API24 运行时返回空 {}（API26 正常，2026-09-04 双端实测）；
          // 为兼容 emulator(API24) product 不加。
          new Case('heavySum-high', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: Object = await taskpool.execute(heavySum, 1000000);
            return `sum=${Number(r)}`;
          }),
          new Case('sendable-point', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const p = new SendablePoint(3, 4);
            const r: Object = await taskpool.execute(pointNorm, p);
            return `norm=${Number(r)}`;
          }),
          new Case('sendable-array', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const arr = new collections.Array<number>(1, 2, 3, 4, 5);
            const r: Object = await taskpool.execute(sumSendableArray, arr);
            return `sum=${Number(r)}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
