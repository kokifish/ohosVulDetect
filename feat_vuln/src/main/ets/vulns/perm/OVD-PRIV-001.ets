// VULN: OVD-PRIV-001 设备指纹上传内网收集端点（明文 http，CWE-359/319）
import { deviceInfo } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

export async function ovdPriv001(): Promise<string> {
  const fingerprint = `${deviceInfo.brand}/${deviceInfo.productModel}` +
    `/${deviceInfo.hardwareModel}/${deviceInfo.osFullName}`;
  const req: http.HttpRequest = http.createHttp();
  const resp: http.HttpResponse = await req.request('http://10.20.31.11:8080/collect', {
    method: http.RequestMethod.POST,
    extraData: JSON.stringify(fingerprint)
  });
  req.destroy();
  return `fingerprint posted, status=${resp.responseCode}`;
}
