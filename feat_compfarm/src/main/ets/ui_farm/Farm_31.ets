// Farm_31.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTimePickerComp {
  build() {
    Column() {
      TimePicker()
        .disappearTextStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
        .enableCascade(true)
        .enableHapticFeedback(true)
        .onEnterSelectedArea((v: TimePickerResult): void => {})
        .selectedTextStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
        .textStyle({ color: Color.Red, font: { size: 1, weight: 1 } })
    }
  }
}

@Component
export struct FarmUIPickerComponentComp {
  build() {
    Column() {
      UIPickerComponent()
        .canLoop(true)
        .displayedItemCount(1)
        .enableHapticFeedback(true)
    }
  }
}

