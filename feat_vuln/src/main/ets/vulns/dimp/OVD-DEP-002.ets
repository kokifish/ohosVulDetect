// VULN: OVD-DEP-002 令牌三段分置三模块，运行时拼接后落盘（CWE-200/312）
// 完整令牌不出现在任何单一 record（三段分置 HSP/HAR/feature）——反汇编文本层
// 永远看不到完整凭据，检测须跨 record 重组。孪生 002S 同构三段仅聚合。
// 对抗面：常量重组（拼接点在 HAR 中转函数）。
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { ovdDep2P1 } from 'lib_shared';
import { ovdDep2Join, ovdDep2P2 } from 'lib_common';

export function ovdDep2P3(): string {
  return '7f21';
}

export async function ovdDep2Sink(ctx: common.Context): Promise<string> {
  const whole: string = ovdDep2Join(ovdDep2P1(), ovdDep2P2()) + ovdDep2P3();
  const path = ctx.filesDir + '/ovd_dep2_split.txt';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, whole);
  fs.closeSync(f);
  try {
    fs.unlinkSync(path);
  } catch (e) {
    // 清理失败不影响判定
  }
  return `dep2 split-token reassembled: len=${whole.length}`;
}
