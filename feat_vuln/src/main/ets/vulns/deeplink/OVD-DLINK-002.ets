// VULN: OVD-DLINK-002 深链 redirect 参数未校验直接 openLink 跳转（CWE-601）
import { common } from '@kit.AbilityKit';
import { uri } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdDlink002(ctx: common.UIAbilityContext, raw: string): Promise<string> {
  let redirect = '';
  try {
    const u = new uri.URI(raw);
    // 无 scheme/host 白名单校验，深链参数直灌 openLink
    redirect = u.getQueryValue('redirect');
    // openLink 对可跳转外链会接管 UI（API24 实测 ~1s 内整屏切走、页面销毁）：
    // 先落 AppStorage 标记 + 2.5s 竞速保证信号行先落地；同步参数错误（空 redirect 401）
    // 也并入同一确定性返回（检测 call 链 getQueryValue→openLink 不变）
    AppStorage.setOrCreate('dlink_result_002', `dispatched to ${redirect} (unvalidated)`);
    const attempt = ctx.openLink(redirect).then((): boolean => true).catch((): boolean => false);
    const timeout = new Promise<boolean>((resolve: (v: boolean) => void) => setTimeout((): void => resolve(false), 2500));
    await Promise.race([attempt, timeout]);
    return `openLink dispatched without validation (${redirect})`;
  } catch (e) {
    return `openLink rejected without validation (err=${(e as BusinessError).code})`;
  }
}
