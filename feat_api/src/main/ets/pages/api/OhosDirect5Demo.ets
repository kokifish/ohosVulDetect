// @ohos 直连面第五批（清缺口专项）：hilog/settings/resourceManager/audioHaptic/emitter 等
// 运行时面 + 多模输入/AV 投播/IME 面板枚举族 + arkui 类型面（node/modifier/layout 算法/Arc 族）
// + ability/application 类型面。安全敏感（security/userIAM/nfc/pasteboard/request/print/
// notification/reminder/telephony/webview）与 FA-only 模块按既定策略继续排除；
// settingsLite/cacheDownload 为 FA-only 面，仅 import 计引用、不调用。
import hilog from '@ohos.hilog';
import settings from '@ohos.settings';
import settingsLite from '@ohos.settingsLite';
import audioHaptic from '@ohos.multimedia.audioHaptic';
import cacheDownload from '@ohos.request.cacheDownload';
import resourceManager from '@ohos.resourceManager';
import emitter from '@ohos.events.emitter';
import { PerfTest } from '@ohos.test.PerfTest';
import { BusinessError } from '@ohos.base';
import { GesturePoint } from '@ohos.accessibility.GesturePoint';
import { GesturePath } from '@ohos.accessibility.GesturePath';
import { KeyCode } from '@ohos.multimodalInput.keyCode';
import { IntentionCode } from '@ohos.multimodalInput.intentionCode';
import { Action as KeyAction, Key, KeyEvent } from '@ohos.multimodalInput.keyEvent';
import { Action as TouchAction, SourceType, ToolType, TouchEvent } from '@ohos.multimodalInput.touchEvent';
import { Action as MouseAction, Button as MouseButton, Axis as MouseAxis, MouseEvent } from '@ohos.multimodalInput.mouseEvent';
import { ActionType, Pinch, Rotate } from '@ohos.multimodalInput.gestureEvent';
import { InputEvent } from '@ohos.multimodalInput.inputEvent';
import { AVCastPickerColorMode, AVCastPickerState, AVCastPickerStyle } from '@ohos.multimedia.avCastPickerParam';
import { WebNetErrorList } from '@ohos.web.netErrorList';
import { ErrorCode } from '@ohos.ability.errorCode';
import { PanelFlag, PanelType } from '@ohos.inputMethod.Panel';
import { CustomValueType, InputMethodExtraConfig } from '@ohos.inputMethod.ExtraConfig';
import { PanelInfo as SelPanelInfo, PanelType as SelPanelType } from '@ohos.selectionInput.SelectionPanel';
import { AbilityStartFailureCode, CompletionHandlerForAbilityStartCallback } from '@ohos.app.ability.CompletionHandlerForAbilityStartCallback';
import { ChildProcessArgs } from '@ohos.app.ability.ChildProcessArgs';
import { ChildProcessOptions } from '@ohos.app.ability.ChildProcessOptions';
import { Configuration as AppAbilityConfig } from '@ohos.app.ability.Configuration';
import { Configuration as ApplicationConfig } from '@ohos.application.Configuration';
import { InsightIntentEntry } from '@ohos.app.ability.InsightIntentDecorator';
import { RespCallback } from '@ohos.advertising.AdsServiceExtensionAbility';
import ability from '@ohos.ability.ability';
import { UIContext } from '@ohos.arkui.UIContext';
import { AppStorageV2 } from '@ohos.arkui.StateManagement';
import { Theme, CustomTheme } from '@ohos.arkui.theme';
import { DrawableDescriptor, AnimationStopMode } from '@ohos.arkui.drawableDescriptor';
import { BasicPrefetcher, IPrefetcher, IDataSourcePrefetching } from '@ohos.arkui.Prefetcher';
import { RectShape, CircleShape } from '@ohos.arkui.shape';
import { MovingPhotoViewController } from '@ohos.multimedia.movingphotoview';
import { ArcList, ArcListItem } from '@ohos.arkui.ArcList';
import { ArcDotIndicator, ArcSwiperController, ArcDirection } from '@ohos.arkui.ArcSwiper';
import { ArcScrollBar } from '@ohos.arkui.ArcScrollBar';
import { ArcAlphabetIndexerInterface } from '@ohos.arkui.ArcAlphabetIndexer';
import { DynamicLayout } from '@ohos.arkui.components.ArkDynamicLayout';
import { LazyColumnLayout } from '@ohos.arkui.components.ArkLazyColumnLayout';
import { LazyDynamicLayout } from '@ohos.arkui.components.ArkLazyDynamicLayout';
import type { LazyVWaterFlowLayout } from '@ohos.arkui.components.ArkLazyWaterFlowLayout';
import type { WithEnvAttribute } from '@ohos.arkui.WithEnv';
import { ContainerReader } from '@ohos.arkui.components.ContainerReader';
import { SelectionContainer } from '@ohos.arkui.components.SelectionContainer';
import type { LayoutAlgorithm } from '@ohos.arkui.layoutAlgorithm';
import type { LazyLayoutAlgorithm, LazyCustomLayoutAlgorithmOptions } from '@ohos.arkui.lazyLayoutAlgorithm';
import type { CommonModifier } from '@ohos.arkui.modifier';
import type { NodeRenderType, RenderOptions, BuilderNode } from '@ohos.arkui.node';
import type { Vec3, Vec4 } from '@ohos.graphics.scene';
import { common } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

function tag(o: Object): string {
  return o ? 'e' : 'n';
}

// 枚举绑定延迟读取：个别模块在低版本模拟器运行时初始化失败（读绑定抛 ReferenceError），
// 逐枚举捕获以 '!' 标记，避免整个用例 ❌ 掩盖其余枚举面。
function enumName(read: () => Object, name: string): string {
  try {
    return name + (read() ? 'e' : 'n');
  } catch (e) {
    return name + '!';
  }
}

@Entry
@Component
struct OhosDirect5Demo {
  build() {
    Column() {
      DemoScaffold({
        title: '@ohos direct face #5',
        cases: [
          new Case('hilog', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            hilog.debug(0xFF00, 'OVD5', 'public %{public}s', 'direct5');
            hilog.error(0xFF00, 'OVD5', 'num %{public}d', 7);
            log('hilog debug/error written');
            return `hilog ok domain=${0xFF00}`;
          }),
          new Case('emitter', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            emitter.on({ eventId: 9901 }, () => {
            });
            const data: Record<string, string> = { 'k': 'ovd5' };
            emitter.emit({ eventId: 9901, priority: emitter.EventPriority.IDLE }, { data: data });
            emitter.off(9901);
            return `emitter on/emit/off prio=${emitter.EventPriority.IDLE}`;
          }),
          new Case('settings', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const uri = await settings.getURI('ovd-bench-key');
              return `settings uri>${uri !== undefined}`;
            } catch (e) {
              const err = e as BusinessError;
              return `settings uri-err=${err.code}`;
            }
          }),
          new Case('resourceManager', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const rm: resourceManager.ResourceManager = ctx.resourceManager;
            const dc = await rm.getDeviceCapability();
            return `rm dev=${dc.deviceType} density=${dc.screenDensity} `
              + `colorMode=${tag(resourceManager.ColorMode)} direction=${tag(resourceManager.Direction)}`;
          }),
          new Case('audioHaptic', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const mgr = audioHaptic.getAudioHapticManager();
            return `audioHaptic mgr>${mgr !== undefined}`;
          }),
          new Case('perfTest', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            return `perfTest create>${typeof PerfTest.create}`;
          }),
          new Case('accessibility gesture', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const p = new GesturePoint(12, 34);
            const path = new GesturePath(100);
            return `gesture point>${p !== undefined} path>${path !== undefined}`;
          }),
          new Case('multimodal enums', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const ke: KeyEvent | null = null;
            const te: TouchEvent | null = null;
            const me: MouseEvent | null = null;
            const ie: InputEvent | null = null;
            const used = tag(KeyCode) + tag(IntentionCode) + tag(KeyAction)
              + tag(TouchAction) + tag(SourceType) + tag(ToolType)
              + tag(MouseAction) + tag(MouseButton) + tag(MouseAxis)
              + tag(ActionType);
            return `multimodal enums=${used} nulls>${ke === null && te === null && me === null && ie === null}`;
          }),
          new Case('avcast/net/ime enums', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const imec: InputMethodExtraConfig | null = null;
            const used = enumName((): Object => AVCastPickerStyle, 'avcps:')
              + enumName((): Object => AVCastPickerColorMode, 'avcpc:')
              + enumName((): Object => AVCastPickerState, 'avcpst:')
              + enumName((): Object => WebNetErrorList, 'net:')
              + enumName((): Object => ErrorCode, 'err:')
              + enumName((): Object => PanelFlag, 'pflag:')
              + enumName((): Object => PanelType, 'ptype:')
              + enumName((): Object => SelPanelType, 'sptype:');
            return `ime/avcast enums=${used} nulls>${imec === null}`;
          }),
          new Case('ability/app types', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const cpa: ChildProcessArgs | null = null;
            const cpo: ChildProcessOptions | null = null;
            const c1: AppAbilityConfig | null = null;
            const c2: ApplicationConfig | null = null;
            const chc: CompletionHandlerForAbilityStartCallback | null = null;
            const rc: RespCallback | null = null;
            const p1: ability.PacMap | null = null;
            const p2: ability.StartAbilityParameter | null = null;
            const p3: ability.ConnectOptions | null = null;
            const p4: ability.AbilityResult | null = null;
            const p5: ability.DataAbilityOperation | null = null;
            const p6: ability.DataAbilityResult | null = null;
            const p7: ability.DataAbilityHelper | null = null;
            const used = tag(AbilityStartFailureCode) + tag(ErrorCode);
            const n = cpa === null && cpo === null && c1 === null && c2 === null && chc === null
              && rc === null && p1 === null && p2 === null && p3 === null
              && p4 === null && p5 === null && p6 === null && p7 === null;
            return `ability types nulls>${n} enums=${used}`;
          }),
          new Case('arkui types a', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const uic: UIContext | null = null;
            const th: Theme | null = null;
            const cth: CustomTheme | null = null;
            const dd: DrawableDescriptor | null = null;
            const bp: BasicPrefetcher | null = null;
            const ip: IPrefetcher | null = null;
            const ids: IDataSourcePrefetching | null = null;
            const cm: CommonModifier | null = null;
            const r = new RectShape({ width: 8, height: 8 });
            const c = new CircleShape({ width: 8 });
            const used = tag(AppStorageV2) + tag(AnimationStopMode);
            return `arkui-a nulls>${uic === null && th === null && cth === null && dd === null
              && bp === null && ip === null && ids === null && cm === null} `
              + `shapes>${r !== undefined && c !== undefined} enums=${used}`;
          }),
          new Case('arkui types b', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            const adi: ArcDotIndicator | null = null;
            const asc: ArcSwiperController | null = null;
            const aai: ArcAlphabetIndexerInterface | null = null;
            const la: LayoutAlgorithm | null = null;
            const lla: LazyLayoutAlgorithm | null = null;
            const lco: LazyCustomLayoutAlgorithmOptions | null = null;
            const nrt: NodeRenderType | null = null;
            const ro: RenderOptions | null = null;
            const v3: Vec3 | null = null;
            const v4: Vec4 | null = null;
            const mpv: MovingPhotoViewController | null = null;
            const wea: WithEnvAttribute | null = null;
            const used = tag(ArcDirection);
            const n = adi === null && asc === null && aai === null && la === null && lla === null
              && lco === null && nrt === null && ro === null && v3 === null && v4 === null && mpv === null
              && wea === null;
            return `arkui-b nulls>${n} enums=${used}`;
          }),
        ],
      })
    }
    .height('100%')
  }
}
