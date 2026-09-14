// 生成器/迭代器压力页：受 arkts-* 限制的语言特性在 TsFeatures.ts（.ts 同模块编译）实现，
// 本页编排调用。目标指令见 TsFeatures.ts 文件头。
import {
  tsManualNext, tsForOfSum, tsForOfClose, tsForAwaitTotal,
  tsForInKeys, tsForInSum, tsGenResumeWithArg, tsYieldStarDrive
} from './TsFeatures';
import { selfcheckLine } from './Selfcheck';

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
          this.lines.push(tsGenResumeWithArg());
          this.lines.push(tsYieldStarDrive());
          this.lines.push(`forof-sum=${tsForOfSum()}`);
          this.lines.push(`break-close=${tsForOfClose()}`);
          const scores: Record<string, number> = { 'a': 1, 'b': 2, 'c': 3 };
          this.lines.push(`forin=${tsForInKeys(scores)} entries=${tsForInSum(scores)}`);
        })
      Button('run async generator')
        .onClick(async () => {
          this.lines.push(`async-gen=${await tsForAwaitTotal()}`);
        })
      Button('run selfcheck')
        .onClick(() => {
          const actual: string[] = [];
          actual.push(tsManualNext());
          actual.push(tsGenResumeWithArg());
          actual.push(tsYieldStarDrive());
          actual.push(`forof-sum=${tsForOfSum()}`);
          actual.push(`break-close=${tsForOfClose()}`);
          const scores: Record<string, number> = { 'a': 1, 'b': 2, 'c': 3 };
          actual.push(`forin=${tsForInKeys(scores)} entries=${tsForInSum(scores)}`);
          tsForAwaitTotal().then((t: number): void => {
            actual.push(`async-gen=${t}`);
            this.lines.push(selfcheckLine('generator',
              ['manual=0,1,2,ret=undefined', 'second=42 fin=7 caught', 'ys=1,33 fin=7',
                'forof-sum=3', 'break-close=100', 'forin=abc entries=6', 'async-gen=30'],
              actual, []));
          });
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
