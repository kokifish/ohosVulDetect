// SAFE: OVD-LOG-001S 对照实现：%{private}s 脱敏（CWE-532 加固）
import { hilog } from '@kit.PerformanceAnalysisKit';

export function ovdLog001S(user: string): string {
  hilog.info(0x0999, 'AUTH', '%{private}s', `login ok user=${user} token=***`);
  return 'token masked via %{private}s';
}
