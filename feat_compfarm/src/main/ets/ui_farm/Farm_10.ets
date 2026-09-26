// Farm_10.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmImageSpanComp {
  build() {
    Column() {
      Text() {
        ImageSpan($r('app.media.startIcon'))
          .supportSvg2(true)
      }
    }
  }
}

@Component
export struct FarmIndicatorComponentComp {
  build() {
    Column() {
      IndicatorComponent()
        .count(1)
        .initialIndex(1)
        .vertical(true)
    }
  }
}

