import { BusinessError } from '@kit.BasicServicesKit';

/**
 * Demo 页共用执行器：按钮 onClick 里调 runner.run(label, fn)，
 * 同步/异步结果与异常统一写回 @State lines 数组。
 */
export class Runner {
  private lines: string[];

  constructor(lines: string[]) {
    this.lines = lines;
  }

  run(label: string, fn: () => string | Promise<string>): void {
    try {
      const r = fn();
      if (r instanceof Promise) {
        this.lines.push(`${label} …`);
        r.then((v: string) => {
          this.lines.push(`${label} ✅ ${v}`);
        }).catch((e: BusinessError) => {
          this.lines.push(`${label} ❌ ${JSON.stringify(e)}`);
        });
      } else {
        this.lines.push(`${label} ✅ ${r}`);
      }
    } catch (e) {
      this.lines.push(`${label} ❌ ${JSON.stringify(e)}`);
    }
  }
}
