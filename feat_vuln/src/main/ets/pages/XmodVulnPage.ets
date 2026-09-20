import { Case, DemoScaffold, ovdXmod001, ovdXmod002, ovdXmod001S, ovdXmod002S } from 'lib_common';
import { ovdXmod003, ovdXmod004, ovdXmod003S, ovdXmod004S } from 'lib_shared';
import { common } from '@kit.AbilityKit';

// 跨模块漏洞分布：XMOD-001/002 主体在 lib_common（HAR），003/004 在 lib_shared（HSP）。
// 检测 record 不落在 feature 模块源码路径，页面只负责触发运行路径（防 tree-shake）。
@Entry
@Component
struct XmodVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'cross-module vuln distribution (HAR/HSP)',
        cases: [
          new Case('XMOD-001 har master key', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdXmod001()),
          new Case('XMOD-001S runtime key', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdXmod001S('bench-user-secret-42')),
          new Case('XMOD-002 har session cache', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdXmod002(ctx)),
          new Case('XMOD-002S anonymous hits', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdXmod002S(ctx, 7)),
          new Case('XMOD-003 hsp vault token', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdXmod003(ctx)),
          new Case('XMOD-003S vault readonly', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdXmod003S(ctx)),
          new Case('XMOD-004 mesh trust any', async (ctx: common.UIAbilityContext, log: (s: string) => void): Promise<string> => `mesh trust=${ovdXmod004('vd-mesh-unknown-99')}`),
          new Case('XMOD-004S mesh allowlist', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdXmod004S('vd-mesh-unknown-99')),
        ],
      })
    }
    .height('100%')
  }
}
