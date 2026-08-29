// VULN: OVD-NATIVE-001 加密密钥硬编码在 C++ .so 中（libentry.so，CWE-798）
import { xorNative } from 'libentry.so';

export function ovdNative001(data: string): string {
  const enc = xorNative(data);
  return `native xor (key in .so) -> ${enc}`;
}
