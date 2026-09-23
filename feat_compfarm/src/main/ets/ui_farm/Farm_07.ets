// Farm_07.ets — 组件 API 缺口补齐语料（生成，勿手改）

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

@Component
export struct FarmScrollComp {
  build() {
    Column() {
      Scroll()
        .enableBouncesZoom(true)
        .enablePaging(true)
        .enableScrollInteraction(true)
        .friction(1)
        .maxZoomScale(1)
        .minZoomScale(1)
        .scrollBarColor(Color.Red)
        .scrollBarWidth(1)
        .zoomScale(1)
    }
  }
}

