// VULN: OVD-WIFI-002 SSID/BSSID 明文持久化（CWE-359）
// 关联网络标识可离线还原用户活动位置轨迹。
import wifiManager from '@ohos.wifiManager';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdWifi002(ctx: common.UIAbilityContext): Promise<string> {
  let ssid = '';
  let bssid = '';
  try {
    const info = await wifiManager.getLinkedInfo();
    ssid = info.ssid;
    bssid = info.bssid;
  } catch (e) {
    const err = e as BusinessError;
    return `wifi002 persist skipped (err=${err.code})`;
  }
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_wifi_scan' });
  p.putSync('ssid_bssid', `${ssid}|${bssid}`);
  await p.flush();
  return 'wifi002 ssid+bssid persisted plaintext';
}
