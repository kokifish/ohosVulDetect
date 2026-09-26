// VULN: OVD-IRED-002 可写偏好控制的 Intent 转发跳板（CWE-940/200）
// forward_to 偏好可被同应用任意写入路径污染，startAbility 目标随之被劫持。
import { common, Want } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

export const IRED2_HOP = 'ovd_ired2_hop';

export async function ovdIred002(ctx: common.UIAbilityContext): Promise<string> {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'ovd_ired2' });
  p.putSync('forward_to', IRED2_HOP);
  await p.flush();
  const want: Want = {
    bundleName: 'com.koki.VD',
    abilityName: 'VulnAbility',
    parameters: { forward: IRED2_HOP }
  };
  try {
    await ctx.startAbility(want);
  } catch (e) {
    const err = e as BusinessError;
    return `ired2 redirect err=${err.code}`;
  }
  return 'ired2 forwarded to writable hop';
}
