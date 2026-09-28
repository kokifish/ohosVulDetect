// Farm_01.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmCalendarPickerComp {
  build() {
    Column() {
      CalendarPicker()
        .edgeAlign(CalendarAlign.START)
        .markToday(true)
        .textStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
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

