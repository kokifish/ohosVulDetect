// Farm_09.ets — 组件 API 缺口补齐语料（生成，勿手改）

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

