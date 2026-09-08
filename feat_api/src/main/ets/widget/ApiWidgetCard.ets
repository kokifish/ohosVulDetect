let cardStorage = new LocalStorage();

// 动态 ArkTS 卡片页（form_config.json: isDynamic=true）：只进 widgets.abc，不注册 main_pages。
// 卡片受限组件集（Text/Column/Row）+ postCardAction（仅卡片内可用的宿主通信入口）。
@Entry(cardStorage)
@Component
struct ApiWidgetCard {
  @LocalStorageProp('title') title: string = 'vd-card-init';
  @LocalStorageProp('count') count: number = 0;

  build() {
    Column({ space: 8 }) {
      Text(this.title)
        .fontSize(14)
        .fontColor(Color.Black)
        .maxLines(1)
        .textOverflow({ overflow: TextOverflow.Ellipsis })
      Text(`count=${this.count}`)
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
        .fontColor(Color.Black)
      Row({ space: 8 }) {
        // FormLink：卡片专属交互组件（@form），声明式 router/message 动作
        FormLink({
          action: 'router',
          moduleName: 'feat_api',
          abilityName: 'ApiAbility'
        }) {
          Text('formlink-router')
            .fontSize(14)
            .padding(6)
            .borderRadius(8)
            .backgroundColor(0xB0D0B0)
            .fontColor(Color.Black)
        }
        FormLink({
          action: 'message',
          params: { msg: 'formlink-msg' }
        }) {
          Text('formlink-msg')
            .fontSize(14)
            .padding(6)
            .borderRadius(8)
            .backgroundColor(0xB0B0D0)
            .fontColor(Color.Black)
        }
        Text('postCardAction')
          .fontSize(14)
          .padding(6)
          .borderRadius(8)
          .backgroundColor(0xD0D0D0)
          .fontColor(Color.Black)
          .onClick(() => {
            postCardAction(this, {
              'action': 'router',
              'abilityName': 'ApiAbility'
            });
          })
      }
    }
    .padding(12)
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
    .onClick(() => {
    })
  }
}
