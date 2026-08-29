import { common } from '@kit.AbilityKit';
import { distributedKVStore } from '@kit.ArkData';
import { Runner } from 'lib_common';

// distributedKVStore：manager 工厂 → getKVStore → put/get/delete + dataChange 订阅。
// （分布式 sync 需要系统权限，运行时失败属预期，catch 记录即可。）
@Entry
@Component
struct KvDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('distributedKVStore').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('kv-put-get').margin(4).onClick(() => {
          this.runner.run('kv-put-get', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const mgrCfg: distributedKVStore.KVManagerConfig = { context: ctx, bundleName: 'com.koki.VD' };
            const mgr: distributedKVStore.KVManager = distributedKVStore.createKVManager(mgrCfg);
            const opts: distributedKVStore.Options = { createIfMissing: true, securityLevel: distributedKVStore.SecurityLevel.S2 };
            const kv = await mgr.getKVStore<distributedKVStore.SingleKVStore>(
              'bench_store', opts) as distributedKVStore.SingleKVStore;
            await kv.put('benign_k', 'v1');
            const v: string | number | boolean | Uint8Array = await kv.get('benign_k') as string | number | boolean | Uint8Array;
            await kv.delete('benign_k');
            kv.on('dataChange', distributedKVStore.SubscribeType.SUBSCRIBE_TYPE_LOCAL, (data: distributedKVStore.ChangeNotification) => {
              this.lines.push(`kv ev dataChange ${JSON.stringify(data.insertEntries ?? [])}`);
            });
            return `get=${v}`;
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
