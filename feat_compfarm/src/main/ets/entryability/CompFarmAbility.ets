import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

const DOMAIN = 0x0001;

export default class CompFarmAbility extends UIAbility {
  onCreate(_want: Want, _launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(DOMAIN, 'CompFarmAbility', 'onCreate');
  }

  onDestroy(): void {
    hilog.info(DOMAIN, 'CompFarmAbility', 'onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/ComponentApiFarmPage', (err) => {
      if (err.code) {
        hilog.error(DOMAIN, 'CompFarmAbility', 'loadContent failed: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(DOMAIN, 'CompFarmAbility', 'loadContent ok');
    });
  }

  onForeground(): void {
    hilog.info(DOMAIN, 'CompFarmAbility', 'onForeground');
  }

  onBackground(): void {
    hilog.info(DOMAIN, 'CompFarmAbility', 'onBackground');
  }
}
