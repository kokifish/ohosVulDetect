import { router } from '@kit.ArkUI';

// Navigation/NavPathStack：push/replace/pop/传参 + NavDestination 生命周期；对照 legacy router。
@Entry
@Component
struct NavDemo {
  pathStack: NavPathStack = new NavPathStack();

  @Builder
  pageMap(name: string) {
    if (name === 'detailA') {
      DetailA()
    } else if (name === 'detailB') {
      DetailB()
    }
  }

  build() {
    Navigation(this.pathStack) {
      Column({ space: 10 }) {
        Text('Navigation demo').fontSize(20)
        Button('push detailA (with params)')
          .onClick(() => {
            const paramA: Record<string, Object> = { 'from': 'nav-demo', 'n': 42 };
            this.pathStack.pushPathByName('detailA', paramA);
          })
        Button('replace detailB')
          .onClick(() => {
            const paramB: Record<string, Object> = { 'mode': 'replace' };
            this.pathStack.replacePathByName('detailB', paramB);
          })
        Button('legacy router.pushUrl')
          .onClick(() => {
            router.pushUrl({ url: 'pages/lang/TypesDemo' });
          })
      }
      .padding(12)
    }
    .navDestination(this.pageMap)
    .mode(NavigationMode.Stack)
    .hideTitleBar(false)
    .title('NavDemo home')
  }
}

@Component
struct DetailA {
  @Consume pathStack: NavPathStack;

  build() {
    NavDestination() {
      Column({ space: 8 }) {
        Text('DetailA destination').fontSize(18)
        Button('pop')
          .onClick(() => {
            this.pathStack.pop();
          })
      }
    }
    .onShown(() => {
    })
    .onWillAppear(() => {
    })
    .title('A')
  }
}

@Component
struct DetailB {
  @Consume pathStack: NavPathStack;

  build() {
    NavDestination() {
      Column({ space: 8 }) {
        Text('DetailB destination').fontSize(18)
        Button('pop to root')
          .onClick(() => {
            this.pathStack.clear();
          })
      }
    }
    .title('B')
  }
}
