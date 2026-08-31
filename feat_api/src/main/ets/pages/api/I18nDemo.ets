import { i18n, intl } from '@kit.LocalizationKit';
import { common } from '@kit.AbilityKit';
import { hilog, hiTraceMeter } from '@kit.PerformanceAnalysisKit';
import { Case, DemoScaffold } from 'lib_common';

// i18n/intl（构造器+实例方法）、hilog 变参格式化、hiTraceMeter 打点。
@Entry
@Component
struct I18nDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'i18n / intl / hilog / hiTrace',
        cases: [
          new Case('i18n-system', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const lang = i18n.System.getSystemLanguage();
            const h24 = i18n.is24HourClock();
            return `lang=${lang} 24h=${h24}`;
          }),
          new Case('intl-format', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const dtf = new intl.DateTimeFormat('zh-CN', { dateStyle: 'full' });
            const nf = new intl.NumberFormat('zh-CN', { notation: 'compact' });
            return `${dtf.format(new Date())} ${nf.format(12345678)}`;
          }),
          new Case('hilog-varargs', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            hilog.info(0x0110, 'bench', 'n=%{public}d s=%{public}s f=%.2f', 42, 'str', 3.14);
            return 'logged';
          }),
          new Case('hitrace', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            hiTraceMeter.startTrace('bench_section', 1);
            let s = 0;
            for (let i = 0; i < 1000; i += 1) {
              s += i;
            }
            hiTraceMeter.finishTrace('bench_section', 1);
            return `traced s=${s}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
