import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';
import { ovdSpeech001 } from '../vulns/speech/OVD-SPEECH-001';
import { ovdSpeech002 } from '../vulns/speech/OVD-SPEECH-002';
import { ovdSpeech001S, ovdSpeech002S } from '../vulns/speech/Twins';

@Entry
@Component
struct SpeechVulnPage {
  build() {
    Column() {
      DemoScaffold({
        title: 'CoreSpeechKit vulns',
        cases: [
          new Case('SPEECH-001 session-exfil', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSpeech001()),
          new Case('SPEECH-001S local-only', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSpeech001S()),
          new Case('SPEECH-002 fingerprint', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSpeech002()),
          new Case('SPEECH-002S anon', async (ctx: common.UIAbilityContext, log: (s: string) => void) => ovdSpeech002S()),
        ],
      })
    }
    .height('100%')
  }
}
