// SAFE 孪生集合（dkv）：OVD-DKV-001S，加密 + S3 + 本地不自动同步。
// SAFE: OVD-DKV-001S 敏感面走加密 S3 本地库，不同步、无令牌（CWE-312 加固）
import { distributedKVStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export async function ovdDkv001S(ctx: common.UIAbilityContext): Promise<string> {
  const cfg: distributedKVStore.KVManagerConfig = { context: ctx, bundleName: 'com.koki.VD' };
  const mgr: distributedKVStore.KVManager = distributedKVStore.createKVManager(cfg);
  const opts: distributedKVStore.Options = {
    createIfMissing: true,
    encrypt: true,
    securityLevel: distributedKVStore.SecurityLevel.S3
  };
  const kv = await mgr.getKVStore<distributedKVStore.SingleKVStore>('ovd_dkv_safe_store', opts) as distributedKVStore.SingleKVStore;
  await kv.put('digest_only', 'aggregate-count-7');
  await kv.delete('digest_only');
  return 'dkvS encrypted S3 local-only store (no secrets synced)';
}

// SAFE: OVD-DKV-002S 设备标识聚合值 + 加密 S3 本地库（CWE-312 加固）
export async function ovdDkv002S(ctx: common.UIAbilityContext): Promise<string> {
  const cfg: distributedKVStore.KVManagerConfig = { context: ctx, bundleName: 'com.koki.VD' };
  const mgr: distributedKVStore.KVManager = distributedKVStore.createKVManager(cfg);
  const opts: distributedKVStore.Options = {
    createIfMissing: true,
    encrypt: true,
    securityLevel: distributedKVStore.SecurityLevel.S3
  };
  const kv = await mgr.getKVStore<distributedKVStore.SingleKVStore>('ovd_dkv2_safe', opts) as distributedKVStore.SingleKVStore;
  await kv.put('device_bucket', 'aggregate-count-2');
  await kv.delete('device_bucket');
  return 'dkv2S encrypted local aggregate only';
}
