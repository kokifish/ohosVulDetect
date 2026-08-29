import { i18n, intl } from '@kit.LocalizationKit';
import { hilog, hiTraceMeter } from '@kit.PerformanceAnalysisKit';
import { Runner } from 'lib_common';

// i18n/intl（构造器+实例方法）、hilog 变参格式化、hiTraceMeter 打点。
@Entry
@Component
struct I18nDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('i18n / intl / hilog / hiTrace').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('i18n-system').margin(4).onClick(() => {
          this.runner.run('i18n-system', () => {
            const lang = i18n.System.getSystemLanguage();
            const h24 = i18n.is24HourClock();
            return `lang=${lang} 24h=${h24}`;
          });
        })
        Button('intl-format').margin(4).onClick(() => {
          this.runner.run('intl-format', () => {
            const dtf = new intl.DateTimeFormat('zh-CN', { dateStyle: 'full' });
            const nf = new intl.NumberFormat('zh-CN', { notation: 'compact' });
            return `${dtf.format(new Date())} ${nf.format(12345678)}`;
          });
        })
        Button('hilog-varargs').margin(4).onClick(() => {
          this.runner.run('hilog-varargs', () => {
            hilog.info(0x0110, 'bench', 'n=%{public}d s=%{public}s f=%.2f', 42, 'str', 3.14);
            return 'logged';
          });
        })
        Button('hitrace').margin(4).onClick(() => {
          this.runner.run('hitrace', () => {
            hiTraceMeter.startTrace('bench_section', 1);
            let s = 0;
            for (let i = 0; i < 1000; i += 1) {
              s += i;
            }
            hiTraceMeter.finishTrace('bench_section', 1);
            return `traced s=${s}`;
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
