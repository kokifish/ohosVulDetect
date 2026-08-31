import { media } from '@kit.MediaKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { audio } from '@kit.AudioKit';
import { image } from '@kit.ImageKit';
import { Case, DemoScaffold } from 'lib_common';

// media 状态机（on stateChange）、audio 音量、image createPixelMap。
@Entry
@Component
struct MediaDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'media / audio / image',
        cases: [
          new Case('avplayer-states', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const player: media.AVPlayer = await media.createAVPlayer();
            player.on('stateChange', (state: string) => {
              log(`ev state=${state}`);
            });
            player.on('error', (err: BusinessError) => {
              log(`ev error ${JSON.stringify(err)}`);
            });
            try {
              await player.prepare();
            } catch (e) {
              // url 未设置时 prepare 会报错，属预期（状态机事件已覆盖）
            }
            const stateNow: string = player.state;
            player.release();
            return `state=${stateNow}`;
          }),
          new Case('audio-volume', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const mgr: audio.AudioVolumeManager = audio.getAudioManager().getVolumeManager();
            const rm: audio.AudioRingMode = await audio.getAudioManager().getRingerMode();
            const routing: audio.AudioRoutingManager = audio.getAudioManager().getRoutingManager();
            routing.on('micBlockStatusChanged', () => {
            });
            routing.off('micBlockStatusChanged');
            return `ringerMode=${rm}`;
          }),
          new Case('image-pixelmap', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const colors = new Uint8Array(2 * 2 * 4);
            colors.fill(128);
            const pmOpts: image.InitializationOptions = { size: { height: 2, width: 2 } };
            const pm: image.PixelMap = await image.createPixelMap(colors.buffer, pmOpts);
            const info: image.ImageInfo = await pm.getImageInfo();
            const w = info.size.width;
            pm.release();
            return `pixelmap ${w}x${info.size.height}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
