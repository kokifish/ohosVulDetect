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
