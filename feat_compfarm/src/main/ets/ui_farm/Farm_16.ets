// Farm_16.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmPatternLockComp {
  build() {
    Column() {
      PatternLock()
        .activateCircleStyle({ color: Color.Red, enableWaveEffect: true })
        .skipUnselectedPoint(true)
    }
  }
}

@Builder
function _cmBuilderProgress(config: ProgressConfiguration) {
}

class _CMProgress implements ContentModifier<ProgressConfiguration> {
  applyContent(): WrappedBuilder<[ProgressConfiguration]> {
    return wrapBuilder(_cmBuilderProgress);
  }
}

@Component
export struct FarmProgressComp {
  build() {
    Column() {
      Progress({ value: 40, total: 100, type: ProgressType.Linear })
        .contentModifier(new _CMProgress())
        .privacySensitive(true)
        .value(1)
    }
  }
}

