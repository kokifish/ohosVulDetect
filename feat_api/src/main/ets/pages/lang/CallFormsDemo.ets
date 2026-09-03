// 调用形态压力页：spread/rest/apply/解构/Symbol 在 TsFeatures.ts（.ts）实现；
// 本页保留 .ets 可写的 super 方法/属性、命名空间 import、正则字面量、Record 动态键。
// 目标指令：super 调用与 ldsuperbyname/stsuperbyname、getmodulenamespace、definefieldbyvalue。
// 注：正则字面量在本工具链被降级为 new RegExp(字符串)，createregexpwithliteral 实测不可达，
// 此处保留正则语法作语料（见 docs/BENCHMARK.md）。
import * as lc from 'lib_common';
import { tsSpreadCall, tsRestLen, tsArraySpread, tsNewSpread, tsDynamicMethod, tsDestruct, tsSymbolKey } from './TsFeatures';

class CfBase {
  tag: string = 'base';

  greet(prefix: string): string {
    return `${prefix}${this.tag}`;
  }
}

class CfDerived extends CfBase {
  tag: string = 'derived';

  greet(prefix: string): string {
    return `d>${super.greet(prefix)}`;
  }

  superProp(): string {
    // super.tag 写：无 setter 时落到 this 自有属性；super.tag 读走原型链（字段不在原型上），
    // 故读回用 this.tag 才有值。
    super.tag = 'via-super';
    return this.tag;
  }
}

@Entry
@Component
struct CallFormsDemo {
  @State lines: string[] = [];

  build() {
    Column({ space: 10 }) {
      Text('call forms / spread / super').fontSize(20)
      Button('run call-form battery')
        .onClick(() => {
          // super 方法与属性
          const d = new CfDerived();
          this.lines.push(`super=${d.greet('go:')} prop=${d.superProp()}`);
          // 命名空间 import（getmodulenamespace）
          this.lines.push(`ns=${lc.Case !== undefined}`);
          // 正则字面量（createregexpwithliteral）
          const re = /b+([0-9])/g;
          const hit = re.exec('abbb7c');
          this.lines.push(`re=${hit ? hit[1] : 'none'} ${'a1b2'.replace(/[0-9]/g, '#')}`);
          // 动态键写入（definefieldbyvalue）
          const o: Record<string, number> = {};
          const k: string = 'dyn-key';
          o[k] = 41;
          this.lines.push(`dynkey=${o['dyn-key']}`);
        })
      Button('run ts-restricted forms')
        .onClick(() => {
          this.lines.push(`spread=${tsSpreadCall()} rest=${tsRestLen(1, 2, 3)} arrspread=${tsArraySpread()}`);
          this.lines.push(`newspread=${tsNewSpread()} dynfn=${typeof tsDynamicMethod}`);
          this.lines.push(`destruct=${tsDestruct()} symbol=${tsSymbolKey()}`);
        })
      ForEach(this.lines, (l: string) => Text(l).fontSize(14), (l: string) => l)
    }
    .height('100%')
  }
}
