// SAFE 孪生集合（secret）：OVD-SECRET-002S/003S/004S/005S，合并文件，勿手改。
// 安全模式：凭据全部运行期注入（配置下发/保险箱别名），源码零密钥字面量与零拼接重组。

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
