// VULN: OVD-TNT-005 跨模块污点链——source 常量在 HAR 记录、sink 落盘在 feature（CWE-200/312）
// 过程间分析与模块归属归因需同时成立：hop1 锚 HAR 记录函数，hop2 锚 feature sink。
import { ovdXmodTntSrc } from 'lib_common';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

function hop5(s: string): string {
  return `h5(${s.length})${s}`;
}

export function ovdTntSink5(ctx: common.Context): string {
  const payload: string = hop5(ovdXmodTntSrc());
  const path = ctx.filesDir + '/tnt5_token.txt';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, payload);
  fs.closeSync(f);
  fs.unlinkSync(path);
  return 'tnt5 xmod chain sink written';
}
