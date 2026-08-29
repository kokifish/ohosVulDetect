// VULN: OVD-AUTH-001 客户端硬编码口令鉴权（可静态提取/爆破，CWE-798/287）
export function ovdAuth001(user: string, pass: string): boolean {
  if (user === 'admin' && pass === 'Admin@123') {
    return true;
  }
  return false;
}
