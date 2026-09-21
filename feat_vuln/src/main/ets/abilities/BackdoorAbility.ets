import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { fileIo } from '@kit.CoreFileKit';
import { Logger } from 'lib_common';
import { ovdDlink001 } from '../vulns/deeplink/OVD-DLINK-001';
import { ovdDlink002 } from '../vulns/deeplink/OVD-DLINK-002';
import { ovdDlink003 } from '../vulns/deeplink/OVD-DLINK-003';

// IPC-002 魔法参数门（onCreate 与 IpcPage 本地触发共用；本地构造不导航，sweep 可采行）
export function ovdIpc002MagicLocal(magic: string): string {
  if (magic === '0vD_b4ckd00r') {
    return 'OVDBACKDOORSECRET123';
  }
  return 'magic denied';
}

// IPC-004 deeplink path 读取原语（同上共用）：path 未净化直拼 filesDir 读文件头
export function ovdIpc004ReadLocal(rel: string, filesDir: string): string {
  try {
    const full = `${filesDir}/${rel}`;
    const f: fileIo.File = fileIo.openSync(full, fileIo.OpenMode.READ_ONLY);
    const buf = new ArrayBuffer(256);
    const rd: number = fileIo.readSync(f.fd, buf);
    fileIo.closeSync(f);
    return `read ${rd}B of ${full}`;
  } catch (e) {
    return `read failed: ${JSON.stringify(e)}`;
  }
}

// VULN: OVD-IPC-001 exported:true 且无 caller 校验（CWE-862，见 module.json5 skills ovd://backdoor）
export default class BackdoorAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info('Backdoor', `onCreate uri=${JSON.stringify(want?.uri ?? '')}`);

    // VULN: OVD-IPC-002 魔法参数直接下发内嵌凭据（CWE-200）
    const params = want?.parameters ?? {};
    const secret = ovdIpc002MagicLocal(String(params['magic'] ?? ''));
    if (secret !== 'magic denied') {
      AppStorage.setOrCreate('backdoor_secret', secret);
      Logger.info('Backdoor', 'magic param accepted, credential exposed');
    }

    // VULN: OVD-IPC-004 deeplink 参数未净化直接读文件（CWE-22）
    const uri = want?.uri ?? '';
    if (uri.startsWith('ovd://backdoor?path=')) {
      const rel = uri.substring('ovd://backdoor?path='.length);
      AppStorage.setOrCreate('leaked_file_head', ovdIpc004ReadLocal(rel, this.context.filesDir));
    }

    // 供 Backdoor 页展示（OVD-WEB-006：deeplink URL 直灌 WebView）
    AppStorage.setOrCreate('last_want_uri', uri);

    // OVD-DLINK 族：真实深链参数面走同一批处理函数（按钮本地构造见 DlinkVulnPage）
    if (uri.startsWith('ovd://backdoor?')) {
      ovdDlink001(this.context, uri).then((r: string) => AppStorage.setOrCreate('dlink_result_001', r)).catch(() => {});
      ovdDlink002(this.context, uri).then((r: string) => AppStorage.setOrCreate('dlink_result_002', r)).catch(() => {});
      AppStorage.setOrCreate('dlink_result_003', ovdDlink003(uri));
    }
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
