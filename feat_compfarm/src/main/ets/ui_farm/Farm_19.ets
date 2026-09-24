// Farm_19.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextInputComp {
  build() {
    Column() {
      TextInput()
        .caretColor(Color.Red)
        .caretPosition(1)
        .compressLeadingPunctuation(true)
        .enableAutoFill(true)
        .enableAutoFillAnimation(true)
        .enableAutoSpacing(true)
        .enableHapticFeedback(true)
        .enableKeyboardOnFocus(true)
        .enablePreviewText(true)
        .enableSelectedDataDetector(true)
        .fallbackLineSpacing(true)
        .fontFeature('ovd')
        .halfLeading(true)
        .includeFontPadding(true)
        .inputFilter('ovd')
        .maxFontScale(1)
        .maxFontSize(1)
        .maxLength(1)
        .minFontScale(1)
        .minFontSize(1)
        .onCopy((v: string): void => {})
        .onCut((v: string): void => {})
        .onDidDelete((v: DeleteValue): void => {})
        .onDidInsert((v: InsertValue): void => {})
        .onEditChange((v: boolean): void => {})
        .onSecurityStateChange((v: boolean): void => {})
        .onWillAttachIME((v: IMEClient): void => {})
        .orphanCharOptimization(true)
        .passwordRules('ovd')
        .placeholderColor(Color.Red)
        .punctuationOverflow(true)
        .selectAll(true)
        .selectedBackgroundColor(Color.Red)
        .selectionMenuHidden(true)
        .showCounter(true)
        .showError('ovd')
        .showPassword(true)
        .showPasswordIcon(true)
        .showUnderline(true)
        .stopBackPress(true)
        .strokeColor(Color.Red)
        .underlineColor(Color.Red)
    }
  }
}

@Component
export struct FarmTextTimerComp {
  build() {
    Column() {
      TextTimer()
        .textShadow([])
    }
  }
}

