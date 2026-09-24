// Farm_14.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmNavigatorComp {
  build() {
    Column() {
      Navigator()
        .active(true)
        .target('ovd')
    }
  }
}

@Component
export struct FarmPanelComp {
  build() {
    Column() {
      Panel(true)
        .backgroundMask(Color.Red)
        .fullHeight(1)
        .halfHeight(1)
        .miniHeight(1)
        .showCloseIcon(true)
    }
  }
}

