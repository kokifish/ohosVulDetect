// Farm_28.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextComp {
  build() {
    Column() {
      Text()
        .baselineOffset(1)
        .caretColor(Color.Red)
        .compressLeadingPunctuation(true)
        .copyOption(CopyOptions.None)
        .dataDetectorConfig({ types: [] })
        .ellipsisMode(EllipsisMode.START)
        .enableAutoSpacing(true)
        .enableDataDetector(true)
        .enableHapticFeedback(true)
        .enableSelectedDataDetector(true)
        .fallbackLineSpacing(true)
        .font({ size: 1, weight: FontWeight.Lighter })
        .fontFeature('ovd')
        .fontStyle(FontStyle.Normal)
        .fontVariations([])
        .halfLeading(true)
        .heightAdaptivePolicy(TextHeightAdaptivePolicy.MAX_LINES_FIRST)
        .includeFontPadding(true)
        .incrementalUpdatePolicy(IncrementalUpdatePolicy.NONE)
        .lineBreakStrategy(LineBreakStrategy.GREEDY)
        .lineHeightMultiple(1)
        .marqueeOptions({ start: true })
        .maxFontScale(1)
        .maxFontSize(1)
        .minFontScale(1)
        .minFontSize(1)
        .minLines(1)
        .onMarqueeStateChange((v: MarqueeState): void => {})
        .onWillCopy((v: string): boolean => true)
        .optimizeTrailingSpace(true)
        .orphanCharOptimization(true)
        .privacySensitive(true)
        .punctuationOverflow(true)
        .selectedBackgroundColor(Color.Red)
        .selectedDragPreviewStyle({ color: Color.Red })
        .tailIndents([])
        .textCase(TextCase.Normal)
        .textContentAlign(TextContentAlign.TOP)
        .textDirection(TextDirection.LTR)
        .textIndent(1)
        .textSelectable(TextSelectableMode.SELECTABLE_UNFOCUSABLE)
        .textShadow({ radius: 1 })
        .textVerticalAlign(TextVerticalAlign.BASELINE)
        .wordBreak(WordBreak.NORMAL)
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
        .defaultTextStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
        .digitalCrownSensitivity(CrownSensitivity.LOW)
        .disableTextStyleAnimation(true)
        .disappearTextStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
        .enableHapticFeedback(true)
        .gradientHeight(1)
        .onEnterSelectedArea((): void => {})
        .onScrollStop((): void => {})
        .selectedBackgroundStyle({ color: Color.Red })
        .selectedIndex(1)
        .selectedTextStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
        .textStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
    }
  }
}

