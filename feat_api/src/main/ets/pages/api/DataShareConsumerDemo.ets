import { dataShare, dataSharePredicates } from '@kit.ArkData';
import { Runner } from 'lib_common';

// DataShare 消费侧：本版 SDK 侧消费接口为 createDataProxyHandle（旧 createDataShareHelper 已移除）。
@Entry
@Component
struct DataShareConsumerDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('dataShare consumer (cross-HAP)').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('proxy-handle').margin(4).onClick(() => {
          this.runner.run('proxy-handle', async () => {
            const handle: dataShare.DataProxyHandle = await dataShare.createDataProxyHandle();
            return `proxy handle: ${handle !== undefined}`;
          });
        })
        Button('predicates-chain').margin(4).onClick(() => {
          this.runner.run('predicates-chain', () => {
            const pred = new dataSharePredicates.DataSharePredicates()
              .equalTo('name', 'alice')
              .orderByAsc('id')
              .limit(0, 5);
            return `predicates built`;
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
