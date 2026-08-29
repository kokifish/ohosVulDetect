import { media } from '@kit.MediaKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { audio } from '@kit.AudioKit';
import { image } from '@kit.ImageKit';
import { Runner } from 'lib_common';

// media 状态机（on stateChange）、audio 音量、image createPixelMap。
@Entry
@Component
struct MediaDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('media / audio / image').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('avplayer-states').margin(4).onClick(() => {
          this.runner.run('avplayer-states', async () => {
            const player: media.AVPlayer = await media.createAVPlayer();
            player.on('stateChange', (state: string) => {
              this.lines.push(`ev state=${state}`);
            });
            player.on('error', (err: BusinessError) => {
              this.lines.push(`ev error ${JSON.stringify(err)}`);
            });
            try {
              await player.prepare();
            } catch (e) {
              // url 未设置时 prepare 会报错，属预期（状态机事件已覆盖）
            }
            const stateNow: string = player.state;
            player.release();
            return `state=${stateNow}`;
          });
        })
        Button('audio-volume').margin(4).onClick(() => {
          this.runner.run('audio-volume', async () => {
            const mgr: audio.AudioVolumeManager = audio.getAudioManager().getVolumeManager();
            const rm: audio.AudioRingMode = await audio.getAudioManager().getRingerMode();
            const routing: audio.AudioRoutingManager = audio.getAudioManager().getRoutingManager();
            routing.on('micBlockStatusChanged', () => {
            });
            routing.off('micBlockStatusChanged');
            return `ringerMode=${rm}`;
          });
        })
        Button('image-pixelmap').margin(4).onClick(() => {
          this.runner.run('image-pixelmap', async () => {
            const colors = new Uint8Array(2 * 2 * 4);
            colors.fill(128);
            const pmOpts: image.InitializationOptions = { size: { height: 2, width: 2 } };
            const pm: image.PixelMap = await image.createPixelMap(colors.buffer, pmOpts);
            const info: image.ImageInfo = await pm.getImageInfo();
            const w = info.size.width;
            pm.release();
            return `pixelmap ${w}x${info.size.height}`;
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
