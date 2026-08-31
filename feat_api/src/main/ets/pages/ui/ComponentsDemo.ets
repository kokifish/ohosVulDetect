// 组件画廊：一页集中覆盖常用 ArkUI 组件（输入/选择/进度/时间/容器/展示/弹层/绘制/索引）。
// 交互事件统一写回 lines，验证 onChange/onSelect/onSubmit 等事件流。
@CustomDialog
struct BenchDialog {
  controller?: CustomDialogController;

  build() {
    Column({ space: 8 }) {
      Text('custom-dialog-body').fontSize(14)
      Button('dialog-close').onClick(() => this.controller?.close())
    }
    .padding(16)
  }
}

@Entry
@Component
struct ComponentsDemo {
  @State lines: string[] = [];
  @State refreshing: boolean = false;
  @State showSheet: boolean = false;
  @State showCover: boolean = false;
  @State showHeavy: boolean = false;
  private dialog: CustomDialogController = new CustomDialogController({ builder: BenchDialog() });
  private videoCtl: VideoController = new VideoController();
  private triPts: number[][] = [[4, 4], [36, 4], [20, 20]];
  private linePts: number[][] = [[4, 20], [20, 4], [36, 20]];
  private lineA: number[] = [0, 8];
  private lineB: number[] = [28, 8];
  private frames: ImageFrameInfo[] = [{ src: 'https://httpbin.org/image/png' }, { src: 'https://httpbin.org/image/jpeg' }];

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  @Builder
  sheetBody() {
    Column() {
      Text('sheet-body-content').fontSize(16).margin(12)
      Button('sheet-close').onClick(() => this.showSheet = false)
    }
    .width('100%')
    .padding(16)
  }

  @Builder
  coverBody() {
    Column() {
      Text('full-cover-content').fontSize(20).margin(16)
      Button('cover-close').onClick(() => this.showCover = false)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#f5f5f5')
  }

  @Builder
  ctxMenu() {
    Menu() {
      MenuItem({ content: 'ctx-copy' }).onClick(() => this.pick('menu', 'ctx-copy'))
      MenuItem({ content: 'ctx-cut' })
    }
  }

  build() {
    Column() {
      Text('component gallery').fontSize(20).margin(8)
      Scroll() {
        Column({ space: 6 }) {
          // 输入类
          Row({ space: 6 }) {
            Search({ placeholder: 'search-hint' }).width(140)
              .onSubmit((v: string) => this.pick('search', v))
            TextInput({ placeholder: 'text-input' }).width(120)
              .onChange((v: string) => this.pick('textinput', v))
          }
          TextArea({ placeholder: 'text-area' }).height(40)
            .onChange((v: string) => this.pick('textarea', v))
          RichEditor({ controller: new RichEditorController() }).height(40)
            .onReady(() => this.pick('richeditor', 'ready'))

          // 选择类
          Row({ space: 6 }) {
            Select([{ value: 'sel-a' }, { value: 'sel-b' }])
              .selected(0).width(90)
              .onSelect((i: number, v: string) => this.pick('select', v))
            Radio({ value: 'r1', group: 'rg' }).checked(true)
              .onChange((on: boolean) => this.pick('radio', on))
            Radio({ value: 'r2', group: 'rg' })
            Toggle({ type: ToggleType.Switch, isOn: false })
              .onChange((on: boolean) => this.pick('toggle', on))
          }
          Row({ space: 6 }) {
            Checkbox({ name: 'c1', group: 'cg' })
              .onChange((on: boolean) => this.pick('checkbox', on))
            CheckboxGroup({ group: 'cg' })
              .onChange((r: CheckboxGroupResult) => this.pick('checkboxgroup', r.status))
            Rating({ rating: 3, indicator: false })
              .onChange((v: number) => this.pick('rating', v))
          }
          Slider({ value: 50, min: 0, max: 100, style: SliderStyle.OutSet }).width(160)
            .onChange((v: number, m: SliderChangeMode) => this.pick('slider', v))
          Stepper() {
            StepperItem() { Text('step-1') }
            StepperItem() { Text('step-2') }
            StepperItem() { Text('step-3') }
          }
          .onFinish(() => this.pick('stepper', 'finished'))
          .onSkip(() => this.pick('stepper', 'skipped'))

          // 进度/数据展示类
          Row({ space: 10 }) {
            Progress({ value: 40, total: 100, type: ProgressType.Linear }).width(70)
            Progress({ value: 60, total: 100, type: ProgressType.Ring }).width(36)
            DataPanel({ values: [20, 30, 50], max: 100, type: DataPanelType.Circle }).width(48)
            Gauge({ value: 66, min: 0, max: 100 }).width(48)
            LoadingProgress().width(32).color('#007DFF')
          }

          // 时间/日期类
          TextClock().format('HH:mm:ss').onDateChange((v: number) => this.pick('clock', v))
          TextTimer({ isCountDown: false }).onTimer((ms: number) => this.pick('timer', ms))
          DatePicker({ start: new Date('2026-01-01'), end: new Date('2026-12-31'), selected: new Date('2026-06-01') })
            .onDateChange((d: Date) => this.pick('datepicker', d.getMonth()))
          TimePicker({ selected: new Date() }).useMilitaryTime(true)
            .onChange((v: TimePickerResult) => this.pick('timepicker', `${v.hour}:${v.minute}`))
          TextPicker({ range: ['pick-a', 'pick-b', 'pick-c'] })
            .onChange((v: string | string[], i: number | number[]) => this.pick('textpicker', i as number))
          CalendarPicker({ selected: new Date('2026-06-01') })
            .onChange((d: Date) => this.pick('calendar', d.getMonth()))

          // 容器类
          Grid() {
            ForEach(['g1', 'g2', 'g3', 'g4'], (g: string) => {
              GridItem() { Text(g).fontSize(12).padding(4) }
            }, (g: string) => g)
          }
          .columnsTemplate('1fr 1fr').rowsGap(4).height(56)
          GridRow({ columns: 4, gutter: 4 }) {
            GridCol({ span: 2 }) { Text('col-span2').fontSize(12).padding(4) }
            GridCol({ span: 1 }) { Text('col1').fontSize(12).padding(4) }
            GridCol({ span: 1 }) { Text('col1b').fontSize(12).padding(4) }
          }
          WaterFlow() {
            FlowItem() { Text('flow-1').fontSize(12).padding(4) }
            FlowItem() { Text('flow-2').fontSize(12).padding(4) }
            FlowItem() { Text('flow-3').fontSize(12).padding(4) }
          }
          .columnsTemplate('1fr 1fr').columnsGap(4).height(56)
          Refresh({ refreshing: $$this.refreshing }) {
            List() {
              ListItem() { Text('refresh-item').fontSize(12).padding(6) }
            }
            .height(44)
          }
          .onRefreshing(() => this.pick('refresh', 'refreshing'))
          SideBarContainer(SideBarContainerType.Embed) {
            Column() { Text('sidebar').fontSize(12).padding(4) }
            Column() { Text('sidebar-content').fontSize(12).padding(4) }
          }
          .sideBarWidth(80).height(44)
          RowSplit() {
            Column() { Text('rs-a').fontSize(11) }.padding(2)
            Column() { Text('rs-b').fontSize(11) }.padding(2)
          }
          .width(120).height(28)

          // 展示类
          Row({ space: 8 }) {
            Marquee({ src: 'marquee-bench-text', start: true, step: 2, loop: -1 }).width(110)
            QRCode('qr-bench-42').width(40).height(40).color('#333333')
            Badge({ count: 7, position: BadgePosition.RightTop, style: { fontSize: 9 } }) {
              Text('badged').fontSize(12)
            }
          }
          Divider().strokeWidth(1).color('#cccccc')
          ImageAnimator().images(this.frames).duration(4000).width(60).height(36)

          // 弹层/菜单类
          Column({ space: 6 }) {
            Text('tap-sheet').fontSize(13)
              .bindSheet($$this.showSheet, this.sheetBody(), { detents: [SheetSize.MEDIUM] })
            Text('tap-cover').fontSize(13)
              .bindContentCover($$this.showCover, this.coverBody())
            Text('longpress-menu').fontSize(13)
              .bindContextMenu(this.ctxMenu, ResponseType.LongPress)
            Text('tap-bindmenu').fontSize(13)
              .bindMenu([{ value: 'menu-copy', action: () => this.pick('bindmenu', 'copy') },
                { value: 'menu-paste', action: () => this.pick('bindmenu', 'paste') }])
            Button('custom-dialog').onClick(() => this.dialog.open())
          }

          // 绘制类（Shape 系列几何组件；Line 不能作为 Shape 子组件，独立放置）
          Shape() {
            Circle().width(24).height(24).fill('#66AA66')
            Ellipse().width(36).height(20).fill('#AA6666')
            Rect().width(24).height(16).fill('#6666AA')
            Polygon({ width: 40, height: 24 }).points(this.triPts).fill('#AAAA66')
            Polyline({ width: 40, height: 24 }).points(this.linePts).stroke('#66AAAA')
            Path().commands('M2 10 H28 V20 H2 Z').fill('#AA66AA')
          }
          Line().width(30).startPoint(this.lineA).endPoint(this.lineB).stroke('#888888')

          // 索引组件（与 List 配合）
          Row() {
            List() {
              ListItem() { Text('alpha-item-A').fontSize(12).padding(4) }
              ListItem() { Text('alpha-item-B').fontSize(12).padding(4) }
            }
            .width(100)
            AlphabetIndexer({ arrayValue: ['A', 'B', 'C'], selected: 0 })
              .usingPopup(true)
              .onSelected((i: number) => this.pick('alphabet', i))
          }
          .height(56)

          // 重型组件按需挂载（Video/XComponent 需真实资源/表面，默认关闭）
          Button(this.showHeavy ? 'hide heavy' : 'show heavy').onClick(() => this.showHeavy = !this.showHeavy)
          if (this.showHeavy) {
            Video({
              src: 'https://httpbin.org/bytes/65536',
              previewUri: 'https://httpbin.org/image/png',
              controller: this.videoCtl
            }).controls(true).autoPlay(false).height(90)
            XComponent({ id: 'benchxcomp', type: XComponentType.TEXTURE, libraryname: '' })
              .onLoad(() => this.pick('xcomponent', 'loaded'))
              .onDestroy(() => this.pick('xcomponent', 'destroyed'))
              .height(48)
          }

          // 事件日志
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
