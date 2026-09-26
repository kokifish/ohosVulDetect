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
        .animationDuration(1)
        .barBackgroundColor(Color.Red)
        .barBackgroundEffect({ radius: 1 })
        .barFloatingStyle({ barWidth: { smallBarWidth: 1, mediumBarWidth: 1 }, barSideMargin: 1 })
        .barGridAlign({ sm: 1, md: 1 })
        .barHeight(1)
        .barOverlap(true)
        .barWidth(1)
        .fadingEdge(true)
        .onTabBarClick((v: number): void => {})
        .onUnselected((v: number): void => {})
        .scrollable(true)
        .vertical(true)
    }
  }
}

