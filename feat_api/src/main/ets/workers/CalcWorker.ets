import worker, { ThreadWorkerGlobalScope, MessageEvents } from '@ohos.worker';

// worker 线程入口：postMessage 协议（请求-响应）。
const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

workerPort.onmessage = (e: MessageEvents): void => {
  const cmd = e.data as Record<string, Object>;
  const op = cmd['op'] as string;
  if (op === 'sum') {
    const n = cmd['n'] as number;
    let s = 0;
    for (let i = 0; i < n; i += 1) {
      s += i;
    }
    workerPort.postMessage(`sum(${n})=${s}`);
  } else if (op === 'ping') {
    workerPort.postMessage('pong');
  } else {
    workerPort.postMessage(`unknown op ${op}`);
  }
};
