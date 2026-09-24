// Farm_29.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTimePickerComp {
  build() {
    Column() {
      TimePicker()
        .enableCascade(true)
        .enableHapticFeedback(true)
        .onEnterSelectedArea((v: TimePickerResult): void => {})
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

