// ComboFarms.ets — 跨组件组合调用语料（生成，勿手改）：农场组件嵌入组合容器。

import { FarmAlphabetIndexerComp } from './Farm_00';
import { FarmButtonComp } from './Farm_00';
import { FarmCalendarPickerComp } from './Farm_01';
import { FarmCanvasComp } from './Farm_01';
import { FarmCheckboxComp } from './Farm_02';
import { FarmCheckboxGroupComp } from './Farm_02';
import { FarmColumnComp } from './Farm_03';
import { FarmComponent3DComp } from './Farm_03';
import { FarmCounterComp } from './Farm_04';
import { FarmDataPanelComp } from './Farm_04';
import { FarmDatePickerComp } from './Farm_05';
import { FarmDividerComp } from './Farm_05';

@Builder
export function farmCombo1() {
  Column({ space: 6 }) {
    Text('combo layer').fontSize(12)
    FarmAlphabetIndexerComp()
    FarmButtonComp()
    FarmCalendarPickerComp()
    FarmCanvasComp()
  }
  .padding(8)
  }

@Builder
export function farmCombo2() {
  Row({ space: 6 }) {
    Text('combo layer').fontSize(12)
    FarmCheckboxComp()
    FarmCheckboxGroupComp()
    FarmColumnComp()
    FarmComponent3DComp()
  }
  .padding(8)
  }

@Builder
export function farmCombo3() {
  Stack({ alignContent: Alignment.Center }) {
    Text('combo layer').fontSize(12)
    FarmCounterComp()
    FarmDataPanelComp()
    FarmDatePickerComp()
    FarmDividerComp()
  }
  .padding(8)
  }

