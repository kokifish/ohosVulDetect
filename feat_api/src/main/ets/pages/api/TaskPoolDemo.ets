import { taskpool, collections, Priority } from '@kit.ArkTS';
import { heavySum, SendablePoint, pointNorm, sumSendableArray } from '../../concurrent/HeavyCalc';
import { Runner } from 'lib_common';

// taskpool：@Concurrent 函数执行（优先级枚举）、@Sendable 对象/集合跨线程。
@Entry
@Component
struct TaskPoolDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('taskpool + @Concurrent + @Sendable').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('heavySum-high').margin(4).onClick(() => {
          this.runner.run('heavySum-high', async () => {
            const r: Object = await taskpool.execute(heavySum, 1000000, Priority.HIGH);
            return `sum=${Number(r)}`;
          });
        })
        Button('sendable-point').margin(4).onClick(() => {
          this.runner.run('sendable-point', async () => {
            const p = new SendablePoint(3, 4);
            const r: Object = await taskpool.execute(pointNorm, p);
            return `norm=${Number(r)}`;
          });
        })
        Button('sendable-array').margin(4).onClick(() => {
          this.runner.run('sendable-array', async () => {
            const arr = new collections.Array<number>(1, 2, 3, 4, 5);
            const r: Object = await taskpool.execute(sumSendableArray, arr);
            return `sum=${Number(r)}`;
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
