// OVD-IPC-006S 白名单模块：聚合回显，无凭据（CWE-862/940 加固）
export function safeOp(p: string): string {
  return `safe-agg:${p.length}`;
}
