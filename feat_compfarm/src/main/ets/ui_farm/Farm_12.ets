// Farm_12.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmMarqueeComp {
  build() {
    Column() {
      Marquee({ start: true, src: 'ovd' })
        .allowScale(true)
        .onStop((v: void): void => {})
    }
  }
}

@Component
export struct FarmMenuItemComp {
  build() {
    Column() {
      MenuItem()
        .contentFontColor(Color.Red)
        .labelFontColor(Color.Red)
        .selectIcon(true)
    }
  }
}

