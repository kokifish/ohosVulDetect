// 跨模块漏洞面（HSP）：lib_shared 以 HSP 形态单独产出 abc，
// 本文件验证评分链路对独立共享包 abc 内 record 的可达性。
import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';

// VULN: OVD-XMOD-003 HSP 共享保险箱 token 明文缓存（CWE-312）
export function ovdXmod003(ctx: common.Context): string {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'vd_hsp_vault' });
  p.putSync('vault_token', 'tok_vd_hsp_vault_9f27c0');
  p.flush();
  return 'hsp vault token cached in plaintext';
}

// VULN: OVD-XMOD-004 HSP 设备信任判定恒真（CWE-285）
export function ovdXmod004(deviceId: string): boolean {
  // 不查任何信任名单，直接放行
  return true;
}

export function ovdXmod004Usage(deviceId: string): string {
  const trusted = ovdXmod004(deviceId);
  return `mesh(${deviceId}) trusted=${trusted}`;
}
