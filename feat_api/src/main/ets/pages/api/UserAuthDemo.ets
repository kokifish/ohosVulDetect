// UserAuthenticationKit：userAuth 可用性/已注册状态/认证实例（getUserAuthInstance + onResult）。
// 认证会拉起系统认证 UI（模拟器指纹/PIN），结果与错误码统一写回案例输出。
import { userAuth } from '@kit.UserAuthenticationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct UserAuthDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'UserAuthenticationKit',
        cases: [
          new Case('available fp/pin/face', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const names: string[] = ['fingerprint', 'pin', 'face'];
            const types: userAuth.UserAuthType[] = [
              userAuth.UserAuthType.FINGERPRINT, userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE];
            let out = '';
            for (let i = 0; i < types.length; i++) {
              try {
                userAuth.getAvailableStatus(types[i], userAuth.AuthTrustLevel.ATL1);
                out += `${names[i]}=ok,`;
              } catch (e) {
                const err = e as BusinessError;
                out += `${names[i]}=err${err.code},`;
                log(`${names[i]} fail: ${err.code} ${err.message}`);
              }
            }
            return out;
          }),
          new Case('enrolled pin/fp', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const names: string[] = ['pin', 'fp'];
            const types: userAuth.UserAuthType[] = [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FINGERPRINT];
            let out = '';
            for (let i = 0; i < types.length; i++) {
              try {
                const st = userAuth.getEnrolledState(types[i]);
                out += `${names[i]}:count=${st.credentialCount} digest=${st.credentialDigest};`;
              } catch (e) {
                const err = e as BusinessError;
                out += `${names[i]}:err${err.code};`;
              }
            }
            return out;
          }),
          new Case('auth instance (ATL1)', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return await new Promise<string>((resolve) => {
              let settled = false;
              const finish = (v: string): void => {
                if (!settled) {
                  settled = true;
                  resolve(v);
                }
              };
              try {
                const auth = userAuth.getUserAuthInstance({
                  challenge: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
                  authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FINGERPRINT],
                  authTrustLevel: userAuth.AuthTrustLevel.ATL1,
                }, {
                  title: 'vd-bench-auth',
                });
                auth.on('result', {
                  onResult: (ur: userAuth.UserAuthResult): void => {
                    log(`result=${ur.result} token=${ur.token?.length ?? 0}`);
                    finish(`result=${ur.result}`);
                  }
                });
                auth.start();
              } catch (e) {
                const err = e as BusinessError;
                finish(`start-err=${err.code}`);
              }
              // 25s 兜底：系统认证 UI 无人操作时不阻塞遍历
              setTimeout(() => finish('timeout-25s'), 25000);
            });
          }),
        ],
      })
    }
    .height('100%')
  }
}
