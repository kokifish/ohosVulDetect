// Farm_09.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmRectComp {
  build() {
    Column() {
      Rect()
        .radius(1)
        .radiusHeight(1)
        .radiusWidth(1)
    }
  }
}

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

