// 相对布局与容器补充：RelativeContainer（官方主推相对布局）、Blank、ColumnSplit、
// Scrollbar（独立滚动条组件）、ListItemGroup（分组列表）。事件统一写回 lines。
@Entry
@Component
struct RelativeDemo {
  @State lines: string[] = [];
  @State counter: number = 0;
  private scroller: Scroller = new Scroller();

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  build() {
    Scroll() {
      Column({ space: 12 }) {
        Text('RelativeContainer anchored').fontSize(16).fontWeight(FontWeight.Bold)
        RelativeContainer() {
          Text('rc-tl')
            .id('tl')
            .fontSize(12).padding(8).backgroundColor('#aaccff')
            .alignRules({
              top: { anchor: 'container', align: VerticalAlign.Top },
              left: { anchor: 'container', align: HorizontalAlign.Start }
            })
            .margin(8)
          Text('rc-center')
            .id('ctr')
            .fontSize(12).padding(8).backgroundColor('#ccffaa')
            .alignRules({
              center: { anchor: 'container', align: VerticalAlign.Center }
            })
            .onClick(() => this.pick('rc-center-click', ++this.counter))
          Text('rc-below-tl')
            .fontSize(12).padding(8).backgroundColor('#ffd0aa')
            .alignRules({
              top: { anchor: 'tl', align: VerticalAlign.Bottom },
              left: { anchor: 'tl', align: HorizontalAlign.Start }
            })
            .margin({ top: 8 })
          Text('rc-br')
            .fontSize(12).padding(8).backgroundColor('#e0bbff')
            .alignRules({
              bottom: { anchor: 'container', align: VerticalAlign.Bottom },
              right: { anchor: 'container', align: HorizontalAlign.End }
            })
            .margin(8)
        }
        .width('100%').height(160).backgroundColor('#f5f5f5')

        Text('Blank spacer in Row').fontSize(16).fontWeight(FontWeight.Bold)
        Row() {
          Text('blank-left').fontSize(12).padding(4)
          Blank().backgroundColor('#dddddd').height(12)
          Text('blank-right').fontSize(12).padding(4)
        }
        .width('100%')
        .onClick(() => this.pick('blank-row-click', true))

        Text('ColumnSplit').fontSize(16).fontWeight(FontWeight.Bold)
        ColumnSplit() {
          Text('cs-1').fontSize(12).padding(8).backgroundColor('#cfe8ff').width('100%').textAlign(TextAlign.Center)
          Text('cs-2').fontSize(12).padding(8).backgroundColor('#ffe8cf').width('100%').textAlign(TextAlign.Center)
          Text('cs-3').fontSize(12).padding(8).backgroundColor('#e8ffcf').width('100%').textAlign(TextAlign.Center)
        }
        .divider({ startMargin: 4, endMargin: 4 })
        .resizeable(true)
        .height(120).width('100%')

        Text('Scroll + Scrollbar').fontSize(16).fontWeight(FontWeight.Bold)
        Row({ space: 8 }) {
          Scroll(this.scroller) {
            Column({ space: 4 }) {
              ForEach(['scr-a', 'scr-b', 'scr-c', 'scr-d', 'scr-e', 'scr-f'], (it: string) => {
                Text(it).fontSize(12).padding(6).backgroundColor('#f0f0f0')
              }, (it: string) => it)
            }
          }
          .scrollBar(BarState.Off)
          .nestedScroll({ scrollForward: NestedScrollMode.SELF_FIRST, scrollBackward: NestedScrollMode.SELF_FIRST })
          .width('80%').height(110)
          ScrollBar({ scroller: this.scroller })
          .width(6).height(110)
        }
        .width('100%')

        Button('scroll-to-b')
          .onClick(() => {
            this.scroller.scrollTo({ xOffset: 0, yOffset: 60 });
            this.pick('scroll-to', 60);
          })

        Text('ListItemGroup').fontSize(16).fontWeight(FontWeight.Bold)
        List() {
          ListItemGroup({ header: this.groupHeader('group-fruits') }) {
            ListItem() {
              Text('item-apple').fontSize(12).padding(6).onClick(() => this.pick('list-item-click', 'apple'))
            }
            ListItem() {
              Text('item-banana').fontSize(12).padding(6).onClick(() => this.pick('list-item-click', 'banana'))
            }
          }
          ListItemGroup({ header: this.groupHeader('group-veg') }) {
            ListItem() {
              Text('item-carrot').fontSize(12).padding(6).onClick(() => this.pick('list-item-click', 'carrot'))
            }
          }
        }
        .divider({ strokeWidth: 1, color: '#eeeeee' })
        .height(180).width('100%')

        ForEach(this.lines, (l: string) => Text(l).fontSize(12).fontColor('#0066cc'), (l: string) => l)
      }
      .padding(12)
    }
    .height('100%')
  }

  @Builder
  groupHeader(title: string) {
    Text(title).fontSize(13).fontWeight(FontWeight.Bold).padding(6).backgroundColor('#eef')
  }
}
