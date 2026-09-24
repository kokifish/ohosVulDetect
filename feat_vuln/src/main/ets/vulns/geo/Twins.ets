// SAFE: OVD-GEO-001S 只存 1 度粗化网格，单点不可还原（CWE-359 加固）。
import geoLocationManager from '@ohos.geoLocationManager';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdGeo001S(ctx: common.UIAbilityContext): Promise<string> {
  let lat = 0;
  let lon = 0;
  try {
    const loc = geoLocationManager.getLastLocation();
    lat = loc.latitude;
    lon = loc.longitude;
  } catch (e) {
    const err = e as BusinessError;
    return `geoS coarse skip (loc err=${err.code})`;
  }
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_geo_safe' });
  p.putSync('geo_grid_only', `${Math.round(lat)}:${Math.round(lon)}`);
  await p.flush();
  return 'geoS coarse grid only';
}
