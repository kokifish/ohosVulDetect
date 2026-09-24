// Farm_05.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmDatePickerComp {
  build() {
    Column() {
      DatePicker()
        .canLoop(true)
        .enableHapticFeedback(true)
        .lunar(true)
    }
  }
}

@Component
export struct FarmDividerComp {
  build() {
    Column() {
      Divider()
        .vertical(true)
    }
  }
}

