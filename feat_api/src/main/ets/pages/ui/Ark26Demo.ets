// 组件收尾页二：Arc 族 + since-26 组件（@kit.ArkUI，对账缺口收口，0 信号页约定）。
// 注意：since-26 组件（Lazy*Layout/SelectionContainer/DynamicLayout/ContainerReader）在
// API24 镜像无模块导出、运行时不可达——运行时可达性以 API26 镜像为准。
import {
  ArcList, ArcListItem, ArcScrollBar, ArcSwiper,
  LazyColumnLayout, LazyVWaterFlowLayout, SelectionContainer,
  DynamicLayout, LazyDynamicLayout, ContainerReader, StackLayoutAlgorithm
} from '@kit.ArkUI';

@Entry
@Component
struct Ark26Demo {
  private scroller: Scroller = new Scroller();

  build() {
    List({ scroller: this.scroller, space: 8 }) {
      ListItem() {
        Column({ space: 8 }) {
        Text('arkui arc components (P2 wrap-up)').fontSize(18)

        ArcList() {
          ArcListItem() { Text('arc-item-1').padding(6) }
          ArcListItem() { Text('arc-item-2').padding(6) }
        }.width('90%').height(120)

        ArcSwiper() {
          Text('arc-swiper-1').padding(8)
          Text('arc-swiper-2').padding(8)
        }.width('90%').height(90)

        ArcScrollBar({ scroller: this.scroller }).width(24)

        List({ scroller: this.scroller, space: 4 }) {
          ListItem() { Text('list-for-scrollbar-1').padding(6) }
          ListItem() { Text('list-for-scrollbar-2').padding(6) }
        }.width('90%').height(90)


      }
      .width('100%')
      }

        ListItem() {
          Text('since-26 components (backfill)').fontSize(16)
        }

        // ets-loader 声明快照缺这些组件的 *Attribute 类型 → 裸构造不链属性；
        // Lazy*Layout 族语法要求直接嵌在 Scroll/List 等 lazy 父组件下。
        LazyColumnLayout() {
          Text('lazy-column-1').padding(6)
          Text('lazy-column-2').padding(6)
        }

        LazyVGridLayout() {
          Text('lazy-grid-1').padding(6)
          Text('lazy-grid-2').padding(6)
        }

        LazyVWaterFlowLayout() {
          Text('lazy-waterflow-1').padding(6)
          Text('lazy-waterflow-2').padding(6)
        }

        LazyDynamicLayout(new StackLayoutAlgorithm()) {
          Text('lazy-dynamic-1').padding(6)
        }

        ListItem() {
          Column({ space: 6 }) {
            DynamicLayout({ algorithm: new StackLayoutAlgorithm() }) {
              Text('dynamic-stack-1').padding(6)
            }
            SelectionContainer() {
              Text('selection-container-text-1').padding(6)
              Text('selection-container-text-2').padding(6)
            }
            ContainerReader({ size: { width: 1320, height: 2232 } }) {
              Text('container-reader-1').padding(6)
            }
          }
        }
    }
    .width('100%')
    .height('100%')
  }
}
