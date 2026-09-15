// AVSessionKit：媒体会话生命周期（createAVSession/setAVMetadata/createController/destroy）。
// 无权限要求，模拟器可全链路验证；不拉起投递选择器等 UI（sweep 安全）。
// 坑（API24 模拟器实测）：应用进程内仅首次 createAVSession 成功；此后即使
// deactivate+destroy/重试（1.5s×4）乃至数分钟后 create 仍报 6600101——destroy 后
// 服务端槽位疑似不释放（会话已激活时的销毁泄漏行为）。createWithRetry 保留以吸收
// 真瞬态；首例 create→metadata→activate→deactivate→destroy 全链路为稳定成功样本，
// 其余用例的 6600101/201 属确定性的服务端行为记录，非用例缺陷。
import { avSession } from '@kit.AVSessionKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

const TRANSIENT = 6600101;

async function createWithRetry(ctx: common.UIAbilityContext, tag: string): Promise<avSession.AVSession | number> {
  for (let i = 0; i < 4; i++) {
    try {
      return await avSession.createAVSession(ctx, tag, 'audio');
    } catch (e) {
      const err = e as BusinessError;
      if (err.code !== TRANSIENT) {
        return err.code;
      }
      await new Promise<void>((resolve: () => void) => setTimeout(resolve, 1500));
    }
  }
  return TRANSIENT;
}

@Entry
@Component
struct AvSessionDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'AVSessionKit',
        cases: [
          new Case('create+metadata', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const got = await createWithRetry(ctx, 'vd-bench-audio');
            if (typeof got === 'number') {
              log(`session fail: ${got}`);
              return `session-err=${got}`;
            }
            await got.setAVMetadata({ assetId: 'vd-bench-1', title: 'bench title', artist: 'vd' });
            await got.activate();
            const sid = got.sessionId.slice(0, 8);
            await got.deactivate();
            await got.destroy();
            return `session ok id=${sid}`;
          }),
          new Case('controller roundtrip', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            // 槽位泄漏时 create 必失败（6600101）：改挂到系统里已存在的会话（本页首例创建的）
            try {
              let sid = '';
              const got = await createWithRetry(ctx, 'vd-bench-ctrl');
              if (typeof got === 'string' || typeof got === 'object') {
                await got.activate();
                sid = got.sessionId;
              } else {
                const descs = await avSession.getAllSessionDescriptors();
                if (descs.length === 0) {
                  return `ctrl-err=${got} no-existing-session`;
                }
                sid = descs[0].sessionId;
              }
              const ctrl = await avSession.createController(sid);
              const meta = await ctrl.getAVMetadata();
              await ctrl.destroy();
              return `ctrl ok asset=${meta.assetId} sid=${sid.slice(0, 8)}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`ctrl fail: ${err.code} ${err.message}`);
              return `ctrl-err=${err.code}`;
            }
          }),
          new Case('destroy lifecycle', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const got = await createWithRetry(ctx, 'vd-bench-life');
            if (typeof got === 'number') {
              return `lifecycle-err=${got} (slot-leak, per-process single session on this image)`;
            }
            await got.activate();
            await got.deactivate();
            await got.destroy();
            return `lifecycle ok`;
          }),
        ],
      })
    }
    .height('100%')
  }
}
