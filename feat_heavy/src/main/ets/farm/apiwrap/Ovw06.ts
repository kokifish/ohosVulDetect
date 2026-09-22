// Ovw06.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.wifiManager';

export function ovw_wifiManager_00(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 6639) % 9973).toString();
  try {
    out += '|getCandidateConfigs=' + JSON.stringify(ovw0000.getCandidateConfigs());
    out += '|getCountryCode=' + JSON.stringify(ovw0000.getCountryCode());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifiManager_01(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 6639) % 9973).toString();
  try {
    out += '|getCurrentGroup=' + JSON.stringify(ovw0000.getCurrentGroup());
    out += '|getDeviceConfigs=' + JSON.stringify(ovw0000.getDeviceConfigs());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifiManager_02(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 6639) % 9973).toString();
  try {
    out += '|getDeviceMacAddress=' + JSON.stringify(ovw0000.getDeviceMacAddress());
    out += '|getIpInfo=' + JSON.stringify(ovw0000.getIpInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifiManager_03(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 6639) % 9973).toString();
  try {
    out += '|getIpv6Info=' + JSON.stringify(ovw0000.getIpv6Info());
    out += '|getLinkedInfo=' + JSON.stringify(ovw0000.getLinkedInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0001 from '@ohos.wifiManagerExt';

export function ovw_wifiManagerExt_00(seed: number): string {
  let out: string = 'val|wifiManagerExt|' + ((seed * 7 + 6640) % 9973).toString();
  try {
    out += '|getPowerMode=' + JSON.stringify(ovw0001.getPowerMode());
    out += '|getSupportedPowerMode=' + JSON.stringify(ovw0001.getSupportedPowerMode());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0002 from '@ohos.wifiext';

export function ovw_wifiext_00(seed: number): string {
  let out: string = 'val|wifiext|' + ((seed * 7 + 6641) % 9973).toString();
  try {
    out += '|getPowerModel=' + JSON.stringify(ovw0002.getPowerModel());
    out += '|getSupportedPowerModel=' + JSON.stringify(ovw0002.getSupportedPowerModel());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0003 from '@ohos.window.floatView';

export function ovw_window_floatView_00(seed: number): string {
  let out: string = 'val|window.floatView|' + ((seed * 7 + 6642) % 9973).toString();
  try {
    out += '|isFloatViewEnabled=' + JSON.stringify(ovw0003.isFloatViewEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0004 from '@ohos.window.floatingBall';

export function ovw_window_floatingBall_00(seed: number): string {
  let out: string = 'val|window.floatingBall|' + ((seed * 7 + 6643) % 9973).toString();
  try {
    out += '|isFloatingBallEnabled=' + JSON.stringify(ovw0004.isFloatingBallEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export type ApiFn = (seed: number) => string;

export function areg_06(): ApiFn[] {
  return [ovw_wifiManager_00, ovw_wifiManager_01, ovw_wifiManager_02, ovw_wifiManager_03, ovw_wifiManagerExt_00, ovw_wifiext_00, ovw_window_floatView_00, ovw_window_floatingBall_00];
}

export function asafe_06(): ApiFn[] {
  return [];
}
