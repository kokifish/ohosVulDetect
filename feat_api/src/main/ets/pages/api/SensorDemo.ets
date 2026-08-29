import { common } from '@kit.AbilityKit';
import { sensor, vibrator } from '@kit.SensorServiceKit';
import { Runner } from 'lib_common';

// sensor on/once/off + getSensorList；vibrator preset 震动（权限 VIBRATE）。
@Entry
@Component
struct SensorDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('sensor / vibrator').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('accel-on-off').margin(4).onClick(() => {
          this.runner.run('accel-on-off', () => {
            let cnt = 0;
            sensor.on(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
              cnt += 1;
              if (cnt === 1) {
                this.lines.push(`ev x=${data['x'].toFixed(2)} samples…`);
              }
            });
            setTimeout(() => {
              sensor.off(sensor.SensorId.ACCELEROMETER);
              this.lines.push(`ev off after ${cnt} samples`);
            }, 2000);
            return 'subscribed';
          });
        })
        Button('sensor-once').margin(4).onClick(() => {
          this.runner.run('sensor-once', () => {
            sensor.once(sensor.SensorId.GYROSCOPE, (data: sensor.GyroscopeResponse) => {
              this.lines.push(`ev gyro z=${data['z'].toFixed(3)}`);
            });
            return 'once sent';
          });
        })
        Button('sensor-list').margin(4).onClick(() => {
          this.runner.run('sensor-list', async () => {
            const list: Array<sensor.Sensor> = await sensor.getSensorList();
            return `sensors=${list.length}`;
          });
        })
        Button('vibrate').margin(4).onClick(() => {
          this.runner.run('vibrate', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            await vibrator.startVibration({ type: 'preset', effectId: 'haptic.clock.timer', count: 1 }, { usage: 'touch' });
            return 'vibrated';
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
