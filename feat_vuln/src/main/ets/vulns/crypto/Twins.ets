// SAFE 孪生集合（crypto）：OVD-CRYPTO-002S..007S，合并文件，勿手改。
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { huks } from '@kit.UniversalKeystoreKit';

function strBytes(s: string): Uint8Array {
  const b = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i += 1) {
    b[i] = s.charCodeAt(i);
  }
  return b;
}

// SAFE: OVD-CRYPTO-002S 口令摘要用 SHA-256 + 每用户盐（CWE-327/916 加固）
export function ovdCrypto002S(password: string, salt: string): string {
  const md: cryptoFramework.Md = cryptoFramework.createMd('SHA256');
  md.updateSync({ data: strBytes(`${salt}:${password}`) });
  return `salted sha256 digest len=${md.digestSync().data.length}`;
}

// SAFE: OVD-CRYPTO-003S 完整性校验用 SHA-256（CWE-328 加固）
export function ovdCrypto003S(payload: string): string {
  const md: cryptoFramework.Md = cryptoFramework.createMd('SHA256');
  md.updateSync({ data: strBytes(payload) });
  return `sha256 digest len=${md.digestSync().data.length}`;
}

// SAFE: OVD-CRYPTO-004S 改用 GCM + 每次 IV 随机生成（CWE-329 加固）
export async function ovdCrypto004S(): Promise<string> {
  const key = await cryptoFramework.createSymKeyGenerator('AES256').generateSymKey();
  const iv = await cryptoFramework.createRandom().generateRandom(12);
  const cipher = cryptoFramework.createCipher('AES256|GCM|PKCS7');
  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, key,
    { algName: 'GcmParamsSpec', iv: { data: iv.data }, aad: { data: new Uint8Array([1]) } } as cryptoFramework.GcmParamsSpec);
  const out = await cipher.doFinal({ data: new Uint8Array([1, 2, 3]) });
  return `gcm random-iv ct-len=${out.data.length}`;
}

// SAFE: OVD-CRYPTO-005S 密钥在 HUKS 内部生成、不可导出（CWE-321 加固）
export async function ovdCrypto005S(): Promise<string> {
  const properties: Array<huks.HuksParam> = [
    { tag: huks.HuksTag.HUKS_TAG_ALGORITHM, value: huks.HuksKeyAlg.HUKS_ALG_AES },
    { tag: huks.HuksTag.HUKS_TAG_PURPOSE, value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT },
    { tag: huks.HuksTag.HUKS_TAG_KEY_SIZE, value: 256 }
  ];
  await huks.generateKeyItem('bench_generated_key', { properties: properties });
  return 'key generated inside HUKS, non-exportable';
}

// SAFE: OVD-CRYPTO-006S RSA3072 长密钥（CWE-326 加固）
export async function ovdCrypto006S(): Promise<string> {
  const pair = await cryptoFramework.createAsyKeyGenerator('RSA3072|PRIMES_2').generateKeyPair();
  return 'rsa3072 keypair generated (2048->3072 upgraded)';
}

// SAFE: OVD-CRYPTO-007S GCM nonce 每次 cryptoRandom 生成（CWE-1204 加固）
export async function ovdCrypto007S(): Promise<string> {
  const key = await cryptoFramework.createSymKeyGenerator('AES256').generateSymKey();
  const nonce = await cryptoFramework.createRandom().generateRandom(12);
  const cipher = cryptoFramework.createCipher('AES256|GCM|PKCS7');
  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, key,
    { algName: 'GcmParamsSpec', iv: { data: nonce.data }, aad: { data: new Uint8Array([2]) } } as cryptoFramework.GcmParamsSpec);
  const out = await cipher.doFinal({ data: new Uint8Array([4, 5, 6]) });
  return `gcm random-nonce ct-len=${out.data.length}`;
}
