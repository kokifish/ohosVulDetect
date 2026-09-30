import worker, { ThreadWorkerGlobalScope, MessageEvents } from '@ohos.worker';
import { fileIo as fs } from '@kit.CoreFileKit';

// OVD-WRK-001/001S/002/002S 共用 worker。
// op=store：收到跨线程明文凭据，仅回长度 ack（WRK-001 漏洞面）。
// op=safe：只处理聚合计数（001S 孪生面）。
// op=store-file：ovdWrkSink 在工作线程内把凭据明文落盘（WRK-002 漏洞面，跨 record sink）。
// op=safe-file：只落聚合串（002S 孪生面）。
// 协议：请求-响应，处理后回 ack 字符串。
const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

export function ovdWrkSink(path: string, token: string): string {
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, token);
  fs.closeSync(f);
  return `sink:${token.length}`;
}

workerPort.onmessage = (e: MessageEvents): void => {
  const cmd = e.data as Record<string, Object>;
  if (cmd['op'] === 'store') {
    const token = cmd['token'] as string;
    workerPort.postMessage(`stored:${token.length}`);
  } else if (cmd['op'] === 'store-file') {
    const ack = ovdWrkSink(cmd['path'] as string, cmd['token'] as string);
    workerPort.postMessage(ack);
  } else if (cmd['op'] === 'safe-file') {
    const n = cmd['count'] as number;
    const f = fs.openSync(cmd['path'] as string,
      fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
    fs.writeSync(f.fd, `agg:${n}`);
    fs.closeSync(f);
    workerPort.postMessage(`safeSink:${n}`);
  } else {
    workerPort.postMessage('safe:aggregate');
  }
};
