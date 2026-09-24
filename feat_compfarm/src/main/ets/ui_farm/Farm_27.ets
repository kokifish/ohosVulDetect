// Farm_27.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextClockComp {
  build() {
    Column() {
      TextClock()
        .fontFeature('ovd')
        .textShadow([])
    }
  }
}

@Component
export struct FarmTextAreaComp {
  build() {
    Column() {
      TextArea()
        .caretColor(Color.Red)
        .compressLeadingPunctuation(true)
        .enableAutoFill(true)
        .enableAutoSpacing(true)
        .enableHapticFeedback(true)
        .enableKeyboardOnFocus(true)
        .enablePreviewText(true)
        .enableSelectedDataDetector(true)
        .fallbackLineSpacing(true)
        .fontFeature('ovd')
        .halfLeading(true)
        .horizontalScrolling(true)
        .includeFontPadding(true)
        .maxFontScale(1)
        .maxFontSize(1)
        .maxLength(1)
        .minFontScale(1)
        .minFontSize(1)
        .minLines(1)
        .onDidDelete((v: DeleteValue): void => {})
        .onDidInsert((v: InsertValue): void => {})
        .onWillAttachIME((v: IMEClient): void => {})
        .orphanCharOptimization(true)
        .placeholderColor(Color.Red)
        .punctuationOverflow(true)
        .selectedBackgroundColor(Color.Red)
        .selectionMenuHidden(true)
        .showCounter(true)
        .stopBackPress(true)
        .strokeColor(Color.Red)
    }
  }
}

