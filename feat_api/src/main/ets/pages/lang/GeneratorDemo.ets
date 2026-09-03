// 生成器/迭代器压力页：受 arkts-* 限制的语言特性在 TsFeatures.ts（.ts 同模块编译）实现，
// 本页编排调用。目标指令见 TsFeatures.ts 文件头。
import {
  tsManualNext, tsForOfSum, tsForOfClose, tsForAwaitTotal,
  tsForInKeys, tsForInSum
} from './TsFeatures';

@Entry
@Component
struct GeneratorDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('generators / iterators').fontSize(20)
      Button('run generator battery')
        .onClick(() => {
          this.lines.push(tsManualNext());
          this.lines.push(`forof-sum=${tsForOfSum()}`);
          this.lines.push(`break-close=${tsForOfClose()}`);
          const scores: Record<string, number> = { 'a': 1, 'b': 2, 'c': 3 };
          this.lines.push(`forin=${tsForInKeys(scores)} entries=${tsForInSum(scores)}`);
        })
      Button('run async generator')
        .onClick(async () => {
          this.lines.push(`async-gen=${await tsForAwaitTotal()}`);
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
