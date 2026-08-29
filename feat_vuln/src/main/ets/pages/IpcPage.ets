import { common, Want } from '@kit.AbilityKit';
import { emitter } from '@kit.BasicServicesKit';
import { Runner } from 'lib_common';
import { ovdIpc003 } from '../vulns/ipc/OVD-IPC-003';

// IPC 面：001/002/003/004 事实源在 module.json5 / BackdoorAbility / DataShareExt；此处提供触发器。
@Entry
@Component
struct IpcPage {
  @State lines: string[] = [];
  @State admin: string = 'false';
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  onPageShow(): void {
    this.admin = AppStorage.get<string>('ovd_is_admin') ?? 'false';
  }

  build() {
    Column() {
      Text('IPC / exported surface').fontSize(20).margin(8)
      Text(`ovd_is_admin=${this.admin}`).fontSize(13).fontColor('#CC0000')
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001/004 deeplink').margin(4).onClick(() => {
          this.runner.run('001/004', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const want: Want = {
              action: 'ohos.want.action.viewData',
              uri: 'ovd://backdoor?path=../../sandbox-note'
            };
            await ctx.startAbility(want);
            return 'implicit want sent (exported backdoor)';
          });
        })
        Button('002 magic').margin(4).onClick(() => {
          this.runner.run('002', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const want: Want = {
              action: 'ohos.want.action.viewData',
              uri: 'ovd://backdoor',
              parameters: { 'magic': '0vD_b4ckd00r' }
            };
            await ctx.startAbility(want);
            return 'magic param sent';
          });
        })
        Button('003 tcp-backdoor').margin(4).onClick(() => {
          this.runner.run('003', () => ovdIpc003((s: string) => {
            this.lines.push(`ev ${s}`);
          }));
        })
        Button('005 emitter-admin').margin(4).onClick(() => {
          this.runner.run('005', () => {
            emitter.emit('ovd.admin', { data: { 'admin': '1' } });
            this.admin = AppStorage.get<string>('ovd_is_admin') ?? 'false';
            return `after emit: admin=${this.admin}`;
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
