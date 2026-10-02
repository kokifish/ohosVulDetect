// VULN: OVD-TNT-009 污点 sink 经导入别名调用（CWE-200）
// 调用点函数体只有别名 relay9，真名 ovdT9Sink 只在 import/export 表——
// sink 跨 record（lib_shared），考调用边经别名解析 + 跨 record 锚定。
// 孪生 009S 同构别名仅聚合。
import { common } from '@kit.AbilityKit';
import { ovdT9Sink as relay9 } from 'lib_shared';

const TOKEN9 = 'tnt9_tok_ovd_e18f53';

export function ovdT9Source(): string {
  return TOKEN9;
}

export async function ovdTnt009(ctx: common.Context): Promise<string> {
  await relay9(ctx, ovdT9Source());
  return 'tnt9 alias-sink completed';
}
