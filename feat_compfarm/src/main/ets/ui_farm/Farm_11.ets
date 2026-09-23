// Farm_11.ets — 组件 API 缺口补齐语料（生成，勿手改）

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
        .shaderStyle([])
    }
  }
}

