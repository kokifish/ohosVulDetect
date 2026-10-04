// VULN: OVD-IPC-006 导出面无调用方鉴权 + 调用方可控模块路径动态 import 穿越（CWE-862/940/915）
// dispatcher 形态（HwMapKit 型真实野生原语，已由厂商修复）：
//   1) 无任何调用方校验（callerPolicy 即缺失声明）；
//   2) 模块名来自调用方，拼进动态 import（'../' 可越出 mods/ 白名单目录）；
//   3) 返回的模块按调用方成员名索引调用——任意 record 任意函数可达。
// 静态导入仅为入包（防 tree-shake 静默丢弃；__diag__ 分支引用之）——运行时正式路径
// 仍走调用方可控动态 import 穿越。孪生 006S 白名单固定模块 + 固定成员 + 聚合回显。
import { ovdIpc6Secret } from './RpcSecret';

export async function ovdIpc6Dispatch(modSpec: string, member: string): Promise<string> {
  const callerPolicy = 'no-caller-check';
  if (member === '__diag__') {
    return ovdIpc6Secret(member);
  }
  const mod = await import('./mods/' + modSpec) as Record<string, Object>;
  const fn = mod[member] as (p: string) => string;
  return fn(callerPolicy);
}
