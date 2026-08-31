import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { emitter, commonEventManager } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

// emitter emit/on/once/off（优先级枚举）+ commonEventManager publish/subscribe。
@Entry
@Component
struct EmitterDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'emitter / commonEvent',
        cases: [
          new Case('emitter', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            emitter.on('bench.evt.a', (e: emitter.EventData) => {
              log(`ev on #100 ${JSON.stringify(e.data ?? {})}`);
            });
            emitter.once('bench.evt.b', (e: emitter.EventData) => {
              log(`ev once #101`);
            });
            emitter.emit('bench.evt.a', { priority: emitter.EventPriority.HIGH }, { data: { 'k': 'v' } });
            emitter.emit('bench.evt.b');
            emitter.off('bench.evt.a');
            return 'emitted';
          }),
          new Case('commonEvent', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const subInfo: commonEventManager.CommonEventSubscribeInfo = {
              events: ['ovd.bench.event']
            };
            const subscriber: commonEventManager.CommonEventSubscriber = await commonEventManager.createSubscriber(subInfo);
            commonEventManager.subscribe(subscriber, (err: BusinessError, data: commonEventManager.CommonEventData) => {
              log(err ? `ev sub ❌ ${JSON.stringify(err)}` :
                `ev recv ${JSON.stringify(data?.data ?? '')}`);
              commonEventManager.unsubscribe(subscriber);
            });
            commonEventManager.publish('ovd.bench.event', (err: BusinessError) => {
              if (err) {
                log(`publish ❌ ${JSON.stringify(err)}`);
              }
            });
            return 'published';
          })
        ]
      })

    }
    .height('100%')
  }
}
