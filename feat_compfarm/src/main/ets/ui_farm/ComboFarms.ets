// ComboFarms.ets — 跨组件组合调用语料（生成，勿手改）：农场组件嵌入组合容器。

import { FarmButtonComp } from './Farm_00';
import { FarmCheckboxComp } from './Farm_00';
import { FarmGridComp } from './Farm_01';
import { FarmImageAnimatorComp } from './Farm_01';
import { FarmIndicatorComponentComp } from './Farm_02';
import { FarmListComp } from './Farm_02';
import { FarmLoadingProgressComp } from './Farm_03';
import { FarmMarqueeComp } from './Farm_03';
import { FarmMenuItemComp } from './Farm_04';
import { FarmNavDestinationComp } from './Farm_04';
import { FarmNavigationComp } from './Farm_05';
import { FarmRatingComp } from './Farm_05';

@Builder
export function farmCombo1() {
  Column({ space: 6 }) {
    Text('combo layer').fontSize(12)
    FarmButtonComp()
    FarmCheckboxComp()
    FarmGridComp()
    FarmImageAnimatorComp()
  }
  .padding(8)
  }

@Builder
export function farmCombo2() {
  Row({ space: 6 }) {
    Text('combo layer').fontSize(12)
    FarmIndicatorComponentComp()
    FarmListComp()
    FarmLoadingProgressComp()
    FarmMarqueeComp()
  }
  .padding(8)
  }

@Builder
export function farmCombo3() {
  Stack({ alignContent: Alignment.Center }) {
    Text('combo layer').fontSize(12)
    FarmMenuItemComp()
    FarmNavDestinationComp()
    FarmNavigationComp()
    FarmRatingComp()
  }
  .padding(8)
  }

