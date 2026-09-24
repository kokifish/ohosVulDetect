// Farm_21.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmVideoComp {
  build() {
    Column() {
      Video({  })
        .enableAnalyzer(true)
        .enableShortcutKey(true)
        .muted(true)
        .onFullscreenChange((v: FullscreenInfo): void => {})
        .onPause((): void => {})
        .onPrepared((v: PreparedInfo): void => {})
        .onSeeked((v: PlaybackInfo): void => {})
        .onSeeking((v: PlaybackInfo): void => {})
        .onStop((v: void): void => {})
        .onUpdate((v: PlaybackInfo): void => {})
    }
  }
}

@Component
export struct FarmWaterFlowComp {
  build() {
    Column() {
      WaterFlow()
        .enableScrollInteraction(true)
        .friction(1)
        .rowsTemplate('ovd')
        .supportEmptyBranchInLazyLoading(true)
        .syncLoad(true)
    }
  }
}

