// VULN: OVD-STOR-005 refresh token 明文 JSON 落 filesDir 且文件名可预测（CWE-312）
// 固定路径 refresh_token.json 无加密无完整性保护，备份/沙箱逃逸即泄露。
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export async function ovdStor005(ctx: common.UIAbilityContext): Promise<string> {
  const payload = JSON.stringify({ refresh_token: 'ovd_stor_rt_e19f', scope: 'offline' });
  const path = ctx.filesDir + '/refresh_token.json';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, payload);
  fs.closeSync(f);
  fs.unlinkSync(path);
  return 'refresh token json written plaintext (predictable path)';
}
