// SAFE 孪生集合（XMOD/HAR）：OVD-XMOD-001S / 002S。
// 常量与漏洞侧断开（子串感知，check_twin_fp）；密钥来源改为运行期参数、缓存只写匿名计数。
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';
import { util } from '@kit.ArkTS';

// SAFE: OVD-XMOD-001S 密钥由运行期用户提供，无硬编码主密钥（CWE-321 加固）
export function ovdXmod001S(userSecret: string): string {
  const md: cryptoFramework.Md = cryptoFramework.createMd('SHA256');
  const encoder = new util.TextEncoder();
  md.update({ data: encoder.encodeInto(userSecret).slice() });
  return `user key sha256 len=${md.getMdLength()} (runtime-provided)`;
}

// SAFE: OVD-XMOD-002S 共享缓存只累计匿名页面计数，无会话收集（CWE-312 加固）
export function ovdXmod002S(ctx: common.Context, pageHits: number): string {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'vd_har_shared' });
  p.putSync('vd-har-page-hits', String(pageHits));
  p.flush();
  return `anonymous page hits stored: ${pageHits}`;
}
