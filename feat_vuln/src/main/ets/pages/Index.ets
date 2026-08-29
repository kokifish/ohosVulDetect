import { router } from '@kit.ArkUI';
import { DemoItem } from 'lib_common';

const CATS: DemoItem[] = [
  new DemoItem('cat-secret', '硬编码秘密 (5+1S)', 'pages/SecretPage'),
  new DemoItem('cat-crypto', '弱密码学 (6+1S)', 'pages/CryptoPage'),
  new DemoItem('cat-net', '明文传输/证书校验 (5+1S)', 'pages/NetPage'),
  new DemoItem('cat-web', 'WebView (6)', 'pages/WebPage'),
  new DemoItem('cat-inj', '注入 (4+1S)', 'pages/InjPage'),
  new DemoItem('cat-storage', '不安全存储 (4+1S)', 'pages/StoragePage'),
  new DemoItem('cat-log', '敏感日志 (2+1S)', 'pages/LogPage'),
  new DemoItem('cat-ipc', 'IPC/导出面 (5)', 'pages/IpcPage'),
  new DemoItem('cat-perm', '权限/隐私/粘贴板 (5)', 'pages/PermPage'),
  new DemoItem('cat-auth', '认证/会话/随机 (3+1S)', 'pages/AuthPage'),
  new DemoItem('cat-debug', '调试残留 (2)', 'pages/DebugPage'),
  new DemoItem('cat-conf', '配置泄露 (2)', 'pages/ConfPage'),
  new DemoItem('cat-native', '原生层 (2)', 'pages/NativePage'),
];

@Entry
@Component
struct Index {
  build() {
    List() {
      ForEach(CATS, (d: DemoItem) => {
        ListItem() {
          Row({ space: 8 }) {
            Text(d.id).fontSize(12).fontColor('#CC0000').constraintSize({ maxWidth: 100 })
            Text(d.title).fontSize(16).layoutWeight(1)
          }
          .width('100%')
          .padding(12)
          .onClick(() => {
            router.pushUrl({ url: d.page });
          })
        }
      }, (d: DemoItem) => d.id)
    }
    .width('100%')
    .height('100%')
    .divider({ strokeWidth: 1, color: '#eeeeee' })
  }
}
