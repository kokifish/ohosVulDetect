// VULN: OVD-DEBUG-002 调试后门 PIN，命中直接提权（CWE-912）
export function ovdDebug002(pin: string): string {
  if (pin === '0000') {
    AppStorage.setOrCreate('ovd_is_admin', 'true');
    return 'admin unlocked via backdoor pin';
  }
  return 'denied';
}
