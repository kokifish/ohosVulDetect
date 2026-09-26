// VULN: OVD-STOR-006 凭据文件写入默认可备份目录（CWE-530）
// backup_creds.dat 无备份排除标记，云备份/本地备份链路整包带走明文凭据。
import { fileIo as fs } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

export async function ovdStor006(ctx: common.UIAbilityContext): Promise<string> {
  const path = ctx.filesDir + '/backup_creds.dat';
  const f = fs.openSync(path, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
  fs.writeSync(f.fd, 'ovd_stor6_bkp_credential_blob');
  fs.closeSync(f);
  fs.unlinkSync(path);
  return 'stor6 credential blob written to backup-exposed path';
}
