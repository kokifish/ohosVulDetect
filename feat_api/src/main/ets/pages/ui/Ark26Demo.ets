// 组件收尾页二：Arc 族组件（@kit.ArkUI，对账缺口收口，0 信号页约定）
// 注：Lazy*Layout/SelectionContainer/DynamicLayout 为 @since 26 组件，API24 镜像运行时
// 无对应模块导出（jscrash SyntaxError 实证），待 API26 模拟器恢复后再入语料。
import { ArcList, ArcListItem, ArcScrollBar, ArcSwiper } from '@kit.ArkUI';

@Entry
@Component
struct Ark26Demo {
  private scroller: Scroller = new Scroller();

  build() {
    Scroll() {
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
    .height('100%')
  }
}
