// SAFE 孪生集合（perm/priv）：OVD-PASTE-001S/002S、OVD-PERM-001S、OVD-PRIV-001S/002S，勿手改。
import { pasteboard } from '@kit.BasicServicesKit';

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
