// VULN: OVD-NET-001 凭据经明文 http 通道提交（CWE-319）
import { http } from '@kit.NetworkKit';

export async function ovdNet001(user: string, pass: string): Promise<string> {
  const req: http.HttpRequest = http.createHttp();
  const resp: http.HttpResponse = await req.request('http://httpbin.org/post', {
    method: http.RequestMethod.POST,
    extraData: JSON.stringify({ 'user': user, 'password': pass }),
    expectDataType: http.HttpDataType.STRING
  });
  req.destroy();
  return `login sent over http, status=${resp.responseCode}`;
}
