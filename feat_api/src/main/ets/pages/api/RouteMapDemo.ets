import { Case, DemoScaffold } from 'lib_common';
import { common } from '@kit.AbilityKit';

// 系统路由表（routerMap）：lib_shared（HSP）经 route_map.json 注册 NavDestination，
// 本页 Navigation 按 name 跨包路由（本地不写 navDestination builder），
// 回程 onPop 携带结果完成往返断言（期望 pop=hsp-ok-42）。
@Entry
@Component
struct RouteMapDemo {
  @State note: string = 'idle';
  private pathStack: NavPathStack = new NavPathStack();

  build() {
    Navigation(this.pathStack) {
      Column() {
        Text(`route: ${this.note}`)
          .fontSize(12)
          .padding(4)
        DemoScaffold({
          title: 'routerMap -> HSP',
          cases: [
            new Case('push hspRoute', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
              let ret: string = '';
              this.pathStack.pushPathByName('hspRoute', 'from-feat-api', (info: PopInfo) => {
                ret = `${info.result}`;
              });
              for (let i = 0; i < 50 && ret === ''; i++) {
                await new Promise<void>((resolve) => setTimeout(resolve, 100));
              }
              this.note = ret === '' ? 'no-pop' : ret;
              return `pop=${ret}`;
            })
          ]
        })
      }
      .height('100%')
    }
    .hideTitleBar(true)
    .mode(NavigationMode.Stack)
  }
}
