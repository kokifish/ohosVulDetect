// SAFE 孪生集合（debug）：OVD-DEBUG-001S/002S，勿手改。
import { hilog } from '@kit.PerformanceAnalysisKit';

// SAFE: OVD-DEBUG-001S 调试输出以运行时日志级别门控（isLoggable），发布配置下零输出（CWE-489 加固）
export function ovdDebug001S(): string {
  const allowed = hilog.isLoggable(0x0999, 'DEV', hilog.LogLevel.DEBUG);
  return allowed ? 'debug level enabled: diagnostics allowed' : 'release log config: diagnostics disabled';
}

// SAFE: OVD-DEBUG-002S 管理操作走服务端多因子校验，无本地万能 PIN（CWE-912 加固）
export function ovdDebug002S(serverMfaOk: boolean): string {
  return serverMfaOk ? 'admin granted via server MFA' : 'admin denied';
}
