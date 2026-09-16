import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdDrm001 } from '../vulns/drm/OVD-DRM-001';
import { ovdDrm002 } from '../vulns/drm/OVD-DRM-002';
import { ovdDrm001S, ovdDrm002S } from '../vulns/drm/Twins';

@Entry
@Component
struct DrmVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'DrmKit vulns',
        cases: [
          new Case('DRM-001 weak-level', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDrm001()),
          new Case('DRM-001S level-checked', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDrm001S()),
          new Case('DRM-002 stats-exfil', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDrm002()),
          new Case('DRM-002S local-stats', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdDrm002S()),
        ],
      })
    }
    .height('100%')
  }
}
