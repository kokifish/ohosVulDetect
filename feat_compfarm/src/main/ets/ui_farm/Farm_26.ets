// Farm_26.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSwiperComp {
  build() {
    Column() {
      Swiper()
        .curve(Curve.Linear)
        .customContentTransition({ transition: (v: SwiperContentTransitionProxy): void => {} })
        .disableSwipe(true)
        .displayArrow({ showBackground: true, isSidebarMiddle: true })
        .displayCount(1)
        .displayMode(SwiperDisplayMode.Stretch)
        .effectMode(EdgeEffect.Spring)
        .index(1)
        .indicatorInteractive(true)
        .indicatorStyle({ left: 1, top: 1 })
        .interval(1)
        .itemSpace(1)
        .maintainVisibleContentPosition(true)
        .nextMargin(1)
        .onAnimationEnd((): void => {})
        .onAnimationStart((): void => {})
        .onContentDidScroll((): void => {})
        .onGestureSwipe((): void => {})
        .onScrollStateChanged((v: ScrollState): void => {})
        .onUnselected((v: number): void => {})
        .pageFlipMode(PageFlipMode.CONTINUOUS)
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
        .effectStrategy(SymbolEffectStrategy.NONE)
        .maxFontScale(1)
        .minFontScale(1)
        .renderingStrategy(SymbolRenderingStrategy.SINGLE)
        .shaderStyle([])
        .symbolShadow({ radius: 1 })
    }
  }
}

