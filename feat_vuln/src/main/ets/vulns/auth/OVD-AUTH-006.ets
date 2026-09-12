// VULN: OVD-AUTH-006 认证 challenge 为固定字面量，跨会话复用可重放（CWE-330）
import { userAuth } from '@kit.UserAuthenticationKit';
export function ovdAuth006(): string {
  const challenge = new Uint8Array([0xde, 0xad, 0xbe, 0xef]); // deadbeef-fixed-challenge
  const auth = userAuth.getUserAuthInstance({
    challenge: challenge,
    authType: [userAuth.UserAuthType.FINGERPRINT],
    authTrustLevel: userAuth.AuthTrustLevel.ATL2,
  }, { title: 'vd-replay' });
  auth.start();
  return 'auth issued with deadbeef-fixed-challenge';
}
