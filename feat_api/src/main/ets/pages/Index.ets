import { router } from '@kit.ArkUI';
import { DemoItem } from 'lib_common';
import { API_DEMOS, UI_DEMOS } from '../model/ApiRegistry';

@Entry
@Component
struct Index {
  private go(d: DemoItem): void {
    router.pushUrl({ url: d.page });
  }

  build() {
    List({ space: 0 }) {
      ListItemGroup() {
          ListItem() {
            Text('API 域覆盖 (benign)').fontSize(18).padding(12)
          }
        ForEach(API_DEMOS, (d: DemoItem) => {
          ListItem() {
            Row({ space: 8 }) {
              Text(d.id)
                .fontSize(12)
                .fontColor('#0066CC')
                .constraintSize({ maxWidth: 120 })
              Text(d.title)
                .fontSize(16)
                .layoutWeight(1)
                .maxLines(1)
                .textOverflow({ overflow: TextOverflow.Ellipsis })
            }
            .width('100%')
            .padding(12)
            .onClick(() => this.go(d))
          }
        }, (d: DemoItem) => d.id)
      }
      ListItemGroup() {
          ListItem() {
            Text('ArkUI / 语言特性').fontSize(18).padding(12)
          }
        ForEach(UI_DEMOS, (d: DemoItem) => {
          ListItem() {
            Row({ space: 8 }) {
              Text(d.id)
                .fontSize(12)
                .fontColor('#0066CC')
                .constraintSize({ maxWidth: 120 })
              Text(d.title)
                .fontSize(16)
                .layoutWeight(1)
                .maxLines(1)
                .textOverflow({ overflow: TextOverflow.Ellipsis })
            }
            .width('100%')
            .padding(12)
            .onClick(() => this.go(d))
          }
        }, (d: DemoItem) => d.id)
      }
    }
    .width('100%')
    .height('100%')
    .divider({ strokeWidth: 1, color: '#eeeeee' })
  }
}
