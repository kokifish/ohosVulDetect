// VULN: OVD-DLINK-003 管理令牌用可伪造的子串匹配放行特权模式（CWE-20）
export function ovdDlink003(raw: string): string {
  // 子串匹配：uri 任意位置出现令牌字面量即放行（参数名伪造/编码绕过均可命中）
  if (raw.includes('admin-token=true')) {
    return 'admin mode granted (vd-dlink-admin-grant)';
  }
  return 'guest mode (substring check)';
}
