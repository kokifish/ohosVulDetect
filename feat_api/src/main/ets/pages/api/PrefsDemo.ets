import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';
import { Runner } from 'lib_common';

// preferences：Sync 孪生 + async put/flush + has/delete。
@Entry
@Component
struct PrefsDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('preferences').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('sync-roundtrip').margin(4).onClick(() => {
          this.runner.run('sync-roundtrip', () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'bench_prefs' });
            p.putSync('benign_key', 'benign-value-42');
            const v: string = p.getSync('benign_key', '') as string;
            p.hasSync('benign_key');
            p.deleteSync('benign_key');
            p.flush();
            return `roundtrip=${v}`;
          });
        })
        Button('async-put').margin(4).onClick(() => {
          this.runner.run('async-put', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const p: preferences.Preferences = await preferences.getPreferences(ctx, { name: 'bench_prefs' });
            await p.put('benign_async', 7);
            await p.flush();
            const n: number = await p.get('benign_async', 0) as number;
            return `async=${n as number}`;
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
