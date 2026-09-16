// CoreSpeechKit：语音识别引擎（createEngine/startListening/shutdown）。
// 模拟器无语音引擎时走确定性错误路径（graceful）；不采集任何音频数据。
import { speechRecognizer } from '@kit.CoreSpeechKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct SpeechDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'CoreSpeechKit',
        cases: [
          new Case('create engine', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const engine = await speechRecognizer.createEngine({
                language: 'zh-CN', online: 1
              });
              return `engine ok`;
            } catch (e) {
              const err = e as BusinessError;
              log(`engine fail: ${err.code} ${err.message}`);
              return `engine-err=${err.code}`;
            }
          }),
          new Case('start/shutdown', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const engine = await speechRecognizer.createEngine({
                language: 'zh-CN', online: 1
              });
              engine.startListening({ sessionId: 'vd-bench', audioInfo: { audioType: 'AUDIO_TYPE', sampleRate: 16000, soundChannel: 1, sampleBit: 16 }, extraParams: {} });
              engine.shutdown();
              return `start+shutdown ok`;
            } catch (e) {
              const err = e as BusinessError;
              log(`start fail: ${err.code} ${err.message}`);
              return `start-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
