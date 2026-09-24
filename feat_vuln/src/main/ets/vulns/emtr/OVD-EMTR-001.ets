// VULN: OVD-EMTR-001 会话令牌经固定 eventId 进程内广播（CWE-200）
// 固定 eventId + 无接收方校验：同进程任意组件 on(4711) 即可截获令牌。
import emitter from '@ohos.events.emitter';

export const EMTR_TOKEN = 'ovd_evt_tok_33aa';

export function ovdEmtr001(): string {
  const data: Record<string, string> = { 'token': EMTR_TOKEN };
  emitter.emit({ eventId: 4711, priority: emitter.EventPriority.HIGH }, { data: data });
  return 'emtr token broadcast on fixed eventId 4711';
}
