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

### 5.1 指令：已用 174/267，未用 93

> **P1 执行结果（2026-09-04）**：候选清单实证完毕——4 条新覆盖（`throw.constassignment`、`wide.supercallthisrange`、`callruntime.wideldlazymodulevar`、`wide.getmodulenamespace`）。
> **第二轮深挖（2026-09-06）**：`testin` 经私有品牌检查 `#priv in obj` 覆盖（公有 `k in o` 才是 `isin`）——release 176、快照并集 **179/267**；剩余 88 条（deprecated 45 + wide 6 + 其他 37）经两轮 release+debug 实测**全部归因**（含 script 模式 .js 在 debug 下也被丢弃的终证）。逐条归因见 docs/BENCHMARK.md「指令收口 P1」「第二轮深挖」两节，下表保留为快照口径。

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
