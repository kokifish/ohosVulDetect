import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { fileIo } from '@kit.CoreFileKit';
import { Logger } from 'lib_common';

// VULN: OVD-IPC-001 exported:true 且无 caller 校验（CWE-862，见 module.json5 skills ovd://backdoor）
export default class BackdoorAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info('Backdoor', `onCreate uri=${JSON.stringify(want?.uri ?? '')}`);

    // VULN: OVD-IPC-002 魔法参数直接下发内嵌凭据（CWE-200）
    const params = want?.parameters ?? {};
    if (params['magic'] === '0vD_b4ckd00r') {
      AppStorage.setOrCreate('backdoor_secret', 'OVDBACKDOORSECRET123');
      Logger.info('Backdoor', 'magic param accepted, credential exposed');
    }

    // VULN: OVD-IPC-004 deeplink 参数未净化直接读文件（CWE-22）
    const uri = want?.uri ?? '';
    if (uri.startsWith('ovd://backdoor?path=')) {
      const rel = uri.substring('ovd://backdoor?path='.length);
      try {
        const full = `${this.context.filesDir}/${rel}`;
        const f: fileIo.File = fileIo.openSync(full, fileIo.OpenMode.READ_ONLY);
        const buf = new ArrayBuffer(256);
        const rd: number = fileIo.readSync(f.fd, buf);
        fileIo.closeSync(f);
        AppStorage.setOrCreate('leaked_file_head', `read ${rd}B of ${full}`);
      } catch (e) {
        AppStorage.setOrCreate('leaked_file_head', `read failed: ${JSON.stringify(e)}`);
      }
    }

    // 供 Backdoor 页展示（OVD-WEB-006：deeplink URL 直灌 WebView）
    AppStorage.setOrCreate('last_want_uri', uri);
  }

  onDestroy(): void {
    Logger.info('Backdoor', 'onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Backdoor', (err) => {
      if (err.code) {
        Logger.error('Backdoor', `loadContent failed ${JSON.stringify(err)}`);
      }
    });
  }
}
