// 组件 API 农场入口页（手写薄壳）：选择性渲染各 farm struct（生成物勿手改）。
import { Case, DemoScaffold } from 'lib_common';
import { FarmAlphabetIndexerComp, FarmButtonComp } from '../ui_farm/Farm_00';
import { FarmCalendarPickerComp, FarmCanvasComp } from '../ui_farm/Farm_01';
import { FarmCheckboxComp, FarmCheckboxGroupComp } from '../ui_farm/Farm_02';
import { FarmColumnComp, FarmComponent3DComp } from '../ui_farm/Farm_03';
import { FarmCounterComp, FarmDataPanelComp } from '../ui_farm/Farm_04';
import { FarmDatePickerComp, FarmDividerComp } from '../ui_farm/Farm_05';
import { FarmFolderStackComp, FarmGaugeComp } from '../ui_farm/Farm_06';
import { FarmGridComp, FarmGridItemComp } from '../ui_farm/Farm_07';
import { FarmGridColComp, FarmImageComp } from '../ui_farm/Farm_08';
import { FarmImageAnimatorComp, FarmImageSpanComp } from '../ui_farm/Farm_09';
import { FarmIndicatorComponentComp, FarmListComp } from '../ui_farm/Farm_10';
import { FarmListItemComp, FarmLoadingProgressComp } from '../ui_farm/Farm_11';
import { FarmMarqueeComp, FarmMenuItemComp } from '../ui_farm/Farm_12';
import { FarmNavDestinationComp, FarmNavigationComp } from '../ui_farm/Farm_13';
import { FarmNavigatorComp, FarmPanelComp } from '../ui_farm/Farm_14';
import { FarmPatternLockComp, FarmProgressComp } from '../ui_farm/Farm_15';
import { FarmQRCodeComp, FarmRatingComp } from '../ui_farm/Farm_16';
import { FarmRectComp, FarmRefreshComp } from '../ui_farm/Farm_17';
import { FarmRelativeContainerComp, FarmRowComp } from '../ui_farm/Farm_18';
import { FarmSaveButtonComp, FarmScrollComp } from '../ui_farm/Farm_19';
import { FarmSearchComp, FarmSelectComp } from '../ui_farm/Farm_20';
import { FarmShapeComp, FarmSideBarContainerComp } from '../ui_farm/Farm_21';
import { FarmSliderComp, FarmSpanComp } from '../ui_farm/Farm_22';
import { FarmStackComp, FarmStepperItemComp } from '../ui_farm/Farm_23';
import { FarmSwiperComp, FarmSymbolGlyphComp } from '../ui_farm/Farm_24';
import { FarmTabContentComp, FarmTabsComp } from '../ui_farm/Farm_25';
import { FarmTextComp, FarmTextPickerComp } from '../ui_farm/Farm_26';
import { FarmTextClockComp, FarmTextAreaComp } from '../ui_farm/Farm_27';
import { FarmTextInputComp, FarmTextTimerComp } from '../ui_farm/Farm_28';
import { FarmTimePickerComp, FarmUIPickerComponentComp } from '../ui_farm/Farm_29';
import { FarmVideoComp, FarmWaterFlowComp } from '../ui_farm/Farm_30';
import { farmCombo1, farmCombo2, farmCombo3 } from '../ui_farm/ComboFarms';

@Entry
@Component
struct ComponentApiFarmPage {
  @State sel: number = 0;
  private readonly total: number = 65;

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
        if (this.sel === 0) { FarmAlphabetIndexerComp() }
        else if (this.sel === 1) { FarmButtonComp() }
        else if (this.sel === 2) { FarmCalendarPickerComp() }
        else if (this.sel === 3) { FarmCanvasComp() }
        else if (this.sel === 4) { FarmCheckboxComp() }
        else if (this.sel === 5) { FarmCheckboxGroupComp() }
        else if (this.sel === 6) { FarmColumnComp() }
        else if (this.sel === 7) { FarmComponent3DComp() }
        else if (this.sel === 8) { FarmCounterComp() }
        else if (this.sel === 9) { FarmDataPanelComp() }
        else if (this.sel === 10) { FarmDatePickerComp() }
        else if (this.sel === 11) { FarmDividerComp() }
        else if (this.sel === 12) { FarmFolderStackComp() }
        else if (this.sel === 13) { FarmGaugeComp() }
        else if (this.sel === 14) { FarmGridComp() }
        else if (this.sel === 15) { FarmGridItemComp() }
        else if (this.sel === 16) { FarmGridColComp() }
        else if (this.sel === 17) { FarmImageComp() }
        else if (this.sel === 18) { FarmImageAnimatorComp() }
        else if (this.sel === 19) { FarmImageSpanComp() }
        else if (this.sel === 20) { FarmIndicatorComponentComp() }
        else if (this.sel === 21) { FarmListComp() }
        else if (this.sel === 22) { FarmListItemComp() }
        else if (this.sel === 23) { FarmLoadingProgressComp() }
        else if (this.sel === 24) { FarmMarqueeComp() }
        else if (this.sel === 25) { FarmMenuItemComp() }
        else if (this.sel === 26) { FarmNavDestinationComp() }
        else if (this.sel === 27) { FarmNavigationComp() }
        else if (this.sel === 28) { FarmNavigatorComp() }
        else if (this.sel === 29) { FarmPanelComp() }
        else if (this.sel === 30) { FarmPatternLockComp() }
        else if (this.sel === 31) { FarmProgressComp() }
        else if (this.sel === 32) { FarmQRCodeComp() }
        else if (this.sel === 33) { FarmRatingComp() }
        else if (this.sel === 34) { FarmRectComp() }
        else if (this.sel === 35) { FarmRefreshComp() }
        else if (this.sel === 36) { FarmRelativeContainerComp() }
        else if (this.sel === 37) { FarmRowComp() }
        else if (this.sel === 38) { FarmSaveButtonComp() }
        else if (this.sel === 39) { FarmScrollComp() }
        else if (this.sel === 40) { FarmSearchComp() }
        else if (this.sel === 41) { FarmSelectComp() }
        else if (this.sel === 42) { FarmShapeComp() }
        else if (this.sel === 43) { FarmSideBarContainerComp() }
        else if (this.sel === 44) { FarmSliderComp() }
        else if (this.sel === 45) { FarmSpanComp() }
        else if (this.sel === 46) { FarmStackComp() }
        else if (this.sel === 47) { FarmStepperItemComp() }
        else if (this.sel === 48) { FarmSwiperComp() }
        else if (this.sel === 49) { FarmSymbolGlyphComp() }
        else if (this.sel === 50) { FarmTabContentComp() }
        else if (this.sel === 51) { FarmTabsComp() }
        else if (this.sel === 52) { FarmTextComp() }
        else if (this.sel === 53) { FarmTextPickerComp() }
        else if (this.sel === 54) { FarmTextClockComp() }
        else if (this.sel === 55) { FarmTextAreaComp() }
        else if (this.sel === 56) { FarmTextInputComp() }
        else if (this.sel === 57) { FarmTextTimerComp() }
        else if (this.sel === 58) { FarmTimePickerComp() }
        else if (this.sel === 59) { FarmUIPickerComponentComp() }
        else if (this.sel === 60) { FarmVideoComp() }
        else if (this.sel === 61) { FarmWaterFlowComp() }
        else if (this.sel === 62) { farmCombo1() }
        else if (this.sel === 63) { farmCombo2() }
        else if (this.sel === 64) { farmCombo3() }
    }
    .width('100%').height('100%').padding(12)
  }
}
