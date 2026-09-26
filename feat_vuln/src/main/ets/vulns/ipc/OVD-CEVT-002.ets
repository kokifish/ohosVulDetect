// VULN: OVD-CEVT-002 公共事件明文广播内网拓扑（CWE-200）
// 无 subscriberPermissions 门：拓扑结构（网段/边缘节点）对同设备任意订阅方可见。
import { commonEventManager, BusinessError } from '@kit.BasicServicesKit';

export const CEVT2_EVENT = 'ovd.cevt.topo.net2';
export const CEVT2_TOPO = 'topo_vd_cevt2_edge71';

export async function ovdCevt002(log: (s: string) => void): Promise<string> {
  const subInfo: commonEventManager.CommonEventSubscribeInfo = { events: [CEVT2_EVENT] };
  const sub = await commonEventManager.createSubscriber(subInfo);
  commonEventManager.subscribe(sub, (err: BusinessError, data: commonEventManager.CommonEventData) => {
    log(`cevt2 recv data=${data.data}`);
    commonEventManager.unsubscribe(sub);
  });
  const payload: commonEventManager.CommonEventPublishData = {
    code: 0,
    data: `topo=${CEVT2_TOPO}`
  };
  return new Promise<string>((resolve: (v: string) => void) => {
    commonEventManager.publish(CEVT2_EVENT, payload, (err: BusinessError) => {
      log(`cevt2 publish err=${err ? err.code : 0}`);
      resolve('cevt2 topology broadcast sent (no subscriber gate)');
    });
  });
}
