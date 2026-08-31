import { worker } from '@kit.ArkTS';
import { common } from '@kit.AbilityKit';
import { MessageEvents, ErrorEvent } from '@ohos.worker';
import { Case, DemoScaffold } from 'lib_common';

// ThreadWorker：postMessage/onmessage/onerror + terminate（跨线程消息形态）。
@Entry
@Component
struct WorkerDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'worker.ThreadWorker',
        cases: [
          new Case('worker-roundtrip', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const w = new worker.ThreadWorker('@feat_api/ets/workers/CalcWorker');
            w.onmessage = (e: MessageEvents) => {
              log(`ev reply ${e.data}`);
              w.terminate();
            };
            w.onerror = (e: ErrorEvent) => {
              log(`ev error ${e.message}`);
            };
            const msg: Record<string, Object> = { 'op': 'sum', 'n': 50000 };
            w.postMessage(msg);
            return 'posted';
          })
        ]
      })

    }
    .height('100%')
  }
}
