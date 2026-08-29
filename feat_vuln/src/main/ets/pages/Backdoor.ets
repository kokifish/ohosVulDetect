import { webview } from '@kit.ArkWeb';
import { Runner } from 'lib_common';

// BackdoorAbility 的落地页：展示 deeplink/魔法参数泄露的数据。
@Entry
@Component
struct Backdoor {
  @State secret: string = '';
  @State leaked: string = '';
  @State uri: string = '';
  @State customUrl: string = 'http://httpbin.org/get';
  private controller: webview.WebviewController = new webview.WebviewController();

  aboutToAppear(): void {
    this.secret = (AppStorage.get<string>('backdoor_secret') ?? '(not triggered)');
    this.leaked = (AppStorage.get<string>('leaked_file_head') ?? '(not triggered)');
    this.uri = (AppStorage.get<string>('last_want_uri') ?? '');
  }

  build() {
    Column({ space: 8 }) {
      Text('Backdoor surface').fontSize(18)
      Text(`uri: ${this.uri}`).fontSize(12)
      Text(`secret: ${this.secret}`).fontSize(12).fontColor('#CC0000')
      Text(`file: ${this.leaked}`).fontSize(12)
      // VULN: OVD-WEB-006 外部输入的 URL 未做白名单校验直接进入 Web 加载（CWE-601）
      TextInput({ text: this.customUrl })
        .onChange((v: string) => {
          this.customUrl = v;
        })
        .width('90%')
      Button('load url (no whitelist)')
        .onClick(() => {
          this.uri = this.customUrl;
        })
      if (this.uri.startsWith('http')) {
        Web({ src: this.uri, controller: this.controller }).layoutWeight(1)
      }
    }
    .width('100%')
    .height('100%')
    .padding(12)
  }
}
