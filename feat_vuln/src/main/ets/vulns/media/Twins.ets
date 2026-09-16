// SAFE twins：MEDIA-001S 用户显式选择范围内的本地统计（无外传）；MEDIA-002S 无标记常量。
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { common } from '@kit.AbilityKit';

// SAFE: OVD-MEDIA-001S
export async function ovdMedia001S(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  const result = await helper.getAssets({} as photoAccessHelper.FetchOptions);
  const n = result.getCount();
  result.close();
  return `local album count only: ${n}`;
}

// SAFE: OVD-MEDIA-002S
export async function ovdMedia002S(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  const uri = await helper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'jpg');
  return `user-initiated save: ${uri}`;
}
