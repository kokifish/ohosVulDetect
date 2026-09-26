// Farm_18.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmRatingComp {
  build() {
    Column() {
      Rating()
        .starStyle({ backgroundUri: 'ovd', foregroundUri: 'ovd' })
        .stars(1)
        .stepSize(1)
    }
  }
}

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

