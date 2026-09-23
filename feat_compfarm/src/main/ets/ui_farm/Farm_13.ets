// Farm_13.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTextPickerComp {
  build() {
    Column() {
      TextPicker()
        .canLoop(true)
        .defaultPickerItemHeight(1)
        .disableTextStyleAnimation(true)
        .selectedIndex(1)
    }
  }
}

@Component
export struct FarmTextClockComp {
  build() {
    Column() {
      TextClock()
        .fontFeature('ovd')
        .textShadow([])
    }
  }
}

