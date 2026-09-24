// Farm_14.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmStackComp {
  build() {
    Column() {
      Stack()
        .alignContent(Alignment.Center)
        .syncLoad(true)
    }
  }
}

@Component
export struct FarmStepperItemComp {
  build() {
    Column() {
      Stepper() {
        StepperItem()
          .nextLabel('ovd')
          .prevLabel('ovd')
      }
    }
  }
}

