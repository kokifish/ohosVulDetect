// Ovw05.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.uiAppearance';

export function ovw_uiAppearance_00(seed: number): string {
  let out: string = 'val|uiAppearance|' + ((seed * 7 + 5662) % 9973).toString();
  try {
    out += '|getDarkMode=' + JSON.stringify(ovw0000.getDarkMode());
    out += '|getFontScale=' + JSON.stringify(ovw0000.getFontScale());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_uiAppearance_01(seed: number): string {
  let out: string = 'val|uiAppearance|' + ((seed * 7 + 5662) % 9973).toString();
  try {
    out += '|getFontWeightScale=' + JSON.stringify(ovw0000.getFontWeightScale());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0001 from '@ohos.usb';

export function ovw_usb_00(seed: number): string {
  let out: string = 'val|usb|' + ((seed * 7 + 5663) % 9973).toString();
  try {
    out += '|getDevices=' + JSON.stringify(ovw0001.getDevices());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0002 from '@ohos.usbManager';

export function ovw_usbManager_00(seed: number): string {
  let out: string = 'val|usbManager|' + ((seed * 7 + 5664) % 9973).toString();
  try {
    out += '|getAccessoryList=' + JSON.stringify(ovw0002.getAccessoryList());
    out += '|getDevices=' + JSON.stringify(ovw0002.getDevices());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0003 from '@ohos.usbManager.serial';

export function ovw_usbManager_serial_00(seed: number): string {
  let out: string = 'val|usbManager.serial|' + ((seed * 7 + 5665) % 9973).toString();
  try {
    out += '|getPortList=' + JSON.stringify(ovw0003.getPortList());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0004 from '@ohos.util';

export function ovw_util_00(seed: number): string {
  let out: string = 'val|util|' + ((seed * 7 + 5666) % 9973).toString();
  try {
    out += '|getMainThreadStackTrace=' + JSON.stringify(ovw0004.getMainThreadStackTrace());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0005 from '@ohos.util.ArrayList';

export function ovw_util_ArrayList_00(seed: number): string {
  let out: string = 'val|util.ArrayList|' + ((seed * 7 + 5667) % 9973).toString();
  try {
    const inst = new ovw0005<string>();
    inst.add('v' + (seed % 97).toString());
    out += '|addok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0006 from '@ohos.util.Deque';

export function ovw_util_Deque_00(seed: number): string {
  const holder: ovw0006<string> | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|util.Deque|' + state + '|' + ((seed + 151) % 997).toString();
}
import ovw0007 from '@ohos.util.HashMap';

export function ovw_util_HashMap_00(seed: number): string {
  let out: string = 'val|util.HashMap|' + ((seed * 7 + 5669) % 9973).toString();
  try {
    const inst = new ovw0007<string, number>();
    inst.set('k' + (seed % 89).toString(), seed % 17);
    out += '|setok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0008 from '@ohos.util.HashSet';

export function ovw_util_HashSet_00(seed: number): string {
  let out: string = 'val|util.HashSet|' + ((seed * 7 + 5670) % 9973).toString();
  try {
    const inst = new ovw0008<string>();
    inst.add('v' + (seed % 97).toString());
    out += '|addok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0009 from '@ohos.util.LightWeightMap';

export function ovw_util_LightWeightMap_00(seed: number): string {
  let out: string = 'val|util.LightWeightMap|' + ((seed * 7 + 5671) % 9973).toString();
  try {
    const inst = new ovw0009<string, number>();
    inst.set('k' + (seed % 89).toString(), seed % 17);
    out += '|setok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0010 from '@ohos.util.LightWeightSet';

export function ovw_util_LightWeightSet_00(seed: number): string {
  let out: string = 'val|util.LightWeightSet|' + ((seed * 7 + 5672) % 9973).toString();
  try {
    const inst = new ovw0010<string>();
    inst.add('v' + (seed % 97).toString());
    out += '|addok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0011 from '@ohos.util.LinkedList';

export function ovw_util_LinkedList_00(seed: number): string {
  let out: string = 'val|util.LinkedList|' + ((seed * 7 + 5673) % 9973).toString();
  try {
    const inst = new ovw0011<string>();
    inst.add('v' + (seed % 97).toString());
    out += '|addok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0012 from '@ohos.util.List';

export function ovw_util_List_00(seed: number): string {
  const holder: ovw0012<string> | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|util.List|' + state + '|' + ((seed + 157) % 997).toString();
}
import ovw0013 from '@ohos.util.PlainArray';

export function ovw_util_PlainArray_00(seed: number): string {
  const holder: ovw0013<string> | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|util.PlainArray|' + state + '|' + ((seed + 158) % 997).toString();
}
import ovw0014 from '@ohos.util.Queue';

export function ovw_util_Queue_00(seed: number): string {
  let out: string = 'val|util.Queue|' + ((seed * 7 + 5676) % 9973).toString();
  try {
    const inst = new ovw0014<string>();
    inst.add('v' + (seed % 97).toString());
    out += '|addok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0015 from '@ohos.util.Stack';

export function ovw_util_Stack_00(seed: number): string {
  let out: string = 'val|util.Stack|' + ((seed * 7 + 5677) % 9973).toString();
  try {
    const inst = new ovw0015<string>();
    inst.push('v' + (seed % 97).toString());
    out += '|pushok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0016 from '@ohos.util.TreeMap';

export function ovw_util_TreeMap_00(seed: number): string {
  let out: string = 'val|util.TreeMap|' + ((seed * 7 + 5678) % 9973).toString();
  try {
    const inst = new ovw0016<string, number>();
    inst.set('k' + (seed % 89).toString(), seed % 17);
    out += '|setok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0017 from '@ohos.util.TreeSet';

export function ovw_util_TreeSet_00(seed: number): string {
  const holder: ovw0017<string> | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|util.TreeSet|' + state + '|' + ((seed + 162) % 997).toString();
}
import ovw0018 from '@ohos.util.Vector';

export function ovw_util_Vector_00(seed: number): string {
  let out: string = 'val|util.Vector|' + ((seed * 7 + 5680) % 9973).toString();
  try {
    const inst = new ovw0018<string>();
    inst.add('v' + (seed % 97).toString());
    out += '|addok|len=' + inst.length.toString();
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0019 from '@ohos.vibrator';

export function ovw_vibrator_00(seed: number): string {
  let out: string = 'val|vibrator|' + ((seed * 7 + 5681) % 9973).toString();
  try {
    out += '|isHdHapticSupported=' + JSON.stringify(ovw0019.isHdHapticSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0020 from '@ohos.wallpaper';

export function ovw_wallpaper_00(seed: number): string {
  let out: string = 'val|wallpaper|' + ((seed * 7 + 5682) % 9973).toString();
  try {
    out += '|getMinHeight=' + JSON.stringify(ovw0020.getMinHeight());
    out += '|getMinWidth=' + JSON.stringify(ovw0020.getMinWidth());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wallpaper_01(seed: number): string {
  let out: string = 'val|wallpaper|' + ((seed * 7 + 5682) % 9973).toString();
  try {
    out += '|isChangePermitted=' + JSON.stringify(ovw0020.isChangePermitted());
    out += '|isOperationAllowed=' + JSON.stringify(ovw0020.isOperationAllowed());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0021 from '@ohos.wifi';

export function ovw_wifi_00(seed: number): string {
  let out: string = 'val|wifi|' + ((seed * 7 + 5683) % 9973).toString();
  try {
    out += '|getCountryCode=' + JSON.stringify(ovw0021.getCountryCode());
    out += '|getCurrentGroup=' + JSON.stringify(ovw0021.getCurrentGroup());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifi_01(seed: number): string {
  let out: string = 'val|wifi|' + ((seed * 7 + 5683) % 9973).toString();
  try {
    out += '|getIpInfo=' + JSON.stringify(ovw0021.getIpInfo());
    out += '|getLinkedInfo=' + JSON.stringify(ovw0021.getLinkedInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifi_02(seed: number): string {
  let out: string = 'val|wifi|' + ((seed * 7 + 5683) % 9973).toString();
  try {
    out += '|getP2pLinkedInfo=' + JSON.stringify(ovw0021.getP2pLinkedInfo());
    out += '|getP2pPeerDevices=' + JSON.stringify(ovw0021.getP2pPeerDevices());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifi_03(seed: number): string {
  let out: string = 'val|wifi|' + ((seed * 7 + 5683) % 9973).toString();
  try {
    out += '|getScanInfos=' + JSON.stringify(ovw0021.getScanInfos());
    out += '|isConnected=' + JSON.stringify(ovw0021.isConnected());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0022 from '@ohos.wifiManager';

export function ovw_wifiManager_00(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 5684) % 9973).toString();
  try {
    out += '|getCandidateConfigs=' + JSON.stringify(ovw0022.getCandidateConfigs());
    out += '|getCountryCode=' + JSON.stringify(ovw0022.getCountryCode());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifiManager_01(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 5684) % 9973).toString();
  try {
    out += '|getCurrentGroup=' + JSON.stringify(ovw0022.getCurrentGroup());
    out += '|getDeviceConfigs=' + JSON.stringify(ovw0022.getDeviceConfigs());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifiManager_02(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 5684) % 9973).toString();
  try {
    out += '|getDeviceMacAddress=' + JSON.stringify(ovw0022.getDeviceMacAddress());
    out += '|getIpInfo=' + JSON.stringify(ovw0022.getIpInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_wifiManager_03(seed: number): string {
  let out: string = 'val|wifiManager|' + ((seed * 7 + 5684) % 9973).toString();
  try {
    out += '|getIpv6Info=' + JSON.stringify(ovw0022.getIpv6Info());
    out += '|getLinkedInfo=' + JSON.stringify(ovw0022.getLinkedInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0023 from '@ohos.wifiManagerExt';

export function ovw_wifiManagerExt_00(seed: number): string {
  let out: string = 'val|wifiManagerExt|' + ((seed * 7 + 5685) % 9973).toString();
  try {
    out += '|getPowerMode=' + JSON.stringify(ovw0023.getPowerMode());
    out += '|getSupportedPowerMode=' + JSON.stringify(ovw0023.getSupportedPowerMode());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export type ApiFn = (seed: number) => string;

export function areg_05(): ApiFn[] {
  return [ovw_uiAppearance_00, ovw_uiAppearance_01, ovw_usb_00, ovw_usbManager_00, ovw_usbManager_serial_00, ovw_util_00, ovw_util_ArrayList_00, ovw_util_Deque_00, ovw_util_HashMap_00, ovw_util_HashSet_00, ovw_util_LightWeightMap_00, ovw_util_LightWeightSet_00, ovw_util_LinkedList_00, ovw_util_List_00, ovw_util_PlainArray_00, ovw_util_Queue_00, ovw_util_Stack_00, ovw_util_TreeMap_00, ovw_util_TreeSet_00, ovw_util_Vector_00, ovw_vibrator_00, ovw_wallpaper_00, ovw_wallpaper_01, ovw_wifi_00, ovw_wifi_01, ovw_wifi_02, ovw_wifi_03, ovw_wifiManager_00, ovw_wifiManager_01, ovw_wifiManager_02, ovw_wifiManager_03, ovw_wifiManagerExt_00];
}

export function asafe_05(): ApiFn[] {
  return [];
}
