// 动画形态：animateTo（闭包改状态）/.animation 隐式/TransitionEffect/geometryTransition。
@Entry
@Component
struct AnimDemo {
  @State toggle: boolean = false;
  @State angle: number = 0;
  @State animSize: number = 80;

  build() {
    Column({ space: 14 }) {
      Text('animation demo').fontSize(20)

      if (this.toggle) {
        Text('shared-A')
          .fontSize(18)
          .geometryTransition('gt1')
          .padding(12)
          .backgroundColor('#ffdddd')
      } else {
        Text('shared-B')
          .fontSize(28)
          .geometryTransition('gt1')
          .padding(24)
          .backgroundColor('#ddffdd')
      }

      Text('rotate me')
        .fontSize(18)
        .rotate({ angle: this.angle, centerX: '50%', centerY: '50%' })
        .animation({ duration: 400, curve: Curve.Ease })

      Text(`size ${this.animSize.toFixed(0)}`)
        .fontSize(16)
        .width(this.animSize)
        .height(this.animSize)
        .backgroundColor('#ddddff')
        .transition(TransitionEffect.OPACITY.animation({ duration: 300 })
          .combine(TransitionEffect.translate({ y: 60 })))

      Button('animateTo toggle')
        .onClick(() => {
          this.getUIContext().animateTo({ duration: 500, curve: Curve.Friction }, () => {
            this.toggle = !this.toggle;
            this.angle = this.angle === 0 ? 180 : 0;
            this.animSize = this.animSize === 80 ? 140 : 80;
          });
        })

      Button('keyframeAnimateTo')
        .onClick(() => {
          this.getUIContext().keyframeAnimateTo({ iterations: 1 }, [
            { duration: 200, curve: Curve.Ease, event: () => {
              this.animSize = 120;
            } },
            { duration: 300, curve: Curve.EaseOut, event: () => {
              this.animSize = 90;
            } }
          ]);
        })
    }
    .width('100%')
    .padding(12)
  }
}
