// Farm_19.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmRefreshComp {
  build() {
    Column() {
      Refresh({ refreshing: true })
        .maxPullDownDistance(1)
        .onOffsetChange((v: number): void => {})
        .pullDownRatio(1)
        .pullToRefresh(true)
        .pullUpToCancelRefresh(true)
        .refreshOffset(1)
    }
  }
}

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

