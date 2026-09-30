// SAFE: OVD-SEN-001S 同构 taskpool 路径只携带聚合计数，无凭据（CWE-200/312 加固）
import { taskpool } from '@kit.ArkTS';
import { common } from '@kit.AbilityKit';

@Concurrent
function senAgg(n: number): number {
  let s = 0;
  for (let i = 0; i < n; i += 1) {
    s += i;
  }
  return s;
}

export async function ovdSen001S(ctx: common.UIAbilityContext): Promise<string> {
  const total: number = await taskpool.execute(senAgg, 64) as number;
  return `senS aggregate computed: ${total} (no credential crosses threads)`;
}


// SAFE: OVD-SEN-002S 共享对象字段只写聚合计数串，无凭据过共享内存（CWE-312 加固）
@Sendable
export class Sen2HolderS {
  payload: string = '';
}

@Concurrent
function sen2WriteSharedS(h: Sen2HolderS, n: number): number {
  h.payload = `agg:${n}`;
  return h.payload.length;
}

export async function ovdSen002S(_ctx: common.UIAbilityContext): Promise<string> {
  const holder = new Sen2HolderS();
  const len: number = await taskpool.execute(sen2WriteSharedS, holder, 9) as number;
  return `sen2S shared-field aggregate: len=${len}, value=${holder.payload}`;
}
