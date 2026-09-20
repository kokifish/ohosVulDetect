// TestKit：abilityDelegatorRegistry（delegator 仅在 aa test 挂载下存在，普通运行注册面可达）
// + @ohos.UiTest 匹配模式枚举面（不创建 Driver，避免与外部 uitest 会话抢占）。
import { abilityDelegatorRegistry } from '@kit.TestKit';
import { MatchPattern } from '@ohos.UiTest';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct TestKitDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'TestKit',
        cases: [
          new Case('delegator registry', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const d = abilityDelegatorRegistry.getAbilityDelegator();
              return d ? 'delegator present' : 'no delegator (outside aa test) - registry ok';
            } catch (e) {
              return `del-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('uitest match pattern', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              return `MatchPattern.EQUALS=${MatchPattern.EQUALS}`;
            } catch (e) {
              return `mp-err=${(e as BusinessError).code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
