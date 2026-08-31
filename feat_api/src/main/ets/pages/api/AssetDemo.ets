import { asset } from '@kit.AssetStoreKit';
import { common } from '@kit.AbilityKit';
import { util } from '@kit.ArkTS';
import { Case, DemoScaffold } from 'lib_common';

// Asset Store Kit：安全存储"正确写法"（漏洞孪生的对照实现）。
// 注意：本版 SDK 的 asset.Value 仅接受 boolean|number|Uint8Array，字符串需 TextEncoder 编码。
@Entry
@Component
struct AssetDemo {

  private toBytes(s: string): Uint8Array {
    const enc = new util.TextEncoder();
    return enc.encodeInto(s);
  }

  build() {
    Column() {
      DemoScaffold({
        title: 'asset store (safe secret storage)',
        cases: [
          new Case('asset-roundtrip', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const attr: asset.AssetMap = new Map();
            attr.set(asset.Tag.ALIAS, this.toBytes('bench_alias'));
            attr.set(asset.Tag.SECRET, this.toBytes('bench-secret-in-asset-store'));
            await asset.add(attr);
            const q: asset.AssetMap = new Map();
            q.set(asset.Tag.ALIAS, this.toBytes('bench_alias'));
            const res: Array<asset.AssetMap> = await asset.query(q);
            const n = res.length;
            const query2: asset.AssetMap = new Map();
            query2.set(asset.Tag.ALIAS, this.toBytes('bench_alias'));
            const upd: asset.AssetMap = new Map();
            upd.set(asset.Tag.SECRET, this.toBytes('bench-secret-v2'));
            await asset.update(query2, upd);
            await asset.remove(q);
            return `query=${n} updated+removed`;
          }),
          new Case('asset-addSync', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const attr: asset.AssetMap = new Map();
            attr.set(asset.Tag.ALIAS, this.toBytes('bench_alias_sync'));
            attr.set(asset.Tag.SECRET, this.toBytes('bench-sync-secret'));
            asset.addSync(attr);
            const d: asset.AssetMap = new Map();
            d.set(asset.Tag.ALIAS, this.toBytes('bench_alias_sync'));
            asset.removeSync(d);
            return 'sync roundtrip ok';
          })
        ]
      })

    }
    .height('100%')
  }
}
