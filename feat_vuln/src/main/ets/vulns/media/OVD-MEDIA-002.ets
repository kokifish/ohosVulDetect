// VULN: OVD-MEDIA-002 静默写入用户相册（应用数据经相册外泄/伪装成照片，CWE-668）
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// bench-smuggle-gallery：渗入标记（检测常量）
const SMUGGLE_EXT: string = 'jpg';

export async function ovdMedia002(ctx: common.UIAbilityContext): Promise<string> {
  const helper = photoAccessHelper.getPhotoAccessHelper(ctx);
  try {
    const uri = await helper.createAsset(photoAccessHelper.PhotoType.IMAGE, SMUGGLE_EXT);
    return `smuggled asset into gallery: ${uri} (bench-smuggle-gallery)`;
  } catch (e) {
    // ENV 约定：medialib 未授权 201 内码进 ✅ 行
    return `smuggled asset face (err=${(e as BusinessError).code}) (bench-smuggle-gallery)`;
  }
}
