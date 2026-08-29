import { common } from '@kit.AbilityKit';
import { relationalStore } from '@kit.ArkData';
import { Runner } from 'lib_common';

// RDB 安全范式：executeSql 固定 DDL + ValuesBucket 绑定 + RdbPredicates 链式 + ResultSet。
@Entry
@Component
struct RdbDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('relationalStore (RDB, safe pattern)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('rdb-crud').margin(4).onClick(() => {
          this.runner.run('rdb-crud', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const cfg: relationalStore.StoreConfig = {
              name: 'bench_rdb.db',
              securityLevel: relationalStore.SecurityLevel.S3
            };
            const store: relationalStore.RdbStore = await relationalStore.getRdbStore(ctx, cfg);
            await store.executeSql(
              'CREATE TABLE IF NOT EXISTS bench (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, score INTEGER)');
            const row: relationalStore.ValuesBucket = { 'name': 'alice', 'score': 90 };
            const rowId: number = await store.insert('bench', row);
            const pred: relationalStore.RdbPredicates = new relationalStore.RdbPredicates('bench')
              .equalTo('name', 'alice')
              .orderByAsc('id')
              .limitAs(5);
            const rs: relationalStore.ResultSet = await store.query(pred, ['id', 'name', 'score']);
            const names: string[] = [];
            while (rs.goToNextRow()) {
              names.push(rs.getString(rs.getColumnIndex('name')));
            }
            rs.close();
            const upd: relationalStore.ValuesBucket = { 'score': 95 };
            await store.update(upd, pred);
            await store.delete(pred);
            store.close();
            return `rowId=${rowId} names=${names.join(',')}`;
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
