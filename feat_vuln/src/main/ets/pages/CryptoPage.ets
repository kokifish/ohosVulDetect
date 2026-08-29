import { Runner } from 'lib_common';
import { ovdCrypto001 } from '../vulns/crypto/OVD-CRYPTO-001';
import { ovdCrypto001S } from '../vulns/crypto/OVD-CRYPTO-001S';
import { ovdCrypto002 } from '../vulns/crypto/OVD-CRYPTO-002';
import { ovdCrypto003 } from '../vulns/crypto/OVD-CRYPTO-003';
import { ovdCrypto004 } from '../vulns/crypto/OVD-CRYPTO-004';
import { ovdCrypto005 } from '../vulns/crypto/OVD-CRYPTO-005';
import { ovdCrypto006 } from '../vulns/crypto/OVD-CRYPTO-006';
import { ovdCrypto007 } from '../vulns/crypto/OVD-CRYPTO-007';

@Entry
@Component
struct CryptoPage {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('weak crypto').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('001 ECB').margin(4).onClick(() => this.runner.run('001', () => ovdCrypto001()))
        Button('001S GCM').margin(4).onClick(() => this.runner.run('001S', () => ovdCrypto001S()))
        Button('002 MD5').margin(4).onClick(() => this.runner.run('002', () => ovdCrypto002('Admin@123')))
        Button('003 SHA1').margin(4).onClick(() => this.runner.run('003', () => ovdCrypto003('integrity-blob')))
        Button('004 fixedIV').margin(4).onClick(() => this.runner.run('004', () => ovdCrypto004()))
        Button('005 literalKey').margin(4).onClick(() => this.runner.run('005', () => ovdCrypto005()))
        Button('006 RSA1024').margin(4).onClick(() => this.runner.run('006', () => ovdCrypto006()))
        Button('007 fixedNonce').margin(4).onClick(() => this.runner.run('007', () => ovdCrypto007()))
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
