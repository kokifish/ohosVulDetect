// Farm_00.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmAlphabetIndexerComp {
  build() {
    Column() {
      AlphabetIndexer({ arrayValue: [], selected: 1 })
        .alignStyle(IndexerAlign.Left)
        .autoCollapse(true)
        .enableHapticFeedback(true)
        .font({ size: 1, weight: FontWeight.Lighter })
        .itemBorderRadius(1)
        .itemSize('ovd')
        .onPopupSelect((): void => {})
        .popupBackground(Color.Red)
        .popupBackgroundBlurStyle(BlurStyle.COMPONENT_ULTRA_THIN)
        .popupColor(Color.Red)
        .popupFont({ size: 1, weight: FontWeight.Lighter })
        .popupItemBackgroundColor(Color.Red)
        .popupItemBorderRadius(1)
        .popupItemFont({ size: 1, weight: FontWeight.Lighter })
        .popupPosition({ x: 1, y: 1 })
        .popupSelectedColor(Color.Red)
        .popupTitleBackground(Color.Red)
        .popupUnselectedColor(Color.Red)
        .selectedBackgroundColor(Color.Red)
        .selectedFont({ size: 1, weight: FontWeight.Lighter })
    }
  }
}

@Builder
function _cmBuilderButton(config: ButtonConfiguration) {
}

class _CMButton implements ContentModifier<ButtonConfiguration> {
  applyContent(): WrappedBuilder<[ButtonConfiguration]> {
    return wrapBuilder(_cmBuilderButton);
  }
}

@Component
export struct FarmButtonComp {
  build() {
    Column() {
      Button()
        .buttonStyle(ButtonStyleMode.NORMAL)
        .contentModifier(new _CMButton())
        .controlSize(ControlSize.SMALL)
        .fontStyle(FontStyle.Normal)
        .labelStyle({ overflow: TextOverflow.None, maxLines: 1 })
        .maxFontScale(1)
        .minFontScale(1)
        .role(ButtonRole.NORMAL)
        .stateEffect(true)
    }
  }
}

