// VULN: OVD-SEN-003 凭据经跨模块 @Concurrent 任务处理（CWE-200）
// task 函数本体定义在 lib_common（HAR record），凭据经结构化克隆跨线程且跨模块
// 传入——线程边界 + record 边界双重跨越。孪生 003S 只传聚合。
import { taskpool } from '@kit.ArkTS';
import { ovdXmodT3Task } from 'lib_common';

export const SEN3_TOKEN = 'ovd_sen3_tok_e6c418';

export async function ovdSen003(): Promise<string> {
  const len: number = await taskpool.execute(ovdXmodT3Task, SEN3_TOKEN) as number;
  return `sen3 cross-module task: len=${len}`;
}
