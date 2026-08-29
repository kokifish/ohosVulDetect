// VULN: OVD-AUTH-002 授权到期仅靠客户端时间戳比较（可改包/翻转分支绕过，CWE-693）
export const LICENSE_EXPIRE_TS: number = 1893456000000; // 2030-01-01

export function ovdAuth002(): string {
  if (Date.now() > LICENSE_EXPIRE_TS) {
    return 'license EXPIRED -> lock app';
  }
  return 'license ok (client-side check only)';
}
