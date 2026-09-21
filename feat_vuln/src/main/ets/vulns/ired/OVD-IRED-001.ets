// VULN: OVD-IRED-001 不可信 want 字段原样转投 startAbility（Intent 重定向，CWE-940/862）
// 外部通道（deeplink/剪贴板/推送/共享）投喂的 action/target 不经白名单直接派发：
// 攻击者可驱动本应用身份拉起任意组件或携带任意 URI。
import { Want, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export const IRED_MARK = 'ovd.ired.forward';

export async function ovdIred001(ctx: common.UIAbilityContext, action: string, target: string): Promise<string> {
  const want: Want = {
    action: action,
    uri: target,
    parameters: { 'forwarded': '1' }
  };
  try {
    await ctx.startAbility(want);
    return `ired forwarded verbatim to ${target}`;
  } catch (e) {
    return `ired-err=${(e as BusinessError).code}`;
  }
}
