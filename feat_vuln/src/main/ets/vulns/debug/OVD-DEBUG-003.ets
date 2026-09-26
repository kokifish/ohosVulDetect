// VULN: OVD-DEBUG-003 调试后门开关常量残留（CWE-489）
// 发布包携带后门开关日志与魔数常量，逆向可直接触发隐藏调试路径。
import { hilog } from '@kit.PerformanceAnalysisKit';

export function ovdDebug003(): string {
  hilog.debug(0xFF03, 'OVDDBG', 'backdoor %{public}s enabled', 'ovd_debug3_backdoor');
  return 'debug3 backdoor switch logged';
}
