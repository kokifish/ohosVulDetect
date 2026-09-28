import worker, { ThreadWorkerGlobalScope, MessageEvents } from '@ohos.worker';

// OVD-WRK-001/001S 共用 worker：op=store 时收到跨线程明文凭据（漏洞面），
// op=safe 时只处理聚合计数（孪生面）。协议：请求-响应，处理后回 ack 字符串。
const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

workerPort.onmessage = (e: MessageEvents): void => {
  const cmd = e.data as Record<string, Object>;
  if (cmd['op'] === 'store') {
    const token = cmd['token'] as string;
    workerPort.postMessage(`stored:${token.length}`);
  } else {
    workerPort.postMessage('safe:aggregate');
  }
};
