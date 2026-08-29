// VULN: OVD-NET-002 明文 ws:// 连接内网调试通道（CWE-319）
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

export function ovdNet002(): string {
  const ws: webSocket.WebSocket = webSocket.createWebSocket();
  ws.connect('ws://192.168.1.100:9000/telemetry', (err: BusinessError) => {
    if (err) {
      // 连接失败属预期（内网地址不存在），漏洞信号在字面量本身
    }
  });
  return 'ws:// telemetry connect issued';
}
