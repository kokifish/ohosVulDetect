// VULN: OVD-A11Y-002 无障碍开关持续轮询（辅助功能开启时机嗅探，CWE-200）
import { accessibility } from '@kit.AccessibilityKit';

export function ovdA11y002(): string {
  let polls = 0;
  const timer = setInterval(() => {
    polls += 1;
    if (accessibility.isOpenAccessibilitySync()) {
      clearInterval(timer);
    }
  }, 500);
  return `a11y polling armed (vd-poll-marker), polls=${polls > 0 ? 'warm' : 'cold'}`;
}
