// SAFE: OVD-UST-001S 仅内存态 AppStorage + 聚合计数，无持久化无凭据（CWE-312 加固）
export function ovdUst001S(): string {
  AppStorage.setOrCreate('ovd_ust_bucket', 1);
  const v = AppStorage.get<number>('ovd_ust_bucket') ?? 0;
  AppStorage.delete('ovd_ust_bucket');
  return `ustS memory-only aggregate: ${v} (no persistence)`;
}
