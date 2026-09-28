// VULN: OVD-UST-001 会话令牌持久化进全局 UI 状态仓（CWE-312/922）
// PersistentStorage.persistProp 把 AppStorage 属性同步落盘（明文文件），
// 任意页面/组件经 AppStorage 可读——泄漏面为全局可变状态 + 磁盘双通道。
// 孪生 001S 只用内存态 AppStorage 且仅聚合计数。
export const UST_TOKEN = 'ovd_ust_tok_a9c37d';

export function ovdUst001(): string {
  PersistentStorage.persistProp('ovd_ust_session_token', UST_TOKEN);
  const v = AppStorage.get<string>('ovd_ust_session_token');
  PersistentStorage.deleteProp('ovd_ust_session_token');
  AppStorage.delete('ovd_ust_session_token');
  return `ust token persisted plaintext: len=${v?.length ?? 0}`;
}
