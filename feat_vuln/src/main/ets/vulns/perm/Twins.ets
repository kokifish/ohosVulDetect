// SAFE 孪生集合（perm/priv）：OVD-PASTE-001S/002S、OVD-PERM-001S、OVD-PRIV-001S/002S，勿手改。
import { pasteboard, deviceInfo } from '@kit.BasicServicesKit';

// SAFE: OVD-PASTE-001S 凭据拒绝入粘贴板，仅允许公开文本（CWE-200 加固）
export function ovdPaste001S(isCredential: boolean): string {
  return isCredential ? 'refuse: credential copy denied' : 'public text copy allowed';
}

// SAFE: OVD-PASTE-002S 粘贴板仅在用户显式操作后读取，生命周期内静默读取为 0（CWE-200 加固）
export async function ovdPaste002S(userTapped: boolean): Promise<string> {
  if (!userTapped) {
    return 'skipped: no silent clipboard read';
  }
  const pb = pasteboard.getSystemPasteboard();
  const d = await pb.getData();
  return `read on user action: ${(d.getPrimaryText() ?? '').length} chars`;
}

// SAFE: OVD-PERM-001S 权限按需申请且绑定用途说明，最小化集（CWE-250 加固）
const ONDEMAND_GRANTS: string[] = ['scan:camera@拍摄时刻', 'voice:microphone@按键对讲'];
export function ovdPerm001S(feature: string): string {
  for (const g of ONDEMAND_GRANTS) {
    if (g.startsWith(`${feature}:`)) {
      return `on-demand grant for ${g}`;
    }
  }
  return 'no extra grant: feature needs none';
}

// SAFE: OVD-PRIV-001S 设备信息匿名化 + https + 用户同意后才上报（CWE-359 加固）
export function ovdPriv001S(consent: boolean): string {
  if (!consent) {
    return 'telemetry skipped: no user consent';
  }
  return 'anonymous hash-only metrics posted over https';
}

// SAFE: OVD-PRIV-002S 定位仅前台单次获取 + https 上报（无持续跟踪通道）（CWE-359 加固）
export function ovdPriv002S(foregroundOnly: boolean): string {
  return foregroundOnly ? 'one-shot location for feature use, https, no tracking channel' : 'location denied in background';
}

// SAFE: OVD-PASTE-003S 敏感数据拒绝入板；公开文本限定应用内共享范围（CWE-200 加固）
// 注：措辞避开漏洞规则常量 'cross-device'（check_twin_fp 常量隔离）。
export function ovdPaste003S(isSecret: boolean): string {
  return isSecret ? 'refused: secret never leaves this device' : 'public text copied, in-app scope only';
}

// SAFE: OVD-PASTE-004S 按需前台读取一次，不订阅剪贴板变化事件（CWE-200 加固）
export function ovdPaste004S(onDemand: boolean): string {
  if (!onDemand) {
    return 'no read scheduled';
  }
  const pb = pasteboard.getSystemPasteboard();
  pb.getData().then((d: pasteboard.PasteData) => {
    // 用户显式粘贴动作路径：本次读取仅在前景交互中发生
  }).catch(() => { });
  return 'on-demand paste read in foreground action, no update subscription';
}

// SAFE: OVD-PRIV-003S 设备型号仅本地展示，读取与外传解耦（无 request 步骤）（CWE-359 加固）
export function ovdPriv003S(): string {
  // 同形第一步：读设备字段；但不做任何外传（call-chain 的 request 侧不存在）
  return `device model local-only: len=${deviceInfo.productModel.length}`;
}

// SAFE: OVD-PASTE-005S 拒绝令牌入粘贴板：仅放置非敏感标签并立即清除（CWE-200 加固）
export async function ovdPaste005S(token: string): Promise<string> {
  const pb = pasteboard.getSystemPasteboard();
  if (token.length > 0 && /ovd_/.test(token)) {
    return 'paste005S credential refused (kept out of clipboard)';
  }
  const data = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'tag-only');
  await pb.setData(data);
  await pb.clear();
  return 'paste005S non-sensitive tag set then cleared';
}
