// Farm_13.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmMenuComp {
  build() {
    Column() {
      Menu()
        .font({ size: 1, weight: FontWeight.Lighter })
        .menuItemDivider({ color: Color.Red, mode: DividerMode.FLOATING_ABOVE_MENU })
        .menuItemGroupDivider({ color: Color.Red, mode: DividerMode.FLOATING_ABOVE_MENU })
        .radius(1)
        .subMenuExpandingMode(SubMenuExpandingMode.SIDE_EXPAND)
    }
  }
}

@Component
export struct FarmMenuItemComp {
  build() {
    Column() {
      MenuItem()
        .contentFont({ size: 1, weight: FontWeight.Lighter })
        .contentFontColor(Color.Red)
        .labelFont({ size: 1, weight: FontWeight.Lighter })
        .labelFontColor(Color.Red)
        .selectIcon(true)
        .subMenuBuilder((): void => {})
    }
  }
}

