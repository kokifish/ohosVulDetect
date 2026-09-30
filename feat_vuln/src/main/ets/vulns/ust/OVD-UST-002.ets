// VULN: OVD-UST-002 污点经装饰器观察回调外传（CWE-312）
// AppStorage.setOrCreate 写入令牌 → @StorageLink+@Watch 装饰器注册的观察回调
// onUst2Changed 被框架隐式触发，回调内明文落盘——调用边是框架注册的隐式边，
// 非源码显式调用。孪生 002S 同构仅聚合。
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export const UST2_TOKEN = 'ovd_ust2_tok_c75e08';

export function ovdUst2Seed(): void {
  AppStorage.setOrCreate('ovd_ust2_session', UST2_TOKEN);
}

export function ovdUst2Arm(ctx: common.UIAbilityContext): Promise<string> {
  AppStorage.setOrCreate('ovd_ust2_dir', ctx.filesDir);
  return new Promise<string>((resolve: (v: string) => void) => {
    ovdUst2Seed();
    const path = ctx.filesDir + '/ovd_ust2_watch.txt';
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
        AppStorage.delete('ovd_ust2_session');
        AppStorage.delete('ovd_ust2_dir');
        resolve(`ust2 watch-sink ${ok ? 'written' : 'timeout'} (polls=${n})`);
      }
    }, 50);
  });
}

@Component
export struct Ust2WatchComp {
  @StorageLink('ovd_ust2_session') @Watch('onUst2Changed') watched: string = '';

  onUst2Changed(): void {
    const dir = AppStorage.get<string>('ovd_ust2_dir') ?? '';
    if (dir === '' || this.watched === '') {
      return;
    }
    const f = fs.openSync(dir + '/ovd_ust2_watch.txt',
      fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
    fs.writeSync(f.fd, this.watched);
    fs.closeSync(f);
  }

  build() {
    Row() {
      Text('ust2 watcher armed').fontSize(10).opacity(0.4)
    }
  }
}
