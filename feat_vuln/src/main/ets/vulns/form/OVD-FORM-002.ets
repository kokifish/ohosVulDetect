// VULN: OVD-FORM-002 onFormEvent 消息未经校验直接落 preferences（CWE-20/915）
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
export async function ovdForm002(ctx: common.Context, message: string): Promise<string> {
  const parsed = JSON.parse(message) as Record<string, string>;
  const prefs = await preferences.getPreferences(ctx, 'form_store');
  await prefs.put('form_raw_event', message); // 原始消息整包入库，无 schema/长度限制
  await prefs.flush();
  return `stored form_raw_event keys=${Object.keys(parsed).length}`;
}
