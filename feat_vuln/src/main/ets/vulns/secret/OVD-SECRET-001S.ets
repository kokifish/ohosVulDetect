// SAFE: OVD-SECRET-001S 对照实现：密钥存 Asset Store Kit，运行时按别名取用（CWE-798 加固）
// 注：演示写入的占位值来自"密钥轮换服务"，不包含真实密钥字面量。
import { asset } from '@kit.AssetStoreKit';
import { util } from '@kit.ArkTS';

export async function ovdSecret001S(): Promise<string> {
  const enc = new util.TextEncoder();
  const attr: asset.AssetMap = new Map();
  attr.set(asset.Tag.ALIAS, enc.encodeInto('cloud_sk'));
  attr.set(asset.Tag.SECRET, enc.encodeInto('rotated-by-kms-placeholder'));
  await asset.add(attr);

  const q: asset.AssetMap = new Map();
  q.set(asset.Tag.ALIAS, enc.encodeInto('cloud_sk'));
  const res = await asset.query(q);
  let len = 0;
  if (res.length > 0) {
    const v = res[0].get(asset.Tag.SECRET);
    if (v instanceof Uint8Array) {
      len = v.byteLength;
    }
  }
  await asset.remove(q);
  return `secret kept in asset store (${len}B), no literals`;
}
