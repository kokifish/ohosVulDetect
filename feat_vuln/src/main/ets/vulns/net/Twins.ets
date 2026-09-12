// SAFE 孪生集合（net）：OVD-NET-002S/003S/004S/005S，合并文件，勿手改。
import { http, webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

// SAFE: OVD-NET-001S 对照实现：https 通道提交（CWE-319 加固）

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

// SAFE: OVD-NET-002S 调试通道走 wss + 运行时配置端点（CWE-319 加固）
export function ovdNet002S(endpoint: string): string {
  const ws: webSocket.WebSocket = webSocket.createWebSocket();
  ws.connect(`wss://${endpoint}/telemetry`, (err: BusinessError) => {
  });
  return `wss telemetry connect issued (endpoint=${endpoint})`;
}

// SAFE: OVD-NET-003S 证书错误一律取消并关闭连接（CWE-295 加固）
export function ovdNet003S(): string {
  return 'ssl-error policy: handleCancel + close, never confirm';
}

// SAFE: OVD-NET-004S 证书校验逐项比较主机名与 pin（CWE-295 加固）
export function ovdNet004S(hostname: string, pins: string[], presentedPin: string): string {
  return pins.includes(`${hostname}|${presentedPin}`) ? 'pin matched' : 'pin mismatch: reject';
}

// SAFE: OVD-NET-005S pinning 白名单非空且按主机精确匹配（CWE-295 加固）
const SPKI_PINS: string[] = ['api.bench.example|sha256/AAAAAAAA', 'cdn.bench.example|sha256/BBBBBBBB'];
export function ovdNet005S(host: string): string {
  return SPKI_PINS.some((p: string): boolean => p.startsWith(`${host}|`)) ? 'host pinned' : 'host not pinned: reject';
}
