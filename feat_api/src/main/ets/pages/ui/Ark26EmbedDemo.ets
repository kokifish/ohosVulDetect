// 组件缺口试探页四（API26）：EmbeddedComponent——进程内嵌 UI 面（embeddedUI 扩展点）。
// d.ts 明示该扩展点仅 2-in-1/平板设备支持；手机模拟器上预期走 onError/占位路径，
// 错误内码化进 ✅ 行即达意（graceful 语料）。
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct Ark26EmbedDemo {
  @State embedError: string = '';

  build() {
    Column({ space: 10 }) {
      DemoScaffold({
        title: 'embedded component probe',
        cases: [
          new Case('embed note', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return this.embedError !== '' ? `embedded err=${this.embedError}` : 'embedded component mounted (see frame below)';
          })
        ]
      })

      EmbeddedComponent(
        { bundleName: 'com.koki.VD', abilityName: 'EmbeddedProviderAbility' },
        EmbeddedType.EMBEDDED_UI_EXTENSION
      )
        .width('90%')
        .height(120)
        .onError((e: Error) => {
          this.embedError = e.message;
        })
    }
    .width('100%')
    .padding(8)
  }
}
