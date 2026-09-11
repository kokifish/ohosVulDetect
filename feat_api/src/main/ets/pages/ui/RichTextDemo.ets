// 富文本族与符号：Span / ImageSpan / ContainerSpan / SymbolGlyph / SymbolSpan / Hyperlink。
// Text 内联子组件 + 符号字体（HarmonyOS Symbol）+ 超链接组件。
@Entry
@Component
struct RichTextDemo {
  @State lines: string[] = [];

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  build() {
    Scroll() {
      Column({ space: 14 }) {
        Text('Text with Span / ImageSpan / ContainerSpan').fontSize(16).fontWeight(FontWeight.Bold)
        Text() {
          Span('plain-span ').fontSize(14).fontColor('#333333').decoration({ type: TextDecorationType.Underline })
          ImageSpan($r('app.media.startIcon'))
            .size({ width: 18, height: 18 })
            .verticalAlign(ImageSpanAlignment.CENTER)
            .objectFit(ImageFit.Contain)
            .onClick(() => this.pick('imagespan-click', true))
          ContainerSpan() {
            Span('container-span-inner').fontSize(14).fontColor('#ffffff')
          }
          Span('\nsecond-line-span').fontSize(14).fontColor('#996633').letterSpacing(2)
        }
        .width('100%')
        .lineHeight(26)

        Text('SymbolGlyph / SymbolSpan').fontSize(16).fontWeight(FontWeight.Bold)
        Row({ space: 16 }) {
          SymbolGlyph($r('sys.symbol.ohos_star'))
            .fontSize(32)
            .fontColor(['#e6a23c'])
            .fontWeight(FontWeight.Bold)
            .onClick(() => this.pick('symbolglyph-click', 'star'))
          SymbolGlyph($r('sys.symbol.ohos_wifi'))
            .fontSize(32)
            .fontColor(['#5588ff'])
          SymbolGlyph($r('sys.symbol.ohos_trash'))
            .fontSize(32)
            .fontColor(['#dd4444'])
        }
        Text() {
          SymbolSpan($r('sys.symbol.ohos_star'))
            .fontSize(20)
            .fontColor(['#e6a23c'])
          Span(' symbol-span-inline').fontSize(14)
          SymbolSpan($r('sys.symbol.ohos_lungs'))
            .fontSize(20)
            .fontColor(['#33aa33'])
        }
        .lineHeight(26)

        Text('Hyperlink').fontSize(16).fontWeight(FontWeight.Bold)
        Column({ space: 8 }) {
          Hyperlink('https://www.huawei.com', 'hyperlink-huawei')
          Hyperlink('https://developer.huawei.com/consumer/cn/', 'hyperlink-dev')
        }
        .alignItems(HorizontalAlign.Start)

        ForEach(this.lines, (l: string) => Text(l).fontSize(12).fontColor('#0066cc'), (l: string) => l)
      }
      .padding(12)
    }
    .height('100%')
  }
}
