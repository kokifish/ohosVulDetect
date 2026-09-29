// Farm_12.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Builder
function _cmBuilderLoadingProgress(config: LoadingProgressConfiguration) {
}

class _CMLoadingProgress implements ContentModifier<LoadingProgressConfiguration> {
  applyContent(): WrappedBuilder<[LoadingProgressConfiguration]> {
    return wrapBuilder(_cmBuilderLoadingProgress);
  }
}

@Component
export struct FarmLoadingProgressComp {
  build() {
    Column() {
      LoadingProgress()
        .contentModifier(new _CMLoadingProgress())
        .enableLoading(true)
    }
  }
}

@Component
export struct FarmMarqueeComp {
  build() {
    Column() {
      Marquee({ start: true, src: 'ovd' })
        .allowScale(true)
        .marqueeUpdateStrategy(MarqueeUpdateStrategy.DEFAULT)
        .onStop((v: void): void => {})
    }
  }
}

