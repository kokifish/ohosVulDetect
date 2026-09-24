// VULN: OVD-PASTE-005 会话令牌写入系统粘贴板且不清除（CWE-200）
// 跨应用可读：任意前台应用可 getSystemPasteboard 读取令牌。
import { pasteboard } from '@kit.BasicServicesKit';

export async function ovdPaste005(token: string): Promise<string> {
  const pb = pasteboard.getSystemPasteboard();
  const data = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, token);
  await pb.setData(data);
  return 'session token copied';
}
