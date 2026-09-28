// Farm_32.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmUIPickerComponentComp {
  build() {
    Column() {
      UIPickerComponent()
        .canLoop(true)
        .displayedItemCount(1)
        .enableHapticFeedback(true)
        .onScrollStop((): void => {})
        .selectionIndicator({ type: PickerIndicatorType.BACKGROUND })
    }
  }
}

@Component
export struct FarmVideoComp {
  build() {
    Column() {
      Video({ src: 'ovd', currentProgressRate: 1 })
        .analyzerConfig({ types: [] })
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

