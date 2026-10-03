// VULN: OVD-ENUM-001 TLS 策略枚举误用宽松成员（CWE-757，跨 record 枚举面）
// 枚举定义在 lib_shared（HSP），feature 侧选择 LENIENT 成员——abc 中成员访问
// 为双指令分离（hole-check "枚举名" + ldobjbyname "成员"），检测需重构枚举访问文本。
// 孪生 001S 选择 STRICT（同构形态、安全成员）。
import { OvdTlsPolicy } from 'lib_shared';

export function ovdEnum001(): string {
  const policy: OvdTlsPolicy = OvdTlsPolicy.LENIENT;
  return `tls-policy selected: ${policy} (strict validation bypassed)`;
}
