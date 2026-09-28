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
