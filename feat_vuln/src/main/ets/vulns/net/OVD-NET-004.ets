// VULN: OVD-NET-004 自定义证书校验函数恒返回 true（CWE-295）
export function ovdNet004(hostname: string, certPem: string): boolean {
  // 不比较证书链/主机名，直接放行
  return true;
}

export function ovdNet004Usage(host: string): string {
  const ok = ovdNet004(host, '-----BEGIN CERTIFICATE-----...bench...');
  return `verify(${host})=${ok}`;
}
