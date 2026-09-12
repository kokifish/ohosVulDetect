// SAFE 孪生集合（conf）：OVD-CONF-001S/002S，勿手改。

// SAFE: OVD-CONF-001S 管理端点运行时拉取，源码不含内网拓扑（CWE-200 加固）
export function ovdConf001S(remoteScheme: string): string {
  return `admin endpoint fetched at runtime (${remoteScheme}://…), no topology in code`;
}

// SAFE: OVD-CONF-002S 调试通道构建期裁剪，发布包不存在（CWE-489 加固）
export function ovdConf002S(): string {
  return 'debug channel stripped from release build';
}
