// VULN: OVD-DEP-001 三层依赖链污点：source 在 HSP、中转在 HAR（ovdDepRelay）、落盘 sink 在
// feature——依赖图从星型变为含链（feature→HAR→HSP），常量经两层跨形态边，检测器须逐层归属。
import { ovdDepRelay } from 'lib_common';
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export function ovdDepSink(ctx: common.Context): string {
  const path = ctx.filesDir + '/dep_chain.txt';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  const relayed: string = ovdDepRelay();
  fs.writeSync(f.fd, relayed);
  fs.closeSync(f);
  fs.unlinkSync(path);
  return 'dep chain sink written';
}
