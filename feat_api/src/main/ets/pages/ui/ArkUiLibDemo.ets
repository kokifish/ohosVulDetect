// 高级组件库抽样（@kit.ArkUI，与普通组件 import 路径不同）：
// Chip / ChipGroup / SegmentButton / SubHeader / ToolBar / CounterComponent。
import {
  Chip,
  ChipGroup,
  SegmentButton,
  SegmentButtonOptions,
  SubHeader,
  ToolBar,
  CounterComponent,
  CounterType
} from '@kit.ArkUI';

@Entry
@Component
struct ArkUiLibDemo {
  @State lines: string[] = [];
  @State singleOptions: SegmentButtonOptions =
    SegmentButtonOptions.capsule({ buttons: [{ text: 'seg-a' }, { text: 'seg-b' }, { text: 'seg-c' }] });
  @State counter: number = 5;
  @State segSel: number[] = [0];

  private pick(label: string, v: string | number | boolean): void {
    this.lines.push(`${label}=${v}`);
  }

  build() {
    Scroll() {
      Column({ space: 14 }) {
        SubHeader({ primaryTitle: 'advanced ui library', secondaryTitle: '@kit.ArkUI imports' })
          .width('100%')

        Text('Chip').fontSize(16).fontWeight(FontWeight.Bold)
        Row({ space: 8 }) {
          Chip({ label: { text: 'chip-plain' } })
          Chip({ label: { text: 'chip-on' }, activated: true, onClicked: () => this.pick('chip', 'on') })
          Chip({ label: { text: 'chip-off' }, activated: false, onClicked: () => this.pick('chip', 'off') })
        }

        Text('ChipGroup').fontSize(16).fontWeight(FontWeight.Bold)
        ChipGroup({
          items: [
            { label: { text: 'cg-a' } },
            { label: { text: 'cg-b' } },
            { label: { text: 'cg-c' } },
          ],
          onChange: (idxs: Array<number>) => this.pick('chipgroup', idxs.join('|')),
        })
          .width('100%')

        Text('SegmentButton (capsule)').fontSize(16).fontWeight(FontWeight.Bold)
        SegmentButton({ options: this.singleOptions, selectedIndexes: this.segSel })
          .width('100%')

        Text('CounterComponent').fontSize(16).fontWeight(FontWeight.Bold)
        Row({ space: 8 }) {
          CounterComponent({
            options: {
              type: CounterType.COMPACT,
              numberOptions: {
                value: this.counter,
                min: 0,
                max: 10,
                label: 'counter-label',
                onFocusIncrease: () => {
                  this.counter = Math.min(10, this.counter + 1);
                  this.pick('counter-inc', this.counter);
                },
                onFocusDecrease: () => {
                  this.counter = Math.max(0, this.counter - 1);
                  this.pick('counter-dec', this.counter);
                },
              },
            },
          })
          Text(`counter=${this.counter}`).fontSize(14)
        }

        Text('ToolBar').fontSize(16).fontWeight(FontWeight.Bold)
        ToolBar({
          toolBarList: [
            { content: 'tb-a', action: () => this.pick('toolbar', 'a') },
            { content: 'tb-b', action: () => this.pick('toolbar', 'b') },
            { content: 'tb-c', action: () => this.pick('toolbar', 'c') },
            { content: 'tb-d', action: () => this.pick('toolbar', 'd') },
            { content: 'tb-e', action: () => this.pick('toolbar', 'e') },
          ],
        })
          .width('100%')

        ForEach(this.lines, (l: string) => Text(l).fontSize(12).fontColor('#0066cc'), (l: string) => l)
      }
      .padding(12)
    }
    .height('100%')
  }
}
