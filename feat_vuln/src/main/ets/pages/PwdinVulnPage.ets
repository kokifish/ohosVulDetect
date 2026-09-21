import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';
import { BenchPwdInputVuln } from '../vulns/pwdin/OVD-PWDIN-001';
import { BenchPwdInputSafe, ovdPwdin001S } from '../vulns/pwdin/Twins';

// 密码输入面：PWDIN-001 Normal 明文回显 vs 001S Password 掩码（UI 属性面对照）。
@Entry
@Component
struct PwdinVulnPage {
  build() {
    Column({ space: 10 }) {
      DemoScaffold({
        title: 'password input echo',
        cases: [
          new Case('pwdin-001S masked verdict', (ctx: common.UIAbilityContext, log: (s: string) => void) =>
            ovdPwdin001S(true))
        ]
      })
      Column({ space: 8 }) {
        Text('vuln: Normal + plain echo').fontSize(13).fontColor('#CC0000')
        BenchPwdInputVuln()
        Text('twin: Password + masked').fontSize(13).fontColor('#006600')
        BenchPwdInputSafe()
      }
      .width('100%')
      .padding(8)
    }
    .height('100%')
  }
}
