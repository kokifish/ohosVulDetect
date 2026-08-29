// 列表渲染三形态：LazyForEach+IDataSource / Repeat(.key/.virtualScroll) / Swiper / Tabs 自定义 tabBar。
class NumberSource implements IDataSource {
  private items: number[] = [];
  private listeners: DataChangeListener[] = [];

  constructor(cnt: number) {
    for (let i = 0; i < cnt; i += 1) {
      this.items.push(i);
    }
  }

  totalCount(): number {
    return this.items.length;
  }

  getData(idx: number): number {
    return this.items[idx];
  }

  registerDataChangeListener(l: DataChangeListener): void {
    if (this.listeners.indexOf(l) < 0) {
      this.listeners.push(l);
    }
  }

  unregisterDataChangeListener(l: DataChangeListener): void {
    const idx = this.listeners.indexOf(l);
    if (idx >= 0) {
      this.listeners.splice(idx, 1);
    }
  }
}

@Entry
@Component
struct ListDemo {
  @State swiperIdx: number = 0;
  private lazySource: NumberSource = new NumberSource(100);
  private repeatData: number[] = [];

  aboutToAppear(): void {
    for (let i = 0; i < 50; i += 1) {
      this.repeatData.push(i);
    }
  }

  @Builder
  tabBuilder(idx: number, title: string) {
    Column() {
      Text(title).fontSize(idx === 0 ? 16 : 14)
      Divider().strokeWidth(2).color(idx === 0 ? '#007DFF' : '#cccccc')
    }.width('100%')
  }

  build() {
    Tabs({ barPosition: BarPosition.Start }) {
      TabContent() {
        List() {
          LazyForEach(this.lazySource, (n: number) => {
            ListItem() {
              Text(`lazy item ${n}`).fontSize(14).padding(6)
            }
          }, (n: number) => `lazy-${n}`)
        }
        .cachedCount(5)
        .divider({ strokeWidth: 1, color: '#eeeeee' })
      }
      .tabBar(this.tabBuilder(0, 'LazyForEach'))

      TabContent() {
        List() {
          Repeat<number>(this.repeatData)
            .key((n: number) => `k-${n}`)
            .virtualScroll()
            .each((ri: RepeatItem<number>) => {
              Text(`repeat item ${ri.item}`).fontSize(14).padding(6)
            })
        }
      }
      .tabBar(this.tabBuilder(1, 'Repeat'))

      TabContent() {
        Swiper() {
          Text('swiper page 1').fontSize(24)
          Text('swiper page 2').fontSize(24)
          Text('swiper page 3').fontSize(24)
        }
        .indicator(true)
        .loop(true)
      }
      .tabBar(this.tabBuilder(2, 'Swiper'))
    }
    .barMode(BarMode.Fixed)
    .width('100%')
    .height('100%')
  }
}
