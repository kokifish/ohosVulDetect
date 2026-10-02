// VULN: OVD-TNT-003 四跳跨函数污点链——source→hopA→hopB→sink(文件写)（CWE-200/312）
// 令牌常量在 src3、落盘 sink 在 ovdTntSink3，中经两次变换；需要过程间分析串联。
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

const TOKEN3 = 'tnt3_tok_ovd_c74a12';

export function src3(): string {
  return TOKEN3;
}

export function hop3a(s: string): string {
  return `a(${s.length})${s}`;
}

export function hop3b(s: string): string {
  return s.toUpperCase();
}

export function ovdTntSink3(ctx: common.Context): string {
  const payload: string = hop3b(hop3a(src3()));
  const path = ctx.filesDir + '/tnt3_token.txt';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, payload);
  fs.closeSync(f);
  fs.unlinkSync(path);
  return 'tnt3 sink written to file';
}
