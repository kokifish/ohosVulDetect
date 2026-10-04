// OVD-IPC-006 遍历目标 record：不在白名单目录内、凭据载体——
// 调用方可控模块路径经动态 import 穿越后可达（HwMapKit 型原语，真实野生已修复模式）。
export function ovdIpc6Secret(p: string): string {
  return `ovd_ipc6_cred_8f41a2:${p}`;
}
