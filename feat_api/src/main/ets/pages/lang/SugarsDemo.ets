// 语法糖压力页：访问器/私有品牌/逻辑赋值/控制流糖/数值与模板糖/static 块+词法 super/
// async generator for-await/函数式链/解构加深/new.target 捕获（Sugars.ts）。
// 反编译对照价值：复杂语法糖 → 通用指令的降级路径还原。
import {
  sugarAccessors, sugarPrivLogic, sugarFlow, sugarNumbers, sugarStaticSuper,
  sugarForAwait, sugarFunctional, sugarDestruct, sugarNewTarget
} from './Sugars';

@Entry
@Component
struct SugarsDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('syntax sugars stress').fontSize(20)
      Button('run sugars battery')
        .onClick(() => {
          this.lines = [];
          this.lines.push(sugarAccessors());
          this.lines.push(sugarPrivLogic([1, undefined, 2]));
          this.lines.push(sugarFlow(4));
          this.lines.push(sugarNumbers());
          this.lines.push(sugarStaticSuper());
          this.lines.push(sugarFunctional({ 'a': 1, 'b': 2 }));
          this.lines.push(sugarDestruct());
          this.lines.push(sugarNewTarget());
        })
      Button('run for-await sugar')
        .onClick(() => {
          sugarForAwait().then((r: string) => { this.lines.push(r); });
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
