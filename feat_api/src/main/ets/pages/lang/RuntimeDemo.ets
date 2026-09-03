// 类运行时 helper 压力页：私有字段/super 索引访问/动态属性/对象展开解构/tagged template/
// __proto__ 字面量/一元 +/debugger（RuntimeHelpers.ts 实现），叠加词法环境 wide 压力（LexWideLab.ets）。
import { tsPrivate, tsObjectHelpers, tsSuperIndex, tsCallRange, tsTemplateAndMisc } from './RuntimeHelpers';
import { lexWideStress } from './LexWideLab';

@Entry
@Component
struct RuntimeDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('runtime helpers / lexenv wide').fontSize(20)
      Button('run runtime-helper battery')
        .onClick(() => {
          this.lines.push(tsPrivate());
          this.lines.push(tsObjectHelpers());
          this.lines.push(tsSuperIndex());
          this.lines.push(`callrange=${tsCallRange()}`);
          this.lines.push(tsTemplateAndMisc('41'));
        })
      Button('run lexenv wide stress')
        .onClick(() => {
          this.lines.push(`lexwide=${lexWideStress(Math.floor(Date.now() / 1000) % 97)}`);
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
