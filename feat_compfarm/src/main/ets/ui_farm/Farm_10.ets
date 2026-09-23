// Farm_10.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSliderComp {
  build() {
    Column() {
      Slider()
        .blockBorderColor(Color.Red)
        .blockBorderWidth(1)
        .blockColor(Color.Red)
        .enableHapticFeedback(true)
        .maxLabel('ovd')
        .minLabel('ovd')
        .minResponsiveDistance(1)
        .showSteps(true)
        .showTips(true)
        .stepColor(Color.Red)
        .stepSize(1)
        .trackBorderRadius(1)
        .trackColor(Color.Red)
        .trackThickness(1)
    }
  }
}

@Component
export struct FarmStackComp {
  build() {
    Column() {
      Stack()
        .syncLoad(true)
    }
  }
}

