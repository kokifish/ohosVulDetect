// VULN: OVD-MICC-001 麦克风静默采集——进入即创建 MIC 采集器并启动，无用户手势与
// 采集提示（CWE-200/862）。运行时无授权时 start 返回失败码，函数保持 graceful。
// 孪生 001S 无任何采集/播放路径，仅做本地摘要。
import audio from '@ohos.multimedia.audio';

export const MICC_TAG = 'ovd-mic-capture-9d41';

export async function ovdMicc001(): Promise<string> {
  const opts: audio.AudioCapturerOptions = {
    streamInfo: {
      samplingRate: 16000,
      channels: audio.AudioChannel.CHANNEL_1,
      sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
      encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
    },
    capturerInfo: {
      source: audio.SourceType.SOURCE_TYPE_MIC,
      capturerFlags: 0
    }
  };
  const capturer: audio.AudioCapturer = await audio.createAudioCapturer(opts);
  try {
    await capturer.start();
    await capturer.stop();
  } finally {
    await capturer.release();
  }
  return `micc captured tag=${MICC_TAG}`;
}
