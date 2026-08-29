// VULN: OVD-INJ-004 外部 payload JSON.parse 后未校验直接驱动路由跳转（CWE-20/915）
import { router } from '@kit.ArkUI';

export function ovdInj004(externalPayload: string): string {
  const parsed = JSON.parse(externalPayload) as Record<string, string>;
  const page = parsed['page'];
  const fn = parsed['fn'];
  router.pushUrl({ url: page });
  if (fn === 'getToken') {
    return `navigated to ${page} and would call ${fn}`;
  }
  return `navigated to ${page}`;
}
