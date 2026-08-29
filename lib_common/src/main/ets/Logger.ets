import { hilog } from '@kit.PerformanceAnalysisKit';

export class Logger {
  static readonly DOMAIN: number = 0x0110;

  static info(tag: string, msg: string): void {
    hilog.info(Logger.DOMAIN, tag, '%{public}s', msg);
  }

  static warn(tag: string, msg: string): void {
    hilog.warn(Logger.DOMAIN, tag, '%{public}s', msg);
  }

  static error(tag: string, msg: string): void {
    hilog.error(Logger.DOMAIN, tag, '%{public}s', msg);
  }
}
