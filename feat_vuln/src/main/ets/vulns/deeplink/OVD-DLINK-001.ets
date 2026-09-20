// VULN: OVD-DLINK-001 深链 cmd 参数无白名单直接执行（CWE-862/20）
// 规则语义：破坏性指令字面量在源文件 record 域出现
import { common } from '@kit.AbilityKit';
import { preferences } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdDlink001(ctx: common.Context, uri: string): Promise<string> {
  const prefix = 'ovd://backdoor?cmd=';
  if (!uri.startsWith(prefix)) {
    return `unrelated uri: ${uri}`;
  }
  const cmd = uri.substring(prefix.length);
  let err = '';
  try {
    const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'vd_backdoor' });
    p.putSync('last_cmd', cmd);
    p.flush();
  } catch (e) {
    err = ` (err=${(e as BusinessError).code})`;
  }
  // 任意 cmd 无校验直接执行；purge-all-now 为破坏性清库指令
  if (cmd === 'purge-all-now') {
    return `executed destructive cmd (vault wiped)${err}`;
  }
  return `executed cmd without allowlist${err}`;
}
