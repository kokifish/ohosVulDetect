// Ovw02.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.application.DistributedExtensionContext';

export function ovw_application_DistributedExtensionContext_00(seed: number): string {
  const holder: ovw0000 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|application.DistributedExtensionContext|' + state + '|' + ((seed + 279) % 997).toString();
}
import ovw0001 from '@ohos.application.NotificationSubscriberExtensionAbility';

export function ovw_application_NotificationSubscriberExtensionAbility_00(seed: number): string {
  const holder: ovw0001 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|application.NotificationSubscriberExtensionAbility|' + state + '|' + ((seed + 280) % 997).toString();
}
import ovw0002 from '@ohos.application.abilityDelegatorRegistry';

export function ovw_application_abilityDelegatorRegistry_00(seed: number): string {
  let out: string = 'val|application.abilityDelegatorRegistry|' + ((seed * 7 + 2733) % 9973).toString();
  try {
    out += '|getAbilityDelegator=' + JSON.stringify(ovw0002.getAbilityDelegator());
    out += '|getArguments=' + JSON.stringify(ovw0002.getArguments());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0003 from '@ohos.application.appManager';

export function ovw_application_appManager_00(seed: number): string {
  let out: string = 'val|application.appManager|' + ((seed * 7 + 2734) % 9973).toString();
  try {
    out += '|getAppMemorySize=' + JSON.stringify(ovw0003.getAppMemorySize());
    out += '|getProcessRunningInfos=' + JSON.stringify(ovw0003.getProcessRunningInfos());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_application_appManager_01(seed: number): string {
  let out: string = 'val|application.appManager|' + ((seed * 7 + 2734) % 9973).toString();
  try {
    out += '|isRamConstrainedDevice=' + JSON.stringify(ovw0003.isRamConstrainedDevice());
    out += '|isRunningInStabilityTest=' + JSON.stringify(ovw0003.isRunningInStabilityTest());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0004 from '@ohos.application.testRunner';

export function ovw_application_testRunner_00(seed: number): string {
  const holder: ovw0004 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'type|application.testRunner|' + state + '|' + ((seed + 283) % 997).toString();
}
import ovw0005 from '@ohos.arkui.dragController';

export function ovw_arkui_dragController_00(seed: number): string {
  let out: string = 'val|arkui.dragController|' + ((seed * 7 + 2736) % 9973).toString();
  try {
    out += '|getDragPreview=' + JSON.stringify(ovw0005.getDragPreview());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0006 from '@ohos.arkui.uiMaterial';

export function ovw_arkui_uiMaterial_00(seed: number): string {
  let out: string = 'val|arkui.uiMaterial|' + ((seed * 7 + 2737) % 9973).toString();
  try {
    out += '|getMaterialInfo=' + JSON.stringify(ovw0006.getMaterialInfo());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0007 from '@ohos.bluetooth';

export function ovw_bluetooth_00(seed: number): string {
  let out: string = 'val|bluetooth|' + ((seed * 7 + 2738) % 9973).toString();
  try {
    out += '|getBluetoothScanMode=' + JSON.stringify(ovw0007.getBluetoothScanMode());
    out += '|getBtConnectionState=' + JSON.stringify(ovw0007.getBtConnectionState());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_bluetooth_01(seed: number): string {
  let out: string = 'val|bluetooth|' + ((seed * 7 + 2738) % 9973).toString();
  try {
    out += '|getLocalName=' + JSON.stringify(ovw0007.getLocalName());
    out += '|getPairedDevices=' + JSON.stringify(ovw0007.getPairedDevices());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_bluetooth_02(seed: number): string {
  let out: string = 'val|bluetooth|' + ((seed * 7 + 2738) % 9973).toString();
  try {
    out += '|getState=' + JSON.stringify(ovw0007.getState());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0008 from '@ohos.bluetooth.access';

export function ovw_bluetooth_access_00(seed: number): string {
  let out: string = 'val|bluetooth.access|' + ((seed * 7 + 2739) % 9973).toString();
  try {
    out += '|getPersistentDeviceIds=' + JSON.stringify(ovw0008.getPersistentDeviceIds());
    out += '|getState=' + JSON.stringify(ovw0008.getState());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_bluetooth_access_01(seed: number): string {
  let out: string = 'val|bluetooth.access|' + ((seed * 7 + 2739) % 9973).toString();
  try {
    out += '|isBluetoothSupported=' + JSON.stringify(ovw0008.isBluetoothSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0009 from '@ohos.bluetooth.ble';

export function ovw_bluetooth_ble_00(seed: number): string {
  let out: string = 'val|bluetooth.ble|' + ((seed * 7 + 2740) % 9973).toString();
  try {
    out += '|getConnectedBLEDevices=' + JSON.stringify(ovw0009.getConnectedBLEDevices());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0010 from '@ohos.bluetooth.connection';

export function ovw_bluetooth_connection_00(seed: number): string {
  let out: string = 'val|bluetooth.connection|' + ((seed * 7 + 2741) % 9973).toString();
  try {
    out += '|getBluetoothScanMode=' + JSON.stringify(ovw0010.getBluetoothScanMode());
    out += '|getLocalName=' + JSON.stringify(ovw0010.getLocalName());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_bluetooth_connection_01(seed: number): string {
  let out: string = 'val|bluetooth.connection|' + ((seed * 7 + 2741) % 9973).toString();
  try {
    out += '|getPairedDevices=' + JSON.stringify(ovw0010.getPairedDevices());
    out += '|isBluetoothDiscovering=' + JSON.stringify(ovw0010.isBluetoothDiscovering());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0011 from '@ohos.bluetoothManager';

export function ovw_bluetoothManager_00(seed: number): string {
  let out: string = 'val|bluetoothManager|' + ((seed * 7 + 2742) % 9973).toString();
  try {
    out += '|getBluetoothScanMode=' + JSON.stringify(ovw0011.getBluetoothScanMode());
    out += '|getBtConnectionState=' + JSON.stringify(ovw0011.getBtConnectionState());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_bluetoothManager_01(seed: number): string {
  let out: string = 'val|bluetoothManager|' + ((seed * 7 + 2742) % 9973).toString();
  try {
    out += '|getLocalName=' + JSON.stringify(ovw0011.getLocalName());
    out += '|getPairedDevices=' + JSON.stringify(ovw0011.getPairedDevices());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_bluetoothManager_02(seed: number): string {
  let out: string = 'val|bluetoothManager|' + ((seed * 7 + 2742) % 9973).toString();
  try {
    out += '|getState=' + JSON.stringify(ovw0011.getState());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0012 from '@ohos.bundle.pluginBundleManager';

export function ovw_bundle_pluginBundleManager_00(seed: number): string {
  let out: string = 'val|bundle.pluginBundleManager|' + ((seed * 7 + 2743) % 9973).toString();
  try {
    out += '|getAllLocalPluginInfoForSelf=' + JSON.stringify(ovw0012.getAllLocalPluginInfoForSelf());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0013 from '@ohos.bundle.shortcutManager';

export function ovw_bundle_shortcutManager_00(seed: number): string {
  let out: string = 'val|bundle.shortcutManager|' + ((seed * 7 + 2744) % 9973).toString();
  try {
    out += '|getAllShortcutInfoForSelf=' + JSON.stringify(ovw0013.getAllShortcutInfoForSelf());
    out += '|isShortcutSupported=' + JSON.stringify(ovw0013.isShortcutSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0014 from '@ohos.bundleState';

export function ovw_bundleState_00(seed: number): string {
  let out: string = 'val|bundleState|' + ((seed * 7 + 2745) % 9973).toString();
  try {
    out += '|queryAppUsagePriorityGroup=' + JSON.stringify(ovw0014.queryAppUsagePriorityGroup());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0015 from '@ohos.busManager.serial';

export function ovw_busManager_serial_00(seed: number): string {
  let out: string = 'val|busManager.serial|' + ((seed * 7 + 2746) % 9973).toString();
  try {
    out += '|getSerialPortList=' + JSON.stringify(ovw0015.getSerialPortList());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0016 from '@ohos.contact';

export function ovw_contact_00(seed: number): string {
  let out: string = 'val|contact|' + ((seed * 7 + 2747) % 9973).toString();
  try {
    out += '|queryHolders=' + JSON.stringify(ovw0016.queryHolders());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0017 from '@ohos.customization.customConfig';

export function ovw_customization_customConfig_00(seed: number): string {
  let out: string = 'val|customization.customConfig|' + ((seed * 7 + 2748) % 9973).toString();
  try {
    out += '|getChannelId=' + JSON.stringify(ovw0017.getChannelId());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0018 from '@ohos.data.intelligence';

export function ovw_data_intelligence_00(seed: number): string {
  let out: string = 'val|data.intelligence|' + ((seed * 7 + 2749) % 9973).toString();
  try {
    out += '|getSupportedCloudModel=' + JSON.stringify(ovw0018.getSupportedCloudModel());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0019 from '@ohos.display';

export function ovw_display_00(seed: number): string {
  let out: string = 'val|display|' + ((seed * 7 + 2750) % 9973).toString();
  try {
    out += '|getAllDisplay=' + JSON.stringify(ovw0019.getAllDisplay());
    out += '|getAllDisplayPhysicalResolution=' + JSON.stringify(ovw0019.getAllDisplayPhysicalResolution());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_display_01(seed: number): string {
  let out: string = 'val|display|' + ((seed * 7 + 2750) % 9973).toString();
  try {
    out += '|getAllDisplays=' + JSON.stringify(ovw0019.getAllDisplays());
    out += '|getCurrentFoldCreaseRegion=' + JSON.stringify(ovw0019.getCurrentFoldCreaseRegion());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_display_02(seed: number): string {
  let out: string = 'val|display|' + ((seed * 7 + 2750) % 9973).toString();
  try {
    out += '|getDefaultDisplay=' + JSON.stringify(ovw0019.getDefaultDisplay());
    out += '|getDefaultDisplaySync=' + JSON.stringify(ovw0019.getDefaultDisplaySync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_display_03(seed: number): string {
  let out: string = 'val|display|' + ((seed * 7 + 2750) % 9973).toString();
  try {
    out += '|getFoldDisplayMode=' + JSON.stringify(ovw0019.getFoldDisplayMode());
    out += '|getFoldStatus=' + JSON.stringify(ovw0019.getFoldStatus());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0020 from '@ohos.distributedHardware.mechanicManager';

export function ovw_distributedHardware_mechanicManager_00(seed: number): string {
  let out: string = 'val|distributedHardware.mechanicManager|' + ((seed * 7 + 2751) % 9973).toString();
  try {
    out += '|getAttachedMechDevices=' + JSON.stringify(ovw0020.getAttachedMechDevices());
    out += '|getCameraTrackingEnabled=' + JSON.stringify(ovw0020.getCameraTrackingEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_distributedHardware_mechanicManager_01(seed: number): string {
  let out: string = 'val|distributedHardware.mechanicManager|' + ((seed * 7 + 2751) % 9973).toString();
  try {
    out += '|getCameraTrackingLayout=' + JSON.stringify(ovw0020.getCameraTrackingLayout());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0021 from '@ohos.dlpPermission';

export function ovw_dlpPermission_00(seed: number): string {
  let out: string = 'val|dlpPermission|' + ((seed * 7 + 2752) % 9973).toString();
  try {
    out += '|getControlledAppLists=' + JSON.stringify(ovw0021.getControlledAppLists());
    out += '|getDLPFileAccessRecords=' + JSON.stringify(ovw0021.getDLPFileAccessRecords());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_dlpPermission_01(seed: number): string {
  let out: string = 'val|dlpPermission|' + ((seed * 7 + 2752) % 9973).toString();
  try {
    out += '|getDLPPermissionInfo=' + JSON.stringify(ovw0021.getDLPPermissionInfo());
    out += '|getDLPSuffix=' + JSON.stringify(ovw0021.getDLPSuffix());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_dlpPermission_02(seed: number): string {
  let out: string = 'val|dlpPermission|' + ((seed * 7 + 2752) % 9973).toString();
  try {
    out += '|getDLPSupportedFileTypes=' + JSON.stringify(ovw0021.getDLPSupportedFileTypes());
    out += '|getSandboxAppConfig=' + JSON.stringify(ovw0021.getSandboxAppConfig());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_dlpPermission_03(seed: number): string {
  let out: string = 'val|dlpPermission|' + ((seed * 7 + 2752) % 9973).toString();
  try {
    out += '|isDLPFeatureProvided=' + JSON.stringify(ovw0021.isDLPFeatureProvided());
    out += '|isInSandbox=' + JSON.stringify(ovw0021.isInSandbox());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0022 from '@ohos.enterprise.browser';

export function ovw_enterprise_browser_00(seed: number): string {
  let out: string = 'val|enterprise.browser|' + ((seed * 7 + 2753) % 9973).toString();
  try {
    out += '|getSelfManagedBrowserPolicy=' + JSON.stringify(ovw0022.getSelfManagedBrowserPolicy());
    out += '|getSelfManagedBrowserPolicyVersion=' + JSON.stringify(ovw0022.getSelfManagedBrowserPolicyVersion());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0023 from '@ohos.file.BackupExtensionContext';

export function ovw_file_BackupExtensionContext_00(seed: number): string {
  const holder: ovw0023 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|file.BackupExtensionContext|' + state + '|' + ((seed + 302) % 997).toString();
}

export type ApiFn = (seed: number) => string;

export function areg_02(): ApiFn[] {
  return [ovw_application_DistributedExtensionContext_00, ovw_application_NotificationSubscriberExtensionAbility_00, ovw_application_abilityDelegatorRegistry_00, ovw_application_appManager_00, ovw_application_appManager_01, ovw_application_testRunner_00, ovw_arkui_dragController_00, ovw_arkui_uiMaterial_00, ovw_bluetooth_00, ovw_bluetooth_01, ovw_bluetooth_02, ovw_bluetooth_access_00, ovw_bluetooth_access_01, ovw_bluetooth_ble_00, ovw_bluetooth_connection_00, ovw_bluetooth_connection_01, ovw_bluetoothManager_00, ovw_bluetoothManager_01, ovw_bluetoothManager_02, ovw_bundle_pluginBundleManager_00, ovw_bundle_shortcutManager_00, ovw_bundleState_00, ovw_busManager_serial_00, ovw_contact_00, ovw_customization_customConfig_00, ovw_data_intelligence_00, ovw_display_00, ovw_display_01, ovw_display_02, ovw_display_03, ovw_distributedHardware_mechanicManager_00, ovw_distributedHardware_mechanicManager_01, ovw_dlpPermission_00, ovw_dlpPermission_01, ovw_dlpPermission_02, ovw_dlpPermission_03, ovw_enterprise_browser_00, ovw_file_BackupExtensionContext_00];
}

export function asafe_02(): ApiFn[] {
  return [];
}
