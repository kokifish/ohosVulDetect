// VULN: OVD-PASTE-003 敏感令牌入系统粘贴板且允许跨设备共享（CWE-200/359）
import { pasteboard } from '@kit.BasicServicesKit';
export async function ovdPaste003(sessionToken: string): Promise<string> {
  const pb = pasteboard.getSystemPasteboard();
  const data = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, sessionToken);
  data.setProperty({
    additions: {} as Record<string, object>,
    mimeTypes: [pasteboard.MIMETYPE_TEXT_PLAIN],
    tag: 'bench-token',
    timestamp: Date.now(),
    localOnly: false,
    shareOption: pasteboard.ShareOption.CROSSDEVICE,
  });
  await pb.setData(data);
  return 'clipboard synced cross-device';
}
