// SAFE: OVD-DEV-001S 不落设备指纹：仅记录系统版本大类用于兼容性统计（CWE-359 加固）。
import deviceInfo from '@ohos.deviceInfo';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export function ovdDev001S(ctx: common.UIAbilityContext): string {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_dev_safe' });
  p.putSync('os_family_only', deviceInfo.osReleaseType);
  p.flush();
  return 'devS os-family only (no fingerprint)';
}
