// VULN: OVD-NOTIF-002 会话令牌明文进通知内容（CWE-200/359）
// 通知横幅全局可见且进通知历史，令牌随内容长期暴露。
import { notificationManager } from '@kit.NotificationKit';
import { BusinessError } from '@kit.BasicServicesKit';

export const NOTIF2_TOKEN = 'ovd_notif2_tok_46ab';

export async function ovdNotif002(): Promise<string> {
  const req: notificationManager.NotificationRequest = {
    id: 2,
    content: {
      notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
      normal: { title: 'session sync', text: `token=${NOTIF2_TOKEN}` }
    }
  };
  try {
    await notificationManager.publish(req);
  } catch (e) {
    const err = e as BusinessError;
    return `notif2 publish err=${err.code}`;
  }
  return 'notif2 token published in banner';
}
