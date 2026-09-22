// UicompSet023.ets — feat_heavy 生成组件组合语料（勿手改）

import { biz_0046_03 } from '../biz/Biz0046';
import { biz_0047_04 } from '../biz/Biz0047';

@Component
export struct Uicomp0046 {
  @State private idx: number = 49;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0046_03(this.idx + shift, 'ui');
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
      Text('Panel 46').fontSize(16).fontWeight(FontWeight.Medium)
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
export struct Uicomp0047 {
  @State private idx: number = 50;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0047_04(this.idx + shift, 'ui');
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
      Text('Panel 47').fontSize(16).fontWeight(FontWeight.Medium)
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

