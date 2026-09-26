// Farm_06.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmDividerComp {
  build() {
    Column() {
      Divider()
        .vertical(true)
    }
  }
}

@Component
export struct FarmFolderStackComp {
  build() {
    Column() {
      FolderStack()
        .alignContent(Alignment.Center)
        .autoHalfFold(true)
        .enableAnimation(true)
    }
  }
}

