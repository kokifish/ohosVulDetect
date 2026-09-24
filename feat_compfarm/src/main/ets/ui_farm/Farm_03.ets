// Farm_03.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmColumnComp {
  build() {
    Column() {
      Column()
        .reverse(true)
    }
  }
}

@Component
export struct FarmComponent3DComp {
  build() {
    Column() {
      Component3D()
        .environment('ovd')
        .shader('ovd')
        .shaderImageTexture('ovd')
        .shaderInputBuffer([])
    }
  }
}

