// VULN: OVD-DIMP-002 运行时拼接路径的动态导入调用 sink（CWE-312/200）
// 路径含变量段——静态分析既断调用图也断模块解析；真实形态：插件化/热更新灰产。
// 孪生 002S 同构拼接导入但只调安全函数。
import { common } from '@kit.AbilityKit';

interface DynMod { ovdDimpSink: (ctx: common.Context) => Promise<string>; }

export async function ovdDimp002(ctx: common.UIAbilityContext, suffix: string): Promise<string> {
  const m = await import('./DynTarget' + suffix) as DynMod;
  return m.ovdDimpSink(ctx);
}
