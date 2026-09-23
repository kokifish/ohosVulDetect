// SAFE: OVD-TNT-001S 同构跨函数链，source 返回派生聚合值、
// sink 落点为聚合端点——污点规则应在 hop1 上失配（CWE-200 加固）。
import http from '@ohos.net.http';

const AGGREGATE = 'aggregate-sha-short';

function ovdTntSource(): string {
  return AGGREGATE;
}

function ovdTntRelay(seed: string): string {
  return `relay(${seed.length})=${seed}`;
}

export async function ovdTntSink(): Promise<string> {
  const payload: string = ovdTntRelay(ovdTntSource());
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://ovd-tnt.example/aggregate', {
    method: http.RequestMethod.POST,
    header: { 'x-tnt-flow': '0' },
    extraData: payload
  });
  req.destroy();
  return 'tntS aggregate posted';
}
