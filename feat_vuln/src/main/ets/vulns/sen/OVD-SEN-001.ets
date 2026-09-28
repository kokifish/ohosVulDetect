// VULN: OVD-SEN-001 会话令牌经 taskpool 结构化克隆跨线程并明文落盘（CWE-200/312）
// 令牌作为参数传入 @Concurrent 任务（结构化克隆序列化跨线程携带），任务线程内
// 直接明文写文件——泄漏面超出 UI 线程沙箱且落盘。孪生 001S 只传聚合计数。
import { taskpool } from '@kit.ArkTS';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export const SEN_TOKEN = 'ovd_sen_tok_6e21a4';

@Concurrent
function senStore(path: string, payload: string): string {
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, payload);
  fs.closeSync(f);
  return `stored:${payload.length}`;
}

export async function ovdSen001(ctx: common.UIAbilityContext): Promise<string> {
  const path = ctx.filesDir + '/ovd_sen_store.txt';
  const ack: string = await taskpool.execute(senStore, path, SEN_TOKEN) as string;
  const f = fs.openSync(path, fs.OpenMode.READ_ONLY);
  fs.closeSync(f);
  fs.unlinkSync(path);
  return `sen token crossed thread boundary: ${ack}`;
}
