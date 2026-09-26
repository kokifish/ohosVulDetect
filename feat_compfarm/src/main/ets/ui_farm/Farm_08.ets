// Farm_08.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmGridItemComp {
  build() {
    Column() {
      Grid() {
        GridItem()
          .columnEnd(1)
          .columnStart(1)
          .forceRebuild(true)
          .rowEnd(1)
          .rowStart(1)
          .selectable(true)
      }
    }
  }
}

@Component
export struct FarmGridColComp {
  build() {
    Column() {
      GridRow() {
        GridCol()
          .gridColOffset(1)
          .order(1)
          .span(1)
      }
    }
  }
}

