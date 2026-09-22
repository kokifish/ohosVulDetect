// UicompSet002.ets — feat_heavy 生成组件组合语料（勿手改）

import { biz_0004_04 } from '../biz/Biz0004';
import { biz_0005_05 } from '../biz/Biz0005';

@Component
export struct Uicomp0004 {
  @State private idx: number = 7;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0004_04(this.idx + shift, 'ui');
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
      Text('Panel 4').fontSize(16).fontWeight(FontWeight.Medium)
      Text(this.log).fontSize(12).fontColor('#336699')
      Button('Run ' + this.idx.toString()).onClick(() => this.run(1))
      Row({ space: 6 }) {
        Text('A').fontColor('#2288CC')
        Blank()
        Text('B').fontColor('#CC8822')
      }.width('92%')
      Progress({ value: this.idx % 100, total: 100 })
      LoadingProgress().width(32).height(32)
    }
    .padding(12)
    .width('100%')
  }
}

@Component
export struct Uicomp0005 {
  @State private idx: number = 8;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0005_05(this.idx + shift, 'ui');
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
      Text('Panel 5').fontSize(16).fontWeight(FontWeight.Medium)
      Text(this.log).fontSize(12).fontColor('#336699')
      Button('Run ' + this.idx.toString()).onClick(() => this.run(1))
      Stack({ alignContent: Alignment.Center }) {
        Text('stacked').fontColor('#557799')
      }.height(40)
      Toggle({ type: ToggleType.Checkbox, isOn: true })
      Divider().strokeWidth(1).color('#DDDDDD')
      Image($r('app.media.startIcon')).width(28).height(28)
    }
    .padding(12)
    .width('100%')
  }
}

