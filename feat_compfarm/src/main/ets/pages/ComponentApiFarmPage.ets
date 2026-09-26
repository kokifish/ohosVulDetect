// 组件 API 农场入口页（手写薄壳）：选择性渲染各 farm struct（生成物勿手改）。
import { Case, DemoScaffold } from 'lib_common';
import { FarmAlphabetIndexerComp, FarmButtonComp } from '../ui_farm/Farm_00';
import { FarmCalendarPickerComp, FarmCanvasComp } from '../ui_farm/Farm_01';
import { FarmCheckboxComp, FarmCheckboxGroupComp } from '../ui_farm/Farm_02';
import { FarmColumnComp, FarmComponent3DComp } from '../ui_farm/Farm_03';
import { FarmContainerSpanComp, FarmCounterComp } from '../ui_farm/Farm_04';
import { FarmDataPanelComp, FarmDatePickerComp } from '../ui_farm/Farm_05';
import { FarmDividerComp, FarmFolderStackComp } from '../ui_farm/Farm_06';
import { FarmGaugeComp, FarmGridComp } from '../ui_farm/Farm_07';
import { FarmGridItemComp, FarmGridColComp } from '../ui_farm/Farm_08';
import { FarmImageComp, FarmImageAnimatorComp } from '../ui_farm/Farm_09';
import { FarmImageSpanComp, FarmIndicatorComponentComp } from '../ui_farm/Farm_10';
import { FarmListComp, FarmListItemComp } from '../ui_farm/Farm_11';
import { FarmLoadingProgressComp, FarmMarqueeComp } from '../ui_farm/Farm_12';
import { FarmMenuComp, FarmMenuItemComp } from '../ui_farm/Farm_13';
import { FarmNavDestinationComp, FarmNavigationComp } from '../ui_farm/Farm_14';
import { FarmNavigatorComp, FarmPanelComp } from '../ui_farm/Farm_15';
import { FarmPatternLockComp, FarmProgressComp } from '../ui_farm/Farm_16';
import { FarmQRCodeComp, FarmRadioComp } from '../ui_farm/Farm_17';
import { FarmRatingComp, FarmRectComp } from '../ui_farm/Farm_18';
import { FarmRefreshComp, FarmRelativeContainerComp } from '../ui_farm/Farm_19';
import { FarmRowComp, FarmSaveButtonComp } from '../ui_farm/Farm_20';
import { FarmScrollComp, FarmScrollBarComp } from '../ui_farm/Farm_21';
import { FarmSearchComp, FarmSelectComp } from '../ui_farm/Farm_22';
import { FarmShapeComp, FarmSideBarContainerComp } from '../ui_farm/Farm_23';
import { FarmSliderComp, FarmSpanComp } from '../ui_farm/Farm_24';
import { FarmStackComp, FarmStepperItemComp } from '../ui_farm/Farm_25';
import { FarmSwiperComp, FarmSymbolGlyphComp } from '../ui_farm/Farm_26';
import { FarmTabContentComp, FarmTabsComp } from '../ui_farm/Farm_27';
import { FarmTextComp, FarmTextPickerComp } from '../ui_farm/Farm_28';
import { FarmTextClockComp, FarmTextAreaComp } from '../ui_farm/Farm_29';
import { FarmTextInputComp, FarmTextTimerComp } from '../ui_farm/Farm_30';
import { FarmTimePickerComp, FarmUIPickerComponentComp } from '../ui_farm/Farm_31';
import { FarmVideoComp, FarmWaterFlowComp } from '../ui_farm/Farm_32';
import { farmCombo1, farmCombo2, farmCombo3 } from '../ui_farm/ComboFarms';

@Entry
@Component
struct ComponentApiFarmPage {
  @State sel: number = 0;
  private readonly total: number = 69;

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
        else if (this.sel === 8) { FarmContainerSpanComp() }
        else if (this.sel === 9) { FarmCounterComp() }
        else if (this.sel === 10) { FarmDataPanelComp() }
        else if (this.sel === 11) { FarmDatePickerComp() }
        else if (this.sel === 12) { FarmDividerComp() }
        else if (this.sel === 13) { FarmFolderStackComp() }
        else if (this.sel === 14) { FarmGaugeComp() }
        else if (this.sel === 15) { FarmGridComp() }
        else if (this.sel === 16) { FarmGridItemComp() }
        else if (this.sel === 17) { FarmGridColComp() }
        else if (this.sel === 18) { FarmImageComp() }
        else if (this.sel === 19) { FarmImageAnimatorComp() }
        else if (this.sel === 20) { FarmImageSpanComp() }
        else if (this.sel === 21) { FarmIndicatorComponentComp() }
        else if (this.sel === 22) { FarmListComp() }
        else if (this.sel === 23) { FarmListItemComp() }
        else if (this.sel === 24) { FarmLoadingProgressComp() }
        else if (this.sel === 25) { FarmMarqueeComp() }
        else if (this.sel === 26) { FarmMenuComp() }
        else if (this.sel === 27) { FarmMenuItemComp() }
        else if (this.sel === 28) { FarmNavDestinationComp() }
        else if (this.sel === 29) { FarmNavigationComp() }
        else if (this.sel === 30) { FarmNavigatorComp() }
        else if (this.sel === 31) { FarmPanelComp() }
        else if (this.sel === 32) { FarmPatternLockComp() }
        else if (this.sel === 33) { FarmProgressComp() }
        else if (this.sel === 34) { FarmQRCodeComp() }
        else if (this.sel === 35) { FarmRadioComp() }
        else if (this.sel === 36) { FarmRatingComp() }
        else if (this.sel === 37) { FarmRectComp() }
        else if (this.sel === 38) { FarmRefreshComp() }
        else if (this.sel === 39) { FarmRelativeContainerComp() }
        else if (this.sel === 40) { FarmRowComp() }
        else if (this.sel === 41) { FarmSaveButtonComp() }
        else if (this.sel === 42) { FarmScrollComp() }
        else if (this.sel === 43) { FarmScrollBarComp() }
        else if (this.sel === 44) { FarmSearchComp() }
        else if (this.sel === 45) { FarmSelectComp() }
        else if (this.sel === 46) { FarmShapeComp() }
        else if (this.sel === 47) { FarmSideBarContainerComp() }
        else if (this.sel === 48) { FarmSliderComp() }
        else if (this.sel === 49) { FarmSpanComp() }
        else if (this.sel === 50) { FarmStackComp() }
        else if (this.sel === 51) { FarmStepperItemComp() }
        else if (this.sel === 52) { FarmSwiperComp() }
        else if (this.sel === 53) { FarmSymbolGlyphComp() }
        else if (this.sel === 54) { FarmTabContentComp() }
        else if (this.sel === 55) { FarmTabsComp() }
        else if (this.sel === 56) { FarmTextComp() }
        else if (this.sel === 57) { FarmTextPickerComp() }
        else if (this.sel === 58) { FarmTextClockComp() }
        else if (this.sel === 59) { FarmTextAreaComp() }
        else if (this.sel === 60) { FarmTextInputComp() }
        else if (this.sel === 61) { FarmTextTimerComp() }
        else if (this.sel === 62) { FarmTimePickerComp() }
        else if (this.sel === 63) { FarmUIPickerComponentComp() }
        else if (this.sel === 64) { FarmVideoComp() }
        else if (this.sel === 65) { FarmWaterFlowComp() }
        else if (this.sel === 66) { farmCombo1() }
        else if (this.sel === 67) { farmCombo2() }
        else if (this.sel === 68) { farmCombo3() }
    }
    .width('100%').height('100%').padding(12)
  }
}
