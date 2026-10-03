// VULN: OVD-UST-003 污点经 V2 状态装饰器生成流外传（CWE-312）
// @ObservedV2 类的 @Trace 字段被赋值 → @Monitor 观察回调被框架隐式触发，
// 回调内 fileIo 落盘——与 UST-002（V1 @StorageLink）同构但走 V2 运行时观察链路，
// 生成访问器与 IMonitor 回调是框架生成代码。孪生 003S 只写聚合计数。
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export const UST3_TOKEN = 'ovd_ust3_tok_b41d66';

@ObservedV2
export class Ust3Session {
  @Trace token: string = '';

  @Monitor('token')
  onUst3Changed(mon: IMonitor): void {
    const dir = AppStorage.get<string>('ovd_ust3_dir') ?? '';
    if (dir === '' || this.token === '') {
      return;
    }
    const f = fs.openSync(dir + '/ovd_ust3_watch.txt',
      fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
    fs.writeSync(f.fd, this.token);
    fs.closeSync(f);
  }
}

export const ust3Session = new Ust3Session();

export function ovdUst3Seed(): void {
  ust3Session.token = UST3_TOKEN;
}

export function ovdUst3Arm(ctx: common.UIAbilityContext): Promise<string> {
  AppStorage.setOrCreate('ovd_ust3_dir', ctx.filesDir);
  return new Promise<string>((resolve: (v: string) => void) => {
    ovdUst3Seed();
    const path = ctx.filesDir + '/ovd_ust3_watch.txt';
    let n = 0;
    const timer = setInterval(() => {
      n += 1;
      let ok = false;
      try {
        const f = fs.openSync(path, fs.OpenMode.READ_ONLY);
        fs.closeSync(f);
        ok = true;
      } catch (e) {
        // 尚未写入，继续等
      }
      if (ok || n >= 30) {
        clearInterval(timer);
        try {
          fs.unlinkSync(path);
        } catch (e) {
          // 已存在性不一致不阻塞
        }
        AppStorage.delete('ovd_ust3_dir');
        resolve(`ust3 v2-monitor sink ${ok ? 'written' : 'timeout'} (polls=${n})`);
      }
    }, 50);
  });
}
