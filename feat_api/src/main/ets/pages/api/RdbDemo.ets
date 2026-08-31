import { relationalStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// RDB 安全范式：executeSql 固定 DDL + ValuesBucket 绑定 + RdbPredicates 链式 + ResultSet。
@Entry
@Component
struct RdbDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'relationalStore (RDB, safe pattern)',
        cases: [
          new Case('rdb-crud', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
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
          })
        ]
      })

    }
    .height('100%')
  }
}
