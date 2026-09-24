# ohos.md — 鸿蒙能力全景调研与本项目覆盖差距

> 调研口径：华为官方文档（developer.huawei.com）+ OpenHarmony 仓库/文档（gitee.com/openharmony）交叉核对，Kit 清单取自本地 HarmonyOS 6.0.1 SDK `@kit.*.d.ts` 实测枚举。
> 用途：全集调研快照（组件/Kit/指令集/ArkTS 约束的官方口径与链接）+ 机制专题（打包形态）+ 指令可达性归因结论。
> 动态差距与覆盖率**一律以脚本对账为准**：`python3 tools/check_corpus_coverage.py` 与 `tools/check_opcode_coverage.py`，
> 基线记录在 docs/BENCHMARK.md。本文与脚本数字冲突时以后者为准。

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
- **wide 语义**：立即数/字面量 id/寄存器与槽位索引超出 8 位即改用 wide 变体（u16）。官方未写明边界数值；本项目实证：立即数为**有符号 int8，取值 > 127 即触发**。
- `deprecated.*`：编译器不再生成、仅为旧字节码运行兼容保留——对语料属结构性放弃。

### 1.3 数量（本项目快照 vs 上游 master）

| | 本项目 ISA_YAML（API26 工具链） | 上游 master（13.0.1.0） |
|---|---|---|
| sig 总数 | **268** | 262 |
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

### 5.1 指令可达性归因（结构性不可达清单）

> 动态数字（当前 188/268）以 tools/check_opcode_coverage.py 为准。
> 结论口径：
> - `deprecated.*` 45 条：编译器不再生成，结构性放弃。
> - 比较跳转族（jeq/jne/jstricteq×null/undefined/z 等 14 条）：es2abc 一律拆为 eq/ne + jeqz/jnez，不可达。
> - script 模式专属（ldglobalvar/stglobalvar/st(const/to)globalrecord）：应用管线 esm|cjs 不发射。
> - 裸 `definefieldbyname`/`isfalse`/`istrue`：target-api-version 11 门控（上游 pandagen.cpp 按 <12/≥12 二选一）；依 AGENTS 优先级（构建链最新 > 指令覆盖）搁置旧 SDK 路线，按「真实野生产物存在、语料不可达、工具必须支持」处理。
> - wide 终局归因：`wide.ldobjbyindex`/`wide.stobjbyindex` 基础形态零发射；`wide.ldpatchvar`/`wide.stpatchvar` patch 管线专属（两遍编译+符号表机制可生成，非 app 产物）。
> - **callruntime.isfalse/istrue 前缀变体可达且已计入并集**（布尔上下文动态值判定发射）；`supercallarrowrange`/`wide.supercallarrowrange` range 形态可达（ArrowSuper.js：≥4 实参直调/展开调用）。
> - 其余未用条目为 es2abc 确定性发射策略，多轮探针实证不可达（createregexpwithliteral 降级 new RegExp；closeiterator/getresumeoffset 不发射等）。
>
> **探针收口（es2abc script+module 双模式，最小模块探针实证）**：上列候选中剩余项全部定性为**当前发射器结构性不可达**，归因如下——
> - `ldnewtarget`：new.target 改走调用约定传参（函数第 2 参数 `lda a1`），无专用取值指令；
> - 箭头内 super **定参小元数**调用（如 2 参）降为 `ldsuperbyname` + `callthisN`；range 形态
>   （≥4 实参直调 / 展开调用）仍发射 `supercallarrowrange` 族（ArrowSuper.js 实测 bare/wide
>   各 4 处命中，**非不可达、已覆盖**）；
> - `ldthis` 族：方法 this 经参数寄存器（a2）传入，全部降为 `lda`/`ldobjbyname`；
> - `ldobjbyindex/stobjbyindex`：数字键下标读写一律 `ldobjbyvalue/stobjbyvalue`（对象/数组/类型数组同）；
> - `ldfunction`：函数声明作值 = `definefunc` + `ldglobalvar`（script）/`stmodulevar`+`ldlocalmodulevar`（module）；
> - `ldsymbol`：well-known Symbol 取值 = `tryldglobalbyname "Symbol"` + `ldobjbyname "iterator"`；[Symbol.iterator] 计算键走 `callruntime.topropertykey`；
> - `throw.undefinedifhole`：TDZ 只发射 `throw.undefinedifholewithname`（裸 hole 形态不发射）；
> - `throw.deletesuperproperty`：`delete super.x` 编译为 `delobjprop`；
> - 裸 `isfalse/istrue/definefieldbyname`（0x23/0x24 等）确认不发射；**但 `callruntime.isfalse/istrue` 前缀变体由布尔上下文（模板串/分支内动态值判定）正常发射且早已计入覆盖并集**（compare_dis 多处命中），候选清单中该两条按前缀变体已达成处理；
> - script 模式专属指令（ldglobalvar/stglobalvar 等）再现于探针，与既有归因一致：仅 script 管线发射，应用 esm 管线不出现。

### 5.2 组件（全集 = `ets/component/component_config.json` 137 个）

动态差距以 `python3 tools/check_corpus_coverage.py` 输出为准；文档树口径（~170 条目，含子组件/专用形态）的调研快照见 §2。

剩余未覆盖项归因（结构性结论，非待办）：21 项中 15 项无 SDK 声明面（ColorPicker、
ColorPickerDialog、DotMatrix、Piece、Sheet、DepthComponent、GeometryView、FrictionMotion、
SpringMotion、SpringProp、ScrollMotion、MediaCachedImage、EffectComponent、Section、
DynamicLayout 系，component_config 占位但 d.ts 缺失，结构性不可达）；
Camera 无声明；Common 为元条目；DynamicComponent/IsolatedComponent/SecurityUIExtensionComponent/
LocationButton 需专用宿主（卡片/嵌入/系统应用）或系统能力。

> 2026-09 组件内 API 缺口专项（两波）：compfarm 整组件排除仅剩 Particle（构造需复杂
> ParticleOptions）；Component3D/Counter/FolderStack/GridCol/StepperItem + 第二波放出的
> DataPanel/DatePicker/Divider/Gauge/GridItem/Image/ListItem/Navigator/Panel/PatternLock/
> Progress/QRCode/Repeat/SaveButton/Span/CheckboxGroup/Canvas/AlphabetIndexer/CalendarPicker
> 全部进农场。default_for：Optional 解包 / VoidCallback·Callback<T>/内联箭头 → 空实现、
> Alignment 提示、保守 interface 字面量（必填字段全可映射才生成）；HOST_OF 七种宿主包装
> （GridCol/StepperItem/ImageSpan/TabContent/GridItem/ListItem/Span）；CTOR_HINTS 必参构造。
> 注意：manifest detection 的 call token 会进 farm FP 黑名单——token 与模块名互为子串时
> farm 自动排除该模块，token 仅为函数名时 hygiene 会撞常量黑名单，新增条目须选模块名形态
> 或改用 string-literal 检测。同轮 OhosDirect5Demo 清掉 @ohos 直连 51 个非排除缺口。

### 5.3 Kit（全集 = `ets/kits/@kit.*.d.ts`）

同上以脚本对账为准；端侧/云侧（★）分类见 §3。

### 5.4 语言特性（原候选已全部落地或定性）

已覆盖：generator/yield*/resume-with-arg、for-of/for-in/close、spread/rest/new-spread、解构 rest、Symbol 键、tagged template（成员 tag）、私有字段全家族、super[k]/super 展开、计算键、globalThis 预置赋值、可选链调用、动态下标调用（Record 形态）、闭包/lexenv 压力、wide 家族、async/await 链、try/catch/finally、泛型/union/枚举位运算、类继承多态等。
**现状**：原候选全部落地或定性——BigInt/String.raw/标签 break/for-await-of/static 块/解构交换/逻辑赋值/accessor、WeakMap/WeakSet/WeakRef/Proxy/Reflect/RegExp 具名组·后行断言·dotAll（Sugars.ts/TypesDemo，运行时以模拟器 selfcheck 为准）；`new.target` 已落地（构造器内箭头捕获形态，见 sugarNewTarget；本 SDK 下编译为参数传递，见 §5.1 探针收口）；`satisfies` 仅类型层、无指令面，不作为语料目标。

## 7. 打包形态专题：多 abc / HSP / HAR / 覆盖率提升

> 背景调研：如何构造「一个 HAP 内多个 abc」、HSP/HAR 还有哪些未覆盖形态、以及组件/API 覆盖率如何系统性提升。
> 证据来源 = 本地工具链源码级核实（SDK 26.0.0.32 Beta2 / hvigor-ohos-plugin 6.26.2 / ets-loader）+ 华为官方文档（下附链接）+ 本仓库 build/out 产物实测 + ohpm 实测。

### 7.1 多 abc：一个 HAP 里能出现几个 .abc？

**机制结论**：Stage 模型唯一现行编译模式 esmodule 下，es2abc 恒定带 `--merge-abc`，**每个 HAP/HSP 包强制只有一个 `ets/modules.abc`**，工具链不存在"关闭合并/按文件拆 abc"的 buildOption（`CompileModeEnum` 仅 jsbundle=FA 遗留 .js 路线 / esmodule）。本项目 4 包实测均如此（entry 21KB / feat_api 1.5MB / feat_vuln 125KB / lib_shared 3KB，各 1 个）。

**合法的多 abc 途径**（按对本项目的价值排序）：

| # | 途径 | abc 落位 | 证据 | 本项目状态 |
|---|---|---|---|---|
| 1 | **ArkTS 卡片**（FormExtensionAbility + WidgetCard，共包方式） | 同一 HAP 内额外产出 **`ets/widgets.abc`** 与 modules.abc 并存 | ets-loader `ark_define.js` 的 `WIDGETS_ABC="widgets.abc"` + `module_mode.js` 按 `widgetCompile` 切换产物名；官方「创建ArkTS卡片」：共包方式卡片 UI 与应用代码同 module 同 HAP | ✅ 已落地（feat_api 卡片 ApiWidgetCard + FormDemo 页） |
| 2 | **rawfile 放 .abc 数据文件** | `resources/rawfile/*.abc`，任意数量 | 官方 FAQ（faqs-ndk-65）：`napi_run_script_path` **仅接受 rawfile 下的 abc**，自动拼沙箱路径 `/data/storage/el1/bundle/<hap>/resources/rawfile/x.abc`，每次执行新建独立 JS 上下文 | ✅ 已落地（feat_vuln bench_script.abc + NativePage，**完成值恒 undefined、以脚本内自校验闭环**，+4 指令） |
| 3 | 多包 App | 每 HAP/HSP 各 1 个 modules.abc | 本仓库 4 包 4 abc | ✅ 已有 |
| 4 | **字节码 HAR 依赖** | tgz 内含独立 `ets/modules.abc`；但宿主构建以 `--enable-abc-input --remove-redundant-file` **原样并入宿主 modules.abc**（不做语法检查/重编译），宿主包内 abc 数不变 | hvigor `byte-code-har-utils.js`、ets-loader `module_mode.js` abcPaths 合并逻辑；官方「构建HAR」文档 | 已实证（/tmp 探针：HAR tgz 内确有 `package/ets/modules.abc` + `.d.ets` 桩；宿主消费后仍 1 个 abc，`&lib_common.*&1.0.0` record 原样并入）。**"abc 原样合并"机制即 patch 对指令的注入通道**（手造 abc 伪装字节码 HAR 即可入包；注入通道已实证，缺的只是能产出 patch 指令的 abc 载荷） |
| 5 | 独立卡片包（API 20+） | 卡片 UI 独立 library 模块 → 独立卡片包（formWidgetModule/formExtensionModule 互相关联） | 官方「创建ArkTS卡片」方式二 | ❌ 未覆盖（与 #1 二选一即可） |
| 6 | 集成态 HSP | HSP 静态打进消费方，不增加 abc 数 | hvigor `package-shared-tgz.js` integratedHsp 分支 | ❌ 未覆盖（形态补全用） |
| 7 | patch.abc（热修）/ 加密 abc（官方应用加密 code-protect） | 运行时/发布态形态，非正常构建产物 | 加密 abc 是逆向工具"野外"形态 | 观察项（不做语料目标） |

### 7.2 HSP / HAR 开发形态全景（官方文档要点 + hvigor 选项核实）

**HSP（动态共享包，module.json5 type=shared）**：
- 可导出 ArkUI 组件/类/native so/资源；不能做 entry；禁止循环依赖、**不支持依赖传递**；应用内 HSP 限同 bundleName/签名。
- Navigation 跨包路由：HSP 侧 `route_map.json` + module.json5 `routerMap` 字段声明 NavDestination 页面 ✅（已落地 api-route-map）。
- API14+ HSP 可声明 UIAbility；API18+ 可声明 ExtensionAbility ❌。
- **集成态 HSP**：模块级 `buildOption.arkOptions.integratedHsp: true` + 工程级 `useNormalizedOHMUrl: true` → 产物 .tgz（HAR 式），消费方放 `libs/` 以 `file:./libs/xxx.tgz` 依赖，可跨 bundleName 复用（注意：该开关应配在 HAR 消费方，配在 HAP 上 hvigor 会告警不生效——`pre-build.js` 有专门提示）。

**HAR（静态共享包）**：
- 源码 HAR（debug/工程内 `file:` 依赖，本项目 lib_common 形态）vs **字节码 HAR**（发布默认：DevEco NEXT Beta1 5.0.3.800 起；配置 = 模块级 `buildOption.arkOptions.byteCodeHar: true` + 工程级 `strictMode.useNormalizedOHMUrl: true`；hvigor 6.26.2 实测：useNormalizedOHMUrl=true 且未显式设 byteCodeHar 时**默认即字节码 HAR**——本项目工程级 useNormalizedOHMUrl=true 但 lib_common 走工程内 file: 依赖路径，仍是源码 HAR 形态）。
- 字节码 HAR 约束：compatibleSdkVersion 不得高于宿主工程；其依赖须声明在本模块 dependencies/dynamicDependencies；依赖名大小写须与包 name 一致。
- `packingOptions.asset.include/exclude`（glob）可自定义打包内容；node_modules/oh_modules 永不打包。
- HAR 可含 pages（仅 Navigation 跳转，不能注册路由）、资源（$r，但不能引 AppScope）、native so。

**混淆（ArkGuard）**：release 经 `arkOptions.obfuscation.ruleOptions`；本项目已开 `-enable-property-obfuscation -enable-toplevel-obfuscation`（filename/export 混淆实测跨包 HAP/HSP 加载崩溃，注释在 obfuscation-rules.txt）；**官方另有 API26 应用加密（code-protect，内核级 abc 加密）与 ohpm 三方加固（Virbox/爱加密等）**——加密 abc 是逆向工具野外兼容项，不入语料。

**本项目形态对照**：✅ 应用内 HSP（静态+动态 import）、源码 HAR、多 HAP（entry+2 feature）、native so（libs/arm64-v8a）、release 混淆、**ArkTS 卡片 widgets.abc**、**rawfile abc + napi 执行**、**route_map 跨包 Navigation**；❌ HSP 内 UIAbility/ExtensionAbility、字节码 HAR 工程内依赖（机制已探针实证）、集成态 HSP、独立卡片包。

### 7.3 组件/API 覆盖率：权威清单与提升路径

**权威机器可核对清单（本地 SDK 26.0.0.32 实测，比文档树口径更准）**：
- 组件：`ets/component/component_config.json` = **137 个**（ArkUI 组件名单一事实源；本文 §2 的 ~156/170 为文档树口径含子组件/专用形态）。
- API 模块：`ets/api/` 顶层 `@ohos.*.d.ts` = **447 个** + `@system.*.d.ts` = 20 个（FA 遗留）；另有 207 个子目录辅助类型 d.ts（ability/arkui/global 等，非独立 API）。
- Kit：`ets/kits/@kit.*.d.ts` = **103 个**（当前 SDK 26 口径；6.0.1 SDK 时代为 47）。

**语料/模式来源（开源生态）**：
- 官方示例：`gitee.com/harmonyos_samples`（官方 Sample 组织，每例独立工程）、`gitee.com/scenario-samples`（场景化合集）、`github.com/openharmony/applications_app_samples`（OpenHarmony 按 API 维度示例）——补组件/API 用法的现成参考。
- `ohpm.openharmony.cn`：真实三方库（大量**字节码 HAR**，含真实第三方 abc + 混淆变体）→ 作逆向工具**鲁棒性测试集**（非语料源；实测 @ohos/lottie 2.0.33 为源码 HAR，需挑选真正的字节码包）。
- OpenHarmony-TPC、awesome-harmony 系列作补充。

### 7.4 对本项目的落地建议（1–3 已落地；其余排在工具链升级 26.0.0 Release 之后）

1. ✅ **ArkTS 卡片页**：feat_api FormExtensionAbility（ApiFormAbility）+ 动态卡片（ApiWidgetCard）→ `ets/widgets.abc` 第二 abc 形态 + FormKit API 域（formProvider/formInfo/formBindingData/postCardAction）+ 卡片受限组件集（SDK `ets/component/form_config.json` 即卡片组件白名单，38 个）。
2. ✅ **rawfile abc + napi_run_script_path**：es2abc 脚本模式 abc 入 rawfile，feat_vuln cpp 执行——script 模式全局变量指令族（ldglobalvar/stglobalvar/stconsttoglobalrecord/sttoglobalrecord）+4 条，模块模式产物不含。
3. ✅ **route_map.json 跨包 Navigation 路由**：lib_shared 注册系统路由表，feat_api api-route-map 页按名路由 + onPop 回程断言。
4. ⏳ **字节码 HAR 注入 PoC（载荷侧）**：合并通道已实证（见 7.1 #4）；产出含 patch 对指令的 abc 载荷仍缺 assembler，维持待评估。
5. ⏳ HSP 内 UIAbility（API14+）、集成态 HSP、独立卡片包（API20+）——形态补全，可选。

**参考来源**：官方文档——创建ArkTS卡片（harmonyos-guides/arkts-ui-widget-creation）、HSP（in-app-hsp）、集成态HSP（integrated-hsp）、HAR（har-package）、构建HAR（ide-hvigor-build-har）、应用加密（code-protect）、napi_run_script_path 限制（harmonyos-faqs/faqs-ndk-65）、程序包结构（application-package-structure-stage）、混淆选项（source-obfuscation-rule-options）；本地——ets-loader `gen_abc_plugin.js`/`ark_define.js`/`module_mode.js`、hvigor-ohos-plugin `build-opt.d.ts`/`target-task-service.js`/`byte-code-har-utils.js`/`package-shared-tgz.js`、SDK `ets/component/component_config.json`。
