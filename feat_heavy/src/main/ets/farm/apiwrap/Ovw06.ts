// Ovw06.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.wifiext';

export function ovw_wifiext_00(seed: number): string {
  let out: string = 'val|wifiext|' + ((seed * 7 + 6639) % 9973).toString();
  try {
    out += '|getPowerModel=' + JSON.stringify(ovw0000.getPowerModel());
    out += '|getSupportedPowerModel=' + JSON.stringify(ovw0000.getSupportedPowerModel());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0001 from '@ohos.window.floatView';

export function ovw_window_floatView_00(seed: number): string {
  let out: string = 'val|window.floatView|' + ((seed * 7 + 6640) % 9973).toString();
  try {
    out += '|isFloatViewEnabled=' + JSON.stringify(ovw0001.isFloatViewEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0002 from '@ohos.window.floatingBall';

export function ovw_window_floatingBall_00(seed: number): string {
  let out: string = 'val|window.floatingBall|' + ((seed * 7 + 6641) % 9973).toString();
  try {
    out += '|isFloatingBallEnabled=' + JSON.stringify(ovw0002.isFloatingBallEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export type ApiFn = (seed: number) => string;

export function areg_06(): ApiFn[] {
  return [ovw_wifiext_00, ovw_window_floatView_00, ovw_window_floatingBall_00];
}

export function asafe_06(): ApiFn[] {
  return [];
}
