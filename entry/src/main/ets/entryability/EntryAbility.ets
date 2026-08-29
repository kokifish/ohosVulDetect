import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { Logger } from 'lib_common';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
    } catch (err) {
      Logger.error('Entry', `Failed to set colorMode: ${JSON.stringify(err)}`);
    }
    Logger.info('Entry', 'Ability onCreate');
  }

  onDestroy(): void {
    Logger.info('Entry', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    Logger.info('Entry', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        Logger.error('Entry', `loadContent failed: ${JSON.stringify(err)}`);
        return;
      }
      Logger.info('Entry', 'loadContent ok');
    });
  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    Logger.info('Entry', 'Ability onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    Logger.info('Entry', 'Ability onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    Logger.info('Entry', 'Ability onBackground');
  }
}