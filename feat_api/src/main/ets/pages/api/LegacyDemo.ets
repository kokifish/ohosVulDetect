// 旧 API 直连面（无 Kit 归属 + deprecated 默认导入形态）：
// @ohos.fileio / statfs / data.storage / data.rdb / wantAgent / ability.wantConstant /
// ability.dataUriUtils / bytrace / hiAppEvent / commonEvent。
// 逆向语料价值：default-import 说明符形态 + deprecated d.ts 签名（与 Kit 版并存的旧命名空间）。
import fileio from '@ohos.fileio';
import statfs from '@ohos.statfs';
import dataStorage from '@ohos.data.storage';
import rdb from '@ohos.data.rdb';
import { ValuesBucket } from '@ohos.data.ValuesBucket';
import wantAgent from '@ohos.wantAgent';
import wantConstant from '@ohos.ability.wantConstant';
import dataUriUtils from '@ohos.ability.dataUriUtils';
import bytrace from '@ohos.bytrace';
import hiAppEvent from '@ohos.hiAppEvent';
import commonEvent from '@ohos.commonEvent';
import commonEventManager from '@ohos.commonEventManager';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct LegacyDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'legacy direct-import APIs',
        cases: [
          new Case('fileio rw', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const p = `${ctx.filesDir}/legacy_fileio.txt`;
              const fd = fileio.openSync(p, 0o102);
              try {
                fileio.writeSync(fd, 'legacy-fileio-bench');
                const text = fileio.readTextSync(p);
                const st = fileio.statSync(p);
                return `fileio=${text} size=${st.size}`;
              } finally {
                try {
                  fileio.closeSync(fd);
                } catch (_e) {
                }
                try {
                  fileio.unlinkSync(p);
                } catch (_e) {
                }
              }
            } catch (e) {
              return `fileio unavailable=${JSON.stringify(e).slice(0, 60)}`;
            }
          }),
          new Case('statfs sizes', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const free = await statfs.getFreeBytes(ctx.filesDir);
              const total = await statfs.getTotalBytes(ctx.filesDir);
              return `statfs free>${free > 0} total>${total >= free} ratio=${Math.round(free * 10 / total)}`;
            } catch (e) {
              return `statfs-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('data.storage kv', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const store = dataStorage.getStorageSync(`${ctx.filesDir}/legacy_storage`);
              store.putSync('legacy-key', 'legacy-val');
              const got = store.getSync('legacy-key', 'def');
              const has = store.hasSync('legacy-key');
              store.deleteSync('legacy-key');
              return `storage=${got} has=${has}`;
            } catch (e) {
              return `storage-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('data.rdb legacy', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const store = await rdb.getRdbStore(ctx, { name: 'legacy_rdb.db' }, 1);
              await store.executeSql('CREATE TABLE IF NOT EXISTS legacy_t (name TEXT, seq INTEGER)', []);
              const vb: ValuesBucket = { 'name': 'legacy-row', 'seq': 7 };
              const rowId = await store.insert('legacy_t', vb);
              const rs = await store.querySql('SELECT count(*) AS n FROM legacy_t', []);
              let n = -1;
              try {
                if (rs.goToFirstRow()) {
                  n = rs.getLong(rs.getColumnIndex('n'));
                }
              } finally {
                rs.close();
              }
              return `rdb rowId>${rowId >= 0} count=${n}`;
            } catch (e) {
              return `rdb-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('wantAgent build+equal', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const agent = await wantAgent.getWantAgent({
                wants: [{ bundleName: 'com.koki.VD', abilityName: 'EntryAbility' }],
                operationType: wantAgent.OperationType.START_ABILITY,
                requestCode: 0,
                wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
              });
              const owner = await wantAgent.getBundleName(agent);
              const same = await wantAgent.equal(agent, agent);
              return `wantAgent owner=${owner} equal=${same}`;
            } catch (e) {
              return `wantAgent-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('wantConstant + dataUriUtils', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const dial = wantConstant.Action.ACTION_DIAL;
              const base = 'datashareproxy://bench.host/entry/42';
              const id = dataUriUtils.getId(base);
              const withId = dataUriUtils.attachId('datashareproxy://bench.host/entry', 7);
              const stripped = dataUriUtils.deleteId(withId);
              return `wc=${dial} id=${id} attach=${withId} del=${stripped}`;
            } catch (e) {
              return `uri-legacy-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('bytrace marks', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              bytrace.startTrace('legacy-bench', 31);
              bytrace.traceByValue('legacy-depth', 31);
              bytrace.finishTrace('legacy-bench', 31);
              return 'bytrace start/value/finish done';
            } catch (e) {
              return `bytrace-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('hiAppEvent write', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              await hiAppEvent.write('ovd_bench_legacy', hiAppEvent.EventType.BEHAVIOR, { 'legacy': 'bench' });
              return 'hiAppEvent write ok';
            } catch (e) {
              return `hiAppEvent-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('commonEvent legacy cb', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            let sub: commonEventManager.CommonEventSubscriber | undefined;
            try {
              const subInfo: commonEventManager.CommonEventSubscribeInfo = {
                events: ['ovd.legacy.bench.event']
              };
              sub = await commonEvent.createSubscriber(subInfo);
              const bound: commonEventManager.CommonEventSubscriber = sub;
              commonEvent.subscribe(bound, (err: BusinessError, data: commonEventManager.CommonEventData) => {
                log(`cevt-legacy recv event=${data.event}`);
                commonEvent.unsubscribe(bound);
              });
              commonEvent.publish('ovd.legacy.bench.event', (e: BusinessError) => {
                log(`cevt-legacy publish-err=${e ? e.code : 0}`);
              });
              return 'cevt legacy sub+pub wired';
            } catch (e) {
              if (sub !== undefined) {
                try {
                  commonEvent.unsubscribe(sub);
                } catch (_u) {
                }
              }
              return `cevt-legacy-err=${(e as BusinessError).code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
