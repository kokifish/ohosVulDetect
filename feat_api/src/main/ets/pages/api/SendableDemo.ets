import { common } from '@kit.AbilityKit';
import { SendablePoint } from '../../concurrent/HeavyCalc';
import { sendLocalClass, sendStaticUse, sendReadLocalVar, sendLazyImport, sendClosure, sendAsyncFetch, sendUseImport, sendCallImport, normalLazyUse } from '../../concurrent/SendableLab';
import { sendWideStress } from '../../concurrent/SendableWideLab';
import { Case, DemoScaffold } from 'lib_common';

// sendable 指令覆盖：@Sendable 函数各形态 + wide 压力（300 类/520 import/260 模块变量）。
@Entry
@Component
struct SendableDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'sendable lab',
        cases: [
          new Case('lab-local-class', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = sendLocalClass();
            return `localClass=${r}`;
          }),
          new Case('lab-static-use', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = sendStaticUse();
            return `static=${r}`;
          }),
          new Case('lab-read-local-var', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = sendReadLocalVar();
            return `localVar=${r}`;
          }),
          new Case('lab-lazy-import', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const p = new SendablePoint(3, 4);
            const r: number = sendLazyImport(p);
            const n: number = normalLazyUse(p);
            return `lazy=${r},normal=${n}`;
          }),
          new Case('lab-closure', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = sendClosure();
            return `closure=${r}`;
          }),
          new Case('lab-async', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = await sendAsyncFetch(3);
            return `async=${r}`;
          }),
          new Case('lab-use-import', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = sendUseImport();
            return `import=${r}`;
          }),
          new Case('lab-call-import', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = sendCallImport();
            return `call=${r}`;
          }),
          new Case('lab-wide-stress', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const r: number = sendWideStress();
            return `wide=${r}`;
          })
        ]
      })
    }
    .height('100%')
  }
}
