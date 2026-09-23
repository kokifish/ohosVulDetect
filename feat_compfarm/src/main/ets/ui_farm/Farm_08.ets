// Farm_08.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSearchComp {
  build() {
    Column() {
      Search()
        .enableHapticFeedback(true)
        .enableKeyboardOnFocus(true)
        .enablePreviewText(true)
        .enableSelectedDataDetector(true)
        .fontFeature('ovd')
        .inputFilter('ovd')
        .maxFontSize(1)
        .maxLength(1)
        .minFontSize(1)
        .placeholderColor(Color.Red)
        .searchButton('ovd')
        .selectedBackgroundColor(Color.Red)
        .selectionMenuHidden(true)
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
        .space(1)
        .value('ovd')
    }
  }
}

