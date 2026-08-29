// SAFE: OVD-NET-001S 对照实现：https 通道提交（CWE-319 加固）
import { http } from '@kit.NetworkKit';

export async function ovdNet001S(user: string, pass: string): Promise<string> {
  const req: http.HttpRequest = http.createHttp();
  const resp: http.HttpResponse = await req.request('https://httpbin.org/post', {
    method: http.RequestMethod.POST,
    extraData: JSON.stringify({ 'user': user, 'password': pass }),
    expectDataType: http.HttpDataType.STRING
  });
  req.destroy();
  return `login sent over https, status=${resp.responseCode}`;
}
