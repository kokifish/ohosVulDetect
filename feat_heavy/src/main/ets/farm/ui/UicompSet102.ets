// UicompSet102.ets — feat_heavy 生成组件组合语料（勿手改）

import { biz_0024_32 } from '../biz/Biz0024';
import { biz_0025_33 } from '../biz/Biz0025';

@Component
export struct Uicomp0204 {
  @State private idx: number = 29;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0024_32(this.idx + shift, 'ui');
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
      Text('Panel 204').fontSize(16).fontWeight(FontWeight.Medium)
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
export struct Uicomp0205 {
  @State private idx: number = 30;
  @State private log: string = 'idle';

  private run(shift: number): void {
    this.log = biz_0025_33(this.idx + shift, 'ui');
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
      Text('Panel 205').fontSize(16).fontWeight(FontWeight.Medium)
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

