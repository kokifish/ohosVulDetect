// SAFE: OVD-B64-001S 同构 base64 路径解码值仅聚合计数（CWE-312 加固）
import { util } from '@kit.ArkTS';
import { common } from '@kit.AbilityKit';

export const B64_PAYLOAD_S = 'YWdnOjc=';

export async function ovdB64001S(ctx: common.Context): Promise<string> {
  const helper = new util.Base64Helper();
  const bytes = helper.decodeSync(B64_PAYLOAD_S);
  const agg = util.TextDecoder.create('utf-8').decodeToString(bytes);
  return `b64S decoded aggregate: ${agg} (no credential)`;
}
