// Farm_18.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Builder
function _cmBuilderRating(config: RatingConfiguration) {
}

class _CMRating implements ContentModifier<RatingConfiguration> {
  applyContent(): WrappedBuilder<[RatingConfiguration]> {
    return wrapBuilder(_cmBuilderRating);
  }
}

@Component
export struct FarmRatingComp {
  build() {
    Column() {
      Rating()
        .contentModifier(new _CMRating())
        .starStyle({ backgroundUri: 'ovd', foregroundUri: 'ovd' })
        .stars(1)
        .stepSize(1)
    }
  }
}

@Component
export struct FarmRectComp {
  build() {
    Column() {
      Rect()
        .radius(1)
        .radiusHeight(1)
        .radiusWidth(1)
    }
  }
}

