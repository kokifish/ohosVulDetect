// VULN: OVD-SECRET-001 硬编码云服务 AK/SK 密钥对（CWE-798）
export class CloudKeys {
  static readonly AK: string = 'AKIDBENCH7f3k99xz2q4w8e5r1t0y6u';
  static readonly SK: string = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLE';
}

export function ovdSecret001(): string {
  return `Authorization: Basic ${CloudKeys.AK}:${CloudKeys.SK}`;
}
