// VULN: OVD-IPC-003 任意来源可连的本地 TCP 服务，无认证回显敏感数据（CWE-306/862）
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AUTH_TOKEN } from '../log/OVD-LOG-001';

export function ovdIpc003(onLine: (s: string) => void): string {
  const tcp = socket.constructTCPSocketInstance();
  tcp.on('message', (info: socket.SocketMessageInfo) => {
    onLine(`tcp backdoor recv ${info.message.byteLength}B -> echo token`);
    tcp.send({ data: `token=${AUTH_TOKEN}` }).catch((_e: BusinessError) => {
    });
  });
  tcp.bind({ address: '0.0.0.0', port: 18888 }).then(() => {
    onLine('tcp backdoor listening on 0.0.0.0:18888 (no auth)');
  }).catch((e: BusinessError) => {
    onLine(`tcp bind failed: ${JSON.stringify(e)}`);
  });
  return 'tcp backdoor start requested';
}
