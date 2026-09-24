// Farm_18.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmRelativeContainerComp {
  build() {
    Column() {
      RelativeContainer()
        .barrier([])
        .guideLine([])
    }
  }
}

@Component
export struct FarmRowComp {
  build() {
    Column() {
      Row()
        .reverse(true)
    }
  }
}

