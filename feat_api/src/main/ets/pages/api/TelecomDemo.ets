// TelephonyKit：radio/sim 状态查询（getNetworkState/getSignalInformation/getSIMState/isRadioOn）。
// 无用户授权弹窗（GET_NETWORK_INFO 为 system_grant）；模拟器虚拟 modem 确定性返回。
import { radio, sim } from '@kit.TelephonyKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct TelecomDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'TelephonyKit',
        cases: [
          new Case('radio network state', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const st = await radio.getNetworkState();
              return `reg=${st.regState} op=${st.longOperatorName} emc=${st.isEmergency}`;
            } catch (e) {
              return `net-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('radio signal info', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const arr = await radio.getSignalInformation(0);
              return `signals=${arr.length}`;
            } catch (e) {
              return `sig-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('sim state', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const s = await sim.getSimState(0);
              return `sim=${s}`;
            } catch (e) {
              return `sim-err=${(e as BusinessError).code}`;
            }
          }),
          new Case('radio power', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const on = await radio.isRadioOn();
              return `radioOn=${on}`;
            } catch (e) {
              return `pwr-err=${(e as BusinessError).code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
