import { hspFormat } from '../SharedBox';

// HSP 路由页：经 resources/base/profile/route_map.json + module.json5 的 routerMap 注册进系统路由表，
// 宿主 Navigation pushPathByName('hspRoute') 即跨包动态加载本 NavDestination（HSP abc 的路由形态）。
// onReady 后延时自动 pop 并携带结果，宿主侧以 onPop 回调完成路由往返断言。
@Component
export struct HspRoutePage {
  pathStack: NavPathStack | null = null;
  @State tag: string = hspFormat('hsp-route', 42);

  build() {
    NavDestination() {
      Column({ space: 10 }) {
        Text(this.tag)
          .fontSize(16)
        Text('NavDestination from lib_shared (HSP)')
          .fontSize(12)
      }
      .padding(16)
    }
    .title('HSP routed page')
    .onReady((ctx: NavDestinationContext) => {
      this.pathStack = ctx.pathStack;
      setTimeout(() => {
        this.pathStack?.pop('hsp-ok-42');
      }, 600);
    })
  }
}

@Builder
export function hspRouteBuilder() {
  HspRoutePage()
}
