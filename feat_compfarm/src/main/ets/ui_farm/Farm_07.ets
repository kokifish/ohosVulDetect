// Farm_07.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Builder
function _cmBuilderGauge(config: GaugeConfiguration) {
}

class _CMGauge implements ContentModifier<GaugeConfiguration> {
  applyContent(): WrappedBuilder<[GaugeConfiguration]> {
    return wrapBuilder(_cmBuilderGauge);
  }
}

@Component
export struct FarmGaugeComp {
  build() {
    Column() {
      Gauge({ value: 1 })
        .colors(Color.Red)
        .contentModifier(new _CMGauge())
        .description((): void => {})
        .endAngle(1)
        .privacySensitive(true)
        .startAngle(1)
        .trackShadow({ radius: 1, offsetX: 1 })
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
        .edgeEffect(EdgeEffect.Spring)
        .editMode(true)
        .enableEditMode(true)
        .enableScrollInteraction(true)
        .focusWrapMode(FocusWrapMode.DEFAULT)
        .friction(1)
        .layoutDirection(GridDirection.Row)
        .maxCount(1)
        .minCount(1)
        .multiSelectable(true)
        .onEditModeChange((v: boolean): void => {})
        .onItemDragStart((): void => {})
        .rowsTemplate('ovd')
        .scrollBarColor(Color.Red)
        .scrollBarWidth(1)
        .supportAnimation(true)
        .supportEmptyBranchInLazyLoading(true)
        .syncLoad(true)
    }
  }
}

