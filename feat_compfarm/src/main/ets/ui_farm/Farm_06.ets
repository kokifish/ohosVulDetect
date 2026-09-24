// Farm_06.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmFolderStackComp {
  build() {
    Column() {
      FolderStack()
        .alignContent(Alignment.Center)
        .autoHalfFold(true)
        .enableAnimation(true)
    }
  }
}

@Component
export struct FarmGaugeComp {
  build() {
    Column() {
      Gauge({ value: 1 })
        .colors(Color.Red)
        .endAngle(1)
        .privacySensitive(true)
        .startAngle(1)
        .value(1)
    }
  }
}

