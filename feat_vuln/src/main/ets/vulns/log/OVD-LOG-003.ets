// VULN: OVD-LOG-003 用户邮箱+地域写入系统日志（CWE-532）
// hilog %{public} 明文落日志缓冲，设备分享/日志回传即泄露 PII。
import { hilog } from '@kit.PerformanceAnalysisKit';

export function ovdLog003(): string {
  hilog.info(0xFF02, 'OVDLOG', 'user %{public}s region %{public}s',
    'mailbox:ovd_log3_mail_loc', 'eu-west-2');
  return 'log3 pii written to hilog';
}
