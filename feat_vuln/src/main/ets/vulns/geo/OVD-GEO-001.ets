// VULN: OVD-GEO-001 精确坐标明文缓存（CWE-359）
// last location 直写未加密偏好，经度纬度全精度落盘，可离线还原用户轨迹。
import geoLocationManager from '@ohos.geoLocationManager';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export const GEO_CACHE_KEY = 'ovd_geo_precise_c9';

export async function ovdGeo001(ctx: common.UIAbilityContext): Promise<string> {
  let lat = 0;
  let lon = 0;
  try {
    const loc = geoLocationManager.getLastLocation();
    lat = loc.latitude;
    lon = loc.longitude;
  } catch (e) {
    const err = e as BusinessError;
    return `geo precise cache skipped (loc err=${err.code})`;
  }
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_geo_cache' });
  p.putSync(GEO_CACHE_KEY, `${lat},${lon}`);
  await p.flush();
  return 'geo precise coords cached plaintext';
}
