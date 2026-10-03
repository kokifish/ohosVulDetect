// VULN: OVD-B64-001 base64 编码令牌运行时解码后明文落盘（CWE-312，对抗面）
// 文本层只有编码串——凭据明文在 abc 中不存在（运行时才解码），编码串 + decode 调用
// 构成检测信号；考"常量非明文"形态下检测器的编码感知。孪生 001S 解码值仅聚合。
import { util } from '@kit.ArkTS';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export const B64_PAYLOAD = 'b3ZkX2I2NF90b2tfN2sybTk0';

export async function ovdB64001(ctx: common.Context): Promise<string> {
  const helper = new util.Base64Helper();
  const bytes = helper.decodeSync(B64_PAYLOAD);
  const token = util.TextDecoder.create('utf-8').decodeToString(bytes);
  const path = ctx.filesDir + '/ovd_b64_store.txt';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, token);
  fs.closeSync(f);
  try {
    fs.unlinkSync(path);
  } catch (e) {
    // 清理失败不影响判定
  }
  return `b64 decoded+stored: len=${token.length}`;
}
