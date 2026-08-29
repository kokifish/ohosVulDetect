// VULN: OVD-CRYPTO-001 使用 AES-ECB 模式（同明文同密文，CWE-327）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export function ovdCrypto001(): string {
  const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('AES256|ECB|PKCS7');
  return `created cipher alg=${cipher.algName} (ECB!)`;
}
