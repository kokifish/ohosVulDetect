// Farm_17.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmQRCodeComp {
  build() {
    Column() {
      QRCode('ovd')
        .contentOpacity(1)
    }
  }
}

@Builder
function _cmBuilderRadio(config: RadioConfiguration) {
}

class _CMRadio implements ContentModifier<RadioConfiguration> {
  applyContent(): WrappedBuilder<[RadioConfiguration]> {
    return wrapBuilder(_cmBuilderRadio);
  }
}

@Component
export struct FarmRadioComp {
  build() {
    Column() {
      Radio({ group: 'ovd', value: 'ovd' })
        .contentModifier(new _CMRadio())
        .radioStyle({ checkedBackgroundColor: Color.Red, uncheckedBorderColor: Color.Red })
    }
  }
}

