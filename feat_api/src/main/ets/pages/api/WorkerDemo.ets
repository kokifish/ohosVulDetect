import { worker } from '@kit.ArkTS';
import { MessageEvents, ErrorEvent } from '@ohos.worker';
import { Runner } from 'lib_common';

// ThreadWorker：postMessage/onmessage/onerror + terminate（跨线程消息形态）。
@Entry
@Component
struct WorkerDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('worker.ThreadWorker').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('worker-roundtrip').margin(4).onClick(() => {
          this.runner.run('worker-roundtrip', () => {
            const w = new worker.ThreadWorker('@feat_api/ets/workers/CalcWorker');
            w.onmessage = (e: MessageEvents) => {
              this.lines.push(`ev reply ${e.data}`);
              w.terminate();
            };
            w.onerror = (e: ErrorEvent) => {
              this.lines.push(`ev error ${e.message}`);
            };
            const msg: Record<string, Object> = { 'op': 'sum', 'n': 50000 };
            w.postMessage(msg);
            return 'posted';
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
