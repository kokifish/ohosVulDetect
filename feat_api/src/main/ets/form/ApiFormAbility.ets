import { FormExtensionAbility, formBindingData, formInfo, formProvider } from '@kit.FormKit';
import { Want } from '@kit.AbilityKit';

// ArkTS 卡片（共包方式）：卡片 UI 在 ets/widget/ApiWidgetCard.ets，经 form_config.json 注册，
// 编译产物为与 modules.abc 并存的独立 ets/widgets.abc（HAP 内多 abc 形态语料）。
export default class ApiFormAbility extends FormExtensionAbility {
  onAddForm(want: Want): formBindingData.FormBindingData {
    const formId = want.parameters?.[formInfo.FormParam.IDENTITY_KEY];
    const name = want.parameters?.[formInfo.FormParam.NAME_KEY];
    return formBindingData.createFormBindingData({
      title: `vd-card-${formId ?? 'none'}-${name ?? 'noname'}`,
      count: 42
    });
  }

  onCastToNormalForm(formId: string): void {
  }

  onUpdateForm(formId: string): void {
    formProvider.updateForm(formId, formBindingData.createFormBindingData({
      title: 'vd-card-refresh', count: 43
    })).catch(() => {
    });
  }

  onFormEvent(formId: string, message: string): void {
    formProvider.updateForm(formId, formBindingData.createFormBindingData({
      title: 'vd-card-event', count: 44, msg: message
    })).catch(() => {
    });
  }

  onRemoveForm(formId: string): void {
  }
}
