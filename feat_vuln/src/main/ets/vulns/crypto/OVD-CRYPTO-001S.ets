// SAFE: OVD-CRYPTO-001S 对照实现：AES-GCM + 随机密钥/IV（CWE-327 加固）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export async function ovdCrypto001S(): Promise<string> {
  const keyGen: cryptoFramework.SymKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
  const key: cryptoFramework.SymKey = await keyGen.generateSymKey();
  const iv: cryptoFramework.DataBlob = await cryptoFramework.createRandom().generateRandom(12);
  const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('AES256|GCM|PKCS7');
  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, key,
    { iv: { data: iv.data }, aad: { data: new Uint8Array([1]) } } as cryptoFramework.GcmParamsSpec);
  const out: cryptoFramework.DataBlob = await cipher.doFinal({ data: new Uint8Array([1, 2, 3]) });
  return `safe gcm ct-len=${out.data.length}`;
}
