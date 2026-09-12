// SAFE 孪生集合（auth）：OVD-AUTH-002S..006S，勿手改。
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAuth } from '@kit.UserAuthenticationKit';

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

// SAFE: OVD-AUTH-004S 认证 token 上送服务端验证后才授权（CWE-602 加固）
export function ovdAuth004S(serverTokenOk: boolean): string {
  return serverTokenOk ? 'admin granted after server-side token check' : 'admin denied: token unverified';
}

// SAFE: OVD-AUTH-005S 支付级操作用高信任级生物认证（CWE-308 加固）
export async function ovdAuth005S(): Promise<string> {
  const nonce = await cryptoFramework.createRandom().generateRandom(16);
  const auth = userAuth.getUserAuthInstance({
    challenge: nonce.data,
    authType: [userAuth.UserAuthType.FINGERPRINT, userAuth.UserAuthType.FACE],
    authTrustLevel: userAuth.AuthTrustLevel.ATL3,
  }, { title: 'vd-pay-secure' });
  auth.start();
  return 'payment requires ATL3 biometric (secure)';
}

// SAFE: OVD-AUTH-006S challenge 每次由加密随机源生成（CWE-330 加固）
export async function ovdAuth006S(): Promise<string> {
  const rnd = await cryptoFramework.createRandom().generateRandom(32);
  const auth = userAuth.getUserAuthInstance({
    challenge: rnd.data,
    authType: [userAuth.UserAuthType.FINGERPRINT],
    authTrustLevel: userAuth.AuthTrustLevel.ATL2,
  }, { title: 'vd-replay-secure' });
  auth.start();
  return `auth issued with fresh ${rnd.data.length}B challenge`;
}
