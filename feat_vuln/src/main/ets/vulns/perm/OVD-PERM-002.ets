// VULN: OVD-PERM-002 剪贴板读取被复用于后台画像（CWE-250）
// 已授权的读取路径被超出原始意图地用于行为画像聚合。
import { pasteboard } from '@kit.BasicServicesKit';

export async function ovdPerm002(): Promise<string> {
  const pb = pasteboard.getSystemPasteboard();
  const d = await pb.getData();
  const text = d.getPrimaryText() ?? '';
  return `perm002 background profiled len=${text.length}`;
}
