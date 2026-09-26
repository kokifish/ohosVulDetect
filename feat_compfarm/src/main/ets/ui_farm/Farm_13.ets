// Farm_13.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmMenuComp {
  build() {
    Column() {
      Menu()
        .font({ size: 1, weight: 1 })
    }
  }
}

@Component
export struct FarmMenuItemComp {
  build() {
    Column() {
      MenuItem()
        .contentFont({ size: 1, weight: 1 })
        .contentFontColor(Color.Red)
        .labelFont({ size: 1, weight: 1 })
        .labelFontColor(Color.Red)
        .selectIcon(true)
    }
  }
}

