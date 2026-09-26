// VULN: OVD-DKV-002 设备标识明文写入分布式 KV 并放行组网同步（CWE-312/200）
import { distributedKVStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export const DKV2_DEV = 'ovd_dkv2_devid_5e21';

export async function ovdDkv002(ctx: common.UIAbilityContext): Promise<string> {
  const cfg: distributedKVStore.KVManagerConfig = { context: ctx, bundleName: 'com.koki.VD' };
  const mgr: distributedKVStore.KVManager = distributedKVStore.createKVManager(cfg);
  const opts: distributedKVStore.Options = {
    createIfMissing: true,
    encrypt: false,
    securityLevel: distributedKVStore.SecurityLevel.S1
  };
  const kv = await mgr.getKVStore<distributedKVStore.SingleKVStore>('ovd_dkv2_idmap', opts) as distributedKVStore.SingleKVStore;
  await kv.setSyncRange(['ovd_local'], ['ovd_remote_any']);
  await kv.put('device_id', DKV2_DEV);
  await kv.delete('device_id');
  return 'dkv2 device id synced plaintext';
}
