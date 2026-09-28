// Farm_21.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmScrollComp {
  build() {
    Column() {
      Scroll()
        .edgeEffect(EdgeEffect.Spring)
        .enableBouncesZoom(true)
        .enablePaging(true)
        .enableScrollInteraction(true)
        .friction(1)
        .initialOffset({ xOffset: 1, yOffset: 1 })
        .maxZoomScale(1)
        .minZoomScale(1)
        .onDidScroll((): void => {})
        .onDidZoom((): void => {})
        .onScrollEdge((): void => {})
        .onScrollStart((): void => {})
        .onScrollStop((): void => {})
        .onWillScroll((): void => {})
        .onZoomStart((): void => {})
        .onZoomStop((): void => {})
        .scrollBarColor(Color.Red)
        .scrollBarWidth(1)
        .scrollSnap({ snapAlign: ScrollSnapAlign.NONE })
        .scrollable(ScrollDirection.FREE)
        .zoomScale(1)
    }
  }
}

@Component
export struct FarmScrollBarComp {
  build() {
    Column() {
      ScrollBar({ scroller: new Scroller() })
        .enableNestedScroll(true)
    }
  }
}

