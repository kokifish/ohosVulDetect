// SAFE 孪生集合（inj）：OVD-INJ-002S/003S/004S，合并文件，勿手改。
import { relationalStore } from '@kit.ArkData';
import { common } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';

// SAFE: OVD-INJ-002S 参数化谓词删除，杜绝 SQL 拼接（CWE-89 加固）
export async function ovdInj002S(ctx: common.Context, target: string): Promise<string> {
  const cfg: relationalStore.StoreConfig = { name: 'safe_inj.db', securityLevel: relationalStore.SecurityLevel.S4 };
  const store = await relationalStore.getRdbStore(ctx, cfg);
  await store.executeSql('CREATE TABLE IF NOT EXISTS users(name TEXT, role TEXT)'); // 常量 DDL，无用户输入
  const pred = new relationalStore.RdbPredicates('users').equalTo('name', target);
  const n = await store.delete(pred);
  return `parameterized delete rows=${n}`;
}

// SAFE: OVD-INJ-003S 路径规范化 + 沙箱前缀校验后打开（CWE-22 加固）
export function ovdInj003S(ctx: common.Context, userPath: string): string {
  const base = ctx.filesDir;
  const full = `${base}/${userPath.replace(/\.\./g, '_')}`;
  if (!full.startsWith(base)) {
    return 'path outside sandbox refused';
  }
  const dir = full.substring(0, full.lastIndexOf('/'));
  try {
    fileIo.mkdirSync(dir);
  } catch (e) {
    // 已存在即忽略
  }
  const w = fileIo.openSync(full, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
  fileIo.writeSync(w.fd, 'sandboxed-bench');
  fileIo.closeSync(w);
  const f = fileIo.openSync(full, fileIo.OpenMode.READ_ONLY);
  const st = fileIo.statSync(full);
  fileIo.closeSync(f);
  return `read ${st.size}B from sandboxed path`;
}

// SAFE: OVD-INJ-004S 外部路由 payload 白名单校验后才跳转（CWE-20/915 加固）
const PAGE_ALLOWLIST: string[] = ['pages/Index'];
export function ovdInj004S(externalPayload: string): string {
  const parsed = JSON.parse(externalPayload) as Record<string, string>;
  const target = parsed['page'] ?? '';
  // 仅返回路由决策，由调用方执行跳转：安全层职责 = 校验，不直接驱动导航
  return PAGE_ALLOWLIST.includes(target) ? `route allowed: ${target}` : 'route refused: page not allowlisted';
}
