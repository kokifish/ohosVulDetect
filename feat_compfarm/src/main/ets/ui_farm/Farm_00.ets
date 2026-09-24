// Farm_00.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmAlphabetIndexerComp {
  build() {
    Column() {
      AlphabetIndexer({ arrayValue: [], selected: 1 })
        .autoCollapse(true)
        .enableHapticFeedback(true)
        .itemBorderRadius(1)
        .itemSize('ovd')
        .popupBackground(Color.Red)
        .popupColor(Color.Red)
        .popupItemBackgroundColor(Color.Red)
        .popupItemBorderRadius(1)
        .popupSelectedColor(Color.Red)
        .popupTitleBackground(Color.Red)
        .popupUnselectedColor(Color.Red)
        .selectedBackgroundColor(Color.Red)
    }
  }
}

@Component
export struct FarmButtonComp {
  build() {
    Column() {
      Button()
        .maxFontScale(1)
        .minFontScale(1)
        .stateEffect(true)
    }
  }
}

