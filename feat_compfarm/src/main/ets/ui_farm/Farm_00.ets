// Farm_00.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmAlphabetIndexerComp {
  build() {
    Column() {
      AlphabetIndexer({ arrayValue: [], selected: 1 })
        .autoCollapse(true)
        .enableHapticFeedback(true)
        .font({ size: 1, weight: 1 })
        .itemBorderRadius(1)
        .itemSize('ovd')
        .popupBackground(Color.Red)
        .popupColor(Color.Red)
        .popupFont({ size: 1, weight: 1 })
        .popupItemBackgroundColor(Color.Red)
        .popupItemBorderRadius(1)
        .popupItemFont({ size: 1, weight: 1 })
        .popupPosition({ x: 1, y: 1 })
        .popupSelectedColor(Color.Red)
        .popupTitleBackground(Color.Red)
        .popupUnselectedColor(Color.Red)
        .selectedBackgroundColor(Color.Red)
        .selectedFont({ size: 1, weight: 1 })
    }
  }
}

@Component
export struct FarmButtonComp {
  build() {
    Column() {
      Button()
        .labelStyle({ maxLines: 1, minFontSize: 1 })
        .maxFontScale(1)
        .minFontScale(1)
        .stateEffect(true)
    }
  }
}

