// IMEKit：输入法框架只读查询（getSetting/getDefaultInputMethod/getCurrentInputMethod/Subtype）。
// 全部无权限公共 API，不弹面板、不切输入法，纯状态读取。
import { inputMethod } from '@kit.IMEKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct ImeDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'IMEKit',
        cases: [
          new Case('setting + default ime', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const setting = inputMethod.getSetting();
              const def = inputMethod.getDefaultInputMethod();
              return `setting=${setting ? 'ok' : 'null'} default=${def ? (def.name ?? '-') : 'none'}`;
            } catch (e) {
              return `ime-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('current ime + subtype', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const cur = inputMethod.getCurrentInputMethod();
              const sub = inputMethod.getCurrentInputMethodSubtype();
              return `cur=${cur ? (cur.name ?? '-') : 'none'} sub=${sub ? (sub.name ?? '-') : 'none'}`;
            } catch (e) {
              return `cur-err=${(e as BusinessError).code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
