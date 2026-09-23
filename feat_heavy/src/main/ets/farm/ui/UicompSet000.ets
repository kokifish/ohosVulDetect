// UicompSet000.ets — feat_heavy 生成组件组合语料（勿手改）

import { biz_0000_00 } from '../biz/Biz0000';
import { biz_0000_01 } from '../biz/Biz0000';

@Component
export struct Uicomp0000 {
  @State private idx: number = 3;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0000_00(this.idx + shift, 'ui');
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
      Text('Panel 0').fontSize(16).fontWeight(FontWeight.Medium)
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
export struct Uicomp0001 {
  @State private idx: number = 4;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0000_01(this.idx + shift, 'ui');
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
      Text('Panel 1').fontSize(16).fontWeight(FontWeight.Medium)
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

