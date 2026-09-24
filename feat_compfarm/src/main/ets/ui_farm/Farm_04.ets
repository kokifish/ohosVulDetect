// Farm_04.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmCounterComp {
  build() {
    Column() {
      Counter()
        .enableDec(true)
        .enableInc(true)
        .onDec((): void => {})
        .onInc((): void => {})
    }
  }
}

@Component
export struct FarmDataPanelComp {
  build() {
    Column() {
      DataPanel({ values: [] })
        .closeEffect(true)
        .trackBackgroundColor(Color.Red)
        .valueColors([])
    }
  }
}

