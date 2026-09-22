import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

const DOMAIN = 0x0001;

export default class HeavyAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(DOMAIN, 'HeavyAbility', 'onCreate');
  }

  onDestroy(): void {
    hilog.info(DOMAIN, 'HeavyAbility', 'onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    hilog.info(DOMAIN, 'HeavyAbility', 'onWindowStageCreate');
    windowStage.loadContent('pages/HeavyFarmPage', (err) => {
      if (err.code) {
        hilog.error(DOMAIN, 'HeavyAbility', 'loadContent failed: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(DOMAIN, 'HeavyAbility', 'loadContent ok');
    });
  }

  onWindowStageDestroy(): void {
    hilog.info(DOMAIN, 'HeavyAbility', 'onWindowStageDestroy');
  }

  onForeground(): void {
    hilog.info(DOMAIN, 'HeavyAbility', 'onForeground');
  }

  onBackground(): void {
    hilog.info(DOMAIN, 'HeavyAbility', 'onBackground');
  }
}
