// VULN: OVD-CONF-002 硬编码内网调试 WS 服务器（CWE-200）
export const DEBUG_WS_URL: string = 'ws://192.168.1.100:9000/debug';

export function ovdConf002(): string {
  return `debug channel ${DEBUG_WS_URL}`;
}
