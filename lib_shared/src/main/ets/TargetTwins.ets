// SAFE 孪生集合（XMOD/HSP）：OVD-XMOD-003S / 004S。
// 常量与漏洞侧断开（子串感知，check_twin_fp）；信任判定改为名单匹配、保险箱只读。
import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';

// SAFE: OVD-XMOD-003S 保险箱只读取并脱敏展示，不落新 token（CWE-312 加固）
export function ovdXmod003S(ctx: common.Context): string {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'vd_hsp_vault' });
  const v: string = p.getSync('vault_token', '') as string;
  return `vault read masked=${v ? `***${v.slice(-2)}` : '(empty)'}`;
}

// SAFE: OVD-XMOD-004S 信任判定按设备名单精确匹配（CWE-285 加固）
const TRUSTED_MESH: string[] = ['vd-mesh-bench-01', 'vd-mesh-bench-02'];

export function ovdXmod004S(deviceId: string): string {
  return TRUSTED_MESH.indexOf(deviceId) >= 0 ? 'mesh peer trusted' : 'mesh peer rejected (allowlist)';
}
