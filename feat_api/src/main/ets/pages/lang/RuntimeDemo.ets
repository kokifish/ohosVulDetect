// 类运行时 helper 压力页：私有字段/super 索引访问/动态属性/对象展开解构/tagged template/
// __proto__ 字面量/一元 +/debugger/类计算属性名/withnameset（RuntimeHelpers.ts），
// 叠加词法环境 wide（LexWideLab.ets）与巨型参数 wide（WideFormsLab.ts）。
import { tsPrivate, tsObjectHelpers, tsSuperIndex, tsCallRange, tsTemplateAndMisc, tsComputedClassKey, tsNameSet, tsGlobalRef, tsMemberTagCalls } from './RuntimeHelpers';
import { tsDynamicMethod, tsLiteralIndexCall, tsRecordIndexCall, tsOptChainCall } from './TsFeatures';
import { lexWideStress } from './LexWideLab';
import { localReadWide, externalReadWide, newWide, callRangeWide, callRangeDirect, restWideCall, excludedWide } from './WideFormsLab';

@Entry
@Component
struct RuntimeDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('runtime helpers / wide forms').fontSize(20)
      Button('run runtime-helper battery')
        .onClick(() => {
          this.lines = [];
          this.lines.push(tsPrivate());
          this.lines.push(tsObjectHelpers());
          this.lines.push(tsSuperIndex());
          this.lines.push(`callrange=${tsCallRange()}`);
          this.lines.push(tsTemplateAndMisc('41'));
          this.lines.push(tsComputedClassKey('dynKey'));
          this.lines.push(tsNameSet());
          this.lines.push(tsGlobalRef());
          this.lines.push(tsMemberTagCalls());
          this.lines.push(`dyn=${tsDynamicMethod()}`);
          this.lines.push(`lit=${tsLiteralIndexCall()}`);
          this.lines.push(`rec=${tsRecordIndexCall('greet')}`);
          this.lines.push(`opt=${tsOptChainCall('greet')}`);
        })
      Button('run lexenv wide stress')
        .onClick(() => {
          this.lines.push(`lexwide=${lexWideStress(Math.floor(Date.now() / 1000) % 97)}`);
        })
      Button('run arg-scale wide forms')
        .onClick(() => {
          const local = localReadWide();
          const ext = externalReadWide();
          this.lines.push(`neww=${newWide()} callr=${callRangeWide()} rest=${restWideCall()}`);
          // direct=NaN 是语义正确值：5 实参调 130 形参函数，a129=undefined。
          this.lines.push(`direct=${callRangeDirect()}`);
          this.lines.push(`reads=${local % 97}/${ext % 97} excl=${excludedWide({} as ESObject)}`);
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
