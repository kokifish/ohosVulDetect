// 语法糖压力页：访问器/私有品牌/逻辑赋值/控制流糖/数值与模板糖/static 块+词法 super/
// async generator for-await/函数式链/解构加深/new.target 捕获（Sugars.ts）。
// 反编译对照价值：复杂语法糖 → 通用指令的降级路径还原。
import {
  sugarAccessors, sugarPrivLogic, sugarFlow, sugarNumbers, sugarStaticSuper,
  sugarForAwait, sugarFunctional, sugarDestruct, sugarNewTarget, sugarNumericKeys,
  sugarWeakColls, sugarProxyReflect, sugarRegexAdv
} from './Sugars';
import { selfcheckLine } from './Selfcheck';

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
          this.lines.push(`nk=${sugarNumericKeys()}`);
          this.lines.push(sugarWeakColls(42));
          this.lines.push(sugarProxyReflect(9));
          this.lines.push(sugarRegexAdv('2026-09'));
        })
      Button('run for-await sugar')
        .onClick(() => {
          sugarForAwait().then((r: string) => { this.lines.push(r); });
        })
      Button('run selfcheck')
        .onClick(() => {
          const actual: string[] = [];
          actual.push(sugarAccessors());
          actual.push(sugarPrivLogic([1, undefined, 2]));
          actual.push(sugarFlow(4));
          actual.push(sugarNumbers());
          actual.push(sugarStaticSuper());
          actual.push(sugarFunctional({ 'a': 1, 'b': 2 }));
          actual.push(sugarDestruct());
          actual.push(sugarNewTarget());
          actual.push(`nk=${sugarNumericKeys()}`);
          actual.push(sugarWeakColls(42));
          actual.push(sugarProxyReflect(9));
          actual.push(sugarRegexAdv('2026-09'));
          sugarForAwait().then((r: string): void => {
            actual.push(r);
            this.lines.push(selfcheckLine('sugars',
              ['acc=8/4/11', 'priv=true1 f=true nz=2 oe=2', 'sw=2 do=3 lab=1,2 ter=mid comma=1',
                'big=1 sep=1000000 exp=1000 pow=1024 rawlen=11', 'stat=3 sup=6',
                'ent=2 back=1 arr=4,6 flat=6 at=30', 'c=7 d=8 rest=2 swap=21 obj=3', 'nt=1',
                'nk=20', 'wm=42 ws=true deref=true', 'px=10/1/true/3',
                're=202609 behind=true ahead=true dotall=true', 'fa=3'],
              actual, []));
          });
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
