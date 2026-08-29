import { deviceInfo, batteryInfo } from '@kit.BasicServicesKit';
import { display } from '@kit.ArkUI';
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { Runner } from 'lib_common';

// 设备信息（同步命名空间属性）、电池、显示 + display.on 事件、分布式设备管理。
@Entry
@Component
struct DeviceDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('deviceInfo / battery / display / dm').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('device-info').margin(4).onClick(() => {
          this.runner.run('device-info', () => {
            const s = `${deviceInfo.deviceType}/${deviceInfo.brand}/${deviceInfo.productModel}` +
              `/api${deviceInfo.sdkApiVersion}/${deviceInfo.osFullName}`;
            return s;
          });
        })
        Button('battery').margin(4).onClick(() => {
          this.runner.run('battery', () => {
            return `soc=${batteryInfo.batterySOC}% tech=${batteryInfo.technology}` +
              ` health=${batteryInfo.healthStatus}`;
          });
        })
        Button('display-on').margin(4).onClick(() => {
          this.runner.run('display-on', () => {
            const d: display.Display = display.getDefaultDisplaySync();
            display.on('change', (id: number) => {
              this.lines.push(`ev display ${id} change`);
            });
            setTimeout(() => {
              display.off('change');
            }, 2000);
            return `display ${d.width}x${d.height} dpi=${d.densityDPI}`;
          });
        })
        Button('dm-devices').margin(4).onClick(() => {
          this.runner.run('dm-devices', async () => {
            const dm: distributedDeviceManager.DeviceManager = await distributedDeviceManager.createDeviceManager('com.koki.VD');
            const list: Array<distributedDeviceManager.DeviceBasicInfo> = await dm.getAvailableDeviceList();
            dm.off('deviceStateChange');
            return `available=${list.length}`;
          });
        })
      }
      .width('100%')
      Scroll() {
        Column({ space: 2 }) {
          ForEach(this.lines, (l: string, i: number) => {
            Text(l).fontSize(11).fontFamily('monospace')
          }, (l: string, i: number) => `${i}-${l}`)
        }
        .alignItems(HorizontalAlign.Start)
        .width('100%')
      }
      .layoutWeight(1)
      .margin(4)
    }
    .height('100%')
  }
}
