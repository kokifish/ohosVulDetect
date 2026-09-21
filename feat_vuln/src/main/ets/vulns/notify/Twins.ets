// SAFE 孪生集合（notify）：OVD-NOTIF-001S，通知最小化载荷。
// SAFE: OVD-NOTIF-001S 通知只携带聚合计数，敏感细节留在应用内（CWE-200 加固）
import { notificationManager } from '@kit.NotificationKit';
import notification from '@ohos.notification';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdNotif001S(ctx: common.UIAbilityContext): Promise<string> {
  try {
    await notificationManager.requestEnableNotification(ctx);
  } catch (e) {
    return `notifS-err=${(e as BusinessError).code}`;
  }
  await notificationManager.publish({
    id: 7702,
    content: {
      contentType: notification.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
      normal: {
        title: 'ovd.bench.pay.digest',
        text: '3 new messages (open app for details)'
      }
    },
    notificationSlotType: notificationManager.SlotType.SOCIAL_COMMUNICATION
  });
  await notificationManager.cancel(7702);
  return 'notifS digest published (no sensitive payload)';
}
