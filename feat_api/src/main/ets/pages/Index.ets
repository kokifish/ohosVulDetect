import { router } from '@kit.ArkUI';
import { DemoItem } from 'lib_common';
import { API_DEMOS, UI_DEMOS } from '../model/ApiRegistry';

class DemoGroup {
  readonly header: string;
  readonly items: DemoItem[];

  constructor(header: string, items: DemoItem[]) {
    this.header = header;
    this.items = items;
  }
}

@Entry
@Component
struct Index {
  private groups: DemoGroup[] = [
    new DemoGroup('API 域覆盖 (benign)', API_DEMOS),
    new DemoGroup('ArkUI / 语言特性', UI_DEMOS)
  ];

  private go(d: DemoItem): void {
    router.pushUrl({ url: d.page });
  }

  build() {
    List({ space: 0 }) {
      ForEach(this.groups, (g: DemoGroup) => {
        ListItemGroup() {
          ListItem() {
            Text(g.header).fontSize(18).padding(12)
          }
          ForEach(g.items, (d: DemoItem) => {
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
      }, (g: DemoGroup) => g.header)
    }
    .width('100%')
    .height('100%')
    .divider({ strokeWidth: 1, color: '#eeeeee' })
  }
}
