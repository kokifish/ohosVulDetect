import { common } from '@kit.AbilityKit';
import { http } from '@kit.NetworkKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { pasteboard } from '@kit.BasicServicesKit';
import { preferences } from '@kit.ArkData';
import { Case, DemoScaffold } from 'lib_common';

// FP-bait 页（困难模式）：全部为合法用法，但形状与规则/内建检测器高度相似——
// 工具若在此页产生检测而 manifest 无对应条目，即计 FP，用于度量误报区分度。
// 本页不进 groundtruth，只通过评分链的 FP 计数生效。
@Entry
@Component
struct SecurityBaitDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'security bait (legal look-alikes)',
        cases: [
          new Case('bait aes-cbc random-iv', async (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            const symKeyGen = cryptoFramework.createSymKeyGenerator('AES128');
            const symKey = await symKeyGen.generateSymKey();
            const cipher = cryptoFramework.createCipher('AES128|CBC|PKCS7');
            const iv = cryptoFramework.createRandom().generateRandomSync(16);
            const ivSpec: cryptoFramework.IvParamsSpec = {
              algName: 'IvParamsSpec',
              iv: { data: iv.data }
            };
            await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, ivSpec);
            const out = await cipher.doFinal({ data: new Uint8Array([1, 2, 3, 4]) });
            return `bait aes ok len=${out.data.length} (random iv)`;
          }),
          new Case('bait intranet http', async (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            const req: http.HttpRequest = http.createHttp();
            const resp: http.HttpResponse = await req.request('http://10.0.1.5:8080/metrics',
              { method: http.RequestMethod.GET, expectDataType: http.HttpDataType.STRING,
                connectTimeout: 3000, readTimeout: 3000 });
            req.destroy();
            return `bait intranet status=${resp.responseCode}`;
          }),
          new Case('bait clipboard copy', async (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            const data = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello from bench');
            await pasteboard.getSystemPasteboard().setPasteData(data);
            return 'bait clipboard non-sensitive copy';
          }),
          new Case('bait prefs theme', async (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            const store = await preferences.getPreferencesSync(_c, { name: 'bait_theme' });
            store.putSync('theme', 'dark');
            await store.flush();
            return 'bait prefs non-pii stored';
          })
        ]
      })
    }
    .height('100%')
  }
}
