import { common } from '@kit.AbilityKit';
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';
import { geoLocationManager } from '@kit.LocationKit';
import { Runner } from 'lib_common';

// 位置：运行时权限申请（requestPermissionsFromUser）→ getCurrentLocation → on/off。
@Entry
@Component
struct LocationDemo {
  @State lines: string[] = [];
  private runner: Runner = new Runner([]);

  aboutToAppear(): void {
    this.runner = new Runner(this.lines);
  }

  build() {
    Column() {
      Text('geolocationManager').fontSize(20).margin(8)
      Flex({ wrap: FlexWrap.Wrap }) {
        Button('request+locate').margin(4).onClick(() => {
          this.runner.run('request+locate', async () => {
            const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const perms: Array<Permissions> = [
              'ohos.permission.LOCATION', 'ohos.permission.APPROXIMATELY_LOCATION'];
            const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
            const res = await atManager.requestPermissionsFromUser(ctx, perms);
            const granted: number = res.authResults.filter((r: number) => r === 0).length;
            const loc: geoLocationManager.Location = await geoLocationManager.getCurrentLocation();
            return `granted=${granted}/2 lat=${loc.latitude.toFixed(3)} lon=${loc.longitude.toFixed(3)}`;
          });
        })
        Button('locationChange').margin(4).onClick(() => {
          this.runner.run('locationChange', () => {
            const locReq: geoLocationManager.LocationRequest = { 'scenario': geoLocationManager.LocationRequestScenario.NAVIGATION };
            geoLocationManager.on('locationChange', locReq, (loc: geoLocationManager.Location) => {
              this.lines.push(`ev loc ${loc.latitude.toFixed(3)},${loc.longitude.toFixed(3)}`);
            });
            setTimeout(() => {
              geoLocationManager.off('locationChange');
              this.lines.push('ev unsubscribed');
            }, 3000);
            const enabled: boolean = geoLocationManager.isLocationEnabled();
            return `subscribed, enabled=${enabled}`;
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
