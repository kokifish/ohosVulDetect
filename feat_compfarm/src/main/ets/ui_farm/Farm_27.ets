// Farm_27.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTabContentComp {
  build() {
    Column() {
      Tabs() {
        TabContent()
          .onWillHide((): void => {})
          .onWillShow((): void => {})
      }
    }
  }
}

@Component
export struct FarmTabsComp {
  build() {
    Column() {
      Tabs()
        .animationCurve(Curve.Linear)
        .animationDuration(1)
        .animationMode(AnimationMode.CONTENT_FIRST)
        .barBackgroundBlurStyle(BlurStyle.COMPONENT_ULTRA_THIN)
        .barBackgroundColor(Color.Red)
        .barBackgroundEffect({ radius: 1 })
        .barFloatingStyle({ barWidth: { smallBarWidth: 1, mediumBarWidth: 1 }, barSideMargin: 1 })
        .barGridAlign({ sm: 1, md: 1 })
        .barHeight(1)
        .barOverlap(true)
        .barPosition(BarPosition.Start)
        .barWidth(1)
        .edgeEffect(EdgeEffect.Spring)
        .fadingEdge(true)
        .onAnimationEnd((): void => {})
        .onAnimationStart((): void => {})
        .onContentDidScroll((): void => {})
        .onGestureSwipe((): void => {})
        .onTabBarClick((v: number): void => {})
        .onUnselected((v: number): void => {})
        .pageFlipMode(PageFlipMode.CONTINUOUS)
        .scrollable(true)
        .vertical(true)
    }
  }
}

