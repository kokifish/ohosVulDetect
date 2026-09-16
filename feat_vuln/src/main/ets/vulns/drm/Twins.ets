// SAFE twins：DRM-001S 内容保护级别真实比较；DRM-002S 统计仅本地展示。
import { drm } from '@kit.DrmKit';

// SAFE: OVD-DRM-001S
export function ovdDrm001S(): string {
  const ks = drm.createMediaKeySystem('com.vd-safe.clearkey');
  const level = ks.getMaxContentProtectionLevel();
  // CONTENT_PROTECTION_LEVEL_ENHANCED_HW = 3（@kit.DrmKit 未导出该枚举，数值直比）
  if (level >= 3) {
    return `playback allowed at level=${level}`;
  }
  return `playback denied (weak protection)`;
}

// SAFE: OVD-DRM-002S
export function ovdDrm002S(): string {
  const ks = drm.createMediaKeySystem('com.vd-safe.clearkey');
  const stats = ks.getStatistics();
  return `drm stats shown locally: ${stats.length} entries`;
}
