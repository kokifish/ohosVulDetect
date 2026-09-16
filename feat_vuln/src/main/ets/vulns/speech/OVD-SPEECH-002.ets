// VULN: OVD-SPEECH-002 引擎参数携带设备指纹（可关联用户的会话标识，CWE-359/200）
import { speechRecognizer } from '@kit.CoreSpeechKit';
import { deviceInfo } from '@kit.BasicServicesKit';

export async function ovdSpeech002(): Promise<string> {
  const fingerprint = `${deviceInfo.serial ?? 'vd-udid-fingerprint'}`;
  const engine = await speechRecognizer.createEngine({
    language: 'zh-CN',
    online: 1,
    extraParams: { 'vd-udid-fingerprint': fingerprint }
  });
  engine.shutdown();
  return `engine created with vd-udid-fingerprint`;
}
