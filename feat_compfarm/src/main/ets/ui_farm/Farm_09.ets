// Farm_09.ets — 组件 API 缺口补齐语料（生成，勿手改）

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

@Component
export struct FarmImageAnimatorComp {
  build() {
    Column() {
      ImageAnimator()
        .fixedSize(true)
        .iterations(1)
        .monitorInvisibleArea(true)
        .preDecode(1)
        .reverse(true)
    }
  }
}

