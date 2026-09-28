// SAFE: OVD-WRK-001S 只投递聚合计数（op=safe），无凭据进跨线程消息（CWE-200 加固）
import worker, { MessageEvents, ErrorEvent } from '@ohos.worker';

export function ovdWrk001S(log: (s: string) => void): Promise<string> {
  return new Promise<string>((resolve: (v: string) => void) => {
    const w = new worker.ThreadWorker('@feat_vuln/ets/workers/LeakWorker');
    w.onmessage = (e: MessageEvents): void => {
      log(`wrkS ack ${e.data}`);
      w.terminate();
      resolve(`wrkS aggregate posted, ack=${e.data}`);
    };
    w.onerror = (e: ErrorEvent): void => {
      w.terminate();
      resolve(`wrkS err=${e.message}`);
    };
    const msg: Record<string, Object> = { 'op': 'safe', 'count': 7 };
    w.postMessage(msg);
  });
}
