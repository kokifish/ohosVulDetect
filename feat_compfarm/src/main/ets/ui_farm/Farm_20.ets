// Farm_20.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmRowComp {
  build() {
    Column() {
      Row()
        .reverse(true)
    }
  }
}

@Component
export struct FarmSaveButtonComp {
  build() {
    Column() {
      SaveButton()
        .iconBorderRadius(1)
        .iconSize(1)
        .setIcon($r('app.media.startIcon'))
        .setText('ovd')
        .stateEffect(true)
        .symbolFontWeight(1)
        .symbolIconColor([])
        .symbolRenderingStrategy(SymbolRenderingStrategy.SINGLE)
        .userCancelEvent(true)
    }
  }
}

