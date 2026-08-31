import { distributedKVStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// distributedKVStore：manager 工厂 → getKVStore → put/get/delete + dataChange 订阅。
// （分布式 sync 需要系统权限，运行时失败属预期，catch 记录即可。）
@Entry
@Component
struct KvDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'distributedKVStore',
        cases: [
          new Case('kv-put-get', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const mgrCfg: distributedKVStore.KVManagerConfig = { context: ctx, bundleName: 'com.koki.VD' };
            const mgr: distributedKVStore.KVManager = distributedKVStore.createKVManager(mgrCfg);
            const opts: distributedKVStore.Options = { createIfMissing: true, securityLevel: distributedKVStore.SecurityLevel.S2 };
            const kv = await mgr.getKVStore<distributedKVStore.SingleKVStore>(
              'bench_store', opts) as distributedKVStore.SingleKVStore;
            await kv.put('benign_k', 'v1');
            const v: string | number | boolean | Uint8Array = await kv.get('benign_k') as string | number | boolean | Uint8Array;
            await kv.delete('benign_k');
            kv.on('dataChange', distributedKVStore.SubscribeType.SUBSCRIBE_TYPE_LOCAL, (data: distributedKVStore.ChangeNotification) => {
              log(`kv ev dataChange ${JSON.stringify(data.insertEntries ?? [])}`);
            });
            return `get=${v}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
