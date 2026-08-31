import { deviceInfo, batteryInfo } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { display } from '@kit.ArkUI';
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { Case, DemoScaffold } from 'lib_common';

// 设备信息（同步命名空间属性）、电池、显示 + display.on 事件、分布式设备管理。
@Entry
@Component
struct DeviceDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'deviceInfo / battery / display / dm',
        cases: [
          new Case('device-info', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const s = `${deviceInfo.deviceType}/${deviceInfo.brand}/${deviceInfo.productModel}` +
              `/api${deviceInfo.sdkApiVersion}/${deviceInfo.osFullName}`;
            return s;
          }),
          new Case('battery', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return `soc=${batteryInfo.batterySOC}% tech=${batteryInfo.technology}` +
              ` health=${batteryInfo.healthStatus}`;
          }),
          new Case('display-on', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const d: display.Display = display.getDefaultDisplaySync();
            display.on('change', (id: number) => {
              log(`ev display ${id} change`);
            });
            setTimeout(() => {
              display.off('change');
            }, 2000);
            return `display ${d.width}x${d.height} dpi=${d.densityDPI}`;
          }),
          new Case('dm-devices', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const dm: distributedDeviceManager.DeviceManager = await distributedDeviceManager.createDeviceManager('com.koki.VD');
            const list: Array<distributedDeviceManager.DeviceBasicInfo> = await dm.getAvailableDeviceList();
            dm.off('deviceStateChange');
            return `available=${list.length}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
