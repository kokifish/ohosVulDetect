// Farm_11.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmListComp {
  build() {
    Column() {
      List()
        .alignListItem(ListItemAlign.Start)
        .backPressBehavior({ closeSwipeAction: true })
        .chainAnimation(true)
        .contentEndOffset(1)
        .contentStartOffset(1)
        .edgeEffect(EdgeEffect.Spring)
        .editMode(true)
        .enableEditMode(true)
        .enableScrollInteraction(true)
        .focusWrapMode(FocusWrapMode.DEFAULT)
        .friction(1)
        .lanes(1)
        .listDirection(Axis.Vertical)
        .maintainVisibleContentPosition(true)
        .multiSelectable(true)
        .onEditModeChange((v: boolean): void => {})
        .onItemDragStart((): void => {})
        .onScrollVisibleContentChange((): void => {})
        .scrollSnapAlign(ScrollSnapAlign.NONE)
        .scrollSnapAnimationSpeed(ScrollSnapAnimationSpeed.NORMAL)
        .stackFromEnd(true)
        .sticky(StickyStyle.None)
        .supportEmptyBranchInLazyLoading(true)
        .syncLoad(true)
    }
  }
}

@Component
export struct FarmListItemComp {
  build() {
    Column() {
      List() {
        ListItem()
          .editable(true)
          .selectable(true)
          .sticky(Sticky.None)
          .swipeAction({ start: (): void => {}, end: (): void => {} })
      }
    }
  }
}

