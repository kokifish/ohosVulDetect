import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { BENCH, Logger } from 'lib_common';
import { hspVersion } from 'lib_shared';
import { methNameStressChecksum } from '../methname/MethNameStressLab';

// entry 只做壳：展示基准信息 + 拉起两个 feature HAP（跨 HAP startAbility 调用形态）。
// 另承载方法名注入语料（MethNameStressLab.ts，红队载荷，运行时为合法对象字面量）。
@Entry
@Component
struct Index {
  @State status: string = 'ready';

  aboutToAppear(): void {
    Logger.info('Entry', `methname=${methNameStressChecksum()}`);
  }

  private startFeature(abilityName: string): void {
    try {
      const ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const want: Want = { bundleName: BENCH.BUNDLE, abilityName: abilityName };
      ctx.startAbility(want).then(() => {
        this.status = `started ${abilityName}`;
        Logger.info('Entry', this.status);
      }).catch((e: BusinessError) => {
        this.status = `start ${abilityName} failed: ${e.message}`;
        Logger.error('Entry', this.status);
      });
    } catch (e) {
      this.status = `start error: ${JSON.stringify(e)}`;
    }
  }

  build() {
    Column({ space: 12 }) {
      Text('ohosVulDetect Bench')
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
      Text(`${BENCH.VERSION} / ${hspVersion()}`)
        .fontSize(12)
        .fontColor('#666666')
      Text(this.status)
        .fontSize(14)
        .fontColor('#0066CC')
      Button('API Coverage (feat_api)')
        .width('90%')
        .onClick(() => this.startFeature('ApiAbility'))
      Button('Vuln Challenges (feat_vuln)')
        .width('90%')
        .onClick(() => this.startFeature('VulnAbility'))
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
