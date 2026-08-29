// VULN: OVD-CRYPTO-006 使用 RSA1024 短密钥 + PKCS1 填充加密敏感数据（CWE-326/327）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export async function ovdCrypto006(): Promise<string> {
  const gen: cryptoFramework.AsyKeyGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_2');
  const pair: cryptoFramework.KeyPair = await gen.generateKeyPair();
  const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('RSA1024|PKCS1');
  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, pair.pubKey, null);
  const out = await cipher.doFinal({ data: new Uint8Array([1, 2, 3]) });
  return `rsa1024-pkcs1 ct-len=${out.data.length}`;
}
