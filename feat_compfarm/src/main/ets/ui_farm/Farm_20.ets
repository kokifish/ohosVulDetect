// Farm_20.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSearchComp {
  build() {
    Column() {
      Search()
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
        .searchButton('ovd')
        .selectedBackgroundColor(Color.Red)
        .selectionMenuHidden(true)
        .stopBackPress(true)
        .strokeColor(Color.Red)
    }
  }
}

@Component
export struct FarmSelectComp {
  build() {
    Column() {
      Select([])
        .menuBackgroundColor(Color.Red)
        .optionBgColor(Color.Red)
        .optionFontColor(Color.Red)
        .selectedOptionBgColor(Color.Red)
        .selectedOptionFontColor(Color.Red)
        .showDefaultSelectedIcon(true)
        .showInSubWindow(true)
        .space(1)
        .value('ovd')
    }
  }
}

