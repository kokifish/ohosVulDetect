// SAFE: OVD-UST-001S 仅内存态 AppStorage + 聚合计数，无持久化无凭据（CWE-312 加固）
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export function ovdUst001S(): string {
  AppStorage.setOrCreate('ovd_ust_bucket', 1);
  const v = AppStorage.get<number>('ovd_ust_bucket') ?? 0;
  AppStorage.delete('ovd_ust_bucket');
  return `ustS memory-only aggregate: ${v} (no persistence)`;
}


// SAFE: OVD-UST-002S 观察回调只落聚合计数，无凭据过装饰器隐式边（CWE-312 加固）
export function ovdUst2ArmS(ctx: common.UIAbilityContext): Promise<string> {
  AppStorage.setOrCreate('ovd_ust2s_dir', ctx.filesDir);
  return new Promise<string>((resolve: (v: string) => void) => {
    AppStorage.setOrCreate('ovd_ust2s_count', 9);
    const path = ctx.filesDir + '/ovd_ust2s_watch.txt';
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
        AppStorage.delete('ovd_ust2s_count');
        AppStorage.delete('ovd_ust2s_dir');
        resolve(`ust2S watch-sink ${ok ? 'written' : 'timeout'} (polls=${n})`);
      }
    }, 50);
  });
}

@Component
export struct Ust2WatchCompS {
  @StorageLink('ovd_ust2s_count') @Watch('onUst2ChangedS') watched: number = 0;

  onUst2ChangedS(): void {
    const dir = AppStorage.get<string>('ovd_ust2s_dir') ?? '';
    if (dir === '' || this.watched <= 0) {
      return;
    }
    const f = fs.openSync(dir + '/ovd_ust2s_watch.txt',
      fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
    fs.writeSync(f.fd, `agg:${this.watched}`);
    fs.closeSync(f);
  }

  build() {
    Row() {
      Text('ust2S watcher armed').fontSize(10).opacity(0.4)
    }
  }
}

// SAFE: OVD-UST-003S V2 观察回调只落聚合计数（CWE-312 加固）
@ObservedV2
export class Ust3SessionS {
  @Trace count: number = 0;

  @Monitor('count')
  onUst3ChangedS(mon: IMonitor): void {
    const dir = AppStorage.get<string>('ovd_ust3s_dir') ?? '';
    if (dir === '' || this.count <= 0) {
      return;
    }
    const f = fs.openSync(dir + '/ovd_ust3s_watch.txt',
      fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
    fs.writeSync(f.fd, `agg:${this.count}`);
    fs.closeSync(f);
  }
}

export const ust3SessionS = new Ust3SessionS();

export function ovdUst3ArmS(ctx: common.UIAbilityContext): Promise<string> {
  AppStorage.setOrCreate('ovd_ust3s_dir', ctx.filesDir);
  return new Promise<string>((resolve: (v: string) => void) => {
    ust3SessionS.count = 9;
    const path = ctx.filesDir + '/ovd_ust3s_watch.txt';
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
        AppStorage.delete('ovd_ust3s_dir');
        resolve(`ust3S v2-monitor sink ${ok ? 'written' : 'timeout'} (polls=${n})`);
      }
    }, 50);
  });
}
