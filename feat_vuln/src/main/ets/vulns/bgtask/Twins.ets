// SAFE 孪生集合（bgtask）：OVD-BGTASK-001S，勿手改。
import { common, wantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';

// SAFE: OVD-BGTASK-001S 短时一次性延迟窗口内完成可见工作，无周期采集、无外传（CWE-359 加固）
export async function ovdBgtask001S(ctx: common.UIAbilityContext): Promise<string> {
  // 一次性短时任务：requestSuspendDelay 有限窗口，无连续任务、无网络外传
  const delayInfo = backgroundTaskManager.requestSuspendDelay('bench-visible-work', () => { });
  try {
    const waInfo: wantAgent.WantAgentInfo = {
      wants: [{ bundleName: 'com.koki.VD', abilityName: 'VulnAbility' }],
      requestCode: 0
    };
    await wantAgent.getWantAgent(waInfo);
  } catch (e) {
    const be = e as BusinessError;
    return `transient work only (wa err=${be.code}), no continuous task`;
  }
  backgroundTaskManager.cancelSuspendDelay(delayInfo.requestId);
  return `transient delay used once (quota=${delayInfo.actualDelayTime}ms), no exfil`;
}
