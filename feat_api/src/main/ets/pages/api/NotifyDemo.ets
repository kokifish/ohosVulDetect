import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { notificationManager } from '@kit.NotificationKit';
import notification from '@ohos.notification';
import { Runner } from 'lib_common';

// 通知：requestEnableNotification / publish（枚举 ContentType+SlotType）/ cancel / addSlot。
@Entry
@Component
struct NotifyDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('notificationManager').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('enable').margin(4).onClick(() => {
          this.runner.run('enable', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            await notificationManager.requestEnableNotification(ctx);
            return 'requested';
          });
        })
        Button('publish').margin(4).onClick(() => {
          this.runner.run('publish', async () => {
            await notificationManager.publish({
              id: 1,
              content: {
                contentType: notification.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
                normal: {
                  title: 'bench title',
                  text: 'bench notification body',
                  additionalText: 'add'
                }
              },
              notificationSlotType: notificationManager.SlotType.SOCIAL_COMMUNICATION
            });
            return 'published #1';
          });
        })
        Button('cancel').margin(4).onClick(() => {
          this.runner.run('cancel', async () => {
            await notificationManager.cancel(1);
            return 'canceled #1';
          });
        })
        Button('addSlot').margin(4).onClick(() => {
          this.runner.run('addSlot', async () => {
            notificationManager.addSlot(notificationManager.SlotType.SERVICE_INFORMATION,
              (err: BusinessError) => {
                this.lines.push(err ? `addSlot ❌ ${JSON.stringify(err)}` : 'ev slot added');
              });
            return 'adding';
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
