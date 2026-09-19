// 组件收尾页一：容器/导航/转场族（对账缺口收口，0 信号页约定）
import { DemoItem } from 'lib_common';

@Entry
@Component
struct CompositeDemo {
  @State showPanel: boolean = false;

  // PageTransition* 以 pageTransition 具名 builder 形式挂页（对账按 PageTransition*( 调用识别）
  pageTransition() {
    PageTransitionEnter({ type: RouteType.None, duration: 200 })
    PageTransitionExit({ duration: 200 })
  }

  build() {
    Column({ space: 8 }) {
      Text('composite containers (P2 wrap-up)').fontSize(18)

      Stack({ alignContent: Alignment.TopStart }) {
        Text('stack-base').padding(12).border({ width: 1 })
        Text('stack-top').margin({ left: 20, top: 8 })
      }.width('90%')

      Counter() {
        Text('counter=1')
      }

      GridContainer({ columns: 4 }) {
        Column() { Text('gc-1') }.gridSpan(2)
        Column() { Text('gc-2') }.gridSpan(2)
      }.width('90%')

      FolderStack() {
        Text('folder-layer').padding(8)
      }.width('90%').height(80)

      Navigator({ target: 'pages/ui/StateV1Demo', type: NavigationType.Push }) {
        Text('navigator -> state-v1').padding(6)
      }

      Navigation() {
        NavRouter() {
          Text('nav-router entry').padding(6)
          NavDestination() {
            Text('nav-destination body')
          }.title('dest')
        }
      }.mode(NavigationMode.Stack).width('90%').height(100)

      Button('toggle panel').onClick(() => {
        this.showPanel = !this.showPanel;
      })
      if (this.showPanel) {
        Panel(this.showPanel) {
          Text('panel body')
        }.type(PanelType.Foldable).dragBar(true)
      }

      Menu() {
        MenuItemGroup({ header: 'group-header' }) {
          MenuItem({ content: 'item-1' })
          MenuItem({ content: 'item-2' })
        }
      }.width(160)

      IndicatorComponent().width('90%')
    }
    .height('100%')
  }
}
