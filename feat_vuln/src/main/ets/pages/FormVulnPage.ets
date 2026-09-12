import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { ovdForm001 } from '../vulns/form/OVD-FORM-001';
import { ovdForm002 } from '../vulns/form/OVD-FORM-002';
import { ovdForm001S, ovdForm002S } from '../vulns/form/Twins';

// FormKit 攻击面：卡片 router 注入 / 表单消息信任边界。
@Entry
@Component
struct FormVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'form card injection',
        cases: [
          new Case('001 router-inject', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            // VULN 标记的调用面：组件域 API，目标未白名单直接分发
            try {
              postCardAction(this, { action: 'router', abilityName: 'EntryAbility', params: { target: '../secret/Page' } });
            } catch (e) {
              log(`postCardAction ctx=${(e as BusinessError).code}`);
            }
            return ovdForm001('../secret/Page');
          }),
          new Case('002 raw-event', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return await ovdForm002(ctx, '{"cmd":"x","extra":"' + 'A'.repeat(600) + '"}');
          }),
          new Case('001S allowlist', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const verdict = ovdForm001S('../secret/Page');
            if (verdict.startsWith('allowlisted')) {
              try {
                postCardAction(this, { action: 'router', abilityName: 'EntryAbility', params: { target: 'pages/Index' } });
              } catch (e) {
                log(`postCardAction ctx=${(e as BusinessError).code}`);
              }
            }
            return verdict;
          }),
          new Case('002S schema', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return await ovdForm002S(ctx, '{"action":"refresh","itemId":"42"}');
          })
        ]
      })
    }
    .height('100%')
  }
}
