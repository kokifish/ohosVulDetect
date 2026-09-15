import { Permissions, abilityAccessCtrl, common } from '@kit.AbilityKit';
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';
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
          // 定位开关可经控制中心 Location tile 开启（uitest 可点，2026-09-15 已开）；
          // 权限弹窗在 bench24(API24) 镜像上静默拒绝且无 atm 授权工具（镜像硬限制），未授权环境记 201。
          new Case('request+locate', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const perms: Array<Permissions> = [
                'ohos.permission.LOCATION', 'ohos.permission.APPROXIMATELY_LOCATION'];
              const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
              const res = await atManager.requestPermissionsFromUser(ctx, perms);
              const granted: number = res.authResults.filter((r: number) => r === 0).length;
              const loc: geoLocationManager.Location = await geoLocationManager.getCurrentLocation();
              return `granted=${granted}/2 lat=${loc.latitude.toFixed(3)} lon=${loc.longitude.toFixed(3)}`;
            } catch (e) {
              return `locate-err=${(e as BusinessError).code} (perm dialog auto-denied on this image)`;
            }
          }),
          // 同上：权限未授时 on('locationChange') 同步抛 201
          new Case('locationChange', (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const locReq: geoLocationManager.LocationRequest = { 'scenario': geoLocationManager.LocationRequestScenario.NAVIGATION };
            let subscribed = false;
            try {
              geoLocationManager.on('locationChange', locReq, (loc: geoLocationManager.Location) => {
                log(`ev loc ${loc.latitude.toFixed(3)},${loc.longitude.toFixed(3)}`);
              });
              subscribed = true;
            } catch (e) {
              return `subscribe-err=${(e as BusinessError).code} (perm dialog auto-denied on this image)`;
            }
            setTimeout(() => {
              try {
                geoLocationManager.off('locationChange');
                log('ev unsubscribed');
              } catch (e) {
                log(`ev off failed ${(e as BusinessError).code}`);
              }
            }, 3000);
            const enabled: boolean = geoLocationManager.isLocationEnabled();
            return `subscribed=${subscribed}, enabled=${enabled}`;
          })
        ]
      })

    }
    .height('100%')
  }
}
