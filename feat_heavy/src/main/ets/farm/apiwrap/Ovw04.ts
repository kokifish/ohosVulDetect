// Ovw04.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.net.connection';

export function ovw_net_connection_00(seed: number): string {
  let out: string = 'val|net.connection|' + ((seed * 7 + 4685) % 9973).toString();
  try {
    out += '|getAllNets=' + JSON.stringify(ovw0000.getAllNets());
    out += '|getAllNetsSync=' + JSON.stringify(ovw0000.getAllNetsSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_net_connection_01(seed: number): string {
  let out: string = 'val|net.connection|' + ((seed * 7 + 4685) % 9973).toString();
  try {
    out += '|getAppNet=' + JSON.stringify(ovw0000.getAppNet());
    out += '|getAppNetSync=' + JSON.stringify(ovw0000.getAppNetSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_net_connection_02(seed: number): string {
  let out: string = 'val|net.connection|' + ((seed * 7 + 4685) % 9973).toString();
  try {
    out += '|getDefaultHttpProxy=' + JSON.stringify(ovw0000.getDefaultHttpProxy());
    out += '|getDefaultNet=' + JSON.stringify(ovw0000.getDefaultNet());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_net_connection_03(seed: number): string {
  let out: string = 'val|net.connection|' + ((seed * 7 + 4685) % 9973).toString();
  try {
    out += '|getDefaultNetSync=' + JSON.stringify(ovw0000.getDefaultNetSync());
    out += '|getIpNeighTable=' + JSON.stringify(ovw0000.getIpNeighTable());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0001 from '@ohos.net.ethernet';

export function ovw_net_ethernet_00(seed: number): string {
  let out: string = 'val|net.ethernet|' + ((seed * 7 + 4686) % 9973).toString();
  try {
    out += '|getMacAddress=' + JSON.stringify(ovw0001.getMacAddress());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0002 from '@ohos.net.networkSecurity';

export function ovw_net_networkSecurity_00(seed: number): string {
  let out: string = 'val|net.networkSecurity|' + ((seed * 7 + 4687) % 9973).toString();
  try {
    out += '|isCleartextPermitted=' + JSON.stringify(ovw0002.isCleartextPermitted());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0003 from '@ohos.net.policy';

export function ovw_net_policy_00(seed: number): string {
  let out: string = 'val|net.policy|' + ((seed * 7 + 4688) % 9973).toString();
  try {
    out += '|getNetAccessPolicy=' + JSON.stringify(ovw0003.getNetAccessPolicy());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0004 from '@ohos.net.statistics';

export function ovw_net_statistics_00(seed: number): string {
  let out: string = 'val|net.statistics|' + ((seed * 7 + 4689) % 9973).toString();
  try {
    out += '|getAllRxBytes=' + JSON.stringify(ovw0004.getAllRxBytes());
    out += '|getAllTxBytes=' + JSON.stringify(ovw0004.getAllTxBytes());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_net_statistics_01(seed: number): string {
  let out: string = 'val|net.statistics|' + ((seed * 7 + 4689) % 9973).toString();
  try {
    out += '|getCellularRxBytes=' + JSON.stringify(ovw0004.getCellularRxBytes());
    out += '|getCellularTxBytes=' + JSON.stringify(ovw0004.getCellularTxBytes());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0005 from '@ohos.power';

export function ovw_power_00(seed: number): string {
  let out: string = 'val|power|' + ((seed * 7 + 4690) % 9973).toString();
  try {
    out += '|getPowerMode=' + JSON.stringify(ovw0005.getPowerMode());
    out += '|isActive=' + JSON.stringify(ovw0005.isActive());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_power_01(seed: number): string {
  let out: string = 'val|power|' + ((seed * 7 + 4690) % 9973).toString();
  try {
    out += '|isScreenOn=' + JSON.stringify(ovw0005.isScreenOn());
    out += '|isStandby=' + JSON.stringify(ovw0005.isStandby());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0006 from '@ohos.process';

export function ovw_process_00(seed: number): string {
  let out: string = 'val|process|' + ((seed * 7 + 4691) % 9973).toString();
  try {
    out += '|getPastCpuTime=' + JSON.stringify(ovw0006.getPastCpuTime());
    out += '|getStartRealtime=' + JSON.stringify(ovw0006.getStartRealtime());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_process_01(seed: number): string {
  let out: string = 'val|process|' + ((seed * 7 + 4691) % 9973).toString();
  try {
    out += '|is64Bit=' + JSON.stringify(ovw0006.is64Bit());
    out += '|isIsolatedProcess=' + JSON.stringify(ovw0006.isIsolatedProcess());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0007 from '@ohos.resourceschedule.backgroundTaskManager';

export function ovw_resourceschedule_backgroundTaskManager_00(seed: number): string {
  let out: string = 'val|resourceschedule.backgroundTaskManager|' + ((seed * 7 + 4692) % 9973).toString();
  try {
    out += '|getTransientTaskInfo=' + JSON.stringify(ovw0007.getTransientTaskInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0008 from '@ohos.resourceschedule.systemload';

export function ovw_resourceschedule_systemload_00(seed: number): string {
  let out: string = 'val|resourceschedule.systemload|' + ((seed * 7 + 4693) % 9973).toString();
  try {
    out += '|getLevel=' + JSON.stringify(ovw0008.getLevel());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0009 from '@ohos.router';

export function ovw_router_00(seed: number): string {
  let out: string = 'val|router|' + ((seed * 7 + 4694) % 9973).toString();
  try {
    out += '|getLength=' + JSON.stringify(ovw0009.getLength());
    out += '|getParams=' + JSON.stringify(ovw0009.getParams());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_router_01(seed: number): string {
  let out: string = 'val|router|' + ((seed * 7 + 4694) % 9973).toString();
  try {
    out += '|getState=' + JSON.stringify(ovw0009.getState());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0010 from '@ohos.screenLock';

export function ovw_screenLock_00(seed: number): string {
  let out: string = 'val|screenLock|' + ((seed * 7 + 4695) % 9973).toString();
  try {
    out += '|isScreenLocked=' + JSON.stringify(ovw0010.isScreenLocked());
    out += '|isSecureMode=' + JSON.stringify(ovw0010.isSecureMode());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0011 from '@ohos.security.CryptoExtensionAbility';

export function ovw_security_CryptoExtensionAbility_00(seed: number): string {
  const holder: ovw0011 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|security.CryptoExtensionAbility|' + state + '|' + ((seed + 405) % 997).toString();
}
import ovw0012 from '@ohos.selectionInput.SelectionExtensionAbility';

export function ovw_selectionInput_SelectionExtensionAbility_00(seed: number): string {
  const holder: ovw0012 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|selectionInput.SelectionExtensionAbility|' + state + '|' + ((seed + 406) % 997).toString();
}
import ovw0013 from '@ohos.selectionInput.SelectionExtensionContext';

export function ovw_selectionInput_SelectionExtensionContext_00(seed: number): string {
  const holder: ovw0013 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|selectionInput.SelectionExtensionContext|' + state + '|' + ((seed + 407) % 997).toString();
}
import ovw0014 from '@ohos.selectionInput.selectionManager';

export function ovw_selectionInput_selectionManager_00(seed: number): string {
  let out: string = 'val|selectionInput.selectionManager|' + ((seed * 7 + 4699) % 9973).toString();
  try {
    out += '|getSelectionContent=' + JSON.stringify(ovw0014.getSelectionContent());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0015 from '@ohos.sensor';

export function ovw_sensor_00(seed: number): string {
  let out: string = 'val|sensor|' + ((seed * 7 + 4700) % 9973).toString();
  try {
    out += '|getSensorList=' + JSON.stringify(ovw0015.getSensorList());
    out += '|getSensorListSync=' + JSON.stringify(ovw0015.getSensorListSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0016 from '@ohos.systemTime';

export function ovw_systemTime_00(seed: number): string {
  let out: string = 'val|systemTime|' + ((seed * 7 + 4701) % 9973).toString();
  try {
    out += '|getDate=' + JSON.stringify(ovw0016.getDate());
    out += '|getTimezone=' + JSON.stringify(ovw0016.getTimezone());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0017 from '@ohos.taskpool';

export function ovw_taskpool_00(seed: number): string {
  let out: string = 'val|taskpool|' + ((seed * 7 + 4702) % 9973).toString();
  try {
    out += '|getTaskPoolInfo=' + JSON.stringify(ovw0017.getTaskPoolInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0018 from '@ohos.telephony.call';

export function ovw_telephony_call_00(seed: number): string {
  let out: string = 'val|telephony.call|' + ((seed * 7 + 4703) % 9973).toString();
  try {
    out += '|getCallState=' + JSON.stringify(ovw0018.getCallState());
    out += '|getCallStateSync=' + JSON.stringify(ovw0018.getCallStateSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_telephony_call_01(seed: number): string {
  let out: string = 'val|telephony.call|' + ((seed * 7 + 4703) % 9973).toString();
  try {
    out += '|hasCall=' + JSON.stringify(ovw0018.hasCall());
    out += '|hasCallSync=' + JSON.stringify(ovw0018.hasCallSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_telephony_call_02(seed: number): string {
  let out: string = 'val|telephony.call|' + ((seed * 7 + 4703) % 9973).toString();
  try {
    out += '|hasVoiceCapability=' + JSON.stringify(ovw0018.hasVoiceCapability());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0019 from '@ohos.telephony.data';

export function ovw_telephony_data_00(seed: number): string {
  let out: string = 'val|telephony.data|' + ((seed * 7 + 4704) % 9973).toString();
  try {
    out += '|getActiveApnName=' + JSON.stringify(ovw0019.getActiveApnName());
    out += '|getCellularDataFlowType=' + JSON.stringify(ovw0019.getCellularDataFlowType());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_telephony_data_01(seed: number): string {
  let out: string = 'val|telephony.data|' + ((seed * 7 + 4704) % 9973).toString();
  try {
    out += '|getCellularDataState=' + JSON.stringify(ovw0019.getCellularDataState());
    out += '|getDefaultCellularDataSimId=' + JSON.stringify(ovw0019.getDefaultCellularDataSimId());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_telephony_data_02(seed: number): string {
  let out: string = 'val|telephony.data|' + ((seed * 7 + 4704) % 9973).toString();
  try {
    out += '|getDefaultCellularDataSlotId=' + JSON.stringify(ovw0019.getDefaultCellularDataSlotId());
    out += '|getDefaultCellularDataSlotIdSync=' + JSON.stringify(ovw0019.getDefaultCellularDataSlotIdSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_telephony_data_03(seed: number): string {
  let out: string = 'val|telephony.data|' + ((seed * 7 + 4704) % 9973).toString();
  try {
    out += '|isCellularDataEnabled=' + JSON.stringify(ovw0019.isCellularDataEnabled());
    out += '|isCellularDataEnabledSync=' + JSON.stringify(ovw0019.isCellularDataEnabledSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0020 from '@ohos.telephony.radio';

export function ovw_telephony_radio_00(seed: number): string {
  let out: string = 'val|telephony.radio|' + ((seed * 7 + 4705) % 9973).toString();
  try {
    out += '|getPrimarySlotId=' + JSON.stringify(ovw0020.getPrimarySlotId());
    out += '|isNRSupported=' + JSON.stringify(ovw0020.isNRSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_telephony_radio_01(seed: number): string {
  let out: string = 'val|telephony.radio|' + ((seed * 7 + 4705) % 9973).toString();
  try {
    out += '|isNrSupported=' + JSON.stringify(ovw0020.isNrSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0021 from '@ohos.telephony.sim';

export function ovw_telephony_sim_00(seed: number): string {
  let out: string = 'val|telephony.sim|' + ((seed * 7 + 4706) % 9973).toString();
  try {
    out += '|getActiveSimAccountInfoList=' + JSON.stringify(ovw0021.getActiveSimAccountInfoList());
    out += '|getDefaultVoiceSimId=' + JSON.stringify(ovw0021.getDefaultVoiceSimId());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_telephony_sim_01(seed: number): string {
  let out: string = 'val|telephony.sim|' + ((seed * 7 + 4706) % 9973).toString();
  try {
    out += '|getDefaultVoiceSlotId=' + JSON.stringify(ovw0021.getDefaultVoiceSlotId());
    out += '|getMaxSimCount=' + JSON.stringify(ovw0021.getMaxSimCount());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0022 from '@ohos.thermal';

export function ovw_thermal_00(seed: number): string {
  let out: string = 'val|thermal|' + ((seed * 7 + 4707) % 9973).toString();
  try {
    out += '|getLevel=' + JSON.stringify(ovw0022.getLevel());
    out += '|getThermalLevel=' + JSON.stringify(ovw0022.getThermalLevel());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0023 from '@ohos.uiAppearance';

export function ovw_uiAppearance_00(seed: number): string {
  let out: string = 'val|uiAppearance|' + ((seed * 7 + 4708) % 9973).toString();
  try {
    out += '|getDarkMode=' + JSON.stringify(ovw0023.getDarkMode());
    out += '|getFontScale=' + JSON.stringify(ovw0023.getFontScale());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_uiAppearance_01(seed: number): string {
  let out: string = 'val|uiAppearance|' + ((seed * 7 + 4708) % 9973).toString();
  try {
    out += '|getFontWeightScale=' + JSON.stringify(ovw0023.getFontWeightScale());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export type ApiFn = (seed: number) => string;

export function areg_04(): ApiFn[] {
  return [ovw_net_connection_00, ovw_net_connection_01, ovw_net_connection_02, ovw_net_connection_03, ovw_net_ethernet_00, ovw_net_networkSecurity_00, ovw_net_policy_00, ovw_net_statistics_00, ovw_net_statistics_01, ovw_power_00, ovw_power_01, ovw_process_00, ovw_process_01, ovw_resourceschedule_backgroundTaskManager_00, ovw_resourceschedule_systemload_00, ovw_router_00, ovw_router_01, ovw_screenLock_00, ovw_security_CryptoExtensionAbility_00, ovw_selectionInput_SelectionExtensionAbility_00, ovw_selectionInput_SelectionExtensionContext_00, ovw_selectionInput_selectionManager_00, ovw_sensor_00, ovw_systemTime_00, ovw_taskpool_00, ovw_telephony_call_00, ovw_telephony_call_01, ovw_telephony_call_02, ovw_telephony_data_00, ovw_telephony_data_01, ovw_telephony_data_02, ovw_telephony_data_03, ovw_telephony_radio_00, ovw_telephony_radio_01, ovw_telephony_sim_00, ovw_telephony_sim_01, ovw_thermal_00, ovw_uiAppearance_00, ovw_uiAppearance_01];
}

export function asafe_04(): ApiFn[] {
  return [ovw_systemTime_00];
}
