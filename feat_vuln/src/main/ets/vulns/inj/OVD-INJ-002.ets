// VULN: OVD-INJ-002 DELETE 语句拼接用户输入（CWE-89）
import { relationalStore } from '@kit.ArkData';

export async function ovdInj002(store: relationalStore.RdbStore, target: string): Promise<string> {
  const sql = `DELETE FROM users WHERE name = '${target}'`;
  await store.executeSql(sql);
  return `executed: ${sql}`;
}
