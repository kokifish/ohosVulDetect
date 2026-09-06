// SAFE: OVD-CRYPTO-001S 对照实现：AES-GCM + 随机密钥/IV（CWE-327 加固）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

export async function ovdCrypto001S(): Promise<string> {
  const keyGen: cryptoFramework.SymKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
  const key: cryptoFramework.SymKey = await keyGen.generateSymKey();
  const iv: cryptoFramework.DataBlob = await cryptoFramework.createRandom().generateRandom(12);
  const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('AES256|GCM|PKCS7');
  // GcmParamsSpec 必填 algName：API26 运行时严格校验，缺失报 401（API24 不查）
  const gcmParams: cryptoFramework.GcmParamsSpec = {
    algName: 'GcmParamsSpec',
    iv: { data: iv.data },
    aad: { data: new Uint8Array([1]) },
    authTag: { data: new Uint8Array(16) }, // 类型必填；加密模式下被忽略，tag 由 doFinal 产出
  };
  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, key, gcmParams);
  const out: cryptoFramework.DataBlob = await cipher.doFinal({ data: new Uint8Array([1, 2, 3]) });
  return `safe gcm ct-len=${out.data.length}`;
}
