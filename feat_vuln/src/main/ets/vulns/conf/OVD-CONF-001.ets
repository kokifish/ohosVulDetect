// VULN: OVD-CONF-001 硬编码内网管理端点（拓扑泄露 + 明文，CWE-200）
export const INTERNAL_ADMIN_URL: string = 'http://10.20.31.11:8080/admin';

export function ovdConf001(): string {
  return `admin console at ${INTERNAL_ADMIN_URL}`;
}
