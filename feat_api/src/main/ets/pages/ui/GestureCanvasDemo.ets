// 手势族（并行/排他手势组）+ Canvas/Path2D 自绘。
@Entry
@Component
struct GestureCanvasDemo {
  @State px: number = 100;
  @State py: number = 100;
  @State scaleFactor: number = 1;
  @State longPressed: boolean = false;
  @State swiped: string = 'none';
  private settings: RenderingContextSettings = new RenderingContextSettings(true);
  private ctx: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);

  build() {
    Column({ space: 10 }) {
      Text('gestures + canvas').fontSize(20)
      Text(`pan=(${this.px.toFixed(0)},${this.py.toFixed(0)}) scale=${this.scaleFactor.toFixed(2)} ` +
        `longPress=${this.longPressed} swipe=${this.swiped}`)

      Column()
        .width(40)
        .height(40)
        .borderRadius(20)
        .backgroundColor('#007DFF')
        .position({ x: this.px, y: this.py })
        .scale({ x: this.scaleFactor, y: this.scaleFactor })
        .gesture(
          GestureGroup(GestureMode.Parallel,
            PanGesture({ fingers: 1 })
              .onActionUpdate((e: GestureEvent) => {
                this.px += e.offsetX;
                this.py += e.offsetY;
              }),
            PinchGesture({ fingers: 2 })
              .onActionUpdate((e: GestureEvent) => {
                this.scaleFactor = Math.max(0.5, Math.min(3, this.scaleFactor * e.scale / 2 + 0.5));
              })
          ))
        .gesture(
          GestureGroup(GestureMode.Exclusive,
            LongPressGesture({ repeat: false, duration: 600 })
              .onAction(() => {
                this.longPressed = true;
              }),
            SwipeGesture({ fingers: 1, direction: SwipeDirection.Horizontal })
              .onAction((e: GestureEvent) => {
                this.swiped = e.angle > 0 ? 'left' : 'right';
              }),
            TapGesture({ count: 2 })
              .onAction(() => {
                this.longPressed = false;
              })
          ))

      Canvas(this.ctx)
        .width('100%')
        .height(180)
        .backgroundColor('#fafafa')
        .onReady(() => {
          this.ctx.strokeStyle = '#333333';
          this.ctx.beginPath();
          const star = new Path2D();
          star.moveTo(20, 100);
          star.lineTo(60, 20);
          star.lineTo(100, 100);
          star.closePath();
          this.ctx.stroke(star);
          this.ctx.fillStyle = '#ff8888';
          this.ctx.fillRect(150, 40, 80, 60);
          this.ctx.beginPath();
          this.ctx.arc(300, 70, 40, 0, Math.PI, false);
          this.ctx.stroke();
        })
    }
    .width('100%')
    .padding(12)
  }
}
