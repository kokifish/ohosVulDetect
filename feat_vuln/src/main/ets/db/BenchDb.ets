import { relationalStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

// VULN: OVD-STOR-003 敏感表（含 password 列）使用最低安全等级 S1（CWE-668）
export class BenchDb {
  static async getStore(ctx: common.Context, name: string): Promise<relationalStore.RdbStore> {
    const cfg: relationalStore.StoreConfig = {
      name: name,
      securityLevel: relationalStore.SecurityLevel.S1
    };
    const store: relationalStore.RdbStore = await relationalStore.getRdbStore(ctx, cfg);
    await store.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)');
    const seeded: relationalStore.ResultSet = await store.querySql('SELECT COUNT(*) AS c FROM users');
    if (seeded.goToNextRow() && seeded.getLong(seeded.getColumnIndex('c')) === 0) {
      const row: relationalStore.ValuesBucket = { 'name': 'alice', 'password': 'pw-alice-01' };
      await store.insert('users', row);
    }
    seeded.close();
    return store;
  }
}
