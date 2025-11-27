import { hilog } from '@kit.PerformanceAnalysisKit';

// import testNapi from 'libentry.so'; // traditional so loading

const DOMAIN = 0x0000;

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize($r('app.float.page_text_font_size'))
          .fontWeight(FontWeight.Bold)
          .onClick(async () => { // async for dynamic so loading
            this.message = 'Welcome';
            let testNapi = await import("libentry.so")
            // hilog.info(DOMAIN, 'testTag', 'Test NAPI 2 + 3 = %{public}d', testNapi.add(2, 3));
            hilog.info(DOMAIN, 'testTag', 'Test NAPI 2 + 3 = %{public}d', testNapi.default.add(2, 3));
          })
        Text("C2").onClick(async () => { // async for dynamic so loading
          this.message = 'CC2';
          let testNapi = await import("libentry.so")
          hilog.info(DOMAIN, 'testTag', 'Test NAPI 3 + 5 = %{public}d', testNapi.default.add(3, 5));
        })
      }.width('100%')
    }.height('100%')
  }
}
