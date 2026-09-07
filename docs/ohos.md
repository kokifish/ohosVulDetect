# ohos.md — 鸿蒙能力全景调研与本项目覆盖差距

> 调研口径：2026-09-04；华为官方文档（developer.huawei.com）+ OpenHarmony 仓库/文档（gitee.com/openharmony）交叉核对，Kit 清单取自本地 HarmonyOS 6.0.1 SDK `@kit.*.d.ts` 实测枚举。
> 用途：ohosVulDetect 语料扩展的事实底座——全集是什么、本项目覆盖到哪、差距在哪、下一步做什么。
> 数字约定：指令全集以 `ISA_YAML` 指向的 isa.yaml（API26 工具链快照，267 条）为准；覆盖率以 `tools/check_opcode_coverage.py` 输出为准，基线记录在 docs/BENCHMARK.md。

## 1. ArkTS 字节码指令集（ISA）

### 1.1 权威来源

| 来源 | URL |
|---|---|
| isa.yaml（机器可读全集，规范唯一权威） | https://gitee.com/openharmony/arkcompiler_runtime_core/blob/master/isa/isa.yaml |
| 方舟字节码基本原理（人读版全量指令表） | https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-fundamentals |
| Panda .abc 二进制格式 | https://gitee.com/openharmony/arkcompiler_runtime_core/blob/master/docs/file_format.md |
| ArkCompiler 运行时仓库 | https://gitee.com/openharmony/arkcompiler_runtime_core |

### 1.2 组织与编码

- isa.yaml 结构：chapters（设计章节）→ prefixes → **19 个指令组**（常量加载 / 迭代器 / 对象创建 / 二元 / 一元 / 比较 / callruntime / throw / 调用 / 定义 / 属性读写 / 字符串常量加载 / 跳转 / 动态 move-load-store / 动态立即数 / 动态返回 / nop）→ exceptions；每条指令一个 `sig` 条目。
- **4 个前缀**（8 位前缀 + 8 位操作码 = 16 位小端编码）：`throw.`(0xfe) 抛异常类、`wide.`(0xfd) 宽编码、`deprecated.`(0xfc) 弃用兼容、`callruntime.`(0xfb) 运行时调用。不存在 experimental. 前缀。
- **wide 语义**：立即数/字面量 id/寄存器与槽位索引超出 8 位即改用 wide 变体（u16）。官方未写明边界数值；本项目实证：立即数为**有符号 int8，取值 > 127 即触发**（见 BENCHMARK.md「wide 阈值是 127 不是 255」）。
- `deprecated.*`：编译器不再生成、仅为旧字节码运行兼容保留——对语料属结构性放弃。

### 1.3 数量（本项目快照 vs 上游 master）

| | 本项目 ISA_YAML（API26 工具链） | 上游 master（13.0.1.0） |
|---|---|---|
| sig 总数 | **267** | 262 |
| deprecated.* | 45 | 45 |
| wide.* | 20 | 20 |
| callruntime.* | 26 | 26 |
| throw.* | 8（另有裸 throw） | 9（含裸 throw） |

版本快照差异 5 条，以本项目 ISA_YAML 为统计口径。

## 2. ArkUI 组件全景（约 170 条目）

来源：[ArkTS 组件参考索引](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkui-declarative-comp)、[系统预置 UI 组件库](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/system-preset-ui-component-library)、[OpenHarmony arkui-ts 目录](https://gitee.com/openharmony/docs/tree/master/zh-cn/application-dev/reference/apis-arkui/arkui-ts)。标注：[系]=仅系统应用，[停]=停止维护，[卡]=卡片专用，[元]=元服务专用，[穿]=穿戴设备；括号内为起始 API。

- **布局（17）**：Column、Row、Flex、Stack、RelativeContainer、Grid、GridItem、GridRow、GridCol、GridContainer[停]、ColumnSplit、RowSplit、FolderStack(11)、DynamicLayout[卡](24)、LazyColumnLayout/LazyVGridLayout/LazyVWaterFlowLayout(19)
- **容器（32）**：List、ListItem、ListItemGroup、WaterFlow(8)、FlowItem(9)、Swiper、Badge、Counter、SideBarContainer、AlphabetIndexer(7)、ArcAlphabetIndexer/ArcList/ArcListItem/ArcSwiper[穿](18)、Hyperlink(7)、WithTheme(12)、WithEnv(26)、ContainerReader(26)、UIPickerComponent(22)、EmbeddedComponent(12)、FormLink[卡](10)、UIExtensionComponent/SecurityUIExtensionComponent/IsolatedComponent/DynamicComponent/DistortionComponent(26)/UnionEffectContainer(23)/EffectComponent/RemoteWindow(9)/PluginComponent(9)/FormComponent(7)/AbilityComponent[停][系]
- **滚动（4）**：Scroll、Scrollbar(8)、Refresh(8)、ArcScrollBar[穿](18)
- **基础（23）**：Text、Span、ImageSpan、ContainerSpan(10)、Image、Button、Divider、Blank、Progress、LoadingProgress、DataPanel、Gauge、QRCode、Marquee(8)、Rating、SymbolGlyph/SymbolSpan(11)、TextClock/TextTimer(8)、RichText(8)、RichEditor(10)、NodeContainer、ContentSlot(12)
- **表单输入（16）**：TextInput、TextArea、Search、Select、Radio、Checkbox、CheckboxGroup、Slider、Toggle、Stepper/StepperItem、PatternLock(9)、DatePicker/TimePicker/TextPicker(8)、CalendarPicker(10)
- **媒体（3）**：Video(7)、ImageAnimator(7)、Web(8)
- **绘制渲染（13）**：Canvas、OffscreenCanvas(8)、Circle、Ellipse、Line、Polyline、Polygon、Path、Rect、Shape(7)、XComponent(8)、Component3D(12)、DepthComponent
- **导航（6）**：Navigation(9)、NavDestination(9)、NavRouter[停]、Navigator[停]、Tabs、TabContent
- **弹窗与菜单（10）**：AlertDialog、ActionSheet（全局方法）、CustomDialog、DatePickerDialog/TimePickerDialog/TextPickerDialog(8)、CalendarPickerDialog(10)、Panel[停]、Menu/MenuItem/MenuItemGroup(10)；另有通用挂载属性 bindSheet/bindContentCover/bindMenu/bindContextMenu/bindPopup
- **安全控件（2）**：SaveButton(10)、PasteButton(11)——免权限受控操作
- **高级组件库 @kit.ArkUI（36）**：Chip/ChipGroup、ComposeListItem、ComposeTitleBar、Counter/CounterV2、Dialog/DialogV2、DownloadFileButton、EditableTitleBar、ExceptionPrompt、Filter、FoldSplitContainer、FullScreenLaunchComponent、GridObjectSortComponent、MultiNavigation、Popup/PopupV2、ProgressButton(/V2)、SegmentButton(/V2)、SelectTitleBar、SelectionMenu、SplitLayout、SubHeader(/V2)、SwipeRefresher、TabTitleBar、ToolBar(/V2)、TreeView、FormMenu[卡]、ArcButton/ArcSlider[穿] 等
- **元服务 AtomicService（8）**：AtomicServiceNavigation/Search/Tabs/Web、HalfScreenLaunchComponent、InterstitialDialogAction、NavPushPathHelper

公开可用约 156 个；系统专用 14、停维护 5；另有 7 种手势（TapGesture 等）与通用属性/事件不计入。

## 3. Kit / API 全景（103 个）

来源：[HarmonyOS SDK 总览](https://developer.huawei.com/consumer/cn/sdk/)、[API 变更清单（按 Kit 索引）](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-abilitykit-6111)、本地 SDK 6.0.1 `openharmony/ets/kits/` + `hms/ets/kits/` 枚举。★=需 AGC/华为云。

- **系统基础（10）**：ArkTS、BasicServicesKit、IPCKit、BackgroundTasksKit、PerformanceAnalysisKit、TestKit、DriverDevelopmentKit、MechanicKit、MultimodalAwarenessKit、LocalizationKit
- **应用框架（8）**：AbilityKit、ArkUI、ArkWeb、FormKit、NotificationKit、IMEKit、InputKit、AccessibilityKit
- **图形与媒体（14）**：ArkGraphics2D、ArkGraphics3D、GraphicsAccelerateKit、ImageKit、PDFKit、AudioKit、AVSessionKit、CameraKit、MediaKit、MediaLibraryKit、DrmKit、RingtoneKit、ReaderKit、SpatialReconKit
- **数据与存储（9）**：ArkData、CoreFileKit、FileManagerServiceKit、AssetStoreKit、DataProtectionKit、DataLossPreventionKit、CalendarKit、ContactsKit、PreviewKit
- **网络与连接（5）**：NetworkKit、NetworkBoostKit、TelephonyKit、CallKit、CallServiceKit
- **安全与加密（8）**：CryptoArchitectureKit、UniversalKeystoreKit、UserAuthenticationKit、DeviceCertificateKit、ConfidentialSpaceKit、DeviceSecurityKit★、OnlineAuthenticationKit★、ScreenTimeGuardKit
- **AI 与智能（10）**：MindSporeLiteKit、CoreSpeechKit、CoreVisionKit、VisionKit、DataAugmentationKit、AgentFrameworkKit、UIDesignKit、NaturalLanguageKit★、SpeechKit★、IntentsKit★
- **分布式与互联（9）**：DistributedServiceKit、ConnectivityKit、NearLinkKit、ServiceCollaborationKit、RemoteCommunicationKit、ShareKit、ScenarioFusionKit、AccessoryKit、WearEngine
- **设备与外设（5）**：SensorServiceKit、LocationKit、Penkit、MDMKit、AODNavigationKit
- **云服务 HMS（16）**★：AccountKit、PushKit、MapKit、IAPKit、StoreKit、PaymentKit、GameServiceKit、AppGalleryKit、AppLinkingKit、CloudFoundationKit、LiveViewKit、WalletKit、HealthServiceKit、WeatherServiceKit、AdsKit、ScanKit（端侧为主）
- **行业/其他（9）**：AREngine、CarKit、DeskTopExtensionKit、StatusBarExtensionKit、EnterpriseSpaceKit、EnterpriseDataGuardKit、EnterpriseThreatProtectionKit、FASTKit、ServiceSupportKit

**Kit 与 OpenHarmony 的关系**：Kit 是华为在 OpenHarmony `@ohos.*` 模块之上的聚合封装层（API 12 起取代逐模块 import），端侧 Kit 在 OpenHarmony 有对应 d.ts 与 SA 实现；HMS 侧（★）为闭源增值，需 AGC。本仓库语料只用端侧 Kit。

## 4. ArkTS 语言特性与约束

来源：[从 TypeScript 到 ArkTS 的适配规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide)（现行 78 条约束，77 条带 arkts-* 编号）、[适配案例](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/arkts-more-cases-V5)。

| # | 规则族（代表规则） | 要点 |
|---|---|---|
| 1 | 强静态类型（arkts-no-any-unknown / no-var / no-implicit-return-types） | 禁 any/unknown/var，类型静态确定 |
| 2 | 名义类型（no-untyped-obj-literals / no-structural-typing） | 对象字面量必须对应显式类型，按名义兼容 |
| 3 | 禁运行时改布局（no-delete / no-method-reassignment / no-prototype-assignment） | 禁 delete、改方法/原型 |
| 4 | 高级类型限制（no-indexed-signatures / no-conditional-types / no-decl-merging） | 禁索引签名、条件/映射类型、声明合并 |
| 5 | 类模型（implements-only-iface / extends-only-class） | 接口与类各司其职 |
| 6 | 函数与并发（no-nested-funcs / no-standalone-this / no-generators） | 只用箭头函数，.ets 内禁生成器 |
| 7 | 动态语义限制（no-for-in / no-spread 部分场景 / no-globalthis） | 禁 for-in、解构部分场景、globalThis |
| 8 | 模块与遗留清理（no-require / no-umd / limited-stdlib） | 禁 require/export=/UMD，限标准库 |

本项目手法：受限特性（generator、for-in、Symbol、动态调用等）放 `pages/lang/*.ts`（arkts-* 严格 lint 只查 .ets，仍编译进同一 abc）；运行时可达性与编译期覆盖的区分规则见 BENCHMARK.md。

## 5. 与本项目覆盖对比（差距分析）

### 5.1 指令：已用 183/267，未用 84（P1→P5 逐轮增补，动态基线以 docs/BENCHMARK.md 为准）

> **P1 执行结果（2026-09-04）**：候选清单实证完毕——4 条新覆盖（`throw.constassignment`、`wide.supercallthisrange`、`callruntime.wideldlazymodulevar`、`wide.getmodulenamespace`）。
> **第二轮深挖（2026-09-06）**：`testin` 经私有品牌检查 `#priv in obj` 覆盖（公有 `k in o` 才是 `isin`）。
> **第四轮 es2abc 旗标+源码归因（2026-09-06）**：`callruntime.definefieldbyindex` 经数字字符串键静态字段覆盖（target 24 默认管线）——release 176、快照并集 **180/267**。
> **P5 wide 专项（2026-09-07）**：+3（`supercallarrowrange`/`wide.supercallarrowrange` = .js 箭头 super、`wide.stownbyindex` = 巨数组字面量，见 BENCHMARK 第五轮节）——并集 **183/267**。
> 剩余未用 84 条中，`definefieldbyname`/`isfalse`/`istrue` 三条已**源码级定性为 target-api-version 11 门控**（上游 pandagen.cpp 按 <12/≥12 二选一；本机 es2abc 支持 `--target-api-version 11`）。依 AGENTS.md 优先级（构建链最新 > 指令覆盖），旧 SDK 路线搁置，这 3 条按「真实野生产物存在、语料不可达、工具必须支持」处理，不作为语料目标；wide 剩余 4 条终局归因（`wide.ldobjbyindex`/`wide.stobjbyindex` 基础形态零发射、`wide.ldpatchvar`/`wide.stpatchvar` patch 管线专属——两遍编译+符号表机制可生成但不属于 app 产物）；其余（deprecated 45 + 其他）为 es2abc 确定性发射策略，多轮实证不可达。逐条归因见 docs/BENCHMARK.md 各归因小节。

| 未用类别 | 数量 | 处置 |
|---|---|---|
| deprecated.* | 45 | 结构性放弃（编译器不再生成） |
| 比较跳转族 jeq/jne/jstricteq×null/undefined/z 等 | 14 | 已实证不可达：es2abc 一律拆为 eq/ne + jeqz/jnez |
| script 模式专属（ldglobalvar/stglobalvar/st(const/to)globalrecord） | 4 | 结构性放弃：应用管线 esm\|cjs 不发射 |
| 已实证不可达（createregexpwithliteral、closeiterator、getresumeoffset） | 3 | 正则字面量降级 new RegExp；迭代器关闭/getresumeoffset 不发射 |
| **候选待实证** | 20 | 见下，按触发形态小规模编译实证（AGENTS 约定流程） |
| wide 未用 | 8 | 其中 5 条并入候选（见下） |

**候选待实证清单（P1）**：`isfalse/istrue`（布尔强制转换上下文）、`testin`（.ts 内 `in` 运算符）、`ldobjbyindex/stobjbyindex`（索引下标访问的替代发射路径，当前语料均未触发）、`ldfunction`（函数对象取值）、`ldnewtarget`（.ts 内 new.target）、`ldsymbol`（Symbol 作为值传递）、`ldthis/ldthisbyname/ldthisbyvalue/stthisbyname/stthisbyvalue`（顶层/独立 this 语义，arkts 禁 standalone-this，需 .ts 实证）、`supercallarrowrange`、`callruntime.definefieldbyindex / definefieldbyname`、`throw.constassignment / deletesuperproperty / undefinedifhole`（.ts 内 const 重赋值、delete super、TDZ 提前访问）、`callruntime.wideldlazymodulevar`（@Sendable 函数内 lazy import >127 个，扩生成器可达）、`wide.ldobjbyindex/stobjbyindex/stownbyindex`（索引号 >127 的下标访问）、`wide.getmodulenamespace`（import * as >127 个模块）；`wide.ldpatchvar/stpatchvar`（patch 动态更新机制）与 `wide.supercallarrowrange/supercallthisrange`（super 调用参数 >127）疑应用构建不可达，实证后归档。

### 5.2 组件：已覆盖约 70 个 vs 公开约 156 个

已覆盖集中在 ComponentsDemo（约 53）+ 其他 ui 页（Navigation/NavDestination/Tabs/TabContent/Swiper/Stack/Flex/Canvas/LazyForEach/Repeat/Web）+ 零散（Stepper/StepperItem/RowSplit/NodeContainer/CustomDialog/CheckboxGroup/CalendarPicker/bindSheet/bindMenu/bindContextMenu）。

**缺口（公开可用、普通 App 可落地，按价值排序）**：
1. 布局/容器：**RelativeContainer**（官方主推相对布局，未覆盖）、ColumnSplit、ListItemGroup、Counter、Scrollbar、Blank、Hyperlink
2. 文本族：Span、ImageSpan、ContainerSpan、SymbolGlyph、SymbolSpan、RichText、**Image（独立图片组件，全库未用）**
3. 输入：PatternLock（图案锁——安全语料价值高）
4. 绘制：OffscreenCanvas、Component3D（3D 资源加载，API12）
5. 新布局（API19+）：LazyColumnLayout/LazyVGridLayout/LazyVWaterFlowLayout
6. 弹窗：AlertDialog/ActionSheet（全局方法）、各 *PickerDialog
7. 安全控件：SaveButton/PasteButton（免权限安全操作——漏洞语料的「正确写法」孪生素材）
8. 高级组件库抽样：Chip、SegmentButton、ToolBar、TreeView、ComposeTitleBar 等（`@kit.ArkUI` 导入，与普通组件 import 路径不同，值得覆盖）
9. 主题/占位：WithTheme（API12）、ContentSlot（API12）
10. 放弃项：[系] 14 个（仅系统应用）、[停] 5 个、[卡]/[元]/[穿] 专用、API26 独占（WithEnv 等，模拟器镜像可试）

### 5.3 Kit：已覆盖约 20 个端侧 Kit vs 端侧共 47 个

已覆盖域（feat_api 29 个 demo）：ArkTS、AbilityKit、ArkUI、ArkWeb、ArkData（prefs/rdb/kv）、CoreFileKit、AssetStoreKit、CryptoArchitectureKit、UniversalKeystoreKit、NetworkKit（http/rcp/socket/ws/netConn）、MediaKit、SensorServiceKit、LocationKit、BasicServicesKit（notify/paste/request）、BackgroundTasksKit、PerformanceAnalysisKit（hilog）、LocalizationKit（i18n/intl）；taskpool/sendable/worker 属 ArkTS 并发。

**缺口（端侧可做，按逆向/漏洞语料价值排序）**：
1. **UserAuthenticationKit**（指纹/人脸/PIN——认证绕过类漏洞正面素材）
2. **ConnectivityKit**（蓝牙 BLE/NFC/Wi-Fi——近场通信攻击面）
3. **TelephonyKit**（短信/SIM——隐私与注入面）
4. **FormKit**（静态/动态卡片——FormLink/卡片通信是新攻击面）
5. **MediaLibraryKit + CameraKit**（相册/相机隐私权）
6. **DistributedServiceKit**（软总线/跨设备——鸿蒙特色攻击面）
7. **ContactsKit / CalendarKit**（敏感数据读写）
8. **DataProtectionKit / DataLossPreventionKit**（数据分级/防泄漏）
9. **ScanKit**（端侧扫码）、**ShareKit**（系统分享）
10. **MindSporeLiteKit / CoreVisionKit / CoreSpeechKit**（端侧 AI 模型加载——新型资产与漏洞面）
11. ImageKit、PDFKit、AudioKit 深化、AVSessionKit、IMEKit/InputKit、AccessibilityKit、IPCKit 显式用例
12. 云依赖 16 个（★）维持 v1 排除决策（需 AGC，无法本地验证）

### 5.4 语言特性：已覆盖 ~30 形态，候选补充

已覆盖：generator/yield*/resume-with-arg、for-of/for-in/close、spread/rest/new-spread、解构 rest、Symbol 键、tagged template（成员 tag）、私有字段全家族、super[k]/super 展开、计算键、globalThis 预置赋值、可选链调用、动态下标调用（Record 形态）、闭包/lexenv 压力、wide 家族、async/await 链、try/catch/finally、泛型/union/枚举位运算、类继承多态等。
**候选**（先小规模编译实证是否出指令/可运行）：accessor get/set（可能与 definefieldbyname/stownbyname 相关）、for-await-of（async 迭代，关 closeiterator/getresumeoffset）、`new.target`、String.raw、标签 break/continue、BigInt、WeakMap/WeakSet/WeakRef、`satisfies`（仅类型层，预计无指令）、Proxy/Reflect（.ts 内实测 ArkTS 运行时支持度）、RegExp 具名组/后行断言。

## 6. 下一步改进建议（优先级）

| 优先级 | 内容 | 验收 |
|---|---|---|
| 优先级 | 内容 | 验收 |
|---|---|---|
| P1 指令收口 | **已完成（三轮，2026-09-04/06）**：累计 +5 指令（throw.constassignment / wide.supercallthisrange / callruntime.wideldlazymodulevar / wide.getmodulenamespace / testin），release 176、并集 179/267；未用 88 条全部三轮归因，**源码级可达覆盖已穷尽**（含 closeiterator 降级铁证）；模拟器全面回归通过（feat_api 62✅/9❌、feat_vuln 37✅/4❌、新页数值正确，见 BENCHMARK 第三轮节） | ✅ |
| P2 组件补齐 | 新建 1–2 个 ui 页集中补 5.2 缺口第 1–7 项（约 25 个组件）；PatternLock/SaveButton/PasteButton 同步在 feat_vuln 造孪生素材 | sweep 全绿；组件计数更新进 BENCHMARK |
| P3 API 域扩展 | 5.3 缺口前 8 名逐个建页（每域 3–6 个代表调用，延续调用方式矩阵轮换）；每域考虑配漏洞孪生 | sweep 通过；ApiRegistry/main_pages 双注册 |
| P4 语言特性 | 5.4 候选实证后落 lang 页 | 新增指令计入覆盖并集 |
| P5 清单固化 | 本文档「结构性放弃」各表（deprecated/script-only/[系]/[停]/云依赖）作为长期「不可达/不做」单一事实源，与 check_opcode_coverage 未用清单互相对账 | BENCHMARK.md 链接本文档 |

> 维护约定：本文档记录「全集与差距」快照，覆盖率等动态基线仍以 docs/BENCHMARK.md 为准；两者数字冲突时以后者实测为准。

## 7. 打包形态专题调研：多 abc / HSP / HAR / 覆盖率提升（2026-09-07）

> 背景调研：如何构造「一个 HAP 内多个 abc」、HSP/HAR 还有哪些未覆盖形态、以及组件/API 覆盖率如何系统性提升。
> 证据来源 = 本地工具链源码级核实（SDK 26.0.0.32 Beta2 / hvigor-ohos-plugin 6.26.2 / ets-loader）+ 华为官方文档（下附链接）+ 本仓库 build/out 产物实测 + ohpm 实测。

### 7.1 多 abc：一个 HAP 里能出现几个 .abc？

**机制结论**：Stage 模型唯一现行编译模式 esmodule 下，es2abc 恒定带 `--merge-abc`，**每个 HAP/HSP 包强制只有一个 `ets/modules.abc`**，工具链不存在"关闭合并/按文件拆 abc"的 buildOption（`CompileModeEnum` 仅 jsbundle=FA 遗留 .js 路线 / esmodule）。本项目 4 包实测均如此（entry 21KB / feat_api 1.5MB / feat_vuln 125KB / lib_shared 3KB，各 1 个）。

**合法的多 abc 途径**（按对本项目的价值排序）：

| # | 途径 | abc 落位 | 证据 | 本项目状态 |
|---|---|---|---|---|
| 1 | **ArkTS 卡片**（FormExtensionAbility + WidgetCard，共包方式） | 同一 HAP 内额外产出 **`ets/widgets.abc`** 与 modules.abc 并存 | ets-loader `ark_define.js` 的 `WIDGETS_ABC="widgets.abc"` + `module_mode.js` 按 `widgetCompile` 切换产物名；官方「创建ArkTS卡片」：共包方式卡片 UI 与应用代码同 module 同 HAP | ❌ 未覆盖（首选扩展点） |
| 2 | **rawfile 放 .abc 数据文件** | `resources/rawfile/*.abc`，任意数量 | 官方 FAQ（faqs-ndk-65）：`napi_run_script_path` **仅接受 rawfile 下的 abc**，自动拼沙箱路径 `/data/storage/el1/bundle/<hap>/resources/rawfile/x.abc`，每次执行新建独立 JS 上下文 | ❌ 未覆盖（feat_vuln 已有 cpp libentry.so，具备 NAPI 执行条件；且 es2abc 脚本模式产物 record 结构与模块模式有差异，语料价值高） |
| 3 | 多包 App | 每 HAP/HSP 各 1 个 modules.abc | 本仓库 4 包 4 abc | ✅ 已有 |
| 4 | **字节码 HAR 依赖** | tgz 内含独立 `ets/modules.abc`；但宿主构建以 `--enable-abc-input --remove-redundant-file` **原样并入宿主 modules.abc**（不做语法检查/重编译），宿主包内 abc 数不变 | hvigor `byte-code-har-utils.js`、ets-loader `module_mode.js` abcPaths 合并逻辑；官方「构建HAR」文档 | ❌ 未依赖过。注意：**"abc 原样合并"机制正是第五轮搁置的 patch 对指令注入通道**（手造 abc 伪装字节码 HAR 即可入包，待小规模实证） |
| 5 | 独立卡片包（API 20+） | 卡片 UI 独立 library 模块 → 独立卡片包（formWidgetModule/formExtensionModule 互相关联） | 官方「创建ArkTS卡片」方式二 | ❌ 未覆盖（与 #1 二选一即可） |
| 6 | 集成态 HSP | HSP 静态打进消费方，不增加 abc 数 | hvigor `package-shared-tgz.js` integratedHsp 分支 | ❌ 未覆盖（形态补全用） |
| 7 | patch.abc（热修）/ 加密 abc（官方应用加密 code-protect） | 运行时/发布态形态，非正常构建产物 | 第五轮已归因；加密 abc 是逆向工具"野外"形态 | 观察项（不做语料目标） |

### 7.2 HSP / HAR 开发形态全景（官方文档要点 + hvigor 选项核实）

**HSP（动态共享包，module.json5 type=shared）**：
- 可导出 ArkUI 组件/类/native so/资源；不能做 entry；禁止循环依赖、**不支持依赖传递**；应用内 HSP 限同 bundleName/签名。
- Navigation 跨包路由：HSP 侧 `route_map.json` + module.json5 `routerMap` 字段声明 NavDestination 页面 ❌（本项目未用 route_map）。
- API14+ HSP 可声明 UIAbility；API18+ 可声明 ExtensionAbility ❌。
- **集成态 HSP**：模块级 `buildOption.arkOptions.integratedHsp: true` + 工程级 `useNormalizedOHMUrl: true` → 产物 .tgz（HAR 式），消费方放 `libs/` 以 `file:./libs/xxx.tgz` 依赖，可跨 bundleName 复用（注意：该开关应配在 HAR 消费方，配在 HAP 上 hvigor 会告警不生效——`pre-build.js` 有专门提示）。

**HAR（静态共享包）**：
- 源码 HAR（debug/工程内 `file:` 依赖，本项目 lib_common 形态）vs **字节码 HAR**（发布默认：DevEco NEXT Beta1 5.0.3.800 起；配置 = 模块级 `buildOption.arkOptions.byteCodeHar: true` + 工程级 `strictMode.useNormalizedOHMUrl: true`；hvigor 6.26.2 实测：useNormalizedOHMUrl=true 且未显式设 byteCodeHar 时**默认即字节码 HAR**——本项目工程级 useNormalizedOHMUrl=true 但 lib_common 走工程内 file: 依赖路径，仍是源码 HAR 形态）。
- 字节码 HAR 约束：compatibleSdkVersion 不得高于宿主工程；其依赖须声明在本模块 dependencies/dynamicDependencies；依赖名大小写须与包 name 一致。
- `packingOptions.asset.include/exclude`（glob）可自定义打包内容；node_modules/oh_modules 永不打包。
- HAR 可含 pages（仅 Navigation 跳转，不能注册路由）、资源（$r，但不能引 AppScope）、native so。

**混淆（ArkGuard）**：release 经 `arkOptions.obfuscation.ruleOptions`；本项目已开 `-enable-property-obfuscation -enable-toplevel-obfuscation`（filename/export 混淆实测跨包 HAP/HSP 加载崩溃，注释在 obfuscation-rules.txt）；**官方另有 API26 应用加密（code-protect，内核级 abc 加密）与 ohpm 三方加固（Virbox/爱加密等）**——加密 abc 是逆向工具野外兼容项，不入语料。

**本项目形态对照**：✅ 应用内 HSP（静态+动态 import）、源码 HAR、多 HAP（entry+2 feature）、native so（libs/arm64-v8a）、release 混淆；❌ 卡片 widgets.abc、rawfile abc、route_map 路由、HSP 内 UIAbility/ExtensionAbility、字节码 HAR 依赖、集成态 HSP、独立卡片包。

### 7.3 组件/API 覆盖率：权威清单与提升路径

**权威机器可核对清单（本地 SDK 26.0.0.32 实测，比文档树口径更准）**：
- 组件：`ets/component/component_config.json` = **137 个**（ArkUI 组件名单一事实源；本文 §2 的 ~156/170 为文档树口径含子组件/专用形态）。
- API 模块：`ets/api/` 顶层 `@ohos.*.d.ts` = **447 个** + `@system.*.d.ts` = 20 个（FA 遗留）；另有 207 个子目录辅助类型 d.ts（ability/arkui/global 等，非独立 API）。
- Kit：`ets/kits/@kit.*.d.ts` = **47 个**（端侧/云侧合计）。

**建议**：把 §5.2/5.3 的人工对比升级为脚本对账（component_config.json 组件名 vs 语料用到的组件；@ohos d.ts 列表 vs 语料 import 列表），升级工具链后一键重算差距，避免人工清单漂移。

**语料/模式来源（开源生态）**：
- 官方示例：`gitee.com/harmonyos_samples`（官方 Sample 组织，每例独立工程）、`gitee.com/scenario-samples`（场景化合集）、`github.com/openharmony/applications_app_samples`（OpenHarmony 按 API 维度示例）——补组件/API 用法的现成参考。
- `ohpm.openharmony.cn`：真实三方库（大量**字节码 HAR**，含真实第三方 abc + 混淆变体）→ 作逆向工具**鲁棒性测试集**（非语料源；实测 @ohos/lottie 2.0.33 为源码 HAR，需挑选真正的字节码包）。
- OpenHarmony-TPC、awesome-harmony 系列作补充。

### 7.4 对本项目的落地建议（排在工具链升级 26.0.0 Release 之后执行，避免双回归）

1. **ArkTS 卡片页**（扩展点 #1）：feat_api 或新模块加 FormExtensionAbility + WidgetCard（form_config.json + extensionAbilities）→ 一次拿下 `ets/widgets.abc` 第二 abc 形态 + FormKit API 域（formProvider/formInfo/formBindingData/postCardAction）+ 卡片受限组件集。注意 sweep 需适配卡片非路由页。
2. **rawfile abc + napi_run_script_path**（#2）：es2abc 脚本模式产 abc 入 rawfile，feat_vuln cpp 侧执行——覆盖"abc 数据文件"形态 + script 模式 record 差异。
3. **route_map.json 跨包 Navigation 路由 + HSP UIAbility**（API14+ 形态）。
4. **字节码 HAR 依赖实证**（#4）：引一个 ohpm 字节码 HAR 或自建探针 HAR，验证 `--enable-abc-input` 原样合并行为；顺带为 patch 对指令（wide.ldpatchvar/stpatchvar）注入路线做小规模 PoC。
5. 集成态 HSP（#6，可选形态补全）。

**参考来源**：官方文档——创建ArkTS卡片（harmonyos-guides/arkts-ui-widget-creation）、HSP（in-app-hsp）、集成态HSP（integrated-hsp）、HAR（har-package）、构建HAR（ide-hvigor-build-har）、应用加密（code-protect）、napi_run_script_path 限制（harmonyos-faqs/faqs-ndk-65）、程序包结构（application-package-structure-stage）、混淆选项（source-obfuscation-rule-options）；本地——ets-loader `gen_abc_plugin.js`/`ark_define.js`/`module_mode.js`、hvigor-ohos-plugin `build-opt.d.ts`/`target-task-service.js`/`byte-code-har-utils.js`/`package-shared-tgz.js`、SDK `ets/component/component_config.json`。
