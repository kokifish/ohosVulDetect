// SAFE twins：KEYLOG-001S/002S 输入仅在受控输入框内处理，不订阅全局事件、不落盘。
import { common } from '@kit.AbilityKit';

// SAFE: OVD-KEYLOG-001S
export function ovdKeylog001S(): string {
  return 'local input field only, no global key subscription';
}

// SAFE: OVD-KEYLOG-002S
export function ovdKeylog002S(ctx: common.Context): string {
  return 'local input handled in-page, no global hotkey aggregation';
}
