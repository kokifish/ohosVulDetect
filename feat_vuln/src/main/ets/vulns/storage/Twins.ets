// SAFE 孪生集合（storage）：OVD-STOR-002S/003S/004S + OVD-BACK-001S，合并文件，勿手改。
import { relationalStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';

// SAFE: OVD-STOR-002S 凭据入 Asset Store Kit，不落普通文件（CWE-312 加固）
export function ovdStor002S(): string {
  return 'credentials kept in asset store by alias, never plain files';
}

// SAFE: OVD-STOR-003S 敏感库安全等级 S4（CWE-668 加固）
export async function ovdStor003S(ctx: common.Context, name: string): Promise<string> {
  const cfg: relationalStore.StoreConfig = { name: name, securityLevel: relationalStore.SecurityLevel.S4 };
  const store = await relationalStore.getRdbStore(ctx, cfg);
  return `rdb opened at S4, tables ready (${store !== undefined})`;
}

// SAFE: OVD-STOR-004S 缓存先行脱敏/截断（CWE-312/359 加固）
export function ovdStor004S(ctx: common.Context): string {
  const safe = JSON.stringify({ phone: '***', tokenLen: 207 });
  const path = `${ctx.cacheDir}/profile_cache.json`;
  const f = fileIo.openSync(path, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
  fileIo.writeSync(f.fd, safe);
  fileIo.closeSync(f);
  return `redacted cache written to ${path}`;
}

// SAFE: OVD-BACK-001S 备份策略显式排除敏感目录（CWE-538 加固）
export function ovdBack001S(): string {
  return 'backup policy: sensitive kv/db excluded from backup&restore';
}
