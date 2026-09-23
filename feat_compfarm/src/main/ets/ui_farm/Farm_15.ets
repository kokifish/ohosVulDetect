// Farm_15.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextTimerComp {
  build() {
    Column() {
      TextTimer()
        .textShadow([])
    }
  }
}

@Component
export struct FarmTimePickerComp {
  build() {
    Column() {
      TimePicker()
        .enableCascade(true)
        .enableHapticFeedback(true)
    }
  }
}

