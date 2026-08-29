import { asset } from '@kit.AssetStoreKit';
import { util } from '@kit.ArkTS';
import { Runner } from 'lib_common';

// Asset Store Kit：安全存储"正确写法"（漏洞孪生的对照实现）。
// 注意：本版 SDK 的 asset.Value 仅接受 boolean|number|Uint8Array，字符串需 TextEncoder 编码。
@Entry
@Component
struct AssetDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  private toBytes(s: string): Uint8Array {
    const enc = new util.TextEncoder();
    return enc.encodeInto(s);
  }

  build() {
    Column() {
      Text('asset store (safe secret storage)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('asset-roundtrip').margin(4).onClick(() => {
          this.runner.run('asset-roundtrip', async () => {
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
          });
        })
        Button('asset-addSync').margin(4).onClick(() => {
          this.runner.run('asset-addSync', () => {
            const attr: asset.AssetMap = new Map();
            attr.set(asset.Tag.ALIAS, this.toBytes('bench_alias_sync'));
            attr.set(asset.Tag.SECRET, this.toBytes('bench-sync-secret'));
            asset.addSync(attr);
            const d: asset.AssetMap = new Map();
            d.set(asset.Tag.ALIAS, this.toBytes('bench_alias_sync'));
            asset.removeSync(d);
            return 'sync roundtrip ok';
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
