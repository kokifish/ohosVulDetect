// VULN: OVD-CONF-003 API key 常量硬编码进请求头（CWE-798/312）
import http from '@ohos.net.http';

export const CONF3_KEY = 'ovd_conf3_apikey_zz19';

export async function ovdConf003(): Promise<string> {
  const req = http.createHttp();
  try {
    await req.request('https://ovd-conf3.example/api', {
      method: http.RequestMethod.GET,
      header: { 'x-api-key': CONF3_KEY },
      connectTimeout: 5000,
      readTimeout: 5000
    });
  } catch (e) {
  }
  req.destroy();
  return 'conf3 request carried plaintext api key';
}
