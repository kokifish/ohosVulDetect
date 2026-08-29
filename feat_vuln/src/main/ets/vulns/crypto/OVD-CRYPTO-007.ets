// VULN: OVD-CRYPTO-007 AES-GCM 使用字面量固定 nonce（每次加密相同，CWE-1204/328）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { util } from '@kit.ArkTS';

export const FIXED_NONCE: string = 'bench-fixed-nonce!!';

export async function ovdCrypto007(): Promise<string> {
  const nonce: Uint8Array = new util.TextEncoder().encodeInto(FIXED_NONCE).slice(0, 12);
  const key: cryptoFramework.SymKey =
    await cryptoFramework.createSymKeyGenerator('AES256').generateSymKey();
  const cipher: cryptoFramework.Cipher = cryptoFramework.createCipher('AES256|GCM|PKCS7');
  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, key,
    { algName: 'GcmParamsSpec', iv: { data: nonce }, aad: { data: new Uint8Array([1]) } } as cryptoFramework.GcmParamsSpec);
  const out: cryptoFramework.DataBlob = await cipher.doFinal({ data: new Uint8Array([1, 2, 3]) });
  return `gcm fixed-nonce ct-len=${out.data.length}`;
}
