// Farm_12.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmTabsComp {
  build() {
    Column() {
      Tabs()
        .animationDuration(1)
        .barBackgroundColor(Color.Red)
        .barHeight(1)
        .barOverlap(true)
        .barWidth(1)
        .fadingEdge(true)
        .scrollable(true)
        .vertical(true)
    }
  }
}

@Component
export struct FarmTextComp {
  build() {
    Column() {
      Text()
        .baselineOffset(1)
        .caretColor(Color.Red)
        .enableDataDetector(true)
        .enableHapticFeedback(true)
        .enableSelectedDataDetector(true)
        .fontFeature('ovd')
        .fontVariations([])
        .halfLeading(true)
        .lineHeightMultiple(1)
        .maxFontScale(1)
        .maxFontSize(1)
        .minFontScale(1)
        .minFontSize(1)
        .privacySensitive(true)
        .selectedBackgroundColor(Color.Red)
        .tailIndents([])
        .textIndent(1)
        .textShadow([])
    }
  }
}

