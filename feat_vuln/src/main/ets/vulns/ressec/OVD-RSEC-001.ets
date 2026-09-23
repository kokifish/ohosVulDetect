// VULN: OVD-RSEC-001 资源文件面硬编码秘密——密钥值存 string.json 与 rawfile（abc 层不可见，
// resource-face），代码经 resourceManager 读取后即用（CWE-798）。
// 访问面（资源名字符串 + API 调用）留在 abc，作为检测锚点。孪生 001S 运行时注入、零资源读取。
import { common } from '@kit.AbilityKit';

export const RSEC_RES_NAME = 'ovd_res_api_key';
export const RSEC_RAW_NAME = 'ovd_rsec_key.txt';

export async function ovdRsec001(ctx: common.UIAbilityContext): Promise<string> {
  const resMgr = ctx.resourceManager;
  const named: string = resMgr.getStringByNameSync(RSEC_RES_NAME);
  const raw: Uint8Array = await resMgr.getRawFileContent(RSEC_RAW_NAME);
  let hex = '';
  for (let i = 0; i < raw.length && i < 16; i += 1) {
    hex += raw[i].toString(16).padStart(2, '0');
  }
  return `rsec named-len=${named.length} raw-head=${hex}`;
}
