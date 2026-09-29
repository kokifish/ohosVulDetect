// 跨模块漏洞面（HSP）：lib_shared 以 HSP 形态单独产出 abc，
// 本文件验证评分链路对独立共享包 abc 内 record 的可达性。
import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';
import hilog from '@ohos.hilog';

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

// VULN: OVD-XMOD-007 HSP 凭据常量进永久日志（CWE-532）
export function ovdXmod007(): string {
  hilog.info(0xFF01, 'VDSHARED', 'ticket %{public}s', 'tok_vd_hsp_ticket_77aa');
  return 'hsp ticket logged via hilog';
}

// OVD-TNT-006 source 锚：HSP 记录内令牌常量，由 feature 侧污点链取用
export const HSP_TNT_TOKEN = 'tok_hsp_tnt_c3a7';

export function ovdHspTntSrc(): string {
  return HSP_TNT_TOKEN;
}

// VULN: OVD-DEP-001 依赖链 source 锚（HSP，第三层）——经 lib_common 中转后由 feature sink 落盘
export const DEP_CHAIN_TOKEN = 'ovd_dep_tok_chain_5c19';

export function ovdDepSrc(): string {
  return DEP_CHAIN_TOKEN;
}
