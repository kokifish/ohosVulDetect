// Farm_10.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmIndicatorComponentComp {
  build() {
    Column() {
      IndicatorComponent()
        .count(1)
        .initialIndex(1)
        .vertical(true)
    }
  }
}

@Component
export struct FarmListComp {
  build() {
    Column() {
      List()
        .chainAnimation(true)
        .contentEndOffset(1)
        .contentStartOffset(1)
        .editMode(true)
        .enableEditMode(true)
        .enableScrollInteraction(true)
        .friction(1)
        .lanes(1)
        .maintainVisibleContentPosition(true)
        .multiSelectable(true)
        .onEditModeChange((v: boolean): void => {})
        .stackFromEnd(true)
        .supportEmptyBranchInLazyLoading(true)
        .syncLoad(true)
    }
  }
}

