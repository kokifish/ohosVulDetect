// Farm_31.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTimePickerComp {
  build() {
    Column() {
      TimePicker()
        .digitalCrownSensitivity(CrownSensitivity.LOW)
        .disappearTextStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
        .enableCascade(true)
        .enableHapticFeedback(true)
        .onEnterSelectedArea((v: TimePickerResult): void => {})
        .selectedTextStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
        .textStyle({ color: Color.Red, font: { size: 1, weight: FontWeight.Lighter } })
    }
  }
}

@Component
export struct FarmToggleComp {
  build() {
    Column() {
      Toggle({ type: ToggleType.Checkbox })
        .switchPointColor(Color.Red)
        .switchStyle({ pointRadius: 1, unselectedColor: Color.Red })
    }
  }
}

