// Farm_01.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmCalendarPickerComp {
  build() {
    Column() {
      CalendarPicker()
        .markToday(true)
    }
  }
}

@Component
export struct FarmCanvasComp {
  build() {
    Column() {
      Canvas()
        .enableAnalyzer(true)
    }
  }
}

