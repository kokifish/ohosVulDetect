// SAFE 孪生集合（form）：OVD-FORM-001S/002S，勿手改。
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';

// SAFE: OVD-FORM-001S 卡片 router 目标全等白名单后才允许组件侧 postCardAction（CWE-601 加固）
const FORM_TARGETS: string[] = ['pages/detail/ItemPage', 'pages/Index'];
export function ovdForm001S(cardTarget: string): string {
  if (!FORM_TARGETS.includes(cardTarget)) {
    return `router target refused: ${cardTarget}`;
  }
  // 组件侧白名单通过后才执行 postCardAction(this, { action:'router', params:{...} })
  return `allowlisted target: ${cardTarget}`;
}

// SAFE: OVD-FORM-002S 卡片消息先过 schema/长度校验再入库（CWE-20 加固）
const FORM_KEYS: string[] = ['action', 'itemId'];
export async function ovdForm002S(ctx: common.Context, message: string): Promise<string> {
  if (message.length > 256) {
    return 'form event refused: oversized';
  }
  const parsed = JSON.parse(message) as Record<string, string>;
  const bad = Object.keys(parsed).filter((k: string): boolean => !FORM_KEYS.includes(k));
  if (bad.length > 0) {
    return `form event refused: unknown keys ${bad.length}`;
  }
  const prefs = await preferences.getPreferences(ctx, 'form_store');
  await prefs.put('form_validated_event', parsed['action'] ?? '');
  await prefs.flush();
  return 'validated form event stored';
}
