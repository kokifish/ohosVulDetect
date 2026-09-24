// VULN: OVD-WIFI-001 热点口令硬编码 + 明文偏好双落盘（CWE-312/798）
// psk 常量随 abc 字符串池可见，偏好文件亦未加密——提取任一载体即可复用入网凭据。
import wifiManager from '@ohos.wifiManager';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export const WIFI_PSK = 'ovd_wpa_psks_a71c';

export async function ovdWifi001(ctx: common.UIAbilityContext): Promise<string> {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_wifi_cfg' });
  p.putSync('hotspot_psk', WIFI_PSK);
  await p.flush();
  try {
    const cfg: wifiManager.WifiDeviceConfig = {
      ssid: 'ovd-bench-ap',
      preSharedKey: WIFI_PSK,
      securityType: wifiManager.WifiSecurityType.WIFI_SEC_TYPE_PSK
    };
    await wifiManager.addDeviceConfig(cfg);
  } catch (e) {
    const err = e as BusinessError;
    return `wifi psk stored plaintext (ap add err=${err.code})`;
  }
  return 'wifi psk stored plaintext + ap config added';
}
