// SAFE: OVD-DIMP-001S 同构动态导入调用，目标换安全函数（CWE-312 加固）
import { common } from '@kit.AbilityKit';
import { ovdDepSrc as ovdDepSrcDirect } from 'lib_shared';
import { ovdDep2P1S } from 'lib_shared';
import { ovdDep2Join, ovdDep2P2S } from 'lib_common';


export async function ovdDimp001S(ctx: common.UIAbilityContext): Promise<string> {
  const m = await import('./DynTarget');
  return m.ovdDimpSafe(ctx);
}

// SAFE: OVD-DIMP-002S 同构拼接导入调用，目标换安全函数（CWE-312 加固）
interface DynModS { ovdDimpSafe: (ctx: common.Context) => Promise<string>; }
export async function ovdDimp002S(ctx: common.UIAbilityContext, suffix: string): Promise<string> {
  const m = await import('./DynTarget' + suffix) as DynModS;
  return m.ovdDimpSafe(ctx);
}

// SAFE: OVD-DEP-001S 同构三层调用，落点为聚合长度（CWE-312 加固）

export async function ovdDepSinkS(): Promise<string> {
  return `depS aggregate len=${ovdDepSrcDirect().length} (nothing written)`;
}

// SAFE: OVD-DEP-002S 同构三段聚合，无凭据（CWE-312 加固）
export async function ovdDep2SinkS(ctx: common.Context): Promise<string> {
  const whole: string = ovdDep2Join(ovdDep2P1S(), ovdDep2P2S()) + 'tail';
  return `dep2S aggregate reassembled: len=${whole.length}`;
}
