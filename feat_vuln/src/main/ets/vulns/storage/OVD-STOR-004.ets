// VULN: OVD-STOR-004 含 PII 的响应缓存明文落盘 cacheDir（CWE-312/359）
import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';

export function ovdStor004(ctx: common.Context): string {
  const profile = JSON.stringify({
    phone: '13800138000',
    idcard: '110101199001011234',
    token: 'eyJhbGciOiJIUzI1NiJ9.bench-cache.sig'
  });
  const path = `${ctx.cacheDir}/profile_cache.json`;
  const f: fileIo.File = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
  fileIo.writeSync(f.fd, profile);
  fileIo.closeSync(f);
  return `PII cache written to ${path}`;
}
