// VULN: OVD-SEN-002 污点经 @Sendable 共享对象字段跨线程存活（CWE-312）
// @Concurrent 任务对共享对象字段赋值（共享内存别名，非消息副本），UI 线程随后
// 读同一字段明文落盘——污点通道为共享内存别名，现有参数/消息两通道不覆盖。
// 孪生 002S 同构但只写聚合计数。
import { taskpool } from '@kit.ArkTS';
import { fileIo as fs } from '@kit.CoreFileKit';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export const SEN2_TOKEN = 'ovd_sen2_tok_5f8b92';

@Sendable
export class Sen2Holder {
  payload: string = '';
}

@Concurrent
function sen2WriteShared(h: Sen2Holder, value: string): number {
  h.payload = value;
  return h.payload.length;
}

export async function ovdSen002(ctx: common.UIAbilityContext): Promise<string> {
  const holder = new Sen2Holder();
  const len: number = await taskpool.execute(sen2WriteShared, holder, SEN2_TOKEN) as number;
  const store = preferences.getPreferencesSync(ctx, { name: 'ovd_sen2_shared' });
  store.putSync('shared_field', holder.payload);
  store.flushSync();
  const storedLen = holder.payload.length;
  store.delete('shared_field');
  store.flushSync();
  return `sen2 shared-field taint: len=${len}, stored=${storedLen}`;
}
