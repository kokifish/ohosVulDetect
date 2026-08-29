// VULN: OVD-CRYPTO-004 CBC 模式使用固定全零 IV（CWE-329）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export function ovdCrypto004(): string {
  const fixedIv = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('AES256|CBC|PKCS7');
  const spec: cryptoFramework.IvParamsSpec = { algName: 'IvParamsSpec', iv: { data: fixedIv } };
  return `cbc=${cipher.algName} fixed-iv len=${spec.iv.data.length}`;
}
