// Farm_04.ets — 组件 API 缺口补齐语料（生成，勿手改）

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

@Component
export struct FarmNavDestinationComp {
  build() {
    Column() {
      NavDestination()
        .backButtonIcon('ovd')
        .bindToNestedScrollable([])
        .bindToScrollable([])
        .hideToolBar(true)
        .ignoreLayoutSafeArea([])
        .menus([])
        .toolbarConfiguration([])
    }
  }
}

