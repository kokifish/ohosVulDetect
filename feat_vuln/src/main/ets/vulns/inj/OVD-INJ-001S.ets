// SAFE: OVD-INJ-001S 对照实现：RdbPredicates 参数绑定（CWE-89 加固）
import { relationalStore } from '@kit.ArkData';

export async function ovdInj001S(store: relationalStore.RdbStore, userName: string): Promise<string> {
  const pred = new relationalStore.RdbPredicates('users').equalTo('name', userName);
  const rs: relationalStore.ResultSet = await store.query(pred, ['name', 'password']);
  const n: number = rs.rowCount;
  rs.close();
  return `predicates query rows=${n}`;
}
