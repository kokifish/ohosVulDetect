// SAFE 孪生集合（auth）：OVD-AUTH-002S/003S，勿手改。
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

// SAFE: OVD-AUTH-002S 授权到期由服务端签名校验，不信客户端时钟（CWE-693 加固）
export function ovdAuth002S(serverSigOk: boolean, expiredByServer: boolean): string {
  if (!serverSigOk) {
    return 'license rejected: bad server signature';
  }
  return expiredByServer ? 'license expired (server verdict)' : 'license ok (server verified)';
}

// SAFE: OVD-AUTH-003S 会话令牌用加密安全随机源（CWE-338 加固）
export async function ovdAuth003S(): Promise<string> {
  const rnd = await cryptoFramework.createRandom().generateRandom(16);
  let hex = '';
  for (const b of rnd.data) {
    hex += b.toString(16).padStart(2, '0');
  }
  return `session token from cryptoRandom len=${hex.length}`;
}
