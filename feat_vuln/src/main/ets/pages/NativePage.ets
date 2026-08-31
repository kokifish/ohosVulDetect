import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdNative001 } from '../vulns/native/OVD-NATIVE-001';
import { ovdNative002 } from '../vulns/native/OVD-NATIVE-002';

@Entry
@Component
struct NativePage {
  build() {
    Column() {
      DemoScaffold({
        title: 'native layer (libentry.so)',
        cases: [
          new Case('001 key-in-so', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNative001('bench-data')),
          new Case('002 strcpy', (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdNative002())
        ]
      })

    }
    .height('100%')
  }
}
