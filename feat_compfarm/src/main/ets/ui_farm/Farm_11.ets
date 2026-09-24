// Farm_11.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmListItemComp {
  build() {
    Column() {
      List() {
        ListItem()
          .editable(true)
          .selectable(true)
      }
    }
  }
}

@Component
export struct FarmLoadingProgressComp {
  build() {
    Column() {
      LoadingProgress()
        .enableLoading(true)
    }
  }
}

