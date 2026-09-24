// Farm_17.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextComp {
  build() {
    Column() {
      Text()
        .baselineOffset(1)
        .caretColor(Color.Red)
        .compressLeadingPunctuation(true)
        .enableAutoSpacing(true)
        .enableDataDetector(true)
        .enableHapticFeedback(true)
        .enableSelectedDataDetector(true)
        .fallbackLineSpacing(true)
        .fontFeature('ovd')
        .fontVariations([])
        .halfLeading(true)
        .includeFontPadding(true)
        .lineHeightMultiple(1)
        .maxFontScale(1)
        .maxFontSize(1)
        .minFontScale(1)
        .minFontSize(1)
        .minLines(1)
        .onMarqueeStateChange((v: MarqueeState): void => {})
        .optimizeTrailingSpace(true)
        .orphanCharOptimization(true)
        .privacySensitive(true)
        .punctuationOverflow(true)
        .selectedBackgroundColor(Color.Red)
        .tailIndents([])
        .textIndent(1)
        .textShadow([])
    }
  }
}

@Component
export struct FarmTextPickerComp {
  build() {
    Column() {
      TextPicker()
        .canLoop(true)
        .defaultPickerItemHeight(1)
        .disableTextStyleAnimation(true)
        .enableHapticFeedback(true)
        .selectedIndex(1)
    }
  }
}

