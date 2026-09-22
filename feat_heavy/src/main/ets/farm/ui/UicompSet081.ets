// UicompSet081.ets — feat_heavy 生成组件组合语料（勿手改）

import { biz_0072_33 } from '../biz/Biz0072';
import { biz_0073_34 } from '../biz/Biz0073';

@Component
export struct Uicomp0162 {
  @State private idx: number = 76;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0072_33(this.idx + shift, 'ui');
  }

  private rows(): string[] {
    const out: string[] = [];
    for (let i = 0; i < 5; i++) {
      out.push('row ' + ((this.idx + i) % 50).toString());
    }
    return out;
  }

  build() {
    Column({ space: 8 }) {
      Text('Panel 162').fontSize(16).fontWeight(FontWeight.Medium)
      Text(this.log).fontSize(12).fontColor('#336699')
      Button('Run ' + this.idx.toString()).onClick(() => this.run(1))
      List({ space: 4 }) {
        ForEach(this.rows(), (item: string) => {
          ListItem() { Text(item).fontSize(12) }
        }, (item: string) => item)
      }.height(96)
      Flex({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap }) {
        Text('fx1').fontSize(12)
        Text('fx2').fontSize(12)
      }
    }
    .padding(12)
    .width('100%')
  }
}

@Component
export struct Uicomp0163 {
  @State private idx: number = 77;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0073_34(this.idx + shift, 'ui');
  }

  private rows(): string[] {
    const out: string[] = [];
    for (let i = 0; i < 5; i++) {
      out.push('row ' + ((this.idx + i) % 50).toString());
    }
    return out;
  }

  build() {
    Column({ space: 8 }) {
      Text('Panel 163').fontSize(16).fontWeight(FontWeight.Medium)
      Text(this.log).fontSize(12).fontColor('#336699')
      Button('Run ' + this.idx.toString()).onClick(() => this.run(1))
      Grid() {
        ForEach(this.rows(), (item: string) => {
          GridItem() { Text(item).fontSize(11) }
        }, (item: string) => item)
      }.columnsTemplate('1 1').height(88)
      Scroll() {
        Column({ space: 4 }) {
          Text('scroll-a').fontSize(12)
          Text('scroll-b').fontSize(12)
        }
      }.height(72)
      TextInput({ placeholder: 'input ' + this.idx.toString() })
        .onChange((v: string) => { this.log = v; })
    }
    .padding(12)
    .width('100%')
  }
}

