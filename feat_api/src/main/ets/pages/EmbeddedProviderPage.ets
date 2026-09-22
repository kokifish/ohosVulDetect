// EmbeddedComponent 提供方页面：由 UIExtensionContentSession.loadContent 装载
//（main_pages 注册要求 @Entry，UIExtension 会话侧同样可装载）。
@Entry
@Component
struct EmbeddedProviderPage {
  build() {
    Column({ space: 6 }) {
      Text('embedded-provider-ui').fontSize(14)
      Text('rendered via EmbeddedComponent').fontSize(11).fontColor('#666666')
    }
    .width('100%')
    .padding(6)
  }
}
