import { i18n, intl } from '@kit.LocalizationKit';
import { common } from '@kit.AbilityKit';
import { hilog, hiTraceMeter } from '@kit.PerformanceAnalysisKit';
import { systemDateTime } from '@kit.BasicServicesKit';
import { util, buffer, url } from '@kit.ArkTS';
import { BENCH, Case, DemoScaffold } from 'lib_common';

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
          }),
          new Case('util-buffer-url', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const enc: Uint8Array = new util.TextEncoder().encodeInto('bench-42');
            const dec: string = util.TextDecoder.create('utf-8').decodeToString(enc);
            const b64: string = new util.Base64().encodeToStringSync(enc);
            const hex: string = buffer.from('buffer-src', 'utf-8').toString('hex');
            const u = url.URL.parseURL(`${BENCH.API_BASE}/get?k=v`);
            const t: number = await systemDateTime.getTime();
            return `${dec} b64=${b64} hex=${hex} host=${u.host} t=${t}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
