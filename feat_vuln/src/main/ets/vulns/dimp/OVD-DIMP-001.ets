// VULN: OVD-DIMP-001 凭据写入动态加载 record 的偏好（CWE-312/200）
// 固定路径 await import()：调用图跨动态边界——检测器须处理 dynamicimport IR 才能
// 把主侧调用与 DynTarget record 的 sink/常量关联。孪生 001S 同构动态调用安全函数。
import { common } from '@kit.AbilityKit';

export async function ovdDimp001(ctx: common.UIAbilityContext): Promise<string> {
  const m = await import('./DynTarget');
  return m.ovdDimpSink(ctx);
}
