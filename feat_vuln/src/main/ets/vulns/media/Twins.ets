// SAFE twins：MEDIA-001S 用户显式选择范围内的本地统计（无外传）；MEDIA-002S 无标记常量。
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// SAFE: OVD-MEDIA-001S
export async function ovdMedia001S(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  try {
    const result = await helper.getAssets({} as photoAccessHelper.FetchOptions);
    const n = result.getCount();
    result.close();
    return `local album count only: ${n}`;
  } catch (e) {
    return `local count face (fetch err=${(e as BusinessError).code})`;
  }
}

// SAFE: OVD-MEDIA-002S
export async function ovdMedia002S(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  try {
    const uri = await helper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'jpg');
    return `user-initiated save: ${uri}`;
  } catch (e) {
    return `user-save face (err=${(e as BusinessError).code})`;
  }
}

// SAFE: OVD-MEDIA-003S 元数据仅本地展示，无拼接 URL、无外传（CWE-359 加固）
export async function ovdMedia003S(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  let name = 'unnamed.jpg';
  try {
    const result = await helper.getAssets({} as photoAccessHelper.FetchOptions);
    if (result.getCount() > 0) {
      const first = await result.getFirstObject();
      name = first.displayName;
    }
    result.close();
  } catch (e) {
    const be = e as BusinessError;
    return `metadata local-only (fetch err=${be.code})`;
  }
  return `metadata shown locally only: ${name}`;
}
