import { SharedBox, hspFormat } from 'lib_shared';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// 动态 import()：模块内相对路径目标 + HSP 包名目标；对照顶部静态 import。
@Entry
@Component
struct DynamicImportDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'dynamic import() + HSP',
        cases: [
          new Case('lazy-local', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const m = await import('../../model/LazyCalc');
            return `lazyTriple(7)=${m.lazyTriple(7)}`;
          }),
          new Case('lazy-hsp', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const m = await import('lib_shared');
            return `lazyDouble(21)=${m.lazyDouble(21)} greet=${m.lazyGreet('bench')}`;
          }),
          new Case('static-hsp', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const box = new SharedBox();
            box.bump();
            box.bump();
            return `box=${box.value} ${hspFormat('hsp', 42)}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
