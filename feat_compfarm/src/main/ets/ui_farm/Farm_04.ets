// Farm_04.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmContainerSpanComp {
  build() {
    Column() {
      Text() {
        ContainerSpan()
          .textBackgroundStyle({ color: Color.Red })
      }
    }
  }
}

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

