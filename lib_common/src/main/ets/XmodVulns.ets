// 跨模块漏洞面（HAR）：lib_common 以静态 HAR 形态编入每个依赖方 HAP 的 abc，
// 本文件的检测面随依赖方模块落位（feat_vuln 引用后进 feat_vuln abc），验证评分链路对
// 「非 feature 模块源码路径 record」的可达性。
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';
import { util } from '@kit.ArkTS';

// VULN: OVD-XMOD-001 HAR 内硬编码主密钥派生加密密钥（CWE-321）
export function ovdXmod001(): string {
  const harMasterKey = 'vd-har-master-key-01!!';
  const md: cryptoFramework.Md = cryptoFramework.createMd('SHA256');
  const encoder = new util.TextEncoder();
  md.update({ data: encoder.encodeInto(harMasterKey).slice() });
  // GCM 信道（密钥本体来自上述硬编码串）
  const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('AES256|GCM|NoPadding');
  return `har key sha256 len=${md.getMdLength()} cipher=${cipher.algName}`;
}

// VULN: OVD-XMOD-002 HAR 中转会话收集链：采集会话明文写共享 preferences（CWE-312）
function harCollectSessions(p: preferences.Preferences): void {
  p.putSync('vd-har-session-cache', 'sess_bench_harvest_000001');
}

export function ovdXmod002(ctx: common.Context): string {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'vd_har_shared' });
  harCollectSessions(p);
  p.flush();
  return 'har session cache written';
}
