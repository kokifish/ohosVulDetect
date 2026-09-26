// Farm_28.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextComp {
  build() {
    Column() {
      Text()
        .baselineOffset(1)
        .caretColor(Color.Red)
        .compressLeadingPunctuation(true)
        .dataDetectorConfig({ types: [] })
        .enableAutoSpacing(true)
        .enableDataDetector(true)
        .enableHapticFeedback(true)
        .enableSelectedDataDetector(true)
        .fallbackLineSpacing(true)
        .font({ size: 1, weight: 1 })
        .fontFeature('ovd')
        .fontVariations([])
        .halfLeading(true)
        .includeFontPadding(true)
        .lineHeightMultiple(1)
        .marqueeOptions({ start: true })
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
        .defaultTextStyle({ minFontSize: 1, maxFontSize: 1 })
        .disableTextStyleAnimation(true)
        .disappearTextStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
        .enableHapticFeedback(true)
        .selectedBackgroundStyle({ color: Color.Red })
        .selectedIndex(1)
        .selectedTextStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
        .textStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
    }
  }
}

