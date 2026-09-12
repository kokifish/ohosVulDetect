import { webview } from '@kit.ArkWeb';
import { ovdWeb007 } from '../vulns/web/OVD-WEB-007';
import { ovdWeb001S, ovdWeb002S, ovdWeb003S, ovdWeb004S, ovdWeb005S, ovdWeb006S, ovdWeb007S } from '../vulns/web/Twins';
import { common } from '@kit.AbilityKit';
import { fileIo as FileIo } from '@kit.CoreFileKit';
import { Runner } from 'lib_common';
import { NativeBridge } from '../web/NativeBridge';

// WebView 漏洞集：OVD-WEB-001/002/003/004/005 + OVD-NET-003（onSslErrorReceive confirm）
@Entry
@Component
struct WebPage {
  @State lines: string[] = [];
  @State userInput: string = "'; localStorage.x='pwn";
  private controller: webview.WebviewController = new webview.WebviewController();
  private bridge: NativeBridge = new NativeBridge();
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
    const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
    this.bridge.setContext(ctx);
    // VULN: OVD-WEB-001 发布包开启 Web 调试（CWE-489/1295）
    webview.WebviewController.setWebDebuggingAccess(true);
  }

  build() {
    Column() {
      Text('WebView vulns').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('runJavaScript(inject)').margin(4).onClick(() => {
          // VULN: OVD-WEB-003 用户输入未转义直接注入 JS（CWE-94）
          this.runner.run('web-003', () => {
            this.controller.runJavaScript(`localStorage.setItem('u', '${this.userInput}')`);
            return `injected: ${this.userInput}`;
          });
        })
        Button('loadUrl(file://)').margin(4).onClick(() => {
          // VULN: OVD-WEB-005 fileAccess(true) + 本地文件加载（CWE-79/200）
          this.runner.run('web-005', () => {
            // 先落盘目标文件再加载：否则 file:// 目标不存在，运行时报 17100003（曾误记为环境性失败）
            const ctx = getContext(this) as common.UIAbilityContext;
            const target = `${ctx.filesDir}/bench.txt`;
            const f = FileIo.openSync(target, FileIo.OpenMode.READ_WRITE | FileIo.OpenMode.CREATE | FileIo.OpenMode.TRUNC);
            FileIo.writeSync(f.fd, '<html><body>bench-file</body></html>');
            FileIo.closeSync(f);
            this.controller.loadUrl(`file://${target}`);
            return 'file:// load issued';
          });
        })
      }
      .width('100%')
      Button('SAFE twins 001-006').margin(4).onClick(() => {
        this.runner.run('web-001S', () => ovdWeb001S());
        this.runner.run('web-002S', () => ovdWeb002S('getVersion') ? 'bridge allowed: getVersion' : 'refused');
        this.runner.run('web-003S', () => ovdWeb003S('bench<input>'));
        this.runner.run('web-004S', () => ovdWeb004S());
        this.runner.run('web-005S', () => ovdWeb005S('https://bench.example.com/home'));
        this.runner.run('web-006S', () => ovdWeb006S('https://bench.example.com/help'));
      })
      Button('WEB-007 bridge-no-origin').margin(4).onClick(() => {
        this.runner.run('web-007', () => ovdWeb007(this.controller, 'stealToken'));
      })
      Button('web-007S origin-check').margin(4).onClick(() => {
        this.runner.run('web-007S', () => ovdWeb007S(this.controller, 'getVersion'));
      })
      // VULN: OVD-WEB-002 桥暴露；OVD-WEB-005 fileAccess(true)；
      // VULN: OVD-NET-003 证书错误直接 confirm 放行
      // VULN: OVD-WEB-004 MixedMode.ALL 允许混合内容
      Web({ src: 'https://httpbin.org/get', controller: this.controller })
        .javaScriptProxy({
          object: this.bridge,
          name: 'ovdbridge',
          methodList: ['getToken', 'readFile', 'pay'],
          controller: this.controller
        })
        .mixedMode(MixedMode.All)
        .fileAccess(true)
        .domStorageAccess(true)
        .onSslErrorEventReceive((e: OnSslErrorEventReceiveEvent) => {
          e.handler.handleConfirm();
        })
        .layoutWeight(2)
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
