// VULN: OVD-NATIVE-002 napi 层使用 strcpy 无边界检查（缓冲区溢出模式，CWE-120）
import { vulnCopy } from 'libentry.so';

export function ovdNative002(): string {
  const long = 'A'.repeat(64);
  const copied = vulnCopy(long);
  return `strcpy path executed, echoed ${copied.length}B`;
}
