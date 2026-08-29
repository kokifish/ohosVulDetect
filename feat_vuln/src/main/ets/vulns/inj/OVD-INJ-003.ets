// VULN: OVD-INJ-003 用户输入直接拼接文件路径（../ 路径穿越，CWE-22）
import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';

export function ovdInj003(ctx: common.Context, userPath: string): string {
  const full = `${ctx.filesDir}/${userPath}`;
  try {
    const f = fileIo.openSync(full, fileIo.OpenMode.READ_ONLY);
    const st = fileIo.statSync(full);
    fileIo.closeSync(f);
    return `read ${st.size}B from ${full}`;
  } catch (e) {
    return `open failed: ${full}`;
  }
}
