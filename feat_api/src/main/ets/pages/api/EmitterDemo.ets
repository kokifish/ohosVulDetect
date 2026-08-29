import { BusinessError } from '@kit.BasicServicesKit';
import { emitter, commonEventManager } from '@kit.BasicServicesKit';
import { Runner } from 'lib_common';

// emitter emit/on/once/off（优先级枚举）+ commonEventManager publish/subscribe。
@Entry
@Component
struct EmitterDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('emitter / commonEvent').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('emitter').margin(4).onClick(() => {
          this.runner.run('emitter', () => {
            emitter.on('bench.evt.a', (e: emitter.EventData) => {
              this.lines.push(`ev on #100 ${JSON.stringify(e.data ?? {})}`);
            });
            emitter.once('bench.evt.b', (e: emitter.EventData) => {
              this.lines.push(`ev once #101`);
            });
            emitter.emit('bench.evt.a', { priority: emitter.EventPriority.HIGH }, { data: { 'k': 'v' } });
            emitter.emit('bench.evt.b');
            emitter.off('bench.evt.a');
            return 'emitted';
          });
        })
        Button('commonEvent').margin(4).onClick(() => {
          this.runner.run('commonEvent', async () => {
            const subInfo: commonEventManager.CommonEventSubscribeInfo = {
              events: ['ovd.bench.event']
            };
            const subscriber: commonEventManager.CommonEventSubscriber = await commonEventManager.createSubscriber(subInfo);
            commonEventManager.subscribe(subscriber, (err: BusinessError, data: commonEventManager.CommonEventData) => {
              this.lines.push(err ? `ev sub ❌ ${JSON.stringify(err)}` :
                `ev recv ${JSON.stringify(data?.data ?? '')}`);
              commonEventManager.unsubscribe(subscriber);
            });
            commonEventManager.publish('ovd.bench.event', (err: BusinessError) => {
              if (err) {
                this.lines.push(`publish ❌ ${JSON.stringify(err)}`);
              }
            });
            return 'published';
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
