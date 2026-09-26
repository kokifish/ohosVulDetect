// Farm_05.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmDataPanelComp {
  build() {
    Column() {
      DataPanel({ values: [] })
        .closeEffect(true)
        .trackBackgroundColor(Color.Red)
        .trackShadow({ colors: [] })
        .valueColors([])
    }
  }
}

@Component
export struct FarmDatePickerComp {
  build() {
    Column() {
      DatePicker()
        .canLoop(true)
        .disappearTextStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
        .enableHapticFeedback(true)
        .lunar(true)
        .selectedTextStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
        .textStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
    }
  }
}

