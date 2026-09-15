// CameraKit：相机设备枚举与能力查询（getCameraManager/getSupportedCameras/getSupportedSceneModes/torch）。
// 设备枚举无需 CAMERA 权限；不 createCameraInput（不占用模拟器相机），确定性返回、sweep 安全。
import { camera } from '@kit.CameraKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct CameraDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'CameraKit',
        cases: [
          new Case('supported cameras', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const mgr = camera.getCameraManager(ctx);
              const cams = mgr.getSupportedCameras();
              const pos = cams.map((c: camera.CameraDevice): string => `${c.cameraPosition}/${c.cameraType}`);
              return `cameras=${cams.length} [${pos.join(',')}]`;
            } catch (e) {
              const err = e as BusinessError;
              log(`cameras fail: ${err.code} ${err.message}`);
              return `cameras-err=${err.code}`;
            }
          }),
          new Case('scene modes', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const mgr = camera.getCameraManager(ctx);
              const cams = mgr.getSupportedCameras();
              if (cams.length === 0) {
                return `no-camera`;
              }
              const modes = mgr.getSupportedSceneModes(cams[0]);
              return `modes=${modes.length}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`modes fail: ${err.code} ${err.message}`);
              return `modes-err=${err.code}`;
            }
          }),
          new Case('torch status', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const mgr = camera.getCameraManager(ctx);
              const supported = mgr.isTorchSupported();
              const mode = supported ? mgr.getTorchMode() : camera.TorchMode.OFF;
              return `torch supported=${supported} mode=${mode}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`torch fail: ${err.code} ${err.message}`);
              return `torch-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
