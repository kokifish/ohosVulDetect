// VULN: OVD-TNT-006 跨模块污点链（HSP 变体）——source 常量在 HSP 记录、sink 在 feature（CWE-200/312）
import { ovdHspTntSrc } from 'lib_shared';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

function hop6(s: string): string {
  return `h6(${s.length})${s}`;
}

export function ovdTntSink6(ctx: common.Context): string {
  const payload: string = hop6(ovdHspTntSrc());
  const path = ctx.filesDir + '/tnt6_token.txt';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, payload);
  fs.closeSync(f);
  fs.unlinkSync(path);
  return 'tnt6 hsp chain sink written';
}
