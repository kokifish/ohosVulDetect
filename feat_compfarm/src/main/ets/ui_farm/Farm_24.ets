// Farm_24.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Builder
function _cmBuilderSlider(config: SliderConfiguration) {
}

class _CMSlider implements ContentModifier<SliderConfiguration> {
  applyContent(): WrappedBuilder<[SliderConfiguration]> {
    return wrapBuilder(_cmBuilderSlider);
  }
}

@Component
export struct FarmSliderComp {
  build() {
    Column() {
      Slider()
        .blockBorderColor(Color.Red)
        .blockBorderWidth(1)
        .blockColor(Color.Red)
        .blockSize({ width: 1, height: 1 })
        .blockStyle({ type: SliderBlockType.DEFAULT })
        .contentModifier(new _CMSlider())
        .digitalCrownSensitivity(CrownSensitivity.LOW)
        .enableHapticFeedback(true)
        .maxLabel('ovd')
        .minLabel('ovd')
        .minResponsiveDistance(1)
        .selectedBorderRadius(1)
        .showSteps(true)
        .showTips(true)
        .slideRange({ from: 1, to: 1 })
        .sliderInteractionMode(SliderInteraction.SLIDE_AND_CLICK)
        .stepColor(Color.Red)
        .stepSize(1)
        .trackBorderRadius(1)
        .trackColor(Color.Red)
        .trackThickness(1)
    }
  }
}

@Component
export struct FarmSpanComp {
  build() {
    Column() {
      Text() {
        Span('ovd')
          .font({ size: 1, weight: FontWeight.Lighter })
          .fontStyle(FontStyle.Normal)
          .fontVariations([])
          .textCase(TextCase.Normal)
          .textShadow({ radius: 1 })
      }
    }
  }
}

