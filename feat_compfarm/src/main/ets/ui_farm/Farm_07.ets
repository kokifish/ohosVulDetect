// Farm_07.ets — 组件 API 缺口补齐语料（生成，勿手改）

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
        .enableNavigationIndicator(true)
        .enableStatusBar(true)
        .fullScreenOverlay(true)
        .hideBackButton(true)
        .hideToolBar(true)
        .ignoreLayoutSafeArea([])
        .menus([])
        .onActive((v: NavDestinationActiveReason): void => {})
        .onHidden((v: VisibilityChangeReason): void => {})
        .onInactive((v: NavDestinationActiveReason): void => {})
        .onNewParam((v: ESObject): void => {})
        .onResult((v: ESObject): void => {})
        .onWillDisappear((v: void): void => {})
        .onWillHide((v: void): void => {})
        .onWillShow((v: void): void => {})
        .recoverable(true)
        .toolbarConfiguration([])
    }
  }
}

