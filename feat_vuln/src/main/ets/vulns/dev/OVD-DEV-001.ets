// VULN: OVD-DEV-001 设备指纹拼接明文持久化（CWE-359）
// marketName/productModel/softwareModel 拼成稳定指纹写未加密偏好，可跨应用关联追踪。
import deviceInfo from '@ohos.deviceInfo';
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

export const DEV_FP_KEY = 'ovd_dev_fp_d42b';

export function ovdDev001(ctx: common.UIAbilityContext): string {
  const fp = `${deviceInfo.marketName}|${deviceInfo.productModel}|${deviceInfo.softwareModel}|${deviceInfo.buildVersion}`;
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_dev_track' });
  p.putSync(DEV_FP_KEY, fp);
  p.flush();
  return `dev fingerprint stored len=${fp.length}`;
}
