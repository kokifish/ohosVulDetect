// Farm_30.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextInputComp {
  build() {
    Column() {
      TextInput()
        .autoCapitalizationMode(AutoCapitalizationMode.NONE)
        .barState(BarState.Off)
        .cancelButton({ style: CancelButtonStyle.CONSTANT, icon: { size: 1, color: Color.Red } })
        .caretColor(Color.Red)
        .caretPosition(1)
        .caretStyle({ width: 1, color: Color.Red })
        .compressLeadingPunctuation(true)
        .contentType(ContentType.USER_NAME)
        .copyOption(CopyOptions.None)
        .customKeyboard((): void => {})
        .ellipsisMode(EllipsisMode.START)
        .enableAutoFill(true)
        .enableAutoFillAnimation(true)
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
        .includeFontPadding(true)
        .inputFilter('ovd')
        .keyboardAppearance(KeyboardAppearance.NONE_IMMERSIVE)
        .lineBreakStrategy(LineBreakStrategy.GREEDY)
        .maxFontScale(1)
        .maxFontSize(1)
        .maxLength(1)
        .minFontScale(1)
        .minFontSize(1)
        .onContentScroll((): void => {})
        .onCopy((v: string): void => {})
        .onCut((v: string): void => {})
        .onDidDelete((v: DeleteValue): void => {})
        .onDidInsert((v: InsertValue): void => {})
        .onEditChange((v: boolean): void => {})
        .onPaste((): void => {})
        .onSecurityStateChange((v: boolean): void => {})
        .onTextSelectionChange((): void => {})
        .onWillAttachIME((v: IMEClient): void => {})
        .onWillChange((v: EditableTextChangeValue): boolean => true)
        .onWillCopy((v: string): boolean => true)
        .onWillCut((v: string): boolean => true)
        .onWillDelete((v: DeleteValue): boolean => true)
        .onWillInsert((v: InsertValue): boolean => true)
        .orphanCharOptimization(true)
        .passwordIcon({ onIconSrc: 'ovd', offIconSrc: 'ovd' })
        .passwordRules('ovd')
        .placeholderColor(Color.Red)
        .placeholderFont({ size: 1, weight: FontWeight.Lighter })
        .punctuationOverflow(true)
        .selectAll(true)
        .selectedBackgroundColor(Color.Red)
        .selectedDragPreviewStyle({ color: Color.Red })
        .selectionMenuHidden(true)
        .showCounter(true)
        .showError('ovd')
        .showPassword(true)
        .showPasswordIcon(true)
        .showUnderline(true)
        .showUnit((): void => {})
        .stopBackPress(true)
        .strokeColor(Color.Red)
        .strokeJoinStyle(StrokeJoinStyle.MITER_JOIN)
        .style(TextInputStyle.Default)
        .textDirection(TextDirection.LTR)
        .textIndent(1)
        .underlineColor(Color.Red)
        .wordBreak(WordBreak.NORMAL)
    }
  }
}

@Builder
function _cmBuilderTextTimer(config: TextTimerConfiguration) {
}

class _CMTextTimer implements ContentModifier<TextTimerConfiguration> {
  applyContent(): WrappedBuilder<[TextTimerConfiguration]> {
    return wrapBuilder(_cmBuilderTextTimer);
  }
}

@Component
export struct FarmTextTimerComp {
  build() {
    Column() {
      TextTimer()
        .contentModifier(new _CMTextTimer())
        .fontStyle(FontStyle.Normal)
        .textShadow({ radius: 1 })
    }
  }
}

