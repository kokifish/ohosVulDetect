// Farm_00.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmButtonComp {
  build() {
    Column() {
      Button()
        .maxFontScale(1)
        .minFontScale(1)
        .stateEffect(true)
    }
  }
}

@Component
export struct FarmCheckboxComp {
  build() {
    Column() {
      Checkbox()
        .unselectedColor(Color.Red)
    }
  }
}

