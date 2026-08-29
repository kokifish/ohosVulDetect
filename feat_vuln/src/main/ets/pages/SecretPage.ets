import { Runner } from 'lib_common';
import { ovdSecret001 } from '../vulns/secret/OVD-SECRET-001';
import { ovdSecret001S } from '../vulns/secret/OVD-SECRET-001S';
import { ovdSecret002 } from '../vulns/secret/OVD-SECRET-002';
import { ovdSecret003 } from '../vulns/secret/OVD-SECRET-003';
import { ovdSecret004 } from '../vulns/secret/OVD-SECRET-004';
import { ovdSecret005 } from '../vulns/secret/OVD-SECRET-005';

@Entry
@Component
struct SecretPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('hardcoded secrets').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 AK/SK').margin(4).onClick(() => this.runner.run('001', () => ovdSecret001()))
        Button('001S asset').margin(4).onClick(() => this.runner.run('001S', () => ovdSecret001S()))
        Button('002 apikey').margin(4).onClick(() => this.runner.run('002', () => ovdSecret002()))
        Button('003 pem').margin(4).onClick(() => this.runner.run('003', () => ovdSecret003()))
        Button('004 dbpwd').margin(4).onClick(() => this.runner.run('004', () => ovdSecret004()))
        Button('005 obfuscated').margin(4).onClick(() => this.runner.run('005', () => ovdSecret005()))
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
