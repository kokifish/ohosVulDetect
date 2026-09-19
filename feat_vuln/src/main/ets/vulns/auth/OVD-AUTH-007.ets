// VULN: OVD-AUTH-007 跨设备信任缺失：设备清单不校验信任即同步（CWE-306/284）
// 规则语义：getAvailableDeviceList 读取与 request 同步外传依序出现（call-chain）
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { http } from '@kit.NetworkKit';

export async function ovdAuth007(ctx: common.Context): Promise<string> {
  let names = 'unavailable';
  let err = '';
  try {
    // 第一步：枚举组网内可用设备（不校验认证/信任等级）
    const dm: distributedDeviceManager.DeviceManager =
      await distributedDeviceManager.createDeviceManager('com.koki.VD');
    const list: Array<distributedDeviceManager.DeviceBasicInfo> = await dm.getAvailableDeviceList();
    names = list.map((d: distributedDeviceManager.DeviceBasicInfo): string => d.deviceName).join(',');
  } catch (e) {
    err = ` (dm err=${(e as BusinessError).code})`;
  }
  // 第二步：设备清单直接同步到网格端点（信任门缺失）
  try {
    const req: http.HttpRequest = http.createHttp();
    req.request('https://vd-mesh.example/sync', {
      method: http.RequestMethod.POST,
      extraData: JSON.stringify({ peers: names }),
      readTimeout: 3000,
      connectTimeout: 3000
    }).catch(() => {});
    req.destroy();
  } catch (e) {
    err += ` (req err=${(e as BusinessError).code})`;
  }
  return `device list synced without trust check${err}: ${names}`;
}
