import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';
import { Logger } from 'lib_common';

const DOMAIN = 0x0001;

export default class ApiAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info('ApiAbility', 'onCreate');
    hilog.info(DOMAIN, 'ApiAbility', 'want: %{public}s', JSON.stringify(want ?? {}));
  }

  onDestroy(): void {
    Logger.info('ApiAbility', 'onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    Logger.info('ApiAbility', 'onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        Logger.error('ApiAbility', `loadContent failed: ${JSON.stringify(err)}`);
        return;
      }
      Logger.info('ApiAbility', 'loadContent ok');
    });
  }

  onWindowStageDestroy(): void {
    Logger.info('ApiAbility', 'onWindowStageDestroy');
  }

  onForeground(): void {
    Logger.info('ApiAbility', 'onForeground');
  }

  onBackground(): void {
    Logger.info('ApiAbility', 'onBackground');
  }

  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    Logger.info('ApiAbility', `onNewWant ${JSON.stringify(want?.parameters ?? {})}`);
  }
}
