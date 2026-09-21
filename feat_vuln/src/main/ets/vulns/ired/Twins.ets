// SAFE 孪生集合（ired）：OVD-IRED-001S，转发前按动作白名单门控。
// SAFE: OVD-IRED-001S 外部动作先过白名单，不在名单即拒绝派发（CWE-940 加固）
import { Want, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const IRED_ALLOW: string[] = ['ovd.bench.view.local'];

export async function ovdIred001S(ctx: common.UIAbilityContext, action: string, target: string): Promise<string> {
  if (!IRED_ALLOW.includes(action)) {
    return 'iredS rejected (action not allowlisted)';
  }
  const want: Want = {
    action: action,
    uri: target,
    parameters: { 'forwarded': 'allowlisted' }
  };
  try {
    await ctx.startAbility(want);
    return `iredS forwarded allowlisted to ${target}`;
  } catch (e) {
    return `iredS-err=${(e as BusinessError).code}`;
  }
}
