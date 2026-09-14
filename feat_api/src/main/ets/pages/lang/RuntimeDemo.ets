// 类运行时 helper 压力页：私有字段/super 索引访问/动态属性/对象展开解构/tagged template/
// __proto__ 字面量/一元 +/debugger/类计算属性名/withnameset（RuntimeHelpers.ts），
// 叠加词法环境 wide（LexWideLab.ets）、巨型参数 wide（WideFormsLab.ts）、
// 箭头 super（ArrowSuper.js）与巨数组 stownbyindex wide（WideStoreLab.ts），
// 以及字符串边界语料（StringStressLab.ts：引号/换行/代理对/伪造反汇编文本结构）。
import { tsPrivate, tsObjectHelpers, tsSuperIndex, tsCallRange, tsTemplateAndMisc, tsComputedClassKey, tsNameSet, tsGlobalRef, tsMemberTagCalls, tsConstAssign, tsArrowSuper } from './RuntimeHelpers';
import { tsDynamicMethod, tsLiteralIndexCall, tsRecordIndexCall, tsOptChainCall } from './TsFeatures';
import { lexWideStress } from './LexWideLab';
import { recursionChainStress } from './RecursionChainLab';
import { localReadWide, externalReadWide, newWide, callRangeWide, callRangeDirect, restWideCall, excludedWide, superWide, lazyReadWide, nsWide } from './WideFormsLab';
import { stownWide } from './WideStoreLab';
import { wideNameCall } from './WideNameCall';
import { stringStressChecksum } from './StringStressLab';
import { selfcheckLine } from './Selfcheck';

@Entry
@Component
struct RuntimeDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('runtime helpers / wide forms').fontSize(20)
      // selfcheck 置首：全电池重跑必须在干净堆上执行（其他电池跑过后大对象垃圾
      // 会使本处理器静默失败，实测 120s 无输出）；sweep 按布局序点击，先自检后跑电池。
      Button('run selfcheck')
        .onClick(() => {
          // 全电池重跑 + 基线断言（基线=docs/BENCHMARK.md 各轮模拟器定点验证值）。
          // seed 类行（lexwide/reads/chain/strstress）只校验前缀形态，不钉死数值。
          const actual: string[] = [];
          actual.push(tsPrivate());
          actual.push(tsObjectHelpers());
          actual.push(tsSuperIndex());
          actual.push(`callrange=${tsCallRange()}`);
          actual.push(tsTemplateAndMisc('41'));
          actual.push(tsComputedClassKey('dynKey'));
          actual.push(tsNameSet());
          actual.push(tsGlobalRef());
          actual.push(tsMemberTagCalls());
          actual.push(tsConstAssign());
          actual.push(tsArrowSuper());
          actual.push(`dyn=${tsDynamicMethod()}`);
          actual.push(`lit=${tsLiteralIndexCall()}`);
          actual.push(`rec=${tsRecordIndexCall('greet')}`);
          actual.push(`opt=${tsOptChainCall('greet')}`);
          const local = localReadWide();
          const ext = externalReadWide();
          actual.push(`neww=${newWide()} callr=${callRangeWide()} rest=${restWideCall()}`);
          actual.push(`direct=${callRangeDirect()}`);
          actual.push(`reads=${local % 97}/${ext % 97} excl=${excludedWide({} as ESObject)}`);
          actual.push(`superw=${superWide()} lazyw=${lazyReadWide() % 97} nsw=${nsWide() % 97}`);
          actual.push(`stw=${stownWide()}`);
          actual.push(`wcn=${wideNameCall()}`);
          actual.push(`lexwide=${lexWideStress(7)}`);
          actual.push(`chain=${recursionChainStress(7, 1)}`);
          actual.push(`strstress=${stringStressChecksum()}`);
          this.lines.push(selfcheckLine('runtime',
            ['priv=15 same=true', 'computed=3 spread=3 rest=1 del=1', 'superidx=none own=7',
              'callrange=10', 'tonumber=41 tpl=a[41]b proto=1 deany=9', 'function:true',
              'nameset=1', 'global=42 after=42', 'tag=3/6', 'const=const', 'asup=8 asupw=131',
              'dyn=hi-dyn', 'lit=hi-lit', 'rec=hi-rec', 'opt=hi-opt',
              'neww=1 callr=9 rest=2', 'direct=NaN', 'superw=1 lazyw=76 nsw=76',
              'stw=65560', 'wcn=131'],
            actual, ['reads=', 'lexwide=', 'chain=', 'strstress=n=']));
        })
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
          this.lines.push(tsConstAssign());
          this.lines.push(tsArrowSuper());
          this.lines.push(`dyn=${tsDynamicMethod()}`);
          this.lines.push(`lit=${tsLiteralIndexCall()}`);
          this.lines.push(`rec=${tsRecordIndexCall('greet')}`);
          this.lines.push(`opt=${tsOptChainCall('greet')}`);
        })
      Button('run lexenv wide stress')
        .onClick(() => {
          this.lines.push(`lexwide=${lexWideStress(Math.floor(Date.now() / 1000) % 97)}`);
        })
      Button('run recursion depth stress')
        .onClick(() => {
          this.lines.push(`chain=${recursionChainStress(7, 1)}`);
        })
      Button('run arg-scale wide forms')
        .onClick(() => {
          const local = localReadWide();
          const ext = externalReadWide();
          this.lines.push(`neww=${newWide()} callr=${callRangeWide()} rest=${restWideCall()}`);
          // direct=NaN 是语义正确值：5 实参调 130 形参函数，a129=undefined。
          this.lines.push(`direct=${callRangeDirect()}`);
          this.lines.push(`reads=${local % 97}/${ext % 97} excl=${excludedWide({} as ESObject)}`);
          this.lines.push(`superw=${superWide()} lazyw=${lazyReadWide() % 97} nsw=${nsWide() % 97}`);
          this.lines.push(`stw=${stownWide()}`);
          this.lines.push(`wcn=${wideNameCall()}`);
        })
      Button('run string stress battery')
        .onClick(() => {
          this.lines.push(`strstress=${stringStressChecksum()}`);
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
