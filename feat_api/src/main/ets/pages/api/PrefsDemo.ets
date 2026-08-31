import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// preferences：Sync 孪生 + async put/flush + has/delete。
@Entry
@Component
struct PrefsDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'preferences',
        cases: [
          new Case('sync-roundtrip', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'bench_prefs' });
            p.putSync('benign_key', 'benign-value-42');
            const v: string = p.getSync('benign_key', '') as string;
            p.hasSync('benign_key');
            p.deleteSync('benign_key');
            p.flush();
            return `roundtrip=${v}`;
          }),
          new Case('async-put', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const p: preferences.Preferences = await preferences.getPreferences(ctx, { name: 'bench_prefs' });
            await p.put('benign_async', 7);
            await p.flush();
            const n: number = await p.get('benign_async', 0) as number;
            return `async=${n as number}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
