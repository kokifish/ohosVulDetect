// Farm_06.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmLoadingProgressComp {
  build() {
    Column() {
      LoadingProgress()
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
        .onStop((v: void): void => {})
    }
  }
}

