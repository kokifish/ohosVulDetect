// Farm_05.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Builder
function _cmBuilderDataPanel(config: DataPanelConfiguration) {
}

class _CMDataPanel implements ContentModifier<DataPanelConfiguration> {
  applyContent(): WrappedBuilder<[DataPanelConfiguration]> {
    return wrapBuilder(_cmBuilderDataPanel);
  }
}

@Component
export struct FarmDataPanelComp {
  build() {
    Column() {
      DataPanel({ values: [] })
        .closeEffect(true)
        .contentModifier(new _CMDataPanel())
        .trackBackgroundColor(Color.Red)
        .trackShadow({ radius: 1, offsetX: 1 })
        .valueColors([])
    }
  }
}

@Component
export struct FarmDatePickerComp {
  build() {
    Column() {
      DatePicker()
        .canLoop(true)
        .digitalCrownSensitivity(CrownSensitivity.LOW)
        .disappearTextStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
        .enableHapticFeedback(true)
        .lunar(true)
        .selectedTextStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
        .textStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
    }
  }
}

