// VULN: OVD-DKV-001 会话令牌明文写入分布式 KV 并放行组网同步（CWE-312/200）
// encrypt:false + S1：令牌明文落盘；setSyncRange 远端标签放行全部组网设备——
// 令牌随设备间同步明文扩散。孪生 001S 加密 + S3 + 无同步配置。
import { distributedKVStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export const DKV_STORE = 'ovd_dkv_vault';
export const DKV_TOKEN = 'tok_vd_dkv_sync_9c31';

export async function ovdDkv001(ctx: common.UIAbilityContext): Promise<string> {
  const cfg: distributedKVStore.KVManagerConfig = { context: ctx, bundleName: 'com.koki.VD' };
  const mgr: distributedKVStore.KVManager = distributedKVStore.createKVManager(cfg);
  const opts: distributedKVStore.Options = {
    createIfMissing: true,
    encrypt: false,
    securityLevel: distributedKVStore.SecurityLevel.S1
  };
  const kv = await mgr.getKVStore<distributedKVStore.SingleKVStore>(DKV_STORE, opts) as distributedKVStore.SingleKVStore;
  await kv.setSyncRange(['ovd_local'], ['ovd_remote_any']);
  await kv.put('session_token', DKV_TOKEN);
  await kv.delete('session_token');
  return 'dkv plaintext token written (encrypt=false, S1, sync range opened)';
}
