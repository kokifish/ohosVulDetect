import { common } from '@kit.AbilityKit';
import { Runner } from 'lib_common';
import { BenchDb } from '../db/BenchDb';
import { ovdInj001 } from '../vulns/inj/OVD-INJ-001';
import { ovdInj001S } from '../vulns/inj/OVD-INJ-001S';
import { ovdInj002 } from '../vulns/inj/OVD-INJ-002';
import { ovdInj003 } from '../vulns/inj/OVD-INJ-003';
import { ovdInj004 } from '../vulns/inj/OVD-INJ-004';

@Entry
@Component
struct InjPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('injection').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button("001 sqli").margin(4).onClick(() => {
          this.runner.run('001', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const store = await BenchDb.getStore(ctx, 'vuln.db');
            const r = await ovdInj001(store, "x' OR '1'='1");
            return r;
          });
        })
        Button('001S predicates').margin(4).onClick(() => {
          this.runner.run('001S', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const store = await BenchDb.getStore(ctx, 'vuln.db');
            return await ovdInj001S(store, "x' OR '1'='1");
          });
        })
        Button('002 delete').margin(4).onClick(() => {
          this.runner.run('002', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const store = await BenchDb.getStore(ctx, 'vuln.db');
            return await ovdInj002(store, "x' OR '1'='1");
          });
        })
        Button('003 traversal').margin(4).onClick(() => {
          this.runner.run('003', () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            return ovdInj003(ctx, '../../../../../../etc/hosts');
          });
        })
        Button('004 json-nav').margin(4).onClick(() => {
          this.runner.run('004', () => ovdInj004('{"page":"pages/Index","fn":"getToken"}'));
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
