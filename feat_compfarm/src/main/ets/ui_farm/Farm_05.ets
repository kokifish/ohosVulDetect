// Farm_05.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmNavigationComp {
  build() {
    Column() {
      Navigation()
        .backButtonIcon('ovd')
        .hideBackButton(true)
        .hideNavBar(true)
        .hideToolBar(true)
        .ignoreLayoutSafeArea([])
        .menus([])
        .navBarWidth(1)
        .subTitle('ovd')
        .toolbarConfiguration([])
    }
  }
}

@Component
export struct FarmRatingComp {
  build() {
    Column() {
      Rating()
        .stars(1)
        .stepSize(1)
    }
  }
}

