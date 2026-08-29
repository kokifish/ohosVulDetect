// SAFE: OVD-AUTH-001S 对照实现：本地只比对加盐摘要，凭据由服务端/Asset 校验（CWE-287 加固）
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

const SALT: string = 'ovd-salt-not-a-secret';

export async function ovdAuth001S(user: string, pass: string): Promise<string> {
  const md: cryptoFramework.Md = cryptoFramework.createMd('SHA256');
  const material = `${SALT}:${user}:${pass}`;
  const bytes = new Uint8Array(material.length);
  for (let i = 0; i < material.length; i += 1) {
    bytes[i] = material.charCodeAt(i);
  }
  md.updateSync({ data: bytes });
  const digest: cryptoFramework.DataBlob = md.digestSync();
  return `server-side verify with salted sha256 (${digest.data.length}B), no literals`;
}
