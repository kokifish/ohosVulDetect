// VULN: OVD-WRK-001 会话令牌经 worker postMessage 跨线程投递（CWE-200/312）
// 主线程把令牌塞进跨线程消息（结构化克隆序列化），worker 线程可独立处置
// （本语料中 worker 仅回 ack 长度——跨线程投递本身即泄漏面）。
// 孪生 001S 只投递聚合计数（op=safe）。
import worker, { MessageEvents, ErrorEvent } from '@ohos.worker';
import { BusinessError } from '@kit.BasicServicesKit';

export const WRK_TOKEN = 'ovd_wrk_tok_51b9e2';

export function ovdWrk001(log: (s: string) => void): Promise<string> {
  return new Promise<string>((resolve: (v: string) => void) => {
    const w = new worker.ThreadWorker('@feat_vuln/ets/workers/LeakWorker');
    w.onmessage = (e: MessageEvents): void => {
      log(`wrk ack ${e.data}`);
      w.terminate();
      resolve(`wrk token posted cross-thread, ack=${e.data}`);
    };
    w.onerror = (e: ErrorEvent): void => {
      w.terminate();
      resolve(`wrk err=${e.message}`);
    };
    const msg: Record<string, Object> = { 'op': 'store', 'token': WRK_TOKEN };
    try {
      w.postMessage(msg);
    } catch (e) {
      const err = e as BusinessError;
      w.terminate();
      resolve(`wrk post err=${err.code}`);
    }
  });
}
