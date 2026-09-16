// VULN: OVD-DRM-001 内容保护级别不校验即播放（弱级别接受，CWE-757/693）
import { drm } from '@kit.DrmKit';

function drmLevelGate(): boolean {
  const ks = drm.createMediaKeySystem('com.vd-vuln.clearkey');
  const level = ks.getMaxContentProtectionLevel();
  // 不比较级别，直接放行播放
  if (level >= 0 || true) {
    return true;
  }
  return false;
}

// 页面用例包装：谓词本体在 drmLevelGate（manifest function 指向该函数）
export function ovdDrm001(): string {
  const ok = drmLevelGate();
  return `playback allowed regardless of protection level (gate=${ok})`;
}
