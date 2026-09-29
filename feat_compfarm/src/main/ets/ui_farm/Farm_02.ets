// Farm_02.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Builder
function _cmBuilderCheckbox(config: CheckBoxConfiguration) {
}

class _CMCheckbox implements ContentModifier<CheckBoxConfiguration> {
  applyContent(): WrappedBuilder<[CheckBoxConfiguration]> {
    return wrapBuilder(_cmBuilderCheckbox);
  }
}

@Component
export struct FarmCheckboxComp {
  build() {
    Column() {
      Checkbox()
        .contentModifier(new _CMCheckbox())
        .mark({ strokeColor: Color.Red, size: 1 })
        .shape(CheckBoxShape.CIRCLE)
        .unselectedColor(Color.Red)
    }
  }
}

@Builder
function _cmBuilderCheckboxGroup(config: CheckBoxGroupConfiguration) {
}

class _CMCheckboxGroup implements ContentModifier<CheckBoxGroupConfiguration> {
  applyContent(): WrappedBuilder<[CheckBoxGroupConfiguration]> {
    return wrapBuilder(_cmBuilderCheckboxGroup);
  }
}

@Component
export struct FarmCheckboxGroupComp {
  build() {
    Column() {
      CheckboxGroup()
        .checkboxShape(CheckBoxShape.CIRCLE)
        .contentModifier(new _CMCheckboxGroup())
        .mark({ strokeColor: Color.Red, size: 1 })
        .selectAll(true)
        .unselectedColor(Color.Red)
    }
  }
}

