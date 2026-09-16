// SAFE twins：SPEECH-001S 语音会话仅本地使用（无外传端点）；SPEECH-002S 匿名会话参数。
import { speechRecognizer } from '@kit.CoreSpeechKit';

// SAFE: OVD-SPEECH-001S
export async function ovdSpeech001S(): Promise<string> {
  const engine = await speechRecognizer.createEngine({ language: 'zh-CN', online: 1 });
  engine.startListening({ sessionId: 'vd-safe-sess', audioInfo: { audioType: 'AUDIO_TYPE', sampleRate: 16000, soundChannel: 1, sampleBit: 16 }, extraParams: {} });
  return `voice session started locally (no forwarding)`;
}

// SAFE: OVD-SPEECH-002S
export async function ovdSpeech002S(): Promise<string> {
  const engine = await speechRecognizer.createEngine({
    language: 'zh-CN',
    online: 1,
    extraParams: { 'anon': true }
  });
  engine.shutdown();
  return `anonymous engine session`;
}
