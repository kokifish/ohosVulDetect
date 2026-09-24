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

// SAFE: OVD-TNT-002S 三跳链的 source 换成批处理聚合计数，sink 只发常量（CWE-200 加固）
const BATCH2 = 'aggregate-batch-only-2';

function src2S(): string {
  return BATCH2;
}

function hop1S(s: string): string {
  return `h1<${s.length}>${s}`;
}

function hop2S(s: string): string {
  return s.replace('h1', 'h2');
}

export async function ovdTntSink2S(): Promise<string> {
  const payload: string = hop2S(hop1S(src2S()));
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://ovd-tnt.example/aggregate2', {
    method: http.RequestMethod.POST,
    header: { 'x-tnt2-flow': '0' },
    extraData: payload
  });
  req.destroy();
  return 'tnt2S aggregate posted';
}
