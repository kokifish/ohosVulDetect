// VULN: OVD-CRYPTO-003 完整性校验使用 SHA1（CWE-328）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export function ovdCrypto003(payload: string): string {
  const md: cryptoFramework.Md = cryptoFramework.createMd('SHA1');
  const bytes = new Uint8Array(payload.length);
  for (let i = 0; i < payload.length; i += 1) {
    bytes[i] = payload.charCodeAt(i);
  }
  md.updateSync({ data: bytes });
  const digest: cryptoFramework.DataBlob = md.digestSync();
  return `sha1 digest len=${digest.data.length} (weak)`;
}
