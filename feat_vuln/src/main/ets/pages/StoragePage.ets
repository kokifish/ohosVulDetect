import { common } from '@kit.AbilityKit';
import { Runner } from 'lib_common';
import { ovdStor001 } from '../vulns/storage/OVD-STOR-001';
import { ovdStor001S } from '../vulns/storage/OVD-STOR-001S';
import { ovdStor002 } from '../vulns/storage/OVD-STOR-002';
import { ovdStor004 } from '../vulns/storage/OVD-STOR-004';

@Entry
@Component
struct StoragePage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('insecure storage').fontSize(20).margin(8)
      Text('(003 securityLevel:S1 见 db/BenchDb.ets)').fontSize(11).fontColor('#888888')
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 prefs-token').margin(4).onClick(() => {
          this.runner.run('001', () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            return ovdStor001(ctx, 'eyJhbGciOiJIUzI1NiJ9.bench-payload.benchsig');
          });
        })
        Button('001S asset').margin(4).onClick(() => {
          this.runner.run('001S', () => ovdStor001S('eyJhbGciOiJIUzI1NiJ9.bench-payload.benchsig'));
        })
        Button('002 cred-file').margin(4).onClick(() => {
          this.runner.run('002', () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            return ovdStor002(ctx);
          });
        })
        Button('004 pii-cache').margin(4).onClick(() => {
          this.runner.run('004', () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            return ovdStor004(ctx);
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
