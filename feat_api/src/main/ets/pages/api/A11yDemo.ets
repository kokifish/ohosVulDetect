// AccessibilityKit：无障碍状态查询（isOpenAccessibility 同步/异步、屏幕朗读状态）。
// 查询类无权限要求，确定性返回。
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct A11yDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'AccessibilityKit',
        cases: [
          new Case('enabled sync/async', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const syncVal = accessibility.isOpenAccessibilitySync();
              const asyncVal = await accessibility.isOpenAccessibility();
              return `sync=${syncVal} async=${asyncVal}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`enabled fail: ${err.code} ${err.message}`);
              return `enabled-err=${err.code}`;
            }
          }),
          new Case('screen reader', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const on = accessibility.isScreenReaderOpenSync();
              return `screenReaderOpen=${on}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`screenReader fail: ${err.code} ${err.message}`);
              return `screenReader-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
