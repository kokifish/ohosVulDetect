// Farm_02.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmCounterComp {
  build() {
    Column() {
      Counter()
        .enableDec(true)
        .enableInc(true)
        .onDec((): void => {})
        .onInc((): void => {})
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

