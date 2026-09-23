// HSP UIAbility 的内容页：极简静态页（HSP 内 UIAbility 形态语料的可视验证面）。
@Entry
@Component
struct SharedAbilityPage {
  build() {
    Column({ space: 10 }) {
      Text('lib_shared OvdSharedAbility').fontSize(20).fontWeight(FontWeight.Bold)
      Text('UIAbility declared inside HSP (API14+ form corpus)').fontSize(13).fontColor('#446688')
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
