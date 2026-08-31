import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { notificationManager } from '@kit.NotificationKit';
import notification from '@ohos.notification';
import { Case, DemoScaffold } from 'lib_common';

// 通知：requestEnableNotification / publish（枚举 ContentType+SlotType）/ cancel / addSlot。
@Entry
@Component
struct NotifyDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'notificationManager',
        cases: [
          new Case('enable', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            await notificationManager.requestEnableNotification(ctx);
            return 'requested';
          }),
          new Case('publish', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
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
          }),
          new Case('cancel', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            await notificationManager.cancel(1);
            return 'canceled #1';
          }),
          new Case('addSlot', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            notificationManager.addSlot(notificationManager.SlotType.SERVICE_INFORMATION,
              (err: BusinessError) => {
                log(err ? `addSlot ❌ ${JSON.stringify(err)}` : 'ev slot added');
              });
            return 'adding';
          })
        ]
      })

    }
    .height('100%')
  }
}
