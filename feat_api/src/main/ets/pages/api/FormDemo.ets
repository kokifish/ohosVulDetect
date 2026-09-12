import { formProvider, formInfo, formBindingData, formError } from '@kit.FormKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

// FormKit：卡片提供方信息 / 过滤查询 / 绑定数据构造 / 枚举面。
// 卡片本体在 ets/widget/ApiWidgetCard.ets（编译为独立 widgets.abc），生命周期在 ets/form/ApiFormAbility.ets。
@Entry
@Component
struct FormDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'FormKit card',
        cases: [
          new Case('getFormsInfo', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const infos: Array<formInfo.FormInfo> = await formProvider.getFormsInfo();
            let names: string = '';
            for (const f of infos) {
              names += `${f.moduleName}:${f.name},`;
            }
            log(`bundle=${infos.length > 0 ? infos[0].bundleName : 'n/a'}`);
            return `total=${infos.length} [${names}]`;
          }),
          new Case('filter feat_api', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const filter: formInfo.FormInfoFilter = { moduleName: 'feat_api' };
            const infos: Array<formInfo.FormInfo> = await formProvider.getFormsInfo(filter);
            let hit: string = 'none';
            for (const f of infos) {
              if (f.name === 'ApiWidgetCard') {
                hit = `${f.name} type=${f.type} dim=${f.defaultDimension} upd=${f.updateEnabled}`;
              }
            }
            return `feat_api=${infos.length} ${hit}`;
          }),
          new Case('bindingData', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const d = formBindingData.createFormBindingData({ title: 'bench', count: 7 });
            const d2 = formBindingData.createFormBindingData(JSON.stringify({ title: 'bench2' }));
            return `obj=${d !== undefined} str=${d2 !== undefined}`;
          }),
          new Case('enums', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const k: string = formInfo.FormParam.IDENTITY_KEY;
            const st: formInfo.FormState = formInfo.FormState.UNKNOWN;
            const ft: formInfo.FormType = formInfo.FormType.eTS;
            const err: formError.FormError = formError.FormError.ERR_COMMON;
            return `param=${k} state=${st} type=${ft} err=${err}`;
          }),
          new Case('setNextRefresh(lastFormId)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const formId = AppStorage.get<string>('lastFormId') ?? '';
            if (formId.length === 0) {
              return 'skip: no lastFormId (card not added)';
            }
            try {
              await formProvider.setFormNextRefreshTime(formId, 5);
              return `formId=${formId} next=5min`;
            } catch (e) {
              const err = e as BusinessError;
              return `err=${err.code} ${err.message}`;
            }
          }),
          new Case('updateForm(lastFormId)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const formId = AppStorage.get<string>('lastFormId') ?? '';
            if (formId.length === 0) {
              return 'skip: no lastFormId (card not added)';
            }
            try {
              const d = formBindingData.createFormBindingData({
                title: `vd-card-pushed-${Date.now() % 1000}`,
                count: 43
              });
              await formProvider.updateForm(formId, d);
              return `formId=${formId} updated`;
            } catch (e) {
              const err = e as BusinessError;
              return `err=${err.code} ${err.message}`;
            }
          }),
          new Case('setNextRefresh(invalid)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              await formProvider.setFormNextRefreshTime('0', 5);
              return 'unexpected-success';
            } catch (e) {
              const err = e as BusinessError;
              return `err=${err.code} (expected invalid-formId path)`;
            }
          })
        ]
      })
    }
    .height('100%')
  }
}
