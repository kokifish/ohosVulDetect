import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

const DOMAIN = 0x0001;

// HSP 内声明 UIAbility（API14+ 形态语料）：共享包自带入口 Ability，
// 由 entry 壳跨包 startAbility 拉起，验证 HSP Ability 的解析与启动链路。
export default class OvdSharedAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(DOMAIN, 'OvdSharedAbility', 'onCreate');
  }

  onDestroy(): void {
    hilog.info(DOMAIN, 'OvdSharedAbility', 'onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    hilog.info(DOMAIN, 'OvdSharedAbility', 'onWindowStageCreate');
    windowStage.loadContent('pages/SharedAbilityPage', (err) => {
      if (err.code) {
        hilog.error(DOMAIN, 'OvdSharedAbility', 'loadContent failed: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(DOMAIN, 'OvdSharedAbility', 'loadContent ok');
    });
  }

  onWindowStageDestroy(): void {
    hilog.info(DOMAIN, 'OvdSharedAbility', 'onWindowStageDestroy');
  }

  onForeground(): void {
    hilog.info(DOMAIN, 'OvdSharedAbility', 'onForeground');
  }

  onBackground(): void {
    hilog.info(DOMAIN, 'OvdSharedAbility', 'onBackground');
  }
}
