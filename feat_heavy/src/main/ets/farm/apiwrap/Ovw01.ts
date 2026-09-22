// Ovw01.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.app.ability.PhotoEditorExtensionAbility';

export function ovw_app_ability_PhotoEditorExtensionAbility_00(seed: number): string {
  const holder: ovw0000 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.PhotoEditorExtensionAbility|' + state + '|' + ((seed + 528) % 997).toString();
}
import ovw0001 from '@ohos.app.ability.PrintExtensionAbility';

export function ovw_app_ability_PrintExtensionAbility_00(seed: number): string {
  const holder: ovw0001 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.PrintExtensionAbility|' + state + '|' + ((seed + 529) % 997).toString();
}
import ovw0002 from '@ohos.app.ability.StartOptions';

export function ovw_app_ability_StartOptions_00(seed: number): string {
  const holder: ovw0002 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.StartOptions|' + state + '|' + ((seed + 530) % 997).toString();
}
import ovw0003 from '@ohos.app.ability.UIAbility';

export function ovw_app_ability_UIAbility_00(seed: number): string {
  const holder: ovw0003 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.UIAbility|' + state + '|' + ((seed + 531) % 997).toString();
}
import ovw0004 from '@ohos.app.ability.UIExtensionAbility';

export function ovw_app_ability_UIExtensionAbility_00(seed: number): string {
  const holder: ovw0004 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.UIExtensionAbility|' + state + '|' + ((seed + 532) % 997).toString();
}
import ovw0005 from '@ohos.app.ability.UIExtensionContentSession';

export function ovw_app_ability_UIExtensionContentSession_00(seed: number): string {
  const holder: ovw0005 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.UIExtensionContentSession|' + state + '|' + ((seed + 533) % 997).toString();
}
import ovw0006 from '@ohos.app.ability.abilityDelegatorRegistry';

export function ovw_app_ability_abilityDelegatorRegistry_00(seed: number): string {
  let out: string = 'val|app.ability.abilityDelegatorRegistry|' + ((seed * 7 + 1760) % 9973).toString();
  try {
    out += '|getAbilityDelegator=' + JSON.stringify(ovw0006.getAbilityDelegator());
    out += '|getArguments=' + JSON.stringify(ovw0006.getArguments());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0007 from '@ohos.app.ability.abilityManager';

export function ovw_app_ability_abilityManager_00(seed: number): string {
  let out: string = 'val|app.ability.abilityManager|' + ((seed * 7 + 1761) % 9973).toString();
  try {
    out += '|getAbilityRunningInfos=' + JSON.stringify(ovw0007.getAbilityRunningInfos());
    out += '|isEmbeddedUIExtensionSupported=' + JSON.stringify(ovw0007.isEmbeddedUIExtensionSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0008 from '@ohos.app.ability.appManager';

export function ovw_app_ability_appManager_00(seed: number): string {
  let out: string = 'val|app.ability.appManager|' + ((seed * 7 + 1762) % 9973).toString();
  try {
    out += '|getAppMemorySize=' + JSON.stringify(ovw0008.getAppMemorySize());
    out += '|getRunningProcessInformation=' + JSON.stringify(ovw0008.getRunningProcessInformation());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_app_ability_appManager_01(seed: number): string {
  let out: string = 'val|app.ability.appManager|' + ((seed * 7 + 1762) % 9973).toString();
  try {
    out += '|isRamConstrainedDevice=' + JSON.stringify(ovw0008.isRamConstrainedDevice());
    out += '|isRunningInStabilityTest=' + JSON.stringify(ovw0008.isRunningInStabilityTest());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0009 from '@ohos.app.ability.application';

export function ovw_app_ability_application_00(seed: number): string {
  let out: string = 'val|app.ability.application|' + ((seed * 7 + 1763) % 9973).toString();
  try {
    out += '|getAppPreloadType=' + JSON.stringify(ovw0009.getAppPreloadType());
    out += '|getApplicationContext=' + JSON.stringify(ovw0009.getApplicationContext());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_app_ability_application_01(seed: number): string {
  let out: string = 'val|app.ability.application|' + ((seed * 7 + 1763) % 9973).toString();
  try {
    out += '|getApplicationContextInstance=' + JSON.stringify(ovw0009.getApplicationContextInstance());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0010 from '@ohos.app.ability.autoStartupManager';

export function ovw_app_ability_autoStartupManager_00(seed: number): string {
  let out: string = 'val|app.ability.autoStartupManager|' + ((seed * 7 + 1764) % 9973).toString();
  try {
    out += '|getAutoStartupStatusForSelf=' + JSON.stringify(ovw0010.getAutoStartupStatusForSelf());
    out += '|isAutoStartupSupported=' + JSON.stringify(ovw0010.isAutoStartupSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0011 from '@ohos.app.ability.childProcessManager';

export function ovw_app_ability_childProcessManager_00(seed: number): string {
  let out: string = 'val|app.ability.childProcessManager|' + ((seed * 7 + 1765) % 9973).toString();
  try {
    out += '|isArkChildProcessSupported=' + JSON.stringify(ovw0011.isArkChildProcessSupported());
    out += '|isNativeChildProcessSupported=' + JSON.stringify(ovw0011.isNativeChildProcessSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0012 from '@ohos.app.agent.AgentExtensionAbility';

export function ovw_app_agent_AgentExtensionAbility_00(seed: number): string {
  const holder: ovw0012 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.agent.AgentExtensionAbility|' + state + '|' + ((seed + 540) % 997).toString();
}
import ovw0013 from '@ohos.app.agent.AgentUIExtensionAbility';

export function ovw_app_agent_AgentUIExtensionAbility_00(seed: number): string {
  const holder: ovw0013 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.agent.AgentUIExtensionAbility|' + state + '|' + ((seed + 541) % 997).toString();
}
import ovw0014 from '@ohos.app.appstartup.StartupConfig';

export function ovw_app_appstartup_StartupConfig_00(seed: number): string {
  const holder: ovw0014 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'type|app.appstartup.StartupConfig|' + state + '|' + ((seed + 542) % 997).toString();
}
import ovw0015 from '@ohos.app.appstartup.StartupConfigEntry';

export function ovw_app_appstartup_StartupConfigEntry_00(seed: number): string {
  const holder: ovw0015 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.appstartup.StartupConfigEntry|' + state + '|' + ((seed + 543) % 997).toString();
}
import ovw0016 from '@ohos.app.appstartup.StartupListener';

export function ovw_app_appstartup_StartupListener_00(seed: number): string {
  const holder: ovw0016 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.appstartup.StartupListener|' + state + '|' + ((seed + 544) % 997).toString();
}
import ovw0017 from '@ohos.app.form.FormEditExtensionAbility';

export function ovw_app_form_FormEditExtensionAbility_00(seed: number): string {
  const holder: ovw0017 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.form.FormEditExtensionAbility|' + state + '|' + ((seed + 545) % 997).toString();
}
import ovw0018 from '@ohos.app.form.FormExtensionAbility';

export function ovw_app_form_FormExtensionAbility_00(seed: number): string {
  const holder: ovw0018 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.form.FormExtensionAbility|' + state + '|' + ((seed + 546) % 997).toString();
}
import ovw0019 from '@ohos.app.form.LiveFormExtensionAbility';

export function ovw_app_form_LiveFormExtensionAbility_00(seed: number): string {
  const holder: ovw0019 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.form.LiveFormExtensionAbility|' + state + '|' + ((seed + 547) % 997).toString();
}
import ovw0020 from '@ohos.app.form.formProvider';

export function ovw_app_form_formProvider_00(seed: number): string {
  let out: string = 'val|app.form.formProvider|' + ((seed * 7 + 1774) % 9973).toString();
  try {
    out += '|getPublishedFormInfos=' + JSON.stringify(ovw0020.getPublishedFormInfos());
    out += '|getPublishedRunningFormInfos=' + JSON.stringify(ovw0020.getPublishedRunningFormInfos());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0021 from '@ohos.application.AccessibilityExtensionAbility';

export function ovw_application_AccessibilityExtensionAbility_00(seed: number): string {
  const holder: ovw0021 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|application.AccessibilityExtensionAbility|' + state + '|' + ((seed + 549) % 997).toString();
}
import ovw0022 from '@ohos.application.BackupExtensionAbility';

export function ovw_application_BackupExtensionAbility_00(seed: number): string {
  const holder: ovw0022 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|application.BackupExtensionAbility|' + state + '|' + ((seed + 550) % 997).toString();
}
import ovw0023 from '@ohos.application.DistributedExtensionAbility';

export function ovw_application_DistributedExtensionAbility_00(seed: number): string {
  const holder: ovw0023 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|application.DistributedExtensionAbility|' + state + '|' + ((seed + 551) % 997).toString();
}

export type ApiFn = (seed: number) => string;

export function areg_01(): ApiFn[] {
  return [ovw_app_ability_PhotoEditorExtensionAbility_00, ovw_app_ability_PrintExtensionAbility_00, ovw_app_ability_StartOptions_00, ovw_app_ability_UIAbility_00, ovw_app_ability_UIExtensionAbility_00, ovw_app_ability_UIExtensionContentSession_00, ovw_app_ability_abilityDelegatorRegistry_00, ovw_app_ability_abilityManager_00, ovw_app_ability_appManager_00, ovw_app_ability_appManager_01, ovw_app_ability_application_00, ovw_app_ability_application_01, ovw_app_ability_autoStartupManager_00, ovw_app_ability_childProcessManager_00, ovw_app_agent_AgentExtensionAbility_00, ovw_app_agent_AgentUIExtensionAbility_00, ovw_app_appstartup_StartupConfig_00, ovw_app_appstartup_StartupConfigEntry_00, ovw_app_appstartup_StartupListener_00, ovw_app_form_FormEditExtensionAbility_00, ovw_app_form_FormExtensionAbility_00, ovw_app_form_LiveFormExtensionAbility_00, ovw_app_form_formProvider_00, ovw_application_AccessibilityExtensionAbility_00, ovw_application_BackupExtensionAbility_00, ovw_application_DistributedExtensionAbility_00];
}

export function asafe_01(): ApiFn[] {
  return [];
}
