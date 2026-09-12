// SAFE 孪生集合（ipc）：OVD-IPC-001S..005S，合并文件，勿手改。

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
