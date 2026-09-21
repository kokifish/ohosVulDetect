// VULN: OVD-NOTIF-001 通知栏明文携带验证码与会话令牌，锁屏/通知中心任意可见（CWE-200）
// 通知是系统级共享面：任何能读通知的应用/服务（含穿戴、助手）与旁观者均可截获。
import { notificationManager } from '@kit.NotificationKit';
import notification from '@ohos.notification';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export const NOTIF_EVENT = 'ovd.bench.pay.confirm';
export const NOTIF_SECRET = 'pay code 774811 / tok_vd_notif_2f8a';

export async function ovdNotif001(ctx: common.UIAbilityContext): Promise<string> {
  try {
    await notificationManager.requestEnableNotification(ctx);
  } catch (e) {
    return `notif-err=${(e as BusinessError).code}`;
  }
  await notificationManager.publish({
    id: 7701,
    content: {
      contentType: notification.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
      normal: {
        title: NOTIF_EVENT,
        text: NOTIF_SECRET
      }
    },
    notificationSlotType: notificationManager.SlotType.SOCIAL_COMMUNICATION
  });
  await notificationManager.cancel(7701);
  return 'notif secret published (visible on lockscreen)';
}
