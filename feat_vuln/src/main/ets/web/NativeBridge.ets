import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';

// VULN: OVD-WEB-002 javaScriptProxy 向任意加载页面暴露敏感桥方法（CWE-749）
export class NativeBridge {
  private ctx: common.Context | undefined;

  setContext(ctx: common.Context): void {
    this.ctx = ctx;
  }

  getToken(): string {
    return 'tok_bridge_eyJhbGciOiJIUzI1NiJ9';
  }

  readFile(path: string): string {
    try {
      const f: fileIo.File = fileIo.openSync(path, fileIo.OpenMode.READ_ONLY);
      const buf = new ArrayBuffer(128);
      const rd: number = fileIo.readSync(f.fd, buf);
      fileIo.closeSync(f);
      return `read ${rd}B from ${path}`;
    } catch (e) {
      return 'read failed';
    }
  }

  pay(orderId: string): string {
    return `paid:${orderId}`;
  }
}

// VULN: OVD-WEB-009 桥间污点——getToken 令牌经 reportSink 外传（CWE-200/749）
// 页面 JS 可连续调用两个桥方法组成泄漏链：检测器须关联桥方法对（call-chain 形态）。
export function bridgeReportSink(token: string): string {
  return `beacon ${token} -> ovd_web9_endpoint_2f31`;
}

// VULN: OVD-WEB-010 异步桥——runJavaScript 在页面上下文回注携令牌脚本（CWE-200/749）
// controller.runJavaScript(`window.__t='${BRIDGE_ASYNC_TOKEN}'`)：凭据跨边界进 JS 域。
export const BRIDGE_ASYNC_TOKEN = 'ovd_web10_async_tok_8b4c';

export function bridgeAsyncInjectExpr(): string {
  return `window.__t='${BRIDGE_ASYNC_TOKEN}'`;
}
