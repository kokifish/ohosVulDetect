// Farm_15.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSwiperComp {
  build() {
    Column() {
      Swiper()
        .curve('ovd')
        .disableSwipe(true)
        .displayArrow(true)
        .displayCount(1)
        .index(1)
        .indicatorInteractive(true)
        .interval(1)
        .itemSpace(1)
        .maintainVisibleContentPosition(true)
        .nextMargin(1)
        .onScrollStateChanged((v: ScrollState): void => {})
        .onUnselected((v: number): void => {})
        .prevMargin(1)
        .vertical(true)
    }
  }
}

@Component
export struct FarmSymbolGlyphComp {
  build() {
    Column() {
      SymbolGlyph()
        .maxFontScale(1)
        .minFontScale(1)
        .shaderStyle([])
    }
  }
}

