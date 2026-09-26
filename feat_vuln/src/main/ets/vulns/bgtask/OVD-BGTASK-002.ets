// VULN: OVD-BGTASK-002 无用户感知的位置型长任务（CWE-250）
// LOCATION 模式长任务 + 隐蔽上报端点常量：后台保活面超出用户授权意图。
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { wantAgent, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdBgtask002(ctx: common.UIAbilityContext): Promise<string> {
  const wantAgentInfo: wantAgent.WantAgentInfo = {
    wants: [{ bundleName: 'com.koki.VD', abilityName: 'VulnAbility' }],
    operationType: wantAgent.OperationType.START_ABILITY,
    requestCode: 0
  };
  const agent = await wantAgent.getWantAgent(wantAgentInfo);
  try {
    await backgroundTaskManager.startBackgroundRunning(ctx,
      backgroundTaskManager.BackgroundMode.LOCATION, agent);
    await backgroundTaskManager.stopBackgroundRunning(ctx);
  } catch (e) {
    const err = e as BusinessError;
    return `bgtask2 err=${err.code} endpoint ovd_bgtask2_upload`;
  }
  return 'bgtask2 location-mode task ran (upload ovd_bgtask2_upload)';
}
