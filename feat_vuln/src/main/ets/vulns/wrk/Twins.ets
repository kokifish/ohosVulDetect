// SAFE: OVD-WRK-001S 只投递聚合计数（op=safe），无凭据进跨线程消息（CWE-200 加固）
import worker, { MessageEvents, ErrorEvent } from '@ohos.worker';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

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

// SAFE: OVD-WRK-002S worker 侧只落聚合串，凭据不进跨线程消息（CWE-312 加固）
export function ovdWrk002S(ctx: common.UIAbilityContext, log: (s: string) => void): Promise<string> {
  return new Promise<string>((resolve: (v: string) => void) => {
    const w = new worker.ThreadWorker('@feat_vuln/ets/workers/LeakWorker');
    const path = ctx.filesDir + '/ovd_wrk2s_store.txt';
    w.onmessage = (e: MessageEvents): void => {
      log(`wrk2S ack ${e.data}`);
      w.terminate();
      try {
        fs.unlinkSync(path);
      } catch (e) {
        // 清理失败不影响判定
      }
      resolve(`wrk2S aggregate sunk in worker: ${e.data}`);
    };
    w.onerror = (e: ErrorEvent): void => {
      w.terminate();
      resolve(`wrk2S err=${e.message}`);
    };
    const msg: Record<string, Object> = { 'op': 'safe-file', 'count': 9, 'path': path };
    w.postMessage(msg);
  });
}
