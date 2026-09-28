import { common } from '@kit.AbilityKit';
import { http } from '@kit.NetworkKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { pasteboard } from '@kit.BasicServicesKit';
import { preferences } from '@kit.ArkData';
import { taskpool } from '@kit.ArkTS';
import wifiManager from '@ohos.wifiManager';
import { distributedKVStore } from '@kit.ArkData';
import { hilog } from '@kit.PerformanceAnalysisKit';
import emitter from '@ohos.events.emitter';
import worker, { MessageEvents } from '@ohos.worker';
import { Case, DemoScaffold } from 'lib_common';

// FP-bait 页（困难模式）：全部为合法用法，但形状与 manifest 规则面高度相似——
// near-miss（call 同形+常量异构）/ const-only（AND 断链）双维度陷阱，注册于
// groundtruth/bait.json，评分器输出 bait-face 保留率面板（不计入 F1）。原调用面陷阱保留：
// 工具若在此页产生检测而 manifest 无对应条目，即计 FP，用于度量误报区分度。
// 本页不进 groundtruth，只通过评分链的 FP 计数生效。
@Concurrent
function baitSenEcho(payload: string): string {
  return `echo:${payload.length}`;
}

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
          new Case('bait-wifi-psk near-miss', async (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // 规则面近似陷阱：mimics OVD-WIFI-001（call 同形 addDeviceConfig，常量异构）
            const cfg: wifiManager.WifiDeviceConfig = {
              ssid: 'bait-ap',
              preSharedKey: 'ovd_wpa_psks_b72d',
              securityType: wifiManager.WifiSecurityType.WIFI_SEC_TYPE_PSK
            };
            try {
              await wifiManager.addDeviceConfig(cfg);
            } catch (e) {
            }
            return 'bait-wifi near-miss shape (no real psk leak)';
          }),
          new Case('bait-dkv-sync near-miss', (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // mimics OVD-DKV-001（KV 同步面，常量异构）
            const cfg: distributedKVStore.KVManagerConfig = { context: _c, bundleName: 'com.koki.VD' };
            const mgr: distributedKVStore.KVManager = distributedKVStore.createKVManager(cfg);
            const opts: distributedKVStore.Options = {
              createIfMissing: true, encrypt: true,
              securityLevel: distributedKVStore.SecurityLevel.S3
            };
            const done = mgr.getKVStore<distributedKVStore.SingleKVStore>('bait_store', opts)
              .then((kv: distributedKVStore.SingleKVStore) => kv.put('bait_metric', 'tok_vd_dkv_sync_8d20'))
              .then(() => 'bait-dkv near-miss shape (encrypted S3)');
            return done;
          }),
          new Case('bait-clipboard-label call-only', async (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // mimics OVD-PASTE-005（call 同形 setData，常量异构）
            const data = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'clipboard text synced');
            await pasteboard.getSystemPasteboard().setData(data);
            return 'bait-clipboard call-only breaker';
          }),
          new Case('bait-pwd-echo-log near-miss', (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // mimics OVD-LOG-002（hilog debug + pwd 形常量，'pwd2=' 与 'pwd=' 双向不包含）
            hilog.debug(0xFF0B, 'BAIT', 'pwd2=%{public}d', 1234);
            return 'bait-log near-miss shape (metric, not password)';
          }),
          new Case('bait-emtr-token near-miss', (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // mimics OVD-EMTR-001（emit + token 形常量异构）
            const data: Record<string, string> = { 'tok': 'ovd_evt_tok_33bb' };
            emitter.emit({ eventId: 4721, priority: emitter.EventPriority.LOW }, { data: data });
            return 'bait-emtr near-miss shape (non-sensitive event)';
          }),
          new Case('bait-ust-persist near-miss', (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // mimics OVD-UST-001（persistProp + token 形常量异构）
            PersistentStorage.persistProp('bait_ust_metric', 'ovd_ust_tok_b8d48e');
            const v = AppStorage.get<string>('bait_ust_metric');
            PersistentStorage.deleteProp('bait_ust_metric');
            AppStorage.delete('bait_ust_metric');
            return `bait-ust near-miss shape: len=${v?.length ?? 0}`;
          }),
          new Case('bait-sen-execute near-miss', (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // mimics OVD-SEN-001（taskpool execute + token 形常量异构）
            return taskpool.execute(baitSenEcho, 'ovd_sen_tok_7f32b5').then((r: Object) =>
              `bait-sen near-miss shape: ${r}`);
          }),
          new Case('bait-const-only breaker', (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // AND 断链陷阱：DKV-001 精确常量出现在 benign 日志里，但无 distributedKVStore 调用
            hilog.info(0xFF0B, 'BAIT', 'echo %{public}s', 'tok_vd_dkv_sync_9c31');
            return 'bait const-only breaker (exact constant, no kv call)';
          }),
          new Case('bait-wrk-post near-miss', (_c: common.UIAbilityContext, _l: (s: string) => void) => {
            // mimics OVD-WRK-001（worker postMessage + token 形常量异构）
            return new Promise<string>((resolve: (v: string) => void) => {
              const w = new worker.ThreadWorker('@feat_api/ets/workers/CalcWorker');
              w.onmessage = (e: MessageEvents): void => {
                w.terminate();
                resolve('bait-wrk near-miss shape (benign payload)');
              };
              w.onerror = (): void => {
                w.terminate();
                resolve('bait-wrk err');
              };
              const msg: Record<string, Object> = { 'op': 'echo', 'token': 'ovd_wrk_tok_62c4d3' };
              w.postMessage(msg);
            });
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
