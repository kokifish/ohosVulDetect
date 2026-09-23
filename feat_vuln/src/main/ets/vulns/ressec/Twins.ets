// SAFE: OVD-RSEC-001S 密钥运行时注入，零资源读取（CWE-798 加固）。
import { common } from '@kit.AbilityKit';

export async function ovdRsec001S(ctx: common.UIAbilityContext, injected: string): Promise<string> {
  const key: string = injected.length > 0 ? injected : 'runtime-key-unavailable';
  return `rsecS runtime-injected key len=${key.length} (no resource access)`;
}
