// Farm_08.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmNavigationComp {
  build() {
    Column() {
      Navigation()
        .backButtonIcon('ovd')
        .enableDragBar(true)
        .enableModeChangeAnimation(true)
        .enableToolBarAdaptation(true)
        .enableVisibilityLifecycleWithContentCover(true)
        .hideBackButton(true)
        .hideNavBar(true)
        .hideToolBar(true)
        .ignoreLayoutSafeArea([])
        .menus([])
        .navBarWidth(1)
        .recoverable(true)
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

