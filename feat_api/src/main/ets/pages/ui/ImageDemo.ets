// Image 组件全变体 + @kit.ImageKit pixelmap 运行时构造（RGBA 缓冲 → PixelMap → Image 源）。
// 覆盖：资源源 / pixelmap 源 / objectFit 切换 / alt / interpolation / sourceSize / draggable。
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct ImageDemo {
  @State lines: string[] = [];
  @State pm: image.PixelMap | undefined = undefined;
  @State fits: ImageFit[] = [ImageFit.Contain, ImageFit.Cover, ImageFit.Fill, ImageFit.None];
  @State fitIdx: number = 0;

  aboutToAppear(): void {
    // 4x4 红绿蓝黄 RGBA 缓冲 → ImageKit pixelmap
    const colors = new Uint8Array([
      0xff, 0x00, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0x00, 0xff,
      0xaa, 0x00, 0x00, 0xff, 0x00, 0xaa, 0x00, 0xff, 0x00, 0x00, 0xaa, 0xff, 0xaa, 0xaa, 0x00, 0xff,
      0x88, 0x00, 0x00, 0xff, 0x00, 0x88, 0x00, 0xff, 0x00, 0x00, 0x88, 0xff, 0x88, 0x88, 0x00, 0xff,
      0x44, 0x00, 0x00, 0xff, 0x00, 0x44, 0x00, 0xff, 0x00, 0x00, 0x44, 0xff, 0x44, 0x44, 0x00, 0xff,
    ]);
    const opts: image.InitializationOptions = {
      size: { width: 4, height: 4 },
      pixelFormat: image.PixelMapFormat.RGBA_8888,
    };
    image.createPixelMap(colors.buffer as ArrayBuffer, opts)
      .then((p: image.PixelMap) => {
        this.pm = p;
        this.lines.push('pixelmap=created');
      })
      .catch((e: BusinessError) => this.lines.push(`pixelmap=err:${e.code}`));
  }

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  build() {
    Scroll() {
      Column({ space: 14 }) {
        Text('Image from resource').fontSize(16).fontWeight(FontWeight.Bold)
        Image($r('app.media.startIcon'))
          .width(96).height(96)
          .objectFit(this.fits[this.fitIdx])
          .interpolation(ImageInterpolation.High)
          .draggable(true)
          .alt($r('app.media.background'))
          .onComplete((msg) => { if (msg) { this.pick('img-complete', msg.width); } })
          .onClick(() => {
            this.fitIdx = (this.fitIdx + 1) % this.fits.length;
            this.pick('objectFit', this.fits[this.fitIdx].toString());
          })

        Text('Image objectFit variants').fontSize(16).fontWeight(FontWeight.Bold)
        Row({ space: 8 }) {
          Image($r('app.media.startIcon')).width(56).height(56).objectFit(ImageFit.Contain).border({ width: 1 })
          Image($r('app.media.startIcon')).width(56).height(56).objectFit(ImageFit.Cover).border({ width: 1 })
          Image($r('app.media.startIcon')).width(56).height(56).objectFit(ImageFit.Fill).border({ width: 1 })
          Image($r('app.media.startIcon')).width(56).height(56).objectFit(ImageFit.None).border({ width: 1 })
          Image($r('app.media.startIcon')).width(56).height(56).objectFit(ImageFit.ScaleDown).border({ width: 1 })
        }

        Text('Image from ImageKit pixelmap').fontSize(16).fontWeight(FontWeight.Bold)
        Image(this.pm)
          .width(64).height(64)
          .objectFit(ImageFit.Fill)
          .interpolation(ImageInterpolation.None)
          .onComplete((msg) => { if (msg) { this.pick('pm-complete', msg.width); } })

        Text('Image sourceSize + autoResize').fontSize(16).fontWeight(FontWeight.Bold)
        Image($r('app.media.background'))
          .width(64).height(64)
          .sourceSize({ width: 32, height: 32 })
          .autoResize(true)
          .renderMode(ImageRenderMode.Template)
          .onError(() => this.pick('img-error', true))

        ForEach(this.lines, (l: string) => Text(l).fontSize(12).fontColor('#0066cc'), (l: string) => l)
      }
      .padding(12)
    }
    .height('100%')
  }
}
