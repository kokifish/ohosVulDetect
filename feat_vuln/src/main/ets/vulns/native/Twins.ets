// SAFE 孪生集合（native）：OVD-NATIVE-001S/002S，勿手改。
import { xorNative } from 'libentry.so';

// SAFE: OVD-NATIVE-001S 密钥运行期注入而非硬编码在 .so（CWE-798 加固）
export function ovdNative001S(data: string, runtimeKey: string): string {
  return `native xor with runtime key len=${runtimeKey.length} -> ${xorNative(data).length} chars`;
}

// SAFE: OVD-NATIVE-002S 边界先裁剪再进 native，杜绝 native 侧越界拷贝（CWE-120 加固）
export function ovdNative002S(input: string, cap: number): string {
  const bounded = input.slice(0, cap);
  return `bounded copy ${bounded.length}B (cap=${cap}) before native bridge`;
}
