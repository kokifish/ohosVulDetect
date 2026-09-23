// Farm_14.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextAreaComp {
  build() {
    Column() {
      TextArea()
        .caretColor(Color.Red)
        .enableAutoFill(true)
        .enableHapticFeedback(true)
        .enableKeyboardOnFocus(true)
        .enablePreviewText(true)
        .enableSelectedDataDetector(true)
        .fontFeature('ovd')
        .maxFontSize(1)
        .maxLength(1)
        .minFontSize(1)
        .placeholderColor(Color.Red)
        .selectedBackgroundColor(Color.Red)
        .selectionMenuHidden(true)
        .showCounter(true)
    }
  }
}

@Component
export struct FarmTextInputComp {
  build() {
    Column() {
      TextInput()
        .caretColor(Color.Red)
        .caretPosition(1)
        .enableAutoFill(true)
        .enableHapticFeedback(true)
        .enableKeyboardOnFocus(true)
        .enablePreviewText(true)
        .enableSelectedDataDetector(true)
        .fontFeature('ovd')
        .inputFilter('ovd')
        .maxFontSize(1)
        .maxLength(1)
        .minFontSize(1)
        .passwordRules('ovd')
        .placeholderColor(Color.Red)
        .selectAll(true)
        .selectedBackgroundColor(Color.Red)
        .selectionMenuHidden(true)
        .showCounter(true)
        .showError('ovd')
        .showPassword(true)
        .showPasswordIcon(true)
        .showUnderline(true)
        .underlineColor(Color.Red)
    }
  }
}

