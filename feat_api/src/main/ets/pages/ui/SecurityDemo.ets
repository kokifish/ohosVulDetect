// 安全输入与安全控件：PatternLock（图案锁）、SaveButton/PasteButton（免权限安全控件，
// onSave/onPaste 临时授权窗口回调）。事件统一写回 lines。
@Entry
@Component
struct SecurityDemo {
  @State lines: string[] = [];
  @State patternLen: number = -1;
  private plc: PatternLockController = new PatternLockController();

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  build() {
    Scroll() {
      Column({ space: 14 }) {
        Text('PatternLock').fontSize(16).fontWeight(FontWeight.Bold)
        PatternLock(this.plc)
          .sideLength(240)
          .circleRadius(9)
          .pathStrokeWidth(8)
          .regularColor('#c8c8c8')
          .selectedColor('#3377cc')
          .activeColor('#ff7722')
          .pathColor('#5599dd')
          .autoReset(true)
          .onPatternComplete((input: Array<number>) => {
            this.patternLen = input.length;
            this.pick('pattern', input.join('-'));
          })
        Text(`pattern-len=${this.patternLen}`).fontSize(12)
        Button('pattern-reset')
          .onClick(() => {
            this.plc.reset();
            this.pick('pattern-reset', true);
          })

        Text('Security controls (temporary grant)').fontSize(16).fontWeight(FontWeight.Bold)
        SaveButton({ icon: SaveIconStyle.FULL_FILLED, text: SaveDescription.DOWNLOAD })
          .onClick((event: ClickEvent, result: SaveButtonOnClickResult) => {
            this.pick('save', result === SaveButtonOnClickResult.SUCCESS);
          })
        PasteButton({ icon: PasteIconStyle.LINES, text: PasteDescription.PASTE })
          .onClick((event: ClickEvent, result: PasteButtonOnClickResult) => {
            this.pick('paste', result === PasteButtonOnClickResult.SUCCESS);
          })

        ForEach(this.lines, (l: string) => Text(l).fontSize(12).fontColor('#0066cc'), (l: string) => l)
      }
      .padding(12)
    }
    .height('100%')
  }
}
