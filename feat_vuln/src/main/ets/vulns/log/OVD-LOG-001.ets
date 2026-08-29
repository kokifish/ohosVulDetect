// VULN: OVD-LOG-001 %{public}s 打印认证 token（绕过发布版隐私脱敏，CWE-532）
import { hilog } from '@kit.PerformanceAnalysisKit';

export const AUTH_TOKEN: string = 'eyJhbGciOiJIUzI1NiJ9.bench-token-log.sig';

export function ovdLog001(user: string): string {
  hilog.info(0x0999, 'AUTH', '%{public}s', `login ok user=${user} token=${AUTH_TOKEN}`);
  return 'token logged via %{public}s';
}
