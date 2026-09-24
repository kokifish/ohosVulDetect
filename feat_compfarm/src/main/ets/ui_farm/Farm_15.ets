// Farm_15.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmPatternLockComp {
  build() {
    Column() {
      PatternLock()
        .skipUnselectedPoint(true)
    }
  }
}

@Component
export struct FarmProgressComp {
  build() {
    Column() {
      Progress({ value: 40, total: 100, type: ProgressType.Linear })
        .privacySensitive(true)
        .value(1)
    }
  }
}

