// VULN: OVD-INJ-001 用户输入模板字符串拼接进 SQL（UNION 注入可拖库，CWE-89）
import { relationalStore } from '@kit.ArkData';

export async function ovdInj001(store: relationalStore.RdbStore, userName: string): Promise<string> {
  const sql = `SELECT name, password FROM users WHERE name = '${userName}' AND 1=1`;
  const rs: relationalStore.ResultSet = await store.querySql(sql);
  const n: number = rs.rowCount;
  rs.close();
  return `querySql rows=${n} sql=${sql}`;
}
