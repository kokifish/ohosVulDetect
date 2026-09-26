import { pasteboard } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';
import { ovdPerm001 } from '../vulns/perm/OVD-PERM-001';
import { ovdPaste001 } from '../vulns/perm/OVD-PASTE-001';
import { ovdPriv001 } from '../vulns/perm/OVD-PRIV-001';
import { ovdPriv002 } from '../vulns/perm/OVD-PRIV-002';
import { ovdPriv003 } from '../vulns/perm/OVD-PRIV-003';
import { ovdPaste004 } from '../vulns/perm/OVD-PASTE-004';
import { ovdPaste005 } from '../vulns/perm/OVD-PASTE-005';
import { ovdPerm002 } from '../vulns/perm/OVD-PERM-002';
import { ovdPaste003 } from '../vulns/perm/OVD-PASTE-003';
import { ovdPaste001S, ovdPaste002S, ovdPerm001S, ovdPriv001S, ovdPriv002S, ovdPaste003S, ovdPriv003S, ovdPaste004S, ovdPaste005S, ovdPerm002S } from '../vulns/perm/Twins';
import { common } from '@kit.AbilityKit';

// 权限/隐私/粘贴板；PASTE-002 由 onPageShow 生命周期触发（manifest 锚定 onPageShow）。
// 2026-09 迁移为 DemoScaffold 用例制：sweep 可直接采集 ✅/❌ 行（原 Runner 按钮版日志不进 dump）。
@Entry
@Component
struct PermPage {
  @State lines: string[] = [];

  // VULN: OVD-PASTE-002 页面生命周期静默读粘贴板（CWE-200）
  onPageShow(): void {
    const pb = pasteboard.getSystemPasteboard();
    pb.getData().then((d: pasteboard.PasteData) => {
      const t = d.getPrimaryText() ?? '';
      this.lines.push(`PASTE-002 onPageShow read: ${t}`);
    }).catch(() => {
    });
  }

  build() {
    Column() {
      DemoScaffold({
        title: 'permissions / privacy / pasteboard',
        cases: [
          new Case('perm-001 declared-unused', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPerm001()),
          new Case('paste-001 pwd', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste001('Admin@123')),
          new Case('priv-001 fingerprint', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPriv001()),
          // ENV(不可修复): 模拟器系统定位开关默认关闭（3301100 switch off），需系统设置开启
          new Case('priv-002 locate', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPriv002()),
          new Case('priv-003 fp-chain', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPriv003()),
          new Case('paste-004 listener', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste004()),
          new Case('paste-005 clip-token', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste005('sess_ovd_clip_0007')),
          new Case('perm-002 background profiling', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPerm002()),
          new Case('PASTE-001S refuse', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste001S(true)),
          new Case('PASTE-002S gated', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste002S(true)),
          new Case('PERM-001S on-demand', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPerm001S('scan')),
          new Case('PRIV-001S consent', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPriv001S(true)),
          new Case('PRIV-002S one-shot', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPriv002S(true)),
          new Case('PRIV-003S local-only', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPriv003S()),
          new Case('PASTE-004S on-demand', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste004S(true)),
          new Case('PASTE-003 cross-device', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste003('tok_bench_secret')),
          new Case('PASTE-003S refuse', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste003S(true)),
          new Case('PASTE-005S refuse', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPaste005S('sess_ovd_clip_0007')),
          new Case('PERM-002S on-demand only', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPerm002S())
        ]
      })
    }
    .height('100%')
  }
}
