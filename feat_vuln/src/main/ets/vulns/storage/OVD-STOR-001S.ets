// SAFE: OVD-STOR-001S 对照实现：token 存 Asset Store Kit（CWE-312 加固）
import { asset } from '@kit.AssetStoreKit';
import { util } from '@kit.ArkTS';

export async function ovdStor001S(token: string): Promise<string> {
  const enc = new util.TextEncoder();
  const attr: asset.AssetMap = new Map();
  attr.set(asset.Tag.ALIAS, enc.encodeInto('auth_token'));
  attr.set(asset.Tag.SECRET, enc.encodeInto(token));
  attr.set(asset.Tag.IS_PERSISTENT, true);
  await asset.add(attr);
  return 'token stored in asset store (encrypted, device-bound)';
}
