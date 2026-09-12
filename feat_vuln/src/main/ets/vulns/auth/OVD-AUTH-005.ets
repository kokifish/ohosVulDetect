// VULN: OVD-AUTH-005 支付级敏感操作使用最低信任级 ATL1+PIN（CWE-308）
import { userAuth } from '@kit.UserAuthenticationKit';
export function ovdAuth005(): string {
  const auth = userAuth.getUserAuthInstance({
    challenge: new Uint8Array([2]),
    authType: [userAuth.UserAuthType.PIN],
    authTrustLevel: userAuth.AuthTrustLevel.ATL1, // pay-context 需 ATL3+ 生物特征
  }, { title: 'vd-pay' });
  auth.start();
  return 'payment approved at ATL1 pin (pay-context)';
}
