// Farm_12.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSelectComp {
  build() {
    Column() {
      Select([])
        .menuBackgroundColor(Color.Red)
        .optionBgColor(Color.Red)
        .optionFontColor(Color.Red)
        .selectedOptionBgColor(Color.Red)
        .selectedOptionFontColor(Color.Red)
        .showDefaultSelectedIcon(true)
        .showInSubWindow(true)
        .space(1)
        .value('ovd')
    }
  }
}

@Component
export struct FarmShapeComp {
  build() {
    Column() {
      Shape()
        .antiAlias(true)
        .fillOpacity(1)
        .strokeDashArray([])
        .strokeDashOffset(1)
        .strokeMiterLimit(1)
        .strokeOpacity(1)
    }
  }
}

