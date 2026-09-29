// Farm_22.ets — 组件 API 缺口补齐语料（生成，勿手改）

@Component
export struct FarmSearchComp {
  build() {
    Column() {
      Search()
        .autoCapitalizationMode(AutoCapitalizationMode.NONE)
        .cancelButton({ style: CancelButtonStyle.CONSTANT, icon: { size: 1, color: Color.Red } })
        .caretStyle({ width: 1, color: Color.Red })
        .compressLeadingPunctuation(true)
        .copyOption(CopyOptions.None)
        .customKeyboard((): void => {})
        .enableAutoSpacing(true)
        .enableHapticFeedback(true)
        .enableKeyboardOnFocus(true)
        .enablePreviewText(true)
        .enableSelectedDataDetector(true)
        .enterKeyType(EnterKeyType.Go)
        .fallbackLineSpacing(true)
        .fontFeature('ovd')
        .halfLeading(true)
        .includeFontPadding(true)
        .inputFilter('ovd')
        .keyboardAppearance(KeyboardAppearance.NONE_IMMERSIVE)
        .maxFontScale(1)
        .maxFontSize(1)
        .maxLength(1)
        .minFontScale(1)
        .minFontSize(1)
        .onContentScroll((): void => {})
        .onCopy((v: string): void => {})
        .onCut((v: string): void => {})
        .onDidDelete((v: DeleteValue): void => {})
        .onDidInsert((v: InsertValue): void => {})
        .onEditChange((v: boolean): void => {})
        .onPaste((): void => {})
        .onTextSelectionChange((): void => {})
        .onWillAttachIME((v: IMEClient): void => {})
        .onWillChange((v: EditableTextChangeValue): boolean => true)
        .onWillCopy((v: string): boolean => true)
        .onWillCut((v: string): boolean => true)
        .onWillDelete((v: DeleteValue): boolean => true)
        .onWillInsert((v: InsertValue): boolean => true)
        .placeholderColor(Color.Red)
        .placeholderFont({ size: 1, weight: FontWeight.Lighter })
        .searchButton('ovd')
        .searchIcon({ size: 1, color: Color.Red })
        .selectedBackgroundColor(Color.Red)
        .selectedDragPreviewStyle({ color: Color.Red })
        .selectionMenuHidden(true)
        .stopBackPress(true)
        .strokeColor(Color.Red)
        .strokeJoinStyle(StrokeJoinStyle.MITER_JOIN)
        .textDirection(TextDirection.LTR)
        .textFont({ size: 1, weight: FontWeight.Lighter })
        .textIndent(1)
    }
  }
}

@Builder
function _cmBuilderSelect(config: MenuItemConfiguration) {
}

class _CMSelect implements ContentModifier<MenuItemConfiguration> {
  applyContent(): WrappedBuilder<[MenuItemConfiguration]> {
    return wrapBuilder(_cmBuilderSelect);
  }
}

@Component
export struct FarmSelectComp {
  build() {
    Column() {
      Select([])
        .arrowPosition(ArrowPosition.END)
        .avoidance(AvoidanceMode.COVER_TARGET)
        .controlSize(ControlSize.SMALL)
        .dividerStyle({ color: Color.Red, mode: DividerMode.FLOATING_ABOVE_MENU })
        .font({ size: 1, weight: FontWeight.Lighter })
        .keyboardAvoidMode(MenuKeyboardAvoidMode.NONE)
        .menuAlign(MenuAlignType.START)
        .menuBackgroundBlurStyle(BlurStyle.COMPONENT_ULTRA_THIN)
        .menuBackgroundBlurStyleOptions({ colorMode: ThemeColorMode.SYSTEM, adaptiveColor: AdaptiveColor.DEFAULT })
        .menuBackgroundColor(Color.Red)
        .menuBackgroundEffect({ radius: 1 })
        .menuItemContentModifier(new _CMSelect())
        .menuOutline({ width: 1, color: Color.Red })
        .optionBgColor(Color.Red)
        .optionFont({ size: 1, weight: FontWeight.Lighter })
        .optionFontColor(Color.Red)
        .optionHeight(1)
        .optionWidth(1)
        .selectedOptionBgColor(Color.Red)
        .selectedOptionFont({ size: 1, weight: FontWeight.Lighter })
        .selectedOptionFontColor(Color.Red)
        .showDefaultSelectedIcon(true)
        .showInSubWindow(true)
        .space(1)
        .value('ovd')
    }
  }
}

