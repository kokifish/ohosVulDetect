import { Case, DemoScaffold } from 'lib_common';
import { ovdCrypto002S, ovdCrypto003S, ovdCrypto004S, ovdCrypto005S, ovdCrypto006S, ovdCrypto007S } from '../vulns/crypto/Twins';
import { common } from '@kit.AbilityKit';
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
  build() {
    Column() {
      DemoScaffold({
        title: 'weak crypto',
        cases: [
          new Case('001 ECB', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto001()),
          new Case('001S GCM', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto001S()),
          new Case('002 MD5', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto002('Admin@123')),
          new Case('003 SHA1', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto003('integrity-blob')),
          new Case('004 fixedIV', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto004()),
          new Case('005 literalKey', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto005()),
          new Case('006 RSA1024', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto006()),
          new Case('007 fixedNonce', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto007()),
          new Case('002S salted-sha256', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto002S('pw-input', 'per-user-salt')),
          new Case('003S sha256', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto003S('payload')),
          new Case('004S gcm-randiv', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto004S()),
          new Case('005S huks-gen', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto005S()),
          new Case('006S rsa3072', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto006S()),
          new Case('007S gcm-randnonce', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdCrypto007S())
        ]
      })

    }
    .height('100%')
  }
}
