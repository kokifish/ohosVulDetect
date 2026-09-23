// Farm_16.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmVideoComp {
  build() {
    Column() {
      Video({  })
        .enableAnalyzer(true)
        .enableShortcutKey(true)
        .muted(true)
    }
  }
}

@Component
export struct FarmWaterFlowComp {
  build() {
    Column() {
      WaterFlow()
        .enableScrollInteraction(true)
        .friction(1)
        .rowsTemplate('ovd')
        .supportEmptyBranchInLazyLoading(true)
        .syncLoad(true)
    }
  }
}

