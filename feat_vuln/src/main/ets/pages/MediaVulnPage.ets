import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdMedia001 } from '../vulns/media/OVD-MEDIA-001';
import { ovdMedia002 } from '../vulns/media/OVD-MEDIA-002';
import { ovdMedia001S, ovdMedia002S } from '../vulns/media/Twins';

@Entry
@Component
struct MediaVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'MediaLibraryKit vulns',
        cases: [
          new Case('MEDIA-001 harvest+exfil', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdMedia001(ctx)),
          new Case('MEDIA-001S local-count', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdMedia001S(ctx)),
          new Case('MEDIA-002 silent-write', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdMedia002(ctx)),
          new Case('MEDIA-002S user-save', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdMedia002S(ctx)),
        ],
      })
    }
    .height('100%')
  }
}
