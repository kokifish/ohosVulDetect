import { Permissions, abilityAccessCtrl, common } from '@kit.AbilityKit';
import { geoLocationManager } from '@kit.LocationKit';
import { Case, DemoScaffold } from 'lib_common';

// 位置：运行时权限申请（requestPermissionsFromUser）→ getCurrentLocation → on/off。
@Entry
@Component
struct LocationDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'geolocationManager',
        cases: [
          // ENV(不可修复): 模拟器系统定位开关默认关闭（3301100 switch off），无 CLI 可开、需系统设置开启，getCurrentLocation 必失败；真机可过
          new Case('request+locate', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const perms: Array<Permissions> = [
              'ohos.permission.LOCATION', 'ohos.permission.APPROXIMATELY_LOCATION'];
            const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
            const res = await atManager.requestPermissionsFromUser(ctx, perms);
            const granted: number = res.authResults.filter((r: number) => r === 0).length;
            const loc: geoLocationManager.Location = await geoLocationManager.getCurrentLocation();
            return `granted=${granted}/2 lat=${loc.latitude.toFixed(3)} lon=${loc.longitude.toFixed(3)}`;
          }),
          // ENV(不可修复): 同上，定位开关关闭时无 locationChange 事件回调（enabled=false）
          new Case('locationChange', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const locReq: geoLocationManager.LocationRequest = { 'scenario': geoLocationManager.LocationRequestScenario.NAVIGATION };
            geoLocationManager.on('locationChange', locReq, (loc: geoLocationManager.Location) => {
              log(`ev loc ${loc.latitude.toFixed(3)},${loc.longitude.toFixed(3)}`);
            });
            setTimeout(() => {
              geoLocationManager.off('locationChange');
              log('ev unsubscribed');
            }, 3000);
            const enabled: boolean = geoLocationManager.isLocationEnabled();
            return `subscribed, enabled=${enabled}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
