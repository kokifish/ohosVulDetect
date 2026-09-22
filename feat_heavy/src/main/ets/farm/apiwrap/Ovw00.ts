// Ovw00.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.FusionConnectivity.partnerAgent';

export function ovw_FusionConnectivity_partnerAgent_00(seed: number): string {
  let out: string = 'val|FusionConnectivity.partnerAgent|' + ((seed * 7 + 777) % 9973).toString();
  try {
    out += '|getBoundDevices=' + JSON.stringify(ovw0000.getBoundDevices());
    out += '|isPartnerAgentSupported=' + JSON.stringify(ovw0000.isPartnerAgentSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0001 from '@ohos.FusionConnectivity.ranging';

export function ovw_FusionConnectivity_ranging_00(seed: number): string {
  let out: string = 'val|FusionConnectivity.ranging|' + ((seed * 7 + 778) % 9973).toString();
  try {
    out += '|getRangingCapability=' + JSON.stringify(ovw0001.getRangingCapability());
    out += '|isRangingSupported=' + JSON.stringify(ovw0001.isRangingSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0002 from '@ohos.InputMethodExtensionAbility';

export function ovw_InputMethodExtensionAbility_00(seed: number): string {
  const holder: ovw0002 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|InputMethodExtensionAbility|' + state + '|' + ((seed + 166) % 997).toString();
}
import ovw0003 from '@ohos.InputMethodExtensionContext';

export function ovw_InputMethodExtensionContext_00(seed: number): string {
  const holder: ovw0003 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|InputMethodExtensionContext|' + state + '|' + ((seed + 167) % 997).toString();
}
import ovw0004 from '@ohos.InputMethodSubtype';

export function ovw_InputMethodSubtype_00(seed: number): string {
  const holder: ovw0004 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'type|InputMethodSubtype|' + state + '|' + ((seed + 168) % 997).toString();
}
import ovw0005 from '@ohos.PiPWindow';

export function ovw_PiPWindow_00(seed: number): string {
  let out: string = 'val|PiPWindow|' + ((seed * 7 + 782) % 9973).toString();
  try {
    out += '|isPiPEnabled=' + JSON.stringify(ovw0005.isPiPEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0006 from '@ohos.WorkSchedulerExtensionAbility';

export function ovw_WorkSchedulerExtensionAbility_00(seed: number): string {
  const holder: ovw0006 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|WorkSchedulerExtensionAbility|' + state + '|' + ((seed + 170) % 997).toString();
}
import ovw0007 from '@ohos.ability.screenLockFileManager';

export function ovw_ability_screenLockFileManager_00(seed: number): string {
  let out: string = 'val|ability.screenLockFileManager|' + ((seed * 7 + 784) % 9973).toString();
  try {
    out += '|queryAppKeyState=' + JSON.stringify(ovw0007.queryAppKeyState());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0008 from '@ohos.accessibility';

export function ovw_accessibility_00(seed: number): string {
  let out: string = 'val|accessibility|' + ((seed * 7 + 785) % 9973).toString();
  try {
    out += '|getCaptionsManager=' + JSON.stringify(ovw0008.getCaptionsManager());
    out += '|getSeniorModeStateForSelf=' + JSON.stringify(ovw0008.getSeniorModeStateForSelf());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_accessibility_01(seed: number): string {
  let out: string = 'val|accessibility|' + ((seed * 7 + 785) % 9973).toString();
  try {
    out += '|getTouchModeSync=' + JSON.stringify(ovw0008.getTouchModeSync());
    out += '|isAnimationReduceEnabled=' + JSON.stringify(ovw0008.isAnimationReduceEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_accessibility_02(seed: number): string {
  let out: string = 'val|accessibility|' + ((seed * 7 + 785) % 9973).toString();
  try {
    out += '|isAnimationReduceEnabledSync=' + JSON.stringify(ovw0008.isAnimationReduceEnabledSync());
    out += '|isAudioMonoEnabled=' + JSON.stringify(ovw0008.isAudioMonoEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_accessibility_03(seed: number): string {
  let out: string = 'val|accessibility|' + ((seed * 7 + 785) % 9973).toString();
  try {
    out += '|isAudioMonoEnabledSync=' + JSON.stringify(ovw0008.isAudioMonoEnabledSync());
    out += '|isFlashReminderEnabled=' + JSON.stringify(ovw0008.isFlashReminderEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0009 from '@ohos.account.distributedAccount';

export function ovw_account_distributedAccount_00(seed: number): string {
  let out: string = 'val|account.distributedAccount|' + ((seed * 7 + 786) % 9973).toString();
  try {
    out += '|getDistributedAccountAbility=' + JSON.stringify(ovw0009.getDistributedAccountAbility());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0010 from '@ohos.account.osAccount';

export function ovw_account_osAccount_00(seed: number): string {
  let out: string = 'val|account.osAccount|' + ((seed * 7 + 787) % 9973).toString();
  try {
    out += '|getAccountManager=' + JSON.stringify(ovw0010.getAccountManager());
    out += '|isDomainAccountSupported=' + JSON.stringify(ovw0010.isDomainAccountSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0011 from '@ohos.ai.mindSporeLite';

export function ovw_ai_mindSporeLite_00(seed: number): string {
  let out: string = 'val|ai.mindSporeLite|' + ((seed * 7 + 788) % 9973).toString();
  try {
    out += '|getAllNNRTDeviceDescriptions=' + JSON.stringify(ovw0011.getAllNNRTDeviceDescriptions());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0012 from '@ohos.app.ability.Ability';

export function ovw_app_ability_Ability_00(seed: number): string {
  const holder: ovw0012 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.Ability|' + state + '|' + ((seed + 176) % 997).toString();
}
import ovw0013 from '@ohos.app.ability.AbilityLifecycleCallback';

export function ovw_app_ability_AbilityLifecycleCallback_00(seed: number): string {
  const holder: ovw0013 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.AbilityLifecycleCallback|' + state + '|' + ((seed + 177) % 997).toString();
}
import ovw0014 from '@ohos.app.ability.AbilityStage';

export function ovw_app_ability_AbilityStage_00(seed: number): string {
  const holder: ovw0014 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.AbilityStage|' + state + '|' + ((seed + 178) % 997).toString();
}
import ovw0015 from '@ohos.app.ability.AppServiceExtensionAbility';

export function ovw_app_ability_AppServiceExtensionAbility_00(seed: number): string {
  const holder: ovw0015 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.AppServiceExtensionAbility|' + state + '|' + ((seed + 179) % 997).toString();
}
import ovw0016 from '@ohos.app.ability.ChildProcess';

export function ovw_app_ability_ChildProcess_00(seed: number): string {
  const holder: ovw0016 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.ChildProcess|' + state + '|' + ((seed + 180) % 997).toString();
}
import ovw0017 from '@ohos.app.ability.CompletionHandler';

export function ovw_app_ability_CompletionHandler_00(seed: number): string {
  const holder: ovw0017 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.CompletionHandler|' + state + '|' + ((seed + 181) % 997).toString();
}
import ovw0018 from '@ohos.app.ability.CompletionHandlerForAtomicService';

export function ovw_app_ability_CompletionHandlerForAtomicService_00(seed: number): string {
  const holder: ovw0018 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.CompletionHandlerForAtomicService|' + state + '|' + ((seed + 182) % 997).toString();
}
import ovw0019 from '@ohos.app.ability.DriverExtensionAbility';

export function ovw_app_ability_DriverExtensionAbility_00(seed: number): string {
  const holder: ovw0019 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.DriverExtensionAbility|' + state + '|' + ((seed + 183) % 997).toString();
}
import ovw0020 from '@ohos.app.ability.InsightIntentContext';

export function ovw_app_ability_InsightIntentContext_00(seed: number): string {
  const holder: ovw0020 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.InsightIntentContext|' + state + '|' + ((seed + 184) % 997).toString();
}
import ovw0021 from '@ohos.app.ability.InsightIntentEntryExecutor';

export function ovw_app_ability_InsightIntentEntryExecutor_00(seed: number): string {
  const holder: ovw0021<string> | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.InsightIntentEntryExecutor|' + state + '|' + ((seed + 185) % 997).toString();
}
import ovw0022 from '@ohos.app.ability.InsightIntentExecutor';

export function ovw_app_ability_InsightIntentExecutor_00(seed: number): string {
  const holder: ovw0022 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|app.ability.InsightIntentExecutor|' + state + '|' + ((seed + 186) % 997).toString();
}
import ovw0023 from '@ohos.app.ability.OpenLinkOptions';

export function ovw_app_ability_OpenLinkOptions_00(seed: number): string {
  const holder: ovw0023 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'type|app.ability.OpenLinkOptions|' + state + '|' + ((seed + 187) % 997).toString();
}

export type ApiFn = (seed: number) => string;

export function areg_00(): ApiFn[] {
  return [ovw_FusionConnectivity_partnerAgent_00, ovw_FusionConnectivity_ranging_00, ovw_InputMethodExtensionAbility_00, ovw_InputMethodExtensionContext_00, ovw_InputMethodSubtype_00, ovw_PiPWindow_00, ovw_WorkSchedulerExtensionAbility_00, ovw_ability_screenLockFileManager_00, ovw_accessibility_00, ovw_accessibility_01, ovw_accessibility_02, ovw_accessibility_03, ovw_account_distributedAccount_00, ovw_account_osAccount_00, ovw_ai_mindSporeLite_00, ovw_app_ability_Ability_00, ovw_app_ability_AbilityLifecycleCallback_00, ovw_app_ability_AbilityStage_00, ovw_app_ability_AppServiceExtensionAbility_00, ovw_app_ability_ChildProcess_00, ovw_app_ability_CompletionHandler_00, ovw_app_ability_CompletionHandlerForAtomicService_00, ovw_app_ability_DriverExtensionAbility_00, ovw_app_ability_InsightIntentContext_00, ovw_app_ability_InsightIntentEntryExecutor_00, ovw_app_ability_InsightIntentExecutor_00, ovw_app_ability_OpenLinkOptions_00];
}

export function asafe_00(): ApiFn[] {
  return [];
}
