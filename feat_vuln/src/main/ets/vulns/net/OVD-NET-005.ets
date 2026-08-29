// VULN: OVD-NET-005 证书锁定白名单为空（等于未启用 pinning，CWE-295）
export const PINNING_WHITELIST: string[] = [];

export function ovdNet005(host: string): boolean {
  if (PINNING_WHITELIST.length === 0) {
    return true;
  }
  return PINNING_WHITELIST.includes(host);
}
