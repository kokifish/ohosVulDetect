// 组件 API 农场入口页（手写薄壳）：选择性渲染各 farm struct（生成物勿手改）。
import { Case, DemoScaffold } from 'lib_common';
import { FarmButtonComp, FarmCheckboxComp } from '../ui_farm/Farm_00';
import { FarmGridComp, FarmImageAnimatorComp } from '../ui_farm/Farm_01';
import { FarmIndicatorComponentComp, FarmListComp } from '../ui_farm/Farm_02';
import { FarmLoadingProgressComp, FarmMarqueeComp } from '../ui_farm/Farm_03';
import { FarmMenuItemComp, FarmNavDestinationComp } from '../ui_farm/Farm_04';
import { FarmNavigationComp, FarmRatingComp } from '../ui_farm/Farm_05';
import { FarmRectComp, FarmRefreshComp } from '../ui_farm/Farm_06';
import { FarmRelativeContainerComp, FarmScrollComp } from '../ui_farm/Farm_07';
import { FarmSearchComp, FarmSelectComp } from '../ui_farm/Farm_08';
import { FarmShapeComp, FarmSideBarContainerComp } from '../ui_farm/Farm_09';
import { FarmSliderComp, FarmStackComp } from '../ui_farm/Farm_10';
import { FarmSwiperComp, FarmSymbolGlyphComp } from '../ui_farm/Farm_11';
import { FarmTabsComp, FarmTextComp } from '../ui_farm/Farm_12';
import { FarmTextPickerComp, FarmTextClockComp } from '../ui_farm/Farm_13';
import { FarmTextAreaComp, FarmTextInputComp } from '../ui_farm/Farm_14';
import { FarmTextTimerComp, FarmTimePickerComp } from '../ui_farm/Farm_15';
import { FarmVideoComp, FarmWaterFlowComp } from '../ui_farm/Farm_16';
import { farmCombo1, farmCombo2, farmCombo3 } from '../ui_farm/ComboFarms';

@Entry
@Component
struct ComponentApiFarmPage {
  @State sel: number = 0;
  private readonly total: number = 37;

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
        else if (this.sel === 2) { FarmGridComp() }
        else if (this.sel === 3) { FarmImageAnimatorComp() }
        else if (this.sel === 4) { FarmIndicatorComponentComp() }
        else if (this.sel === 5) { FarmListComp() }
        else if (this.sel === 6) { FarmLoadingProgressComp() }
        else if (this.sel === 7) { FarmMarqueeComp() }
        else if (this.sel === 8) { FarmMenuItemComp() }
        else if (this.sel === 9) { FarmNavDestinationComp() }
        else if (this.sel === 10) { FarmNavigationComp() }
        else if (this.sel === 11) { FarmRatingComp() }
        else if (this.sel === 12) { FarmRectComp() }
        else if (this.sel === 13) { FarmRefreshComp() }
        else if (this.sel === 14) { FarmRelativeContainerComp() }
        else if (this.sel === 15) { FarmScrollComp() }
        else if (this.sel === 16) { FarmSearchComp() }
        else if (this.sel === 17) { FarmSelectComp() }
        else if (this.sel === 18) { FarmShapeComp() }
        else if (this.sel === 19) { FarmSideBarContainerComp() }
        else if (this.sel === 20) { FarmSliderComp() }
        else if (this.sel === 21) { FarmStackComp() }
        else if (this.sel === 22) { FarmSwiperComp() }
        else if (this.sel === 23) { FarmSymbolGlyphComp() }
        else if (this.sel === 24) { FarmTabsComp() }
        else if (this.sel === 25) { FarmTextComp() }
        else if (this.sel === 26) { FarmTextPickerComp() }
        else if (this.sel === 27) { FarmTextClockComp() }
        else if (this.sel === 28) { FarmTextAreaComp() }
        else if (this.sel === 29) { FarmTextInputComp() }
        else if (this.sel === 30) { FarmTextTimerComp() }
        else if (this.sel === 31) { FarmTimePickerComp() }
        else if (this.sel === 32) { FarmVideoComp() }
        else if (this.sel === 33) { FarmWaterFlowComp() }
        else if (this.sel === 34) { farmCombo1() }
        else if (this.sel === 35) { farmCombo2() }
        else if (this.sel === 36) { farmCombo3() }
    }
    .width('100%').height('100%').padding(12)
  }
}
