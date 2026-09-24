// ComboFarms.ets — 跨组件组合调用语料（生成，勿手改）：农场组件嵌入组合容器。

import { FarmButtonComp } from './Farm_00';
import { FarmCheckboxComp } from './Farm_00';
import { FarmColumnComp } from './Farm_01';
import { FarmComponent3DComp } from './Farm_01';
import { FarmCounterComp } from './Farm_02';
import { FarmFolderStackComp } from './Farm_02';
import { FarmGridColComp } from './Farm_03';
import { FarmGridComp } from './Farm_03';
import { FarmImageAnimatorComp } from './Farm_04';
import { FarmImageSpanComp } from './Farm_04';
import { FarmIndicatorComponentComp } from './Farm_05';
import { FarmListComp } from './Farm_05';

@Builder
export function farmCombo1() {
  Column({ space: 6 }) {
    Text('combo layer').fontSize(12)
    FarmButtonComp()
    FarmCheckboxComp()
    FarmColumnComp()
    FarmComponent3DComp()
  }
  .padding(8)
  }

@Builder
export function farmCombo2() {
  Row({ space: 6 }) {
    Text('combo layer').fontSize(12)
    FarmCounterComp()
    FarmFolderStackComp()
    FarmGridComp()
    FarmGridColComp()
  }
  .padding(8)
  }

@Builder
export function farmCombo3() {
  Stack({ alignContent: Alignment.Center }) {
    Text('combo layer').fontSize(12)
    FarmImageAnimatorComp()
    FarmImageSpanComp()
    FarmIndicatorComponentComp()
    FarmListComp()
  }
  .padding(8)
  }

