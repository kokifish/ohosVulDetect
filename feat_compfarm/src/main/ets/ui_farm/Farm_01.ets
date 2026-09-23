// Farm_01.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmGridComp {
  build() {
    Column() {
      Grid()
        .cellLength(1)
        .editMode(true)
        .enableEditMode(true)
        .enableScrollInteraction(true)
        .friction(1)
        .maxCount(1)
        .minCount(1)
        .multiSelectable(true)
        .rowsTemplate('ovd')
        .scrollBarColor(Color.Red)
        .scrollBarWidth(1)
        .supportAnimation(true)
        .supportEmptyBranchInLazyLoading(true)
        .syncLoad(true)
    }
  }
}

@Component
export struct FarmImageAnimatorComp {
  build() {
    Column() {
      ImageAnimator()
        .fixedSize(true)
        .iterations(1)
        .monitorInvisibleArea(true)
        .preDecode(1)
        .reverse(true)
    }
  }
}

