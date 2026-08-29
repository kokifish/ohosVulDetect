import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { emitter } from '@kit.BasicServicesKit';
import { Logger } from 'lib_common';

export default class VulnAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info('VulnAbility', 'onCreate');
    this.registerEmitterBackdoor();
  }

  onDestroy(): void {
    Logger.info('VulnAbility', 'onDestroy');
  }

  // VULN: OVD-IPC-005 emitter 事件未经校验直接改写鉴权状态（CWE-345）
  private registerEmitterBackdoor(): void {
    emitter.on('ovd.admin', (e: emitter.EventData) => {
      const d: Record<string, Object> = e.data ?? {};
      if (d['admin'] === '1') {
        AppStorage.setOrCreate('ovd_is_admin', 'true');
        Logger.info('VulnAbility', 'emitter 777 -> admin granted');
      }
    });
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    Logger.info('VulnAbility', 'onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        Logger.error('VulnAbility', `loadContent failed ${JSON.stringify(err)}`);
      }
    });
  }

  onWindowStageDestroy(): void {
    Logger.info('VulnAbility', 'onWindowStageDestroy');
  }

  onForeground(): void {
    Logger.info('VulnAbility', 'onForeground');
  }

  onBackground(): void {
    Logger.info('VulnAbility', 'onBackground');
  }
}
