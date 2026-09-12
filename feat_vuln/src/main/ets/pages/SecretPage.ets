import { Case, DemoScaffold } from 'lib_common';
import { ovdSecret002S, ovdSecret003S, ovdSecret004S, ovdSecret005S } from '../vulns/secret/Twins';
import { common } from '@kit.AbilityKit';
import { ovdSecret001 } from '../vulns/secret/OVD-SECRET-001';
import { ovdSecret001S } from '../vulns/secret/OVD-SECRET-001S';
import { ovdSecret002 } from '../vulns/secret/OVD-SECRET-002';
import { ovdSecret003 } from '../vulns/secret/OVD-SECRET-003';
import { ovdSecret004 } from '../vulns/secret/OVD-SECRET-004';
import { ovdSecret005 } from '../vulns/secret/OVD-SECRET-005';

@Entry
@Component
struct SecretPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'hardcoded secrets',
        cases: [
          new Case('001 AK/SK', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret001()),
          new Case('001S asset', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret001S()),
          new Case('002 apikey', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret002()),
          new Case('003 pem', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret003()),
          new Case('004 dbpwd', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret004()),
          new Case('005 obfuscated', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret005()),
          new Case('002S runtime-key', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret002S('runtime-injected')),
          new Case('003S kms-alias', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret003S('bench_signing')),
          new Case('004S kms-dsn', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret004S()),
          new Case('005S alias-fetch', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSecret005S('cloud_sk'))
        ]
      })

    }
    .height('100%')
  }
}
