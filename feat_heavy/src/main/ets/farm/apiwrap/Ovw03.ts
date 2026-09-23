// Ovw03.ts — feat_heavy 生成 @ohos 包装语料（勿手改）

import { BusinessError } from '@kit.BasicServicesKit';
import ovw0000 from '@ohos.file.environment';

export function ovw_file_environment_00(seed: number): string {
  let out: string = 'val|file.environment|' + ((seed * 7 + 3708) % 9973).toString();
  try {
    out += '|getUserDesktopDir=' + JSON.stringify(ovw0000.getUserDesktopDir());
    out += '|getUserDocumentDir=' + JSON.stringify(ovw0000.getUserDocumentDir());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_file_environment_01(seed: number): string {
  let out: string = 'val|file.environment|' + ((seed * 7 + 3708) % 9973).toString();
  try {
    out += '|getUserDownloadDir=' + JSON.stringify(ovw0000.getUserDownloadDir());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0001 from '@ohos.file.storageStatistics';

export function ovw_file_storageStatistics_00(seed: number): string {
  let out: string = 'val|file.storageStatistics|' + ((seed * 7 + 3709) % 9973).toString();
  try {
    out += '|getCurrentBundleInodes=' + JSON.stringify(ovw0001.getCurrentBundleInodes());
    out += '|getCurrentBundleStats=' + JSON.stringify(ovw0001.getCurrentBundleStats());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_file_storageStatistics_01(seed: number): string {
  let out: string = 'val|file.storageStatistics|' + ((seed * 7 + 3709) % 9973).toString();
  try {
    out += '|getFreeInodes=' + JSON.stringify(ovw0001.getFreeInodes());
    out += '|getFreeSize=' + JSON.stringify(ovw0001.getFreeSize());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_file_storageStatistics_02(seed: number): string {
  let out: string = 'val|file.storageStatistics|' + ((seed * 7 + 3709) % 9973).toString();
  try {
    out += '|getFreeSizeSync=' + JSON.stringify(ovw0001.getFreeSizeSync());
    out += '|getTotalInodes=' + JSON.stringify(ovw0001.getTotalInodes());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_file_storageStatistics_03(seed: number): string {
  let out: string = 'val|file.storageStatistics|' + ((seed * 7 + 3709) % 9973).toString();
  try {
    out += '|getTotalSize=' + JSON.stringify(ovw0001.getTotalSize());
    out += '|getTotalSizeSync=' + JSON.stringify(ovw0001.getTotalSizeSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0002 from '@ohos.font';

export function ovw_font_00(seed: number): string {
  let out: string = 'val|font|' + ((seed * 7 + 3710) % 9973).toString();
  try {
    out += '|getSystemFontList=' + JSON.stringify(ovw0002.getSystemFontList());
    out += '|getUIFontConfig=' + JSON.stringify(ovw0002.getUIFontConfig());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0003 from '@ohos.geoLocationManager';

export function ovw_geoLocationManager_00(seed: number): string {
  let out: string = 'val|geoLocationManager|' + ((seed * 7 + 3711) % 9973).toString();
  try {
    out += '|getActiveGeoFences=' + JSON.stringify(ovw0003.getActiveGeoFences());
    out += '|getCachedGnssLocationsSize=' + JSON.stringify(ovw0003.getCachedGnssLocationsSize());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_geoLocationManager_01(seed: number): string {
  let out: string = 'val|geoLocationManager|' + ((seed * 7 + 3711) % 9973).toString();
  try {
    out += '|getCountryCode=' + JSON.stringify(ovw0003.getCountryCode());
    out += '|getCurrentWifiBssidForLocating=' + JSON.stringify(ovw0003.getCurrentWifiBssidForLocating());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_geoLocationManager_02(seed: number): string {
  let out: string = 'val|geoLocationManager|' + ((seed * 7 + 3711) % 9973).toString();
  try {
    out += '|getGeofenceSupportedCoordTypes=' + JSON.stringify(ovw0003.getGeofenceSupportedCoordTypes());
    out += '|getLastLocation=' + JSON.stringify(ovw0003.getLastLocation());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_geoLocationManager_03(seed: number): string {
  let out: string = 'val|geoLocationManager|' + ((seed * 7 + 3711) % 9973).toString();
  try {
    out += '|getPoiInfo=' + JSON.stringify(ovw0003.getPoiInfo());
    out += '|isBeaconFenceSupported=' + JSON.stringify(ovw0003.isBeaconFenceSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0004 from '@ohos.geolocation';

export function ovw_geolocation_00(seed: number): string {
  let out: string = 'val|geolocation|' + ((seed * 7 + 3712) % 9973).toString();
  try {
    out += '|getCachedGnssLocationsSize=' + JSON.stringify(ovw0004.getCachedGnssLocationsSize());
    out += '|getLastLocation=' + JSON.stringify(ovw0004.getLastLocation());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_geolocation_01(seed: number): string {
  let out: string = 'val|geolocation|' + ((seed * 7 + 3712) % 9973).toString();
  try {
    out += '|isGeoServiceAvailable=' + JSON.stringify(ovw0004.isGeoServiceAvailable());
    out += '|isLocationEnabled=' + JSON.stringify(ovw0004.isLocationEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0005 from '@ohos.hiTraceChain';

export function ovw_hiTraceChain_00(seed: number): string {
  let out: string = 'val|hiTraceChain|' + ((seed * 7 + 3713) % 9973).toString();
  try {
    out += '|getId=' + JSON.stringify(ovw0005.getId());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0006 from '@ohos.hiTraceMeter';

export function ovw_hiTraceMeter_00(seed: number): string {
  let out: string = 'val|hiTraceMeter|' + ((seed * 7 + 3714) % 9973).toString();
  try {
    out += '|isTraceEnabled=' + JSON.stringify(ovw0006.isTraceEnabled());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0007 from '@ohos.hichecker';

export function ovw_hichecker_00(seed: number): string {
  let out: string = 'val|hichecker|' + ((seed * 7 + 3715) % 9973).toString();
  try {
    out += '|getRule=' + JSON.stringify(ovw0007.getRule());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0008 from '@ohos.hiviewdfx.FaultLogExtensionAbility';

export function ovw_hiviewdfx_FaultLogExtensionAbility_00(seed: number): string {
  const holder: ovw0008 | null = null;
  const state: string = holder === null ? 'none' : 'some';
  return 'cls|hiviewdfx.FaultLogExtensionAbility|' + state + '|' + ((seed + 38) % 997).toString();
}
import ovw0009 from '@ohos.hiviewdfx.hiRetrieval';

export function ovw_hiviewdfx_hiRetrieval_00(seed: number): string {
  let out: string = 'val|hiviewdfx.hiRetrieval|' + ((seed * 7 + 3717) % 9973).toString();
  try {
    out += '|getCurrentConfig=' + JSON.stringify(ovw0009.getCurrentConfig());
    out += '|getLastParticipationTimestamp=' + JSON.stringify(ovw0009.getLastParticipationTimestamp());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_hiviewdfx_hiRetrieval_01(seed: number): string {
  let out: string = 'val|hiviewdfx.hiRetrieval|' + ((seed * 7 + 3717) % 9973).toString();
  try {
    out += '|isParticipant=' + JSON.stringify(ovw0009.isParticipant());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0010 from '@ohos.hiviewdfx.jsLeakWatcher';

export function ovw_hiviewdfx_jsLeakWatcher_00(seed: number): string {
  let out: string = 'val|hiviewdfx.jsLeakWatcher|' + ((seed * 7 + 3718) % 9973).toString();
  try {
    out += '|check=' + JSON.stringify(ovw0010.check());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0011 from '@ohos.i18n';

export function ovw_i18n_00(seed: number): string {
  let out: string = 'val|i18n|' + ((seed * 7 + 3719) % 9973).toString();
  try {
    out += '|getFirstPreferredLanguage=' + JSON.stringify(ovw0011.getFirstPreferredLanguage());
    out += '|getPreferredLanguageList=' + JSON.stringify(ovw0011.getPreferredLanguageList());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_i18n_01(seed: number): string {
  let out: string = 'val|i18n|' + ((seed * 7 + 3719) % 9973).toString();
  try {
    out += '|getSystemLanguage=' + JSON.stringify(ovw0011.getSystemLanguage());
    out += '|getSystemLocale=' + JSON.stringify(ovw0011.getSystemLocale());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_i18n_02(seed: number): string {
  let out: string = 'val|i18n|' + ((seed * 7 + 3719) % 9973).toString();
  try {
    out += '|getSystemRegion=' + JSON.stringify(ovw0011.getSystemRegion());
    out += '|is24HourClock=' + JSON.stringify(ovw0011.is24HourClock());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0012 from '@ohos.identifier.oaid';

export function ovw_identifier_oaid_00(seed: number): string {
  let out: string = 'val|identifier.oaid|' + ((seed * 7 + 3720) % 9973).toString();
  try {
    out += '|getOAID=' + JSON.stringify(ovw0012.getOAID());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0013 from '@ohos.inputMethod';

export function ovw_inputMethod_00(seed: number): string {
  let out: string = 'val|inputMethod|' + ((seed * 7 + 3721) % 9973).toString();
  try {
    out += '|getController=' + JSON.stringify(ovw0013.getController());
    out += '|getCurrentInputMethod=' + JSON.stringify(ovw0013.getCurrentInputMethod());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_inputMethod_01(seed: number): string {
  let out: string = 'val|inputMethod|' + ((seed * 7 + 3721) % 9973).toString();
  try {
    out += '|getCurrentInputMethodSubtype=' + JSON.stringify(ovw0013.getCurrentInputMethodSubtype());
    out += '|getDefaultInputMethod=' + JSON.stringify(ovw0013.getDefaultInputMethod());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_inputMethod_02(seed: number): string {
  let out: string = 'val|inputMethod|' + ((seed * 7 + 3721) % 9973).toString();
  try {
    out += '|getInputMethodController=' + JSON.stringify(ovw0013.getInputMethodController());
    out += '|getInputMethodSetting=' + JSON.stringify(ovw0013.getInputMethodSetting());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_inputMethod_03(seed: number): string {
  let out: string = 'val|inputMethod|' + ((seed * 7 + 3721) % 9973).toString();
  try {
    out += '|getSetting=' + JSON.stringify(ovw0013.getSetting());
    out += '|getSystemInputMethodConfigAbility=' + JSON.stringify(ovw0013.getSystemInputMethodConfigAbility());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0014 from '@ohos.inputMethodEngine';

export function ovw_inputMethodEngine_00(seed: number): string {
  let out: string = 'val|inputMethodEngine|' + ((seed * 7 + 3722) % 9973).toString();
  try {
    out += '|getInputMethodAbility=' + JSON.stringify(ovw0014.getInputMethodAbility());
    out += '|getInputMethodEngine=' + JSON.stringify(ovw0014.getInputMethodEngine());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_inputMethodEngine_01(seed: number): string {
  let out: string = 'val|inputMethodEngine|' + ((seed * 7 + 3722) % 9973).toString();
  try {
    out += '|getKeyboardDelegate=' + JSON.stringify(ovw0014.getKeyboardDelegate());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0015 from '@ohos.intelligentScene';

export function ovw_intelligentScene_00(seed: number): string {
  let out: string = 'val|intelligentScene|' + ((seed * 7 + 3723) % 9973).toString();
  try {
    out += '|isDoNotDisturbEnabled=' + JSON.stringify(ovw0015.isDoNotDisturbEnabled());
    out += '|isNotifyAllowedInDoNotDisturb=' + JSON.stringify(ovw0015.isNotifyAllowedInDoNotDisturb());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0016 from '@ohos.multimedia.avsession';

export function ovw_multimedia_avsession_00(seed: number): string {
  let out: string = 'val|multimedia.avsession|' + ((seed * 7 + 3724) % 9973).toString();
  try {
    out += '|getAllSessionDescriptors=' + JSON.stringify(ovw0016.getAllSessionDescriptors());
    out += '|isDesktopLyricSupported=' + JSON.stringify(ovw0016.isDesktopLyricSupported());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0017 from '@ohos.multimedia.drm';

export function ovw_multimedia_drm_00(seed: number): string {
  let out: string = 'val|multimedia.drm|' + ((seed * 7 + 3725) % 9973).toString();
  try {
    out += '|getMediaKeySystems=' + JSON.stringify(ovw0017.getMediaKeySystems());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0018 from '@ohos.multimedia.image';

export function ovw_multimedia_image_00(seed: number): string {
  let out: string = 'val|multimedia.image|' + ((seed * 7 + 3726) % 9973).toString();
  try {
    out += '|getImagePackerSupportedFormats=' + JSON.stringify(ovw0018.getImagePackerSupportedFormats());
    out += '|getImageSourceSupportedFormats=' + JSON.stringify(ovw0018.getImageSourceSupportedFormats());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0019 from '@ohos.multimodalAwareness.motion';

export function ovw_multimodalAwareness_motion_00(seed: number): string {
  let out: string = 'val|multimodalAwareness.motion|' + ((seed * 7 + 3727) % 9973).toString();
  try {
    out += '|getRecentOperatingHandStatus=' + JSON.stringify(ovw0019.getRecentOperatingHandStatus());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0020 from '@ohos.multimodalInput.infraredEmitter';

export function ovw_multimodalInput_infraredEmitter_00(seed: number): string {
  let out: string = 'val|multimodalInput.infraredEmitter|' + ((seed * 7 + 3728) % 9973).toString();
  try {
    out += '|getInfraredFrequencies=' + JSON.stringify(ovw0020.getInfraredFrequencies());
    out += '|hasIrEmitter=' + JSON.stringify(ovw0020.hasIrEmitter());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0021 from '@ohos.multimodalInput.inputConsumer';

export function ovw_multimodalInput_inputConsumer_00(seed: number): string {
  let out: string = 'val|multimodalInput.inputConsumer|' + ((seed * 7 + 3729) % 9973).toString();
  try {
    out += '|getAllSystemHotkeys=' + JSON.stringify(ovw0021.getAllSystemHotkeys());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0022 from '@ohos.multimodalInput.inputDevice';

export function ovw_multimodalInput_inputDevice_00(seed: number): string {
  let out: string = 'val|multimodalInput.inputDevice|' + ((seed * 7 + 3730) % 9973).toString();
  try {
    out += '|getDeviceIds=' + JSON.stringify(ovw0022.getDeviceIds());
    out += '|getDeviceList=' + JSON.stringify(ovw0022.getDeviceList());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export function ovw_multimodalInput_inputDevice_01(seed: number): string {
  let out: string = 'val|multimodalInput.inputDevice|' + ((seed * 7 + 3730) % 9973).toString();
  try {
    out += '|getIntervalSinceLastInput=' + JSON.stringify(ovw0022.getIntervalSinceLastInput());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}
import ovw0023 from '@ohos.multimodalInput.pointer';

export function ovw_multimodalInput_pointer_00(seed: number): string {
  let out: string = 'val|multimodalInput.pointer|' + ((seed * 7 + 3731) % 9973).toString();
  try {
    out += '|isPointerVisible=' + JSON.stringify(ovw0023.isPointerVisible());
    out += '|isPointerVisibleSync=' + JSON.stringify(ovw0023.isPointerVisibleSync());
  } catch (err) {
    out += '|!e' + String((err as BusinessError).code);
  }
  return out;
}

export type ApiFn = (seed: number) => string;

export function areg_03(): ApiFn[] {
  return [ovw_file_environment_00, ovw_file_environment_01, ovw_file_storageStatistics_00, ovw_file_storageStatistics_01, ovw_file_storageStatistics_02, ovw_file_storageStatistics_03, ovw_font_00, ovw_geoLocationManager_00, ovw_geoLocationManager_01, ovw_geoLocationManager_02, ovw_geoLocationManager_03, ovw_geolocation_00, ovw_geolocation_01, ovw_hiTraceChain_00, ovw_hiTraceMeter_00, ovw_hichecker_00, ovw_hiviewdfx_FaultLogExtensionAbility_00, ovw_hiviewdfx_hiRetrieval_00, ovw_hiviewdfx_hiRetrieval_01, ovw_hiviewdfx_jsLeakWatcher_00, ovw_i18n_00, ovw_i18n_01, ovw_i18n_02, ovw_identifier_oaid_00, ovw_inputMethod_00, ovw_inputMethod_01, ovw_inputMethod_02, ovw_inputMethod_03, ovw_inputMethodEngine_00, ovw_inputMethodEngine_01, ovw_intelligentScene_00, ovw_multimedia_avsession_00, ovw_multimedia_drm_00, ovw_multimedia_image_00, ovw_multimodalAwareness_motion_00, ovw_multimodalInput_infraredEmitter_00, ovw_multimodalInput_inputConsumer_00, ovw_multimodalInput_inputDevice_00, ovw_multimodalInput_inputDevice_01, ovw_multimodalInput_pointer_00];
}

export function asafe_03(): ApiFn[] {
  return [ovw_hichecker_00, ovw_i18n_00];
}
