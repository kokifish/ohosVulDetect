// VULN: OVD-SECRET-004 硬编码后端数据库口令并拼接连接串（CWE-798）
export const DB_PASSWORD: string = 'P@ssw0rd_bench_2026';

export function ovdSecret004(): string {
  return `jdbc:mysql://root:${DB_PASSWORD}@10.20.31.11:3306/appdb`;
}
