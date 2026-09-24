// Farm_19.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSaveButtonComp {
  build() {
    Column() {
      SaveButton()
        .setIcon($r('app.media.startIcon'))
        .setText('ovd')
        .stateEffect(true)
        .symbolFontWeight(1)
        .symbolIconColor([])
        .userCancelEvent(true)
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
        .onScrollStart((): void => {})
        .onScrollStop((): void => {})
        .onZoomStart((): void => {})
        .onZoomStop((): void => {})
        .scrollBarColor(Color.Red)
        .scrollBarWidth(1)
        .zoomScale(1)
    }
  }
}

