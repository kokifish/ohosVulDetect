// VULN: OVD-STOR-002 凭据明文写入应用文件 user_credentials.txt（CWE-312/668）
import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';

export function ovdStor002(ctx: common.Context): string {
  const path = `${ctx.filesDir}/user_credentials.txt`;
  const f: fileIo.File = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
  fileIo.writeSync(f.fd, 'user=bench;pwd=Admin@123;ak=AKIDBENCH7f3k99xz2q4w8e5r1t0y6u');
  fileIo.closeSync(f);
  return `credentials written to ${path}`;
}
