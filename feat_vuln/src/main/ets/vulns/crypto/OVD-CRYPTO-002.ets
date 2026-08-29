// VULN: OVD-CRYPTO-002 口令使用 MD5 摘要且无盐（CWE-327 / CWE-916）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export function ovdCrypto002(password: string): string {
  const md: cryptoFramework.Md = cryptoFramework.createMd('MD5');
  const bytes = new Uint8Array(password.length);
  for (let i = 0; i < password.length; i += 1) {
    bytes[i] = password.charCodeAt(i);
  }
  md.updateSync({ data: bytes });
  const digest: cryptoFramework.DataBlob = md.digestSync();
  let hex = '';
  for (const b of digest.data) {
    hex += b.toString(16).padStart(2, '0');
  }
  return `md5(${password})=${hex}`;
}
