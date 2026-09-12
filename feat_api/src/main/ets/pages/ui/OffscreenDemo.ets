// 绘制与主题杂项：OffscreenCanvas（离屏绘制 → transferToImageBitmap → 在屏 Canvas 上屏）、
// RichText（HTML 富文本组件）、WithTheme（自定义主题 token，@kit.ArkUI CustomTheme）。
import { CustomTheme, Colors } from '@kit.ArkUI';

// Colors 全部 54 个 token 显式（WithTheme 的 CustomTheme 要求；brand 改色观察主题生效）。
const themeColors: Colors = {
  brand: '#FF5A00',
  primary: '#FFFFFF',
  onPrimary: '#FFFFFF',
  container: '#FFFFFF',
  warning: '#FFFFFF',
  alert: '#FFFFFF',
  confirm: '#FFFFFF',
  fontPrimary: '#182431',
  fontSecondary: '#182431',
  fontTertiary: '#182431',
  fontFourth: '#182431',
  fontEmphasize: '#182431',
  fontOnPrimary: '#182431',
  fontOnSecondary: '#182431',
  fontOnTertiary: '#182431',
  fontOnFourth: '#182431',
  iconPrimary: '#182431',
  iconSecondary: '#182431',
  iconTertiary: '#182431',
  iconFourth: '#182431',
  iconEmphasize: '#182431',
  iconSubEmphasize: '#182431',
  iconOnPrimary: '#182431',
  iconOnSecondary: '#182431',
  iconOnTertiary: '#182431',
  iconOnFourth: '#182431',
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#FFFFFF',
  backgroundTertiary: '#FFFFFF',
  backgroundFourth: '#FFFFFF',
  backgroundEmphasize: '#FFFFFF',
  compForegroundPrimary: '#182431',
  compBackgroundPrimary: '#FFFFFF',
  compBackgroundPrimaryTran: '#FFFFFF',
  compBackgroundPrimaryContrary: '#FFFFFF',
  compBackgroundGray: '#FFFFFF',
  compBackgroundSecondary: '#FFFFFF',
  compBackgroundTertiary: '#FFFFFF',
  compBackgroundEmphasize: '#FFFFFF',
  compBackgroundNeutral: '#FFFFFF',
  compEmphasizeSecondary: '#182431',
  compEmphasizeTertiary: '#182431',
  compDivider: '#FFFFFF',
  compCommonContrary: '#FFFFFF',
  compBackgroundFocus: '#FFFFFF',
  compFocusedPrimary: '#182431',
  compFocusedSecondary: '#182431',
  compFocusedTertiary: '#182431',
  interactiveHover: '#FFFFFF',
  interactivePressed: '#FFFFFF',
  interactiveFocus: '#FFFFFF',
  interactiveActive: '#FFFFFF',
  interactiveSelect: '#FFFFFF',
  interactiveClick: '#FFFFFF',
};

const benchTheme: CustomTheme = {
  colors: themeColors,
};

@Entry
@Component
struct OffscreenDemo {
  @State lines: string[] = [];
  @State drawn: boolean = false;
  private settings: RenderingContextSettings = new RenderingContextSettings(true);
  private ctx: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  build() {
    Scroll() {
      Column({ space: 14 }) {
        Text('OffscreenCanvas -> onscreen transfer').fontSize(16).fontWeight(FontWeight.Bold)
        Canvas(this.ctx)
          .width(220).height(220)
          .backgroundColor('#f5f5f5')
          .border({ width: 1 })
        Button('draw-via-offscreen')
          .onClick(() => {
            const off = new OffscreenCanvas(220, 220);
            const c = off.getContext('2d', new RenderingContextSettings(true));
            c.fillStyle = '#3366cc';
            c.fillRect(20, 20, 180, 180);
            c.fillStyle = '#ffcc00';
            c.beginPath();
            c.arc(110, 110, 60, 0, Math.PI * 2);
            c.fill();
            c.fillStyle = '#ffffff';
            c.font = '20px sans-serif';
            c.fillText('offscreen', 60, 115);
            this.ctx.transferFromImageBitmap(off.transferToImageBitmap());
            this.drawn = true;
            this.pick('offscreen', 'transferred');
          })
        Text(`offscreen-drawn=${this.drawn}`).fontSize(12)

        Text('RichText (html)').fontSize(16).fontWeight(FontWeight.Bold)
        RichText('<div><b>RichText</b>-component <i>html</i> body with <font color="#cc2200">color</font></div>')
          .onStart(() => this.pick('richtext', 'start'))
          .width('100%')
          .height(64)

        Text('WithTheme custom tokens').fontSize(16).fontWeight(FontWeight.Bold)
        WithTheme({ theme: benchTheme, colorMode: ThemeColorMode.LIGHT }) {
          Column({ space: 8 }) {
            Button('themed-btn')
              .onClick(() => this.pick('themed', 'btn'))
            Text('themed-text-follow-brand').fontSize(13)
          }
          .padding(8)
          .backgroundColor('#f7f7f7')
          .width('100%')
        }

        ForEach(this.lines, (l: string) => Text(l).fontSize(12).fontColor('#0066cc'), (l: string) => l)
      }
      .padding(12)
    }
    .height('100%')
  }
}
