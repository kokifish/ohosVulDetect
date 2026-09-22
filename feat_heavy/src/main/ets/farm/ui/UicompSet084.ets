// UicompSet084.ets — feat_heavy 生成组件组合语料（勿手改）

import { biz_0078_39 } from '../biz/Biz0078';
import { biz_0079_40 } from '../biz/Biz0079';

@Component
export struct Uicomp0168 {
  @State private idx: number = 82;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0078_39(this.idx + shift, 'ui');
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
      Text('Panel 168').fontSize(16).fontWeight(FontWeight.Medium)
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
export struct Uicomp0169 {
  @State private idx: number = 83;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0079_40(this.idx + shift, 'ui');
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
      Text('Panel 169').fontSize(16).fontWeight(FontWeight.Medium)
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

