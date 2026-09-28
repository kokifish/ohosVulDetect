// Farm_02.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmCheckboxComp {
  build() {
    Column() {
      Checkbox()
        .mark({ strokeColor: Color.Red, size: 1 })
        .shape(CheckBoxShape.CIRCLE)
        .unselectedColor(Color.Red)
    }
  }
}

@Component
export struct FarmCheckboxGroupComp {
  build() {
    Column() {
      CheckboxGroup()
        .checkboxShape(CheckBoxShape.CIRCLE)
        .mark({ strokeColor: Color.Red, size: 1 })
        .selectAll(true)
        .unselectedColor(Color.Red)
    }
  }
}

