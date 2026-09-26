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

@Component
export struct FarmRadioComp {
  build() {
    Column() {
      Radio({ group: 'ovd', value: 'ovd' })
        .radioStyle({ checkedBackgroundColor: Color.Red, uncheckedBorderColor: Color.Red })
    }
  }
}

