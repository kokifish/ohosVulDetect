import { BusinessError } from '@kit.BasicServicesKit';
import { heavyBizSample, heavyApiSample, heavyApiDynSample, heavyKitSample, heavyKitDynSample, heavyCounts } from '../farm/index';
import { UiStage } from '../farm/ui/UiStage';

// feat_heavy 唯一交互页：指令农场只在此页按需加载与抽样执行，不进 sweep 默认遍历
// （heavy 前缀不在 emulator_sweep 前缀清单），保证模拟器运行验证轻量可控。
@Entry
@Component
struct HeavyFarmPage {
  @State out: string = 'idle';
  @State busy: string = '';
  @State sel: number = 0;
  private readonly selMax: number = 239;

  private report(tag: string, r: string): void {
    this.out = tag + ' :: ' + r;
    this.busy = '';
  }

  private fail(tag: string, e: BusinessError): void {
    this.out = tag + ' :: err ' + String(e.code) + ' ' + String(e.message);
    this.busy = '';
  }

  private runCounts(): void {
    this.busy = 'counts...';
    this.report('counts', heavyCounts());
  }

  private runBiz(): void {
    this.busy = 'biz...';
    heavyBizSample(509)
      .then((r: string) => this.report('biz', r))
      .catch((e: BusinessError) => this.fail('biz', e));
  }

  private runApi(): void {
    this.busy = 'api...';
    const r: string = heavyApiSample();
    this.report('api', r);
  }

  private runApiDyn(): void {
    this.busy = 'apidyn...';
    heavyApiDynSample(4)
      .then((r: string) => this.report('apidyn', r))
      .catch((e: BusinessError) => this.fail('apidyn', e));
  }

  private runKit(): void {
    this.busy = 'kit...';
    const r: string = heavyKitSample();
    this.report('kit', r);
  }

  private runKitDyn(): void {
    this.busy = 'kitdyn...';
    heavyKitDynSample(4)
      .then((r: string) => this.report('kitdyn', r))
      .catch((e: BusinessError) => this.fail('kitdyn', e));
  }

  build() {
    Column({ space: 8 }) {
      Text('Heavy Farm').fontSize(22).fontWeight(FontWeight.Bold)
      Scroll() {
        Column() {
          Text(this.busy.length > 0 ? this.busy : this.out)
            .fontSize(13)
            .fontColor('#224466')
        }
        .width('100%')
      }
      .height(72)
      .width('94%')

      Row({ space: 6 }) {
        Button('counts').onClick(() => this.runCounts())
        Button('biz').onClick(() => this.runBiz())
        Button('api').onClick(() => this.runApi())
      }
      Row({ space: 6 }) {
        Button('apidyn').onClick(() => this.runApiDyn())
        Button('kit').onClick(() => this.runKit())
        Button('kitdyn').onClick(() => this.runKitDyn())
      }
      Row({ space: 10 }) {
        Button('<').onClick(() => {
          this.sel = this.sel > 0 ? this.sel - 1 : this.selMax;
        })
        Text(`ui ${this.sel}/${this.selMax}`).fontSize(13)
        Button('>').onClick(() => {
          this.sel = this.sel < this.selMax ? this.sel + 1 : 0;
        })
      }
      UiStage({ sel: this.sel })
    }
    .width('100%')
    .height('100%')
    .padding(12)
  }
}
