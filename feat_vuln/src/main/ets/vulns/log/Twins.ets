// SAFE 孪生集合（log）：OVD-LOG-002S，勿手改。
import { hilog } from '@kit.PerformanceAnalysisKit';

// SAFE: OVD-LOG-002S 日志输出脱敏，凭据不出现在日志域（CWE-532 加固）
export function ovdLog002S(username: string): string {
  hilog.debug(0x0999, 'AUTH', '%{public}s', `retry login user=${username} (credential redacted)`);
  return 'masked log emitted';
}
