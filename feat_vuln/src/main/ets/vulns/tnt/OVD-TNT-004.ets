// VULN: OVD-TNT-004 跨函数链——令牌 source→mask→sink(粘贴板)（CWE-200）
import { pasteboard } from '@kit.BasicServicesKit';

const TOKEN4 = 'tnt4_tok_ovd_d91f33';

export function src4(): string {
  return TOKEN4;
}

export function mask4(s: string): string {
  return s.slice(0, 8);
}

export async function ovdTntSink4(): Promise<string> {
  const pb = pasteboard.getSystemPasteboard();
  const data = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, mask4(src4()));
  await pb.setData(data);
  await pb.clear();
  return 'tnt4 sink copied to pasteboard';
}
