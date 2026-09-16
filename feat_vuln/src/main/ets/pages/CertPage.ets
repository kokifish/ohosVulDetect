import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdCert001 } from '../vulns/cert/OVD-CERT-001';
import { ovdCert002 } from '../vulns/cert/OVD-CERT-002';
import { ovdCert001S, ovdCert002S } from '../vulns/cert/Twins';

@Entry
@Component
struct CertPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'DeviceCertificateKit vulns',
        cases: [
          new Case('CERT-001 self-signed', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCert001()),
          new Case('CERT-001S proper-CA', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCert001S()),
          new Case('CERT-002 gate-always-true', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCert002()),
          new Case('CERT-002S expiry-checked', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCert002S()),
        ],
      })
    }
    .height('100%')
  }
}
