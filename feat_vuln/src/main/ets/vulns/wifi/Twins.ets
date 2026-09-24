// SAFE: OVD-WIFI-001S 不落口令：仅记录信号强度分桶，口令交系统安全管理（CWE-312 加固）。
import wifiManager from '@ohos.wifiManager';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export async function ovdWifi001S(ctx: common.UIAbilityContext): Promise<string> {
  let rss = 0;
  try {
    const info = await wifiManager.getLinkedInfo();
    rss = info.rssi;
  } catch (e) {
    rss = -1;
  }
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_wifi_safe' });
  p.putSync('signal_bucket_only', `bucket-${Math.floor(rss / 10)}`);
  await p.flush();
  return 'wifiS signal-bucket only (no psk persisted)';
}
