// VULN: OVD-CRYPTO-008 弱密钥派生——API 形态完全正确（同步摘要、规范化输出），
// 但用无盐 MD5 摘要直接作为密钥素材（CWE-916/327）。孪生 008S SHA256 + 随机盐。
// 与 CRYPTO-002 的差别：002 是口令存储摘要，008 是"摘要即密钥"的派生误用。
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export const KDF_TAG = 'ovd-kdf-unsalted-md5';

export function ovdCrypto008(password: string): string {
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
  return `kdf aes-key-material=${hex.slice(0, 16)} tag=${KDF_TAG}`;
}
