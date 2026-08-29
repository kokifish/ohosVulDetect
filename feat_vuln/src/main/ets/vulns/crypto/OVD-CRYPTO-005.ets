// VULN: OVD-CRYPTO-005 硬编码对称密钥并导入 HUKS 使用（CWE-321）
import { huks } from '@kit.UniversalKeystoreKit';

export const HARD_CODE_KEY: string = '0123456789abcdef0123456789abcdef';

export async function ovdCrypto005(): Promise<string> {
  const keyBytes = new Uint8Array(HARD_CODE_KEY.length);
  for (let i = 0; i < HARD_CODE_KEY.length; i += 1) {
    keyBytes[i] = HARD_CODE_KEY.charCodeAt(i);
  }
  const properties: Array<huks.HuksParam> = [
    { tag: huks.HuksTag.HUKS_TAG_ALGORITHM, value: huks.HuksKeyAlg.HUKS_ALG_AES },
    { tag: huks.HuksTag.HUKS_TAG_PURPOSE, value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT },
    { tag: huks.HuksTag.HUKS_TAG_KEY_SIZE, value: 256 }
  ];
  await huks.importKeyItem('ovd_hardcoded_key', { properties: properties, inData: keyBytes });
  return `imported literal key (${keyBytes.length}B) into huks`;
}
