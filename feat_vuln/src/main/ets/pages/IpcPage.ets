import { common, Want } from '@kit.AbilityKit';
import { emitter } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdIpc001S, ovdIpc002S, ovdIpc003S, ovdIpc004S, ovdIpc005S } from '../vulns/ipc/Twins';
import { ovdIpc003 } from '../vulns/ipc/OVD-IPC-003';

// IPC 面：001/002/003/004 事实源在 module.json5 / BackdoorAbility / DataShareExt；此处提供触发器。
@Entry
@Component
struct IpcPage {
  @State admin: string = 'false';

  onPageShow(): void {
    this.admin = AppStorage.get<string>('ovd_is_admin') ?? 'false';
  }

  build() {
    Column() {
      DemoScaffold({
        status: `ovd_is_admin=${this.admin}`,
      title: 'IPC / exported surface',
        cases: [
          new Case('001/004 deeplink', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const want: Want = {
              action: 'ohos.want.action.viewData',
              uri: 'ovd://backdoor?path=../../sandbox-note'
            };
            await ctx.startAbility(want);
            return 'implicit want sent (exported backdoor)';
          }),
          new Case('002 magic', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const want: Want = {
              action: 'ohos.want.action.viewData',
              uri: 'ovd://backdoor',
              parameters: { 'magic': '0vD_b4ckd00r' }
            };
            await ctx.startAbility(want);
            return 'magic param sent';
          }),
          new Case('003 tcp-backdoor', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdIpc003((s: string) => {
              log(`ev ${s}`);
            })),
          new Case('005 emitter-admin', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            emitter.emit('ovd.admin', { data: { 'admin': '1' } });
            this.admin = AppStorage.get<string>('ovd_is_admin') ?? 'false';
            return `after emit: admin=${this.admin}`;
          }),
          new Case('001S caller-check', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdIpc001S('com.koki.VD')),
          new Case('002S verify', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdIpc002S('com.koki.VD', true)),
          new Case('003S loopback-auth', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdIpc003S(true)),
          new Case('004S allowlist', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdIpc004S('viewHelp')),
          new Case('005S sig-check', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdIpc005S(true))
        ]
      })

    }
    .height('100%')
  }
}
