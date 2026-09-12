// VULN: OVD-AUTH-004 userAuth 仅凭客户端返回码放行，token 不上服务端验证（CWE-602/693）
import { userAuth } from '@kit.UserAuthenticationKit';
export function ovdAuth004(): string {
  const auth = userAuth.getUserAuthInstance({
    challenge: new Uint8Array([1]),
    authType: [userAuth.UserAuthType.PIN],
    authTrustLevel: userAuth.AuthTrustLevel.ATL1,
  }, { title: 'vd-auth' });
  auth.start(); // 不等待 onResult，本地直接置信
  AppStorage.setOrCreate('ovd_admin', 'granted');
  return 'grant admin: trust-client-result-only';
}
