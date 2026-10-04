// SAFE 孪生集合（ipc）：OVD-IPC-001S..005S + OVD-CEVT-001S，合并文件。
import { commonEventManager, BusinessError } from '@kit.BasicServicesKit';
import { safeOp } from './mods/SafeMod';

// SAFE: OVD-IPC-001S 跨进程入口校验调用方身份后才处理（CWE-862 加固）
export function ovdIpc001S(callerBundle: string): string {
  return callerBundle === 'com.koki.VD' ? 'caller verified' : 'caller rejected';
}

// SAFE: OVD-IPC-002S ability 启动先验证来源与授权标记，无内置魔法口令（CWE-306 加固）
export function ovdIpc002S(fromBundle: string, authorized: boolean): string {
  if (fromBundle !== 'com.koki.VD' || !authorized) {
    return 'ability request rejected';
  }
  return 'ability request accepted (caller verified)';
}

// SAFE: OVD-IPC-003S 本地服务仅回环监听 + 会话令牌鉴权（CWE-306 加固）
export function ovdIpc003S(sessionTokenOk: boolean): string {
  return sessionTokenOk ? 'loopback service replies after token auth' : 'loopback service rejects';
}

// SAFE: OVD-IPC-004S 外部 want 参数逐项白名单解析，不透传路径（CWE-20 加固）
export function ovdIpc004S(action: string): string {
  return ['viewHelp', 'shareText'].includes(action) ? `handled ${action}` : 'action refused';
}

// SAFE: OVD-IPC-005S emitter 事件带签名校验，不直接改写鉴权状态（CWE-345 加固）
export function ovdIpc005S(payloadSigOk: boolean): string {
  return payloadSigOk ? 'event accepted (signature verified)' : 'event dropped (bad signature)';
}

// SAFE: OVD-CEVT-001S 公共事件最小载荷 + 订阅方权限门，不携带令牌（CWE-200 加固）
export async function ovdCevt001S(log: (s: string) => void): Promise<string> {
  const subInfo: commonEventManager.CommonEventSubscribeInfo = { events: ['ovd.sync.localnote'] };
  const sub = await commonEventManager.createSubscriber(subInfo);
  commonEventManager.subscribe(sub, (err: BusinessError, data: commonEventManager.CommonEventData) => {
    log(`cevtS recv data=${data.data}`);
    commonEventManager.unsubscribe(sub);
  });
  const payload: commonEventManager.CommonEventPublishData = {
    code: 0,
    data: 'local-note',
    subscriberPermissions: ['ohos.permission.GET_BUNDLE_INFO_PRIVILEGED']
  };
  return new Promise<string>((resolve: (v: string) => void) => {
    commonEventManager.publish('ovd.sync.localnote', payload, (err: BusinessError) => {
      log(`cevtS publish err=${err ? err.code : 0}`);
      resolve('cevtS gated broadcast sent (minimal payload + subscriber permission)');
    });
  });
}

// SAFE: OVD-CEVT-002S 拓扑事件最小载荷 + 订阅方权限门注释语义（CWE-200 加固）
export const CEVT2_EVENT_SAFE = 'ovd.cevt.topo.safe';

export async function ovdCevt002S(log: (s: string) => void): Promise<string> {
  const payload: commonEventManager.CommonEventPublishData = {
    code: 0,
    data: ''
  };
  return new Promise<string>((resolve: (v: string) => void) => {
    commonEventManager.publish(CEVT2_EVENT_SAFE, payload, (err: BusinessError) => {
      log(`cevt2S publish err=${err ? err.code : 0}`);
      resolve('cevt2S empty payload (topology never broadcast)');
    });
  });
}

// SAFE: OVD-IPC-006S 白名单固定模块 + 固定成员 + 聚合（CWE-862/940 加固）
interface SafeModIface {
  safeOp(p: string): string;
}

export async function ovdIpc6DispatchS(): Promise<string> {
  const allowlist = ['SafeMod'];
  const target = allowlist[0];
  const mod = await import('./mods/' + target) as SafeModIface;
  return safeOp(`agg:${target.length}`);
}
