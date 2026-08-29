// VULN: OVD-STOR-001 认证 token 明文存 preferences（CWE-312）
import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';

export function ovdStor001(ctx: common.Context, token: string): string {
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'app' });
  p.putSync('auth_token', token);
  p.putSync('refresh_token', 'rt_bench_0000000000000001');
  p.flush();
  return 'token stored in plaintext preferences';
}
