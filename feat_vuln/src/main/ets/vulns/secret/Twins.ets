// SAFE 孪生集合（secret）：OVD-SECRET-002S/003S/004S/005S，合并文件，勿手改。
// 安全模式：凭据全部运行期注入（配置下发/保险箱别名），源码零密钥字面量与零拼接重组。
import { asset } from '@kit.AssetStoreKit';
import { util } from '@kit.ArkTS';

// SAFE: OVD-SECRET-001S 对照实现：密钥存 Asset Store Kit，运行时按别名取用（CWE-798 加固）
// 注：演示写入的占位值来自"密钥轮换服务"，不包含真实密钥字面量。

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

// SAFE: OVD-SECRET-002S API Key 运行时配置下发（CWE-798 加固）
export function ovdSecret002S(runtimeKey: string): string {
  return `auth via runtime-injected key len=${runtimeKey.length}`;
}

// SAFE: OVD-SECRET-003S 签名私钥由 KMS 别名解析（CWE-321 加固）
export function ovdSecret003S(keyAlias: string): string {
  return `signing key resolved by alias=${keyAlias} in KMS, no PEM in code`;
}

// SAFE: OVD-SECRET-004S 连接串不含口令，凭据走 KMS 提供者（CWE-798 加固）
export function ovdSecret004S(): string {
  return 'jdbc:mysql://bench-db.internal:3306/appdb?credentialProvider=kms';
}

// SAFE: OVD-SECRET-005S 秘密按别名运行期获取，无字符串重组（CWE-798 加固）
export function ovdSecret005S(alias: string): string {
  return `secret fetched by alias=${alias}, no fragment assembly`;
}
