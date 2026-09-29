// VULN: OVD-DIMP-001 动态加载目标 record：
// VULN: OVD-DIMP-002 拼接路径变体共用本 sink：sink 与安全函数同 record，由主侧 await import() 拉起。
// 半混淆形态：obfuscation-rules.txt keep 本 record 导出名（跨边界动态加载的真实发布
// 形态——ArkGuard 官方 FAQ 要求动态入口 keep；同 record 内其余符号照常混淆）。
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export const DIMP_TOKEN = 'ovd_dimp_tok_7f3e91';

export async function ovdDimpSink(ctx: common.Context): Promise<string> {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_dimp_dyn' });
  p.putSync('dyn_credential', DIMP_TOKEN);
  await p.flush();
  return 'dimp sink written from dynamic record';
}

export async function ovdDimpSafe(ctx: common.Context): Promise<string> {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_dimp_dyn' });
  p.putSync('hits_only', '1');
  await p.flush();
  return 'dimp safe aggregate from dynamic record';
}
