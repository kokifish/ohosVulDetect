// SAFE 孪生集合（deeplink）：OVD-DLINK-001S / 002S / 003S，勿手改。
// 常量与漏洞侧断开（子串感知，check_twin_fp）；002S 刻意不用 getQueryValue（call 链断裂）。
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// SAFE: OVD-DLINK-001S cmd 白名单校验后仅执行只读查询（CWE-862/20 加固）
export async function ovdDlink001S(ctx: common.Context, uri: string): Promise<string> {
  const prefix = 'ovd://backdoor?cmd=';
  if (!uri.startsWith(prefix)) {
    return `unrelated uri: ${uri}`;
  }
  const cmd = uri.substring(prefix.length);
  const allow: string[] = ['status', 'info'];
  if (allow.indexOf(cmd) < 0) {
    return 'rejected (allowlist)';
  }
  return `${cmd} status allowed (allowlist)`;
}

// SAFE: OVD-DLINK-002S redirect 按 scheme+host 白名单校验后才跳转（CWE-601 加固）
export async function ovdDlink002S(ctx: common.UIAbilityContext, raw: string): Promise<string> {
  const q = raw.indexOf('redirect=');
  if (q < 0) {
    return 'rejected (no redirect param)';
  }
  const redirect = raw.substring(q + 'redirect='.length);
  const allowHosts: string[] = ['vd-bench.example'];
  const ok = redirect.startsWith('https://') && allowHosts.some((h: string): boolean => redirect.indexOf(`://${h}/`) === 0);
  if (!ok) {
    return 'redirect rejected (scheme+host allowlist)';
  }
  try {
    await ctx.openLink(redirect);
    return 'redirected (validated)';
  } catch (e) {
    return `validated target unreachable (err=${(e as BusinessError).code})`;
  }
}

// SAFE: OVD-DLINK-003S 会话令牌按参数精确解析 + 等值比较（CWE-20 加固）
export function ovdDlink003S(raw: string): string {
  const expected = 'vd-bench-session-ok-77';
  const pairs = raw.split('?');
  const query = pairs.length > 1 ? pairs[1] : '';
  for (const kv of query.split('&')) {
    const eq = kv.indexOf('=');
    if (eq > 0 && kv.substring(0, eq) === 'session' && kv.substring(eq + 1) === expected) {
      return 'session mode granted (strict parse)';
    }
  }
  return 'guest mode (strict parse)';
}
