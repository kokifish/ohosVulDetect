// VULN: OVD-DEBUG-001 发布版遗留调试开关，开启时打印敏感数据（CWE-489/1295）
import { hilog } from '@kit.PerformanceAnalysisKit';
import { AUTH_TOKEN } from '../log/OVD-LOG-001';

export const IS_DEBUG: boolean = true;

export function ovdDebug001(): string {
  if (!IS_DEBUG) {
    return 'quiet';
  }
  hilog.info(0x0999, 'DEV', '%{public}s', `debug dump: token=${AUTH_TOKEN}, db opened`);
  return 'debug dump logged (IS_DEBUG=true)';
}
