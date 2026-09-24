// Farm_08.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmGridColComp {
  build() {
    Column() {
      GridRow() {
        GridCol()
          .gridColOffset(1)
          .order(1)
          .span(1)
      }
    }
  }
}

@Component
export struct FarmImageComp {
  build() {
    Column() {
      Image($r('app.media.startIcon'))
        .antialiased(true)
        .colorFilter(Color.Red)
        .enableAnalyzer(true)
        .fillColor(Color.Red)
        .fitOriginalSize(true)
        .hdrBrightness(1)
        .matchTextDirection(true)
        .privacySensitive(true)
        .supportSvg2(true)
        .syncLoad(true)
    }
  }
}

