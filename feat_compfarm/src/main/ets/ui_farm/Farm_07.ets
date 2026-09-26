// Farm_07.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmGaugeComp {
  build() {
    Column() {
      Gauge({ value: 1 })
        .colors(Color.Red)
        .endAngle(1)
        .privacySensitive(true)
        .startAngle(1)
        .value(1)
    }
  }
}

@Component
export struct FarmGridComp {
  build() {
    Column() {
      Grid()
        .cellLength(1)
        .editMode(true)
        .editModeOptions({ enableGatherSelectedItemsAnimation: true, useDefaultMultiSelectStyle: true })
        .enableEditMode(true)
        .enableScrollInteraction(true)
        .friction(1)
        .maxCount(1)
        .minCount(1)
        .multiSelectable(true)
        .onEditModeChange((v: boolean): void => {})
        .rowsTemplate('ovd')
        .scrollBarColor(Color.Red)
        .scrollBarWidth(1)
        .supportAnimation(true)
        .supportEmptyBranchInLazyLoading(true)
        .syncLoad(true)
    }
  }
}

