import { Runner } from 'lib_common';
import { ovdAuth001 } from '../vulns/auth/OVD-AUTH-001';
import { ovdAuth001S } from '../vulns/auth/OVD-AUTH-001S';
import { ovdAuth002 } from '../vulns/auth/OVD-AUTH-002';
import { ovdAuth003 } from '../vulns/auth/OVD-AUTH-003';

@Entry
@Component
struct AuthPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('auth / session / randomness').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 hardcoded').margin(4).onClick(() => {
          this.runner.run('001', () => `ovdAuth001('admin','Admin@123')=${ovdAuth001('admin', 'Admin@123')}`);
        })
        Button('001S salted').margin(4).onClick(() => this.runner.run('001S', () => ovdAuth001S('admin', 'Admin@123')))
        Button('002 license').margin(4).onClick(() => this.runner.run('002', () => ovdAuth002()))
        Button('003 weakToken').margin(4).onClick(() => this.runner.run('003', () => ovdAuth003()))
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
