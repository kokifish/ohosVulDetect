// Farm_09.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmShapeComp {
  build() {
    Column() {
      Shape()
        .antiAlias(true)
        .fillOpacity(1)
        .strokeDashArray([])
        .strokeDashOffset(1)
        .strokeMiterLimit(1)
        .strokeOpacity(1)
    }
  }
}

@Component
export struct FarmSideBarContainerComp {
  build() {
    Column() {
      SideBarContainer()
        .autoHide(true)
        .maxSideBarWidth(1)
        .minSideBarWidth(1)
        .showControlButton(true)
        .showSideBar(true)
        .showSideBarWithGesture(true)
    }
  }
}

