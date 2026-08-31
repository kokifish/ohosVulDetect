import { sensor, vibrator } from '@kit.SensorServiceKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

// sensor on/once/off + getSensorList；vibrator preset 震动（权限 VIBRATE）。
@Entry
@Component
struct SensorDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'sensor / vibrator',
        cases: [
          new Case('accel-on-off', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            let cnt = 0;
            sensor.on(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
              cnt += 1;
              if (cnt === 1) {
                log(`ev x=${data['x'].toFixed(2)} samples…`);
              }
            });
            setTimeout(() => {
              sensor.off(sensor.SensorId.ACCELEROMETER);
              log(`ev off after ${cnt} samples`);
            }, 2000);
            return 'subscribed';
          }),
          new Case('sensor-once', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            sensor.once(sensor.SensorId.GYROSCOPE, (data: sensor.GyroscopeResponse) => {
              log(`ev gyro z=${data['z'].toFixed(3)}`);
            });
            return 'once sent';
          }),
          new Case('sensor-list', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const list: Array<sensor.Sensor> = await sensor.getSensorList();
            return `sensors=${list.length}`;
          }),
          new Case('vibrate', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            await vibrator.startVibration({ type: 'preset', effectId: 'haptic.clock.timer', count: 1 }, { usage: 'touch' });
            return 'vibrated';
          })
        ]
      })

    }
    .height('100%')
  }
}
