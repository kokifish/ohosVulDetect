import { router } from '@kit.ArkUI';
import { DemoItem } from 'lib_common';

const CATS: DemoItem[] = [
  new DemoItem('cat-secret', '硬编码秘密', 'pages/SecretPage'),
  new DemoItem('cat-crypto', '弱密码学', 'pages/CryptoPage'),
  new DemoItem('cat-net', '明文传输/证书校验', 'pages/NetPage'),
  new DemoItem('cat-web', 'WebView', 'pages/WebPage'),
  new DemoItem('cat-inj', '注入', 'pages/InjPage'),
  new DemoItem('cat-storage', '不安全存储', 'pages/StoragePage'),
  new DemoItem('cat-form', 'FormKit 卡片注入', 'pages/FormVulnPage'),
  new DemoItem('cat-log', '敏感日志', 'pages/LogPage'),
  new DemoItem('cat-ipc', 'IPC/导出面', 'pages/IpcPage'),
  new DemoItem('cat-perm', '权限/隐私/粘贴板', 'pages/PermPage'),
  new DemoItem('cat-auth', '认证/会话/随机', 'pages/AuthPage'),
  new DemoItem('cat-debug', '调试残留', 'pages/DebugPage'),
  new DemoItem('cat-conf', '配置泄露', 'pages/ConfPage'),
  new DemoItem('cat-native', '原生层', 'pages/NativePage'),
  new DemoItem('cat-cert', '证书信任', 'pages/CertPage'),
  new DemoItem('cat-media', '媒体库隐私', 'pages/MediaVulnPage'),
  new DemoItem('cat-keylog', '输入监听', 'pages/KeylogPage'),
  new DemoItem('cat-drm', 'DRM 保护', 'pages/DrmVulnPage'),
  new DemoItem('cat-speech', '语音会话', 'pages/SpeechVulnPage'),
  new DemoItem('cat-a11y', '无障碍侦察', 'pages/A11yVulnPage'),
  new DemoItem('cat-bgtask', '后台任务滥用', 'pages/BgtaskVulnPage'),
  new DemoItem('cat-dlink', '深链参数校验', 'pages/DlinkVulnPage'),
  new DemoItem('cat-xmod', '跨模块分布 HAR/HSP', 'pages/XmodVulnPage'),
  new DemoItem('cat-notify', '通知敏感内容', 'pages/NotifyVulnPage'),
  new DemoItem('cat-ired', 'Intent 重定向', 'pages/IredVulnPage'),
  new DemoItem('cat-pwdin', '密码输入回显', 'pages/PwdinVulnPage'),
  new DemoItem('cat-dkv', '分布式 KV 同步泄露', 'pages/DkvVulnPage'),
  new DemoItem('cat-micc', '麦克风静默采集', 'pages/MiccVulnPage'),
  new DemoItem('cat-taint', '跨函数污点链', 'pages/TaintVulnPage'),
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
