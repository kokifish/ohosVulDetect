// Farm_02.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmCheckboxComp {
  build() {
    Column() {
      Checkbox()
        .unselectedColor(Color.Red)
    }
  }
}

@Component
export struct FarmCheckboxGroupComp {
  build() {
    Column() {
      CheckboxGroup()
        .selectAll(true)
        .unselectedColor(Color.Red)
    }
  }
}

