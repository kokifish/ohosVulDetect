// Farm_22.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSearchComp {
  build() {
    Column() {
      Search()
        .caretStyle({ width: 1, color: Color.Red })
        .compressLeadingPunctuation(true)
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
        .onWillAttachIME((v: IMEClient): void => {})
        .placeholderColor(Color.Red)
        .placeholderFont({ size: 1, weight: 1 })
        .searchButton('ovd')
        .selectedBackgroundColor(Color.Red)
        .selectionMenuHidden(true)
        .stopBackPress(true)
        .strokeColor(Color.Red)
        .textFont({ size: 1, weight: 1 })
    }
  }
}

@Component
export struct FarmSelectComp {
  build() {
    Column() {
      Select([])
        .dividerStyle({ color: Color.Red })
        .font({ size: 1, weight: 1 })
        .menuBackgroundBlurStyleOptions({ inactiveColor: Color.Red })
        .menuBackgroundColor(Color.Red)
        .menuBackgroundEffect({ radius: 1 })
        .menuOutline({ color: Color.Red })
        .optionBgColor(Color.Red)
        .optionFont({ size: 1, weight: 1 })
        .optionFontColor(Color.Red)
        .selectedOptionBgColor(Color.Red)
        .selectedOptionFont({ size: 1, weight: 1 })
        .selectedOptionFontColor(Color.Red)
        .showDefaultSelectedIcon(true)
        .showInSubWindow(true)
        .space(1)
        .value('ovd')
    }
  }
}

