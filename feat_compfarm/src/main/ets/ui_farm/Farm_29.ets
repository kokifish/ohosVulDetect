// Farm_29.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Builder
function _cmBuilderTextClock(config: TextClockConfiguration) {
}

class _CMTextClock implements ContentModifier<TextClockConfiguration> {
  applyContent(): WrappedBuilder<[TextClockConfiguration]> {
    return wrapBuilder(_cmBuilderTextClock);
  }
}

@Component
export struct FarmTextClockComp {
  build() {
    Column() {
      TextClock()
        .contentModifier(new _CMTextClock())
        .fontFeature('ovd')
        .fontStyle(FontStyle.Normal)
        .textShadow({ radius: 1 })
    }
  }
}

@Component
export struct FarmTextAreaComp {
  build() {
    Column() {
      TextArea()
        .autoCapitalizationMode(AutoCapitalizationMode.NONE)
        .barState(BarState.Off)
        .caretColor(Color.Red)
        .caretStyle({ width: 1, color: Color.Red })
        .compressLeadingPunctuation(true)
        .contentType(ContentType.USER_NAME)
        .copyOption(CopyOptions.None)
        .customKeyboard((): void => {})
        .ellipsisMode(EllipsisMode.START)
        .enableAutoFill(true)
        .enableAutoSpacing(true)
        .enableHapticFeedback(true)
        .enableKeyboardOnFocus(true)
        .enablePreviewText(true)
        .enableSelectedDataDetector(true)
        .enterKeyType(EnterKeyType.Go)
        .fallbackLineSpacing(true)
        .fontFeature('ovd')
        .fontStyle(FontStyle.Normal)
        .halfLeading(true)
        .heightAdaptivePolicy(TextHeightAdaptivePolicy.MAX_LINES_FIRST)
        .horizontalScrolling(true)
        .includeFontPadding(true)
        .keyboardAppearance(KeyboardAppearance.NONE_IMMERSIVE)
        .lineBreakStrategy(LineBreakStrategy.GREEDY)
        .maxFontScale(1)
        .maxFontSize(1)
        .maxLength(1)
        .minFontScale(1)
        .minFontSize(1)
        .minLines(1)
        .onDidDelete((v: DeleteValue): void => {})
        .onDidInsert((v: InsertValue): void => {})
        .onWillAttachIME((v: IMEClient): void => {})
        .onWillChange((v: EditableTextChangeValue): boolean => true)
        .onWillCopy((v: string): boolean => true)
        .onWillCut((v: string): boolean => true)
        .onWillDelete((v: DeleteValue): boolean => true)
        .onWillInsert((v: InsertValue): boolean => true)
        .orphanCharOptimization(true)
        .placeholderColor(Color.Red)
        .placeholderFont({ size: 1, weight: FontWeight.Lighter })
        .punctuationOverflow(true)
        .selectedBackgroundColor(Color.Red)
        .selectedDragPreviewStyle({ color: Color.Red })
        .selectionMenuHidden(true)
        .showCounter(true)
        .stopBackPress(true)
        .strokeColor(Color.Red)
        .strokeJoinStyle(StrokeJoinStyle.MITER_JOIN)
        .style(TextContentStyle.DEFAULT)
        .textDirection(TextDirection.LTR)
        .textIndent(1)
        .wordBreak(WordBreak.NORMAL)
    }
  }
}

