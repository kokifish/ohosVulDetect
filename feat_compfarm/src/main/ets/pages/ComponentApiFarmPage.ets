// 组件 API 农场入口页（手写薄壳）：选择性渲染各 farm struct（生成物勿手改）。
import { Case, DemoScaffold } from 'lib_common';
import { FarmButtonComp, FarmCheckboxComp } from '../ui_farm/Farm_00';
import { FarmColumnComp, FarmComponent3DComp } from '../ui_farm/Farm_01';
import { FarmCounterComp, FarmFolderStackComp } from '../ui_farm/Farm_02';
import { FarmGridComp, FarmGridColComp } from '../ui_farm/Farm_03';
import { FarmImageAnimatorComp, FarmImageSpanComp } from '../ui_farm/Farm_04';
import { FarmIndicatorComponentComp, FarmListComp } from '../ui_farm/Farm_05';
import { FarmLoadingProgressComp, FarmMarqueeComp } from '../ui_farm/Farm_06';
import { FarmMenuItemComp, FarmNavDestinationComp } from '../ui_farm/Farm_07';
import { FarmNavigationComp, FarmRatingComp } from '../ui_farm/Farm_08';
import { FarmRectComp, FarmRefreshComp } from '../ui_farm/Farm_09';
import { FarmRelativeContainerComp, FarmRowComp } from '../ui_farm/Farm_10';
import { FarmScrollComp, FarmSearchComp } from '../ui_farm/Farm_11';
import { FarmSelectComp, FarmShapeComp } from '../ui_farm/Farm_12';
import { FarmSideBarContainerComp, FarmSliderComp } from '../ui_farm/Farm_13';
import { FarmStackComp, FarmStepperItemComp } from '../ui_farm/Farm_14';
import { FarmSwiperComp, FarmSymbolGlyphComp } from '../ui_farm/Farm_15';
import { FarmTabContentComp, FarmTabsComp } from '../ui_farm/Farm_16';
import { FarmTextComp, FarmTextPickerComp } from '../ui_farm/Farm_17';
import { FarmTextClockComp, FarmTextAreaComp } from '../ui_farm/Farm_18';
import { FarmTextInputComp, FarmTextTimerComp } from '../ui_farm/Farm_19';
import { FarmTimePickerComp, FarmUIPickerComponentComp } from '../ui_farm/Farm_20';
import { FarmVideoComp, FarmWaterFlowComp } from '../ui_farm/Farm_21';
import { farmCombo1, farmCombo2, farmCombo3 } from '../ui_farm/ComboFarms';

@Entry
@Component
struct ComponentApiFarmPage {
  @State sel: number = 0;
  private readonly total: number = 47;

  private pick(i: number): void { this.sel = ((i % this.total) + this.total) % this.total; }

  build() {
    Column({ space: 8 }) {
      Text('Component API Farm').fontSize(20).fontWeight(FontWeight.Bold)
      Row({ space: 10 }) {
        Button('<').onClick(() => this.pick(this.sel - 1))
        Text(`${this.sel + 1}/${this.total}`).fontSize(13)
        Button('>').onClick(() => this.pick(this.sel + 1))
      }
      Scroll() { Column() { Text('farm component ' + (this.sel + 1).toString()).fontSize(12) }.width('100%') }.height(48)
        if (this.sel === 0) { FarmButtonComp() }
        else if (this.sel === 1) { FarmCheckboxComp() }
        else if (this.sel === 2) { FarmColumnComp() }
        else if (this.sel === 3) { FarmComponent3DComp() }
        else if (this.sel === 4) { FarmCounterComp() }
        else if (this.sel === 5) { FarmFolderStackComp() }
        else if (this.sel === 6) { FarmGridComp() }
        else if (this.sel === 7) { FarmGridColComp() }
        else if (this.sel === 8) { FarmImageAnimatorComp() }
        else if (this.sel === 9) { FarmImageSpanComp() }
        else if (this.sel === 10) { FarmIndicatorComponentComp() }
        else if (this.sel === 11) { FarmListComp() }
        else if (this.sel === 12) { FarmLoadingProgressComp() }
        else if (this.sel === 13) { FarmMarqueeComp() }
        else if (this.sel === 14) { FarmMenuItemComp() }
        else if (this.sel === 15) { FarmNavDestinationComp() }
        else if (this.sel === 16) { FarmNavigationComp() }
        else if (this.sel === 17) { FarmRatingComp() }
        else if (this.sel === 18) { FarmRectComp() }
        else if (this.sel === 19) { FarmRefreshComp() }
        else if (this.sel === 20) { FarmRelativeContainerComp() }
        else if (this.sel === 21) { FarmRowComp() }
        else if (this.sel === 22) { FarmScrollComp() }
        else if (this.sel === 23) { FarmSearchComp() }
        else if (this.sel === 24) { FarmSelectComp() }
        else if (this.sel === 25) { FarmShapeComp() }
        else if (this.sel === 26) { FarmSideBarContainerComp() }
        else if (this.sel === 27) { FarmSliderComp() }
        else if (this.sel === 28) { FarmStackComp() }
        else if (this.sel === 29) { FarmStepperItemComp() }
        else if (this.sel === 30) { FarmSwiperComp() }
        else if (this.sel === 31) { FarmSymbolGlyphComp() }
        else if (this.sel === 32) { FarmTabContentComp() }
        else if (this.sel === 33) { FarmTabsComp() }
        else if (this.sel === 34) { FarmTextComp() }
        else if (this.sel === 35) { FarmTextPickerComp() }
        else if (this.sel === 36) { FarmTextClockComp() }
        else if (this.sel === 37) { FarmTextAreaComp() }
        else if (this.sel === 38) { FarmTextInputComp() }
        else if (this.sel === 39) { FarmTextTimerComp() }
        else if (this.sel === 40) { FarmTimePickerComp() }
        else if (this.sel === 41) { FarmUIPickerComponentComp() }
        else if (this.sel === 42) { FarmVideoComp() }
        else if (this.sel === 43) { FarmWaterFlowComp() }
        else if (this.sel === 44) { farmCombo1() }
        else if (this.sel === 45) { farmCombo2() }
        else if (this.sel === 46) { farmCombo3() }
    }
    .width('100%').height('100%').padding(12)
  }
}
