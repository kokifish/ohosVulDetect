// VULN: OVD-PASTE-001 用户口令写入系统粘贴板（CWE-200）
import { pasteboard } from '@kit.BasicServicesKit';

export async function ovdPaste001(password: string): Promise<string> {
  const pb = pasteboard.getSystemPasteboard();
  const data = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, password);
  await pb.setData(data);
  return 'password copied to system pasteboard';
}
