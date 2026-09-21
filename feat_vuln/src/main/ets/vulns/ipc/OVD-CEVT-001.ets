// VULN: OVD-CEVT-001 公共事件明文广播会话令牌，同设备任意可订阅方可见（CWE-200）
// 无 subscriberPermissions 门、载荷含会话令牌：commonEvent 是系内广播面，
// 第三方应用注册同名事件即可截获。孪生 001S 限最小载荷 + 订阅方权限门。
import { commonEventManager, BusinessError } from '@kit.BasicServicesKit';

export const CEVT_EVENT = 'ovd.session.sync';
export const CEVT_TOKEN = 'sess_vd_cevt_plaintext_5150';

export async function ovdCevt001(log: (s: string) => void): Promise<string> {
  const subInfo: commonEventManager.CommonEventSubscribeInfo = { events: [CEVT_EVENT] };
  const sub = await commonEventManager.createSubscriber(subInfo);
  commonEventManager.subscribe(sub, (err: BusinessError, data: commonEventManager.CommonEventData) => {
    log(`cevt recv data=${data.data}`);
    commonEventManager.unsubscribe(sub);
  });
  const payload: commonEventManager.CommonEventPublishData = {
    code: 0,
    data: `token=${CEVT_TOKEN}`
  };
  return new Promise<string>((resolve: (v: string) => void) => {
    commonEventManager.publish(CEVT_EVENT, payload, (err: BusinessError) => {
      log(`cevt publish err=${err ? err.code : 0}`);
      resolve('cevt plain broadcast sent (token on system bus)');
    });
  });
}
