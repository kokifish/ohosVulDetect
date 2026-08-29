// VULN: OVD-LOG-002 hilog 打印用户口令（CWE-532）
import { hilog } from '@kit.PerformanceAnalysisKit';

export function ovdLog002(password: string): string {
  hilog.debug(0x0999, 'AUTH', '%{public}s', `retry login pwd=${password}`);
  return 'password logged';
}
