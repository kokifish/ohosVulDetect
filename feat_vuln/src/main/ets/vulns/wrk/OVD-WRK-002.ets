// VULN: OVD-WRK-002 凭据经 worker 消息交接后在工作线程内落盘（CWE-312）
// 主线程把令牌放进跨线程消息（op=store-file），worker 侧 ovdWrkSink 用 fileIo
// 明文写文件——sink 与 UI 线程分属两个 record，需跨 record interproc 分析。
// 注意：hop1 材料（token 常量 + postMessage 调用）必须留在本具名函数体内——
// es2abc 会把 Promise executor 降为独立闭包 record，放进去会被评分器的
// 函数锚定遗漏（真实工具实跑 FN 教训，见 BENCHMARK 审计轮记录）。
// 孪生 002S 走 op=safe-file，只落聚合计数串。
import worker, { MessageEvents, ErrorEvent } from '@ohos.worker';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export const WRK2_TOKEN = 'ovd_wrk2_tok_8d47c1';

export function ovdWrk002(ctx: common.UIAbilityContext, log: (s: string) => void): Promise<string> {
  const path = ctx.filesDir + '/ovd_wrk2_store.txt';
  const w = new worker.ThreadWorker('@feat_vuln/ets/workers/LeakWorker');
  const done = new Promise<string>((resolve: (v: string) => void) => {
    w.onmessage = (e: MessageEvents): void => {
      log(`wrk2 sink ack ${e.data}`);
      w.terminate();
      try {
        fs.unlinkSync(path);
      } catch (e) {
        // 清理失败不影响判定
      }
      resolve(`wrk2 token sunk in worker record: ${e.data}`);
    };
    w.onerror = (e: ErrorEvent): void => {
      w.terminate();
      resolve(`wrk2 err=${e.message}`);
    };
  });
  const msg: Record<string, Object> = { 'op': 'store-file', 'token': WRK2_TOKEN, 'path': path };
  try {
    w.postMessage(msg);
  } catch (e) {
    const err = e as BusinessError;
    w.terminate();
  }
  return done;
}
