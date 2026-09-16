// SAFE twins：A11Y-001S 状态仅本地提示（无上报端点）；A11Y-002S 无持续轮询。
import { accessibility } from '@kit.AccessibilityKit';

// SAFE: OVD-A11Y-001S
export async function ovdA11y001S(): Promise<string> {
  const reader = accessibility.isScreenReaderOpenSync();
  return `a11y state shown locally: screenReader=${reader}`;
}

// SAFE: OVD-A11Y-002S
export function ovdA11y002S(): string {
  const enabled = accessibility.isOpenAccessibilitySync();
  return `a11y checked once on demand: enabled=${enabled}`;
}
