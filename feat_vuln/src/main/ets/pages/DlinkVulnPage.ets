import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdDlink001 } from '../vulns/deeplink/OVD-DLINK-001';
import { ovdDlink002 } from '../vulns/deeplink/OVD-DLINK-002';
import { ovdDlink003 } from '../vulns/deeplink/OVD-DLINK-003';
import { ovdDlink001S, ovdDlink002S, ovdDlink003S } from '../vulns/deeplink/Twins';

// 深链参数校验面：按钮本地构造 ovd://backdoor 深链并直接调处理函数；
// 真实入口（BackdoorAbility onCreate → 同一批函数）由 hdc aa start -U 触发做 E2E。
@Entry
@Component
struct DlinkVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'deeplink param validation',
        cases: [
          new Case('DLINK-001 cmd no allowlist', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDlink001(ctx, 'ovd://backdoor?cmd=purge-all-now')),
          new Case('DLINK-001S allowlist', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDlink001S(ctx, 'ovd://backdoor?cmd=status')),
          // openLink 对可跳转外链会把窗口整屏切走（API24 实测 ~1s 内，页面销毁、信号行必丢），
          // 页面路径用空 redirect 走 openLink 参数错误快速失败分支（确定性）；真实派发面由
          // BackdoorAbility 深链 E2E 覆盖（Backdoor 页 @StorageProp 响应式展示）
          new Case('DLINK-002 redirect empty (err path)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDlink002(ctx, 'ovd://backdoor?redirect=')),
          new Case('DLINK-002S host allowlist', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDlink002S(ctx, 'ovd://backdoor?redirect=https://vd-redirect.example/next')),
          new Case('DLINK-003 token substring', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDlink003('ovd://backdoor?x=1&admin-token=true')),
          new Case('DLINK-003S strict parse', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDlink003S('ovd://backdoor?session=vd-bench-session-ok-77')),
        ],
      })
    }
    .height('100%')
  }
}
