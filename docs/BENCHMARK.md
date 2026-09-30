# ohosVulDetect 基准测试 App — 构建与使用手册

多模块 HarmonyOS 基准应用：① 广覆盖 API/ArkUI/语言特性，作为逆向工具反编译准确性语料；
② 预埋带标签漏洞 + 安全孪生（groundtruth/manifest.json），作为检测基准；
③ feat_heavy 极端大单模块指令农场（biz 指令集中于单一 record，record 级不均衡样本），作为超大 abc 输入压力样本。

## 当前基线速查（数字随语料演进，一律以本表与脚本实测为准）

| 维度 | 基线 | 事实源 |
|---|---|---|
| 指令覆盖 | 217/268（patch 注入 +29 见「patch abc 注入语料」节；其余 51 条归因见 docs/ohos.md §5.1） | check_opcode_coverage.py |
| 模块指令份额 | feat_heavy 6,419,552 指令 / 60,278 函数（release 口径，占全 app 93.0%；目标 ≥5M / ≈55k）；biz 集中单 record：Biz0000 6,195,973 指令 = 96.5%；最大单方法 giant_000 476,641 指令（record/方法级分布见 corpus_meta.json） | check_module_share.py + gen_corpus_meta.py |
| 语料画像（机器可读） | 各变体模块构成/指令·函数/份额、feat_heavy record 级分布、压缩画像；外部消费者入口 README.md → corpus_meta.json | gen_corpus_meta.py --check |
| 组件覆盖 | 116/137（剩余 21 全部归因，见 docs/ohos.md §5.2） | check_corpus_coverage.py |
| Kit 覆盖 | 103/103（feat_heavy Kit 农场静态/动态 import 全量覆盖） | check_corpus_coverage.py |
| @ohos 直连 | 418/447（feat_api 直连五批 + feat_heavy 农场：117 模块零参调用 / 202 命名空间模块动态 import / class·type 静态引用；剩余 29 个全部为 FA-only/安全敏感/策略排除） | check_corpus_coverage.py |
| 漏洞/孪生 | 130 + 130（manifest 260 条，双向一致；跨模块 XMOD 7 对、interproc 链 8 对（TNT-005/006 跨模块 + DEP-001 三层依赖链 HSP→HAR→feature）、动态加载 DIMP 2 对（固定/拼接路径，半混淆 keep 形态）、桥间污点 WEB-009/异步桥 010） | groundtruth/manifest.json |
| 评分 | 评分口径漂移由 check_score_regression 门禁锁定；当前 260 条口径待下一轮工具链复评（score_output.py） | score_output.py |
| feat_api 路由页 | 84（api 54 / ui 23 / lang 7 + Index，含提供方页 1；ui-v2reuse 为 V2 复用/深形态页） | main_pages.json |
| feat_compfarm | default 产品独立模块：组件 API 缺口补齐语料 34 文件 / 68 组件 / 821 调用（生成） | farm_build 实测 |
| 孪生 FP 门禁 | FAIL=0（call 级同形 WARN 为设计内） | check_twin_fp.py |
| bait 隔离门禁 | FAIL=0（9 规则面陷阱 near-miss 常量与 133 规则常量双向零包含） | check_bait_fp.py |
| 组件内 API | 1164/1296（89.8%，feat_compfarm 农场 68 组件；组件级排除仅剩 Particle；跨文件 interface/enum/type 别名三索引 + JSDoc 剥离枚举成员 + extends 跟随 + 多泛型 Callback 括号感知切分 + ContentModifier implements 空实现合成；no-decl 36 + skip 46 归因） | check_component_api_coverage.py |
| 字符串应力门禁 | 207/207 + LITERALS 面 OK | check_string_stress.py |
| 门禁工作流 | manifest / twin_fp / bait_fp / keep 新鲜度 / sync_pages / 生成器确定性 / py 语法 / 条目数 / 覆盖对账（SDK 清单快照 fixture） | .github/workflows/gates.yml |

> 语料设计 checklist：见 AGENTS.md「新增内容 checklist」节（单源，勿在此重复维护）。

## 测试流程基线（实测口径）

- **单一验证入口**：`python3 tools/verify.py`（--fast 为快门禁）替代逐条手跑；任一 FAIL 退出码 1。
- **共享反汇编缓存**（tools/dis_cache.py，build/dis_cache/，abc md5 → dis）：module_share /
  corpus_meta / opcode 三工具共用，重复反汇编仅首次付费；verify 全链约 27.5s。
- **样本构建瘦身**：build_tier 只重编 feat_heavy（farm 旋钮仅影响该模块）+ 以标准 api26-release
  .app 为底 zip 条目级替换 feat_heavy hap（--samples-only 约 106s）；产物条目集一致、
  份额对齐（small 20.3%/medium 50.2%，档位旋钮单源维护于 build.py TIER_ENVS）、装机运行验证通过；失败自动回退全链。
- **评分器回归基线**（tools/check_score_regression.py）：合成 test.out × 10 代表条目
  （全 detection 形态含跨模块 interproc）锁定 score_output 判定口径——防"评分口径漂移被
  误读为工具回退"污染父项目跨版本对比；已进 verify 快门禁与 CI。
- **sweep 加固**：dump() 捕获 dumpLayout 超时挂死（重试而非崩）；小页（≤6 按钮）自适应
  浅沉降（省 ~40s/页，大页保留全窗口）；行数断言——api/cat 页缺行在 stderr 摘要 +
  `--strict` 时退出码 2（采集质量与用例成败分离）。
- **混淆轮双门禁 + 还原坐标系 sidecar（2026-09-30）**：check_keep_rules.py（keep 名
  新鲜度 + 选项可识别性，进 verify 快门禁与 CI）；check_signal_dual_state.py（manifest
  信号材料须在 debug×release 双产物同时存活——既防漏接线/tree-shake 丢信号，又锁混淆
  免疫性；三面分流 abc / native+资源 / 无池材料 predicate-only、enum-ref；首次运行即
  修正 BACK-001 常量为打包稳定形态）。build.py collect_obf_meta 把各模块
  nameCache/systemApiCache 收进 `build/out/<artifact>.obfmeta/`（官方名称还原坐标系）；
  corpus_meta schema 1.1 增 obfuscation 段（选项/keep 规模/改名映射规模）。

## 现行待办（跨会话欠账集中处，完成后即删）

- **SDK/DevEco 升级（Beta2 → Release）**：AGENTS 优先级第一条；升级后重跑覆盖率归因 + sweep
  + corpus_meta，发射器行为变化记入基线表与本文件对应小节。
- **工具链修复回归**：方法名注入面（MethNameStressLab 载荷已在语料）等工具链侧修复落地后，
  回归并更新「逆向工具输出」相关结论与记忆。
- **上层工具链仓库 snapshot+gitlink**：待 koki 提交。
- **字节码 HAR patch 指令注入 PoC（载荷侧）**：缺能产出 patch 对指令的 assembler；
  合并通道机制已实证（docs/ohos.md §6.1），待评估。
- **AOT（.an）设备侧闭环（两步，机制与配方见 docs/ohos.md §6.5）**：① bench26 拉起后
  `hdc shell "find /data -name '*.an' -o -name '*.ap'` 验证运行时是否自发 AOT/PGO 产物；
  ② 应用运行采集 `modules.ap` → 模块 `arkOptions.hostPGO: true` 构建 → 产出首个 arm64 .an
  随 HAP 分发的运行形态（build/out 现有 x86-64 解析面探针 hap：
  feat_compfarm-api26-release-aot-unsigned.hap，abc↔.an 同源配对）。

### 探索方向（按价值/成本排序，未排期；结构性封顶项不列）

- **漏洞语料新家族**：sendable/@Concurrent 并发面、worker 通信面、UI 状态污染面三类
  ArkTS 特有形态（检测器区分度价值最高；interproc 跨模块链已落地 TNT×XMOD + DEP-001）。
- **FP-bait 扩展**：api-bait 困难模式从调用面延伸到规则面（近似孪生混淆形态），量化检测器区分度。
- 组件内 API 增量：**已决策不投入**——剩余 132 为 CustomBuilder 返回类型/复杂构造（Skip 46 已逐项归因）；组件维度 21 项与 no-decl 36 封顶。
- **打包形态**：多 HSP 依赖链、feature HAP 按需分发（distro）等输入形态对反编译管线的扩展，
  配套 corpus_meta 画像字段。
- **评分基础设施**：工件 sidecar 的父项目消费验证闭环（评分器回归基线已落地为
  check_score_regression 门禁）。
- **指令覆盖增量**：仅随 SDK 升级重探（callruntime/patch 管线新发射形态），不作为常态投入。

## 结构

| 模块 | 类型 | 内容 |
|---|---|---|
| entry | entry HAP | 壳：五按钮跨 HAP startAbility 拉起 Api/Vuln/Heavy/OvdShared/CompFarm |
| feat_api | feature HAP | 良性语料路由页（数量/构成见基线速查 feat_api 行，main_pages.json 为准） |
| feat_vuln | feature HAP | 漏洞分类页（cat- 页 + Index + Backdoor）+ BackdoorAbility(exported, ovd://backdoor) + libentry.so |
| feat_heavy | feature HAP（仅 default 产品） | 极端大单 record 指令农场：≥5M 指令 / ≈60k 函数，biz 集中单一编译单元（生成语料，勿手改），HeavyFarmPage 抽样 smoke，不进 sweep |
| feat_compfarm | feature HAP（仅 default 产品） | 组件 API 缺口补齐农场（生成语料，勿手改），ComponentApiFarmPage 选择渲染，compfarm- 前缀不进 sweep |
| lib_common | HAR | Logger / DemoItem / Runner + XMOD HAR 漏洞面（常量编入每个依赖方 HAP abc） |
| lib_shared | HSP | 静态/动态 import 目标 + XMOD HSP 漏洞面（独立 abc） |

每个模块编译为独立 `ets/modules.abc`；default 产品 `.app` = 5 hap + 1 hsp + pack.info（api24 无 feat_heavy/feat_compfarm）。

## 构建

**教训**：绕过 build.py 直调 `hvigorw` 时必须把 DevEco 自带 node 前置到 PATH
（`export PATH=/Applications/DevEco-Studio.app/Contents/tools/node/bin:$PATH`）——系统
homebrew node（v26.5.0 起）移除了 `fs.rmdirSync(..., {recursive})`，hvigor 的
BuildNativeWithNinja 清理步骤会报 00308018 TypeError（build.py 不受影响，它自动前置）。

**推荐：一键脚本（自动设置工具链环境）**

```bash
python3 build.py                    # 全量构建：api26+api24 双 SDK × release+debug 双模式（4 变体全出，默认）
python3 build.py --sdk api26        # 仅 API 26（SDK 26.0.0 全量语料），双模式
python3 build.py --sdk api24        # 仅 API 24（6.1.1(24)，旧模拟器镜像安装用）
python3 build.py --mode release     # 仅 release（ArkGuard 混淆），双 SDK
python3 build.py --mode debug       # 仅 debug（不混淆）
python3 build.py --clean            # 构建前清理（改混淆规则/SDK 后建议使用；--sdk 与 --mode 可自由组合）
```

仅 3 个可选参数；工具链路径默认 `/Applications/DevEco-Studio.app`，可用环境变量 `DEVECO_STUDIO_HOME`/`DEVECO_SDK_HOME` 覆盖。

**等价手动命令**

```bash
export PATH=/Applications/DevEco-Studio.app/Contents/tools/{node,ohpm}/bin:$PATH
export DEVECO_SDK_HOME=/Applications/DevEco-Studio.app/Contents/sdk
HV=/Applications/DevEco-Studio.app/Contents/tools/hvigor/bin/hvigorw

ohpm install --all
$HV --no-daemon assembleHap --mode module -p product=<default|api24> -p buildMode=<release|debug>
$HV --no-daemon assembleApp --mode project -p product=<default|api24> -p buildMode=<release|debug>
```

（hvigor 强制要求名为 "default" 的 product 存在，default 即 api26；`--sdk api26` 内部即传 `product=default`）

产物统一收集到 `build/out/`，文件名区分 SDK 与模式：`ohosVulDetect-<sdk>-<mode>-unsigned.app` 与
各模块 `<模块>-<sdk>-<mode>-unsigned.{hap|hsp}`；hvigor 原始产物在 `build/outputs/<product>/` 与
`*/build/<product>/outputs/default/`（.har/.tgz 中间产物不收集）。

### ArkGuard 混淆（release 默认开启）

各模块 `obfuscation-rules.txt` 当前生效：`-enable-property-obfuscation` + `-enable-toplevel-obfuscation`。
以下两项**实测会导致运行时崩溃**（多包各自独立改写，跨包模块解析失败），故默认关闭、留有证据注释：

- `-enable-filename-obfuscation`：多包（HAP×N + HSP）各自独立改写 record 路径，跨包模块解析 `SyntaxError`，进程启动即退（exit 254）；
- `-enable-export-obfuscation`：HSP 导出名跨包映射不一致（`&lib_shared/Index& does not provide an export name 'b1'`），同样 `SyntaxError`。

混淆实测结论：
- 混淆 release 包运行行为与 debug 完全一致；
- 逆向工具对混淆包完全兼容（NOT MODULE_ANALYZED=0、UNKNOWN ops=0），方法名/record 路径保留（export/filename 关闭所致），字符串字面量不受混淆影响；
- property 混淆会改写 JSON 对象字面量属性名（如 `idcard`），属"困难模式"预期效果，是该维度唯一的 FN 来源。

### 动态加载与密度形态（2026-09-29 轮）

- **DIMP 动态加载家族（cat-dimp）**：sink 在 await import() 目标 record（DynTarget）内——
  固定路径（001）/运行时拼接路径（002，静态调用图与模块解析双断）两形态 + DEP-001 三层
  依赖链（HSP source→HAR 中转→feature 落盘，依赖图从星型变含链，interproc 3-hop）。
  **半混淆形态**：feat_vuln/obfuscation-rules.txt `-keep-property-names ovdDimpSink
  ovdDimpSafe` + `-keep-global-names`——动态入口签名保留（.dis 实证 2 处）而其余照常混淆，
  即 ArkGuard 官方 FAQ 要求的动态加载真实发布形态。ArkTS 坑：拼接导入的模块对象须
  `as interface`（type 对象字面量禁用、any 禁用）。
- **字符串密度不平衡档**：tools/gen_string_density.py → lang/StringDensityLab.ts（单
  record：120KB 单串 / 2 万元素字面量数组 / 5000 次同标识符引用（池去重→1 条）/
  5000 微差串（池爆炸不去重）——对照形态压测池去重策略；.dis +1.4MB 全来自该 record；
  挂载 DynamicImportDemo 'string-density' case。
- **桥扩族（cat-web）**：WEB-009 桥间污点（getToken→reportSink 外传链）/ WEB-010 异步桥
  （runJavaScript 回注携令牌表达式）+ 孪生。接线坑：按钮插错进 onClick 内部永不渲染
  （须为 Flex 区兄弟节点）；cat-web 页滑动手势被 Web 组件吞——按钮区滑动须避
  开 Web 区域。

### V2 状态管理与复用（ui-v2reuse）

StateV2Demo 覆盖 V2 主族（@ComponentV2/@Local/@Param/@Event/@Provider/@Consumer/@Once/
@Monitor/@Computed/@ObservedV2/@Trace）；ui-v2reuse 补齐剩余面：**@ReusableV2**（API26 复用池
+ ReusableOptions{memoryOptimizationStrategy}）、**@Reusable**（V1 对照）、**aboutToRecycle/
aboutToReuse** 复用生命周期、**@Require @Param**、@Monitor 多路径（顶层+嵌套图）、嵌套
@ObservedV2 对象图（OuterGraph→InnerNode[]）。

- 本 SDK（Beta2）实证约束：**@Computed 不允许 set 方法**（官方 V2 文档的 getter/setter 双向
  形态在此编译器版本不可达，页面留归因注释）；**@Param 在复用回调内只读**（aboutToReuse
  改 @Param 报 read-only）；IMonitor 的路径面为 `dirty: Array<string>`（无 path() 方法）。
- abc 发射实证（loader_out 反汇编字面量）：aboutToRecycle/aboutToReuse、
  `__resetStateVarsOnReuse__Internal`（@Reusable 家族编译器内建）、页面 record 均在。
- 运行时（bench26 实测）：selfcheck 4/4（@Computed 求值/@Local 写/@Trace 嵌套写穿/
  @Monitor 多路径命中 2 次）；首轮 monitor 惰性（3/4）属 V2 回调等帧既有行为，复跑即过。
  pool=0：普通 ForEach 全可见不触发复用池回收（需 LazyForEach 滚动场景）——池的运行时
  行为不作为断言，abc 面证据为准。
- opcode 覆盖 217/268 不变：V2 深形态发射在已覆盖指令面内（callruntime/属性链无新增助记符）。

### feat_heavy 指令农场

极端大单模块压力样本（逆向工具链超大 abc 输入用）：规模门禁与实测见基线速查「模块指令份额」行
（占全 app 份额 ~93%）。仅进 default（api26）产品（`targets.applyToProducts`），api24 旧模拟器构建不含。
**「单模块」在 record（编译单元）级成立**：默认 `BIZ_FILES=1 / BIZ_FUNCS=3870`（=43×90），全部 biz
指令集中于单一 record——实测 Biz0000 6,195,973 指令 = feat_heavy 的 96.5%；es2abc 单文件
19MB / 47.8 万行实测可编译（峰值 ~1.3GB）。
**巨方法形态（方法级不均衡）**：`GIANT_STMTS=10000`（旋钮 OVD_HEAVY_GIANT_STMTS）在 Biz0000
附加单一 `giant_000` 函数——实测 release 单方法 476,641 指令（2k/5k/10k 块阶梯探针均一次
编译通过，es2abc 无上限迹象）；样本档 pin 0 保持小档规模。`BIZ_FILES>1` 为样本档拆分旋钮，small/medium 档 pin
43 函数/文件（档位画像见 corpus_meta.json sample_tiers）。实测：6.42M 指令 / 24.3MB modules.abc，逆向工具链可完整解析（分钟级）；
运行时复测（2026-09-29，API26 真机 bench26/7.0.0.32 Beta2）：单 record + 巨方法形态
安装/启动/六按钮抽样全部通过（counts biz=3871 biza=387 api=201 kit=30 kitdyn=142；
biz n=3871 acc=8279；api total=201；apidyn n=205 ok=4；kit n=30；kitdyn n=142 ok=4）。

- 生成器：`tools/gen_heavy_farm.py`（规模旋钮在文件头，按指令密度实测标定，勿手改生成物）。原料
  `tools/heavy_api_catalog.json` 由 `tools/gen_heavy_catalog.py` 从本地 SDK d.ts 提取
  （SDK 升级后本地重跑，不进 CI，同 gen_rawfile_abc 先例）。四个原型：
  **biz**（纯计算业务函数）/ **api**（@ohos 零参 get/is/query 调用包装）/ **kit**（openharmony
  静态 import + hms 动态 import）/ **ui**（安全组件业务组合 struct）；`farm/index.ts` 懒构建
  注册表 + 抽样器；页面 `HeavyFarmPage` 六按钮抽样 smoke（counts/biz/api/apidyn/kit/kitdyn）。
- 门禁：`python3 tools/check_module_share.py`（release 构建后跑；`--no-gate` 查看其他变体）。
- FP 隔离：生成器读 manifest.json 提取 detection 常量与调用 token，命中即拒绝生成；FA-only
  （`@famodelonly`）、安全敏感（crypto/huks/net.http 等 UNSAFE_MODULES）模块整体排除。
- 运行时边界：smoke 只跑**白名单抽样**（hilog/systemTime/i18n/hichecker 的 3 个包装）——
  部分同步系统 API 在主线程可阻塞 >6s 触发 appfreeze（THREAD_BLOCK_6S 被看门狗杀进程），
  其余 200+ 个 api 包装只在 abc 中存在、不参与运行时抽样。动态 import 抽样各 4 个
  （@ohos 命名空间模块与 hms Kit 在模拟器均可加载）。
- 生成代码编译坑（逐个实证）：
  - `.ts` 不能 import `.d.ets` 标识符（错误 10311005）；`@arkts.*` 系列声明在 `ets/arkts/`
    而非 `ets/api/`，d.ets 探测须覆盖两目录；
  - FA-only API（`@famodelonly` 小写标签）在 Stage 模型编译报错，须排除；
  - namespace 型 default 导出不能 `typeof`/类型位引用（Cannot use namespace as a value/type），
    这批模块全部走动态 import；
  - 泛型类实例化/类型位引用必须按声明元数补参（`TreeSet<T>` 裸用报 TS2314；容器方法实参
    类型随实例化元数走，1 元存 string、2 元 set(k,v)）；
  - kit 具名导出须按 value_kinds 过滤（interface 名做 `typeof` 直接编译失败）。
- 生成代码运行时坑：
  - `hichecker.getRule()` 返回 BigInt，`JSON.stringify` 抛 TypeError；catch 里
    `(err as BusinessError).code.toString()` 对无 code 的普通错误二次崩溃（jscrash）——
    一律 `String(...)`；
  - 容器类方法名以 SDK d.ts 为准（如 Vector 用 `add` 无 `push`）。

### 工具链版本决策

- 本机 DevEco Studio 26.0.0（SDK 26.0.0.32 Beta2，模拟器镜像 7.0.0.32）；官方已发布
  26.0.0 Release（SDK 26.0.0.105）——按 AGENTS 优先级，升级是**待办决策项**（当前明确暂缓，
  语料增量在 Beta2 推进）。升级后必须重跑：全量构建 + 覆盖率归因（es2abc 行为差异可能增减
  指令，变化须归因）+ sweep 回归 + 评分复测。
- HSP 内 UIAbility（API14+ 形态）：编译/安装通过；API24 模拟器上应用内 startAbility
  拉起后立即回桌面（启动链路未通，疑似镜像侧限制），待 API26 镜像恢复后复验；
- `backgroundModes` 已从 module.json5 schema 移除（SDK 26），后台任务 demo 运行时 401；
- DataShareExtensionAbility 在 26.0.0 Beta SDK 未公开，IPC-003 为 TCP 后门无认证用例。
- SDK 26 API 面变化清单（本项目适配记录）：CoreFileKit 导出 `fileIo`（非 fs）、`rcp.createSession`
  （非 new Session）、emitter 事件 id 为 string、`RdbPredicates.limitAs`、`Curve.Ease/EaseOut/Friction`、
  `animateTo` 需经 UIContext、`@Provider/@Consumer` 需带参、asset.Value 仅 boolean|number|Uint8Array、
  `display.on(type, cb)` 2 参。

## 语言特性语料与 ArkTS 语法限制

lang 页覆盖 generator、词法环境、私有字段、super 形态等大量指令。关键手法与限制：

- **`.ts` 文件同模块编译**：arkts-* 严格检查只作用于 `.ets`；generator、for-in、Symbol、
  Function.apply、解构声明等被禁特性放在 `pages/lang/*.ts`（与 .ets 同目录、进同一
  modules.abc），页面 orchestrate 调用。非元组 spread 在 .ts 中同样被禁，需元组类型。
- **运行时与编译期不一致**：`.ts` 里的 `o[m]()` 动态方法调用能编译出 `callthis1`（非 withname），
  但 ArkTS 运行时抛 TypeError——此类"仅编译覆盖"函数页面以 `typeof fn` 引用防 tree-shake，
  不得调用；而 `fs[0](1,2,3,4)`（函数数组动态调用，经数组间接）运行时合法。
- **本工具链（SDK26 es2abc）结构性不可达**：`createregexpwithliteral`（正则字面量被降级为
  `new RegExp(字符串)`）、`closeiterator`、`getresumeoffset`、`jeq*/jstricteq*` 比较跳转族
  （一律拆成 `eq/ne + jeqz/jnez`）；完整归因见 docs/ohos.md §5.1。
- super 属性语义：`super.x = v` 无 setter 时落到 this 自有属性；`super.x` 读走原型链（类字段不在
  原型上，常得 undefined），demo 里读回用 `this.x`。
- release 优化三大坑（防折叠/防内联/防消除）：值必须从参数派生——字面量 const 会被 release
  常量折叠；闭包须经数组/循环间接调用——直接调用会被 release 内联；未被页面 import 的 .ets
  会被 tree-shake，新文件必须接入页面。
- 词法环境 wide 压力三条件：① 单一作用域 >127 个被捕获变量（仅声明不捕获不占槽位）；
  ② 值从参数派生（防折叠）；③ 箭头经数组/循环间接调用（防内联）。

### patch abc 注入语料（手造指令面）

「es2abc 不发射、但真实野生产物存在、工具必须支持」的指令（裸 isfalse/istrue、比较跳转族、
ldthis 族、definefieldbyname、closeiterator、createregexpwithliteral 等）经
`tools/gen_patch_abc.py` 以二进制改写方式注入 29 个独立 abc（`feat_vuln rawfile/patch_cooked_*.abc`）：
es2abc(script 模式) 编译内嵌探针 → 按 isa.yaml 自算的目标指令编码定点改写字节
（ark_disasm 实测不校验校验和）→ 逐文件反汇编终验。样本运行期不执行，仅作为解析面；
每目标独立 abc，避免多改写在同一指令流上相互去同步。前缀形态（deprecated.*、
wide.ldpatchvar/stpatchvar、throw.*）的 yaml 编码规则待续补。
`gen_heavy_farm.py`/`gen_string_stress.py` 等生成器的 FP 黑名单会自动吸收 manifest 新增规则。

### Sendable 指令覆盖实验室

目的：覆盖全部 `callruntime.*sendable*` 指令（含 wide 变体）。
代码：`feat_api/src/main/ets/concurrent/SendableLab.ets`（8 种形态，文件内注释逐条对应指令）+
`SendableWideLab.ets`/`SendableWideData.ets`（压力生成物，`tools/gen_sendable_stress.py` 生成，勿手改）+
页面 `pages/api/SendableDemo.ets`（入口 `api-sendable`）。

指令 → 触发源码形态（es2panda 实证，@Sendable → "use sendable" 上下文；@Concurrent 不产生 sendable 指令）：

| 指令 | 触发形态 |
|---|---|
| definesendableclass | 定义 `@Sendable class`（func_main_0） |
| newsendableenv / widenewsendableenv | 模块顶层有 @Sendable 类（env 大小 >127 用 wide） |
| stsendablevar / widestsendablevar | func_main_0 把 @Sendable 类存入 env 槽位（槽位号=类定义顺序） |
| ldsendablevar / wideldsendablevar | 任意函数按名引用本模块 @Sendable 类 |
| ldsendableclass | @Sendable 类方法内引用自身类（如 `clone(): Self { return new Self(...) }`） |
| ldsendableexternalmodulevar / wide | @Sendable 函数内访问普通 import 绑定 |
| ldlazysendablemodulevar / wide | @Sendable 函数内访问 `import lazy` 绑定（API≥12） |
| ldsendablelocalmodulevar / wide | @Sendable 函数内访问本模块导出顶层变量（API≥18） |

wide 阈值统一为 MAX_INT8=127（不是 255）。压力规模：136 个 @Sendable 类 + 136 eager + 12 lazy
import + 136 个本模块 `export let` 变量（索引从 0 数起的取阈值+8 余量；lazy 索引按名字母序落在
全部 eager 之后、必为 wide，绑定名用 `z*` 前缀保证排在 `w*` 之后）。

注意：本模块 `export const` 在 release 会被常量折叠成字面量，wide localmodulevar 随之消失——
生成器用 `export let`；`taskpool.execute` 只接受 `@Concurrent` 函数，`@Sendable` 函数在 UI
线程直接调用即可。工具链 TAC dispatch 表需包含 sendable 指令 handler，缺失会出 UNKNOWN
（以 UNKNOWN=0 为门禁）。

## 模拟器（CLI，无需 IDE）

```bash
E=/Applications/DevEco-Studio.app/Contents/tools/emulator/Emulator
$E -license accept
$E -imageList -deviceType phone -downloaded false
$E -install -deviceType phone -osVersion "HarmonyOS 6.1.1(24)"
$E -create ovdbench -deviceType phone -osVersion "HarmonyOS 6.1.1(24)"
$E -start ovdbench -noWindow          # 前台可去掉 -noWindow
HDC=/Applications/DevEco-Studio.app/Contents/sdk/default/openharmony/toolchains/hdc
$HDC file send build/out/ohosVulDetect-api24-release-unsigned.app /data/local/tmp/ohosvuldetect.app
$HDC shell "bm install -p /data/local/tmp/ohosvuldetect.app"      # 模拟器接受未签名 debug 包
$HDC shell "aa start -a EntryAbility -b com.koki.VD"
$HDC shell "snapshot_display -f /data/local/tmp/s.jpeg" # 截图
$E -stop ovdbench
```

**部署教训**：
- `hdc file send` 对不存在的本地路径可能静默"成功"（返回码不可靠），重装验证前务必比对 `md5sum`；
- 同 versionCode 覆盖安装可能不生效，建议先 `bm uninstall`；
- 模拟器锁屏会拒绝 `aa start`（Error 10106102），先 `power-shell wakeup` + `uinput -T -m` 上滑解锁；
- API26 模拟器（bench26）走 entry 壳路由，自动化遍历按 id 前缀取页面（见 AGENTS.md）；
- bench26（HarmonyOS 7.0.0(26.0.0) Beta2）引导机理：Beta2 镜像在 `~/Library/Huawei/Sdk/system-image/HarmonyOS-7.0.0-B2`
  但 `Emulator -imageList` 不列；`-create` 须带全串 "HarmonyOS 7.0.0(26.0.0) Beta2"；CLI `-start`
  卡 uuid/sn 引导链（$TMPDIR 下需存在 config.ini uuid 同名临时文件，SN/部署路径初始化须
  DevEco GUI Device Manager 完成一次）——GUI 里 ▶ 按钮 a11y 零 bounds，须以 event 策略
  精确点 (1101,208) 类坐标；启动后 CLI hdc 交互正常，未签名 release .app 可直接 bm install；
- 大按钮数页（≥14）日志区曾被按钮 Flex 挤出屏幕致结果行不可采（老 cat-perm 问题机理）：
  DemoScaffold 已重构为单 Scroll 流（按钮 + 日志同列，2026-09），任意页日志均可达，
  sweep 可正常采集全部 ✅/❌ 行；
- 跨线程用例（taskpool/worker）孪生行采集竞态已修（2026-09-29）：`click_until_line` 以
  `${label} …` 待完成行为点击回执防吞击误判 + **缺行按钮优先补击**（先重击已有行的
  按钮会再次占满 UI 线程，缺行按钮点击继续被吞）+ dump 空结果重试（Beta2 镜像
  dumpLayout 间歇返回 0 节点）；
- 长遍历后 uitest dumpLayout 可能 30s 超时挂死，用 `tools/emulator_recover.sh`
  （探活/黑屏检测/冷启动）恢复；定向遍历单页可模块方式导入 sweep，设
  `es.ABILITY='VulnAbility'` 后 `es.visit_rows(['cat-xxx'], budget_seconds=600)`，
  结果读 `es.results`。

自动化遍历脚本：`tools/emulator_sweep.py`（用法见文件头注释）。
deeplink `ovd://backdoor` 实际拉起 BackdoorAbility；native xorNative/vulnCopy 运行无崩溃。

## 逆向工具输出 + 基准评分

```bash
cd <逆向工具仓库根>
PYTHONHASHSEED=0 .venv/bin/python examples/dis_demo.py ohosVulDetect/build/out/ohosVulDetect-api26-release-unsigned.app
python3 ohosVulDetect/groundtruth/check_manifest.py                                   # manifest↔源码一致性
python3 ohosVulDetect/groundtruth/score_output.py test.out ohosVulDetect/build/out/ohosVulDetect-api26-release-unsigned.app
```

### 评分口径（v2 评分器）

- 布尔/数字常量按 IR 文本形态归一化；调用链规则为全 token AND + 引号形态；
- interproc-chain 的 hop 可带 `source` 字段指向跨模块记录（TNT-005/006：source 锚
  HAR/HSP 记录、sink 在 feature）——评分器逐 hop 切换记录域判定
- NET-004/005 用 IR 谓词（return TRUE / emptyarray{}）；SECRET-005 标记 skip 不计分；
- 函数/record 级信号定位；逆向工具 IR 与源码逐操作对应（Math.random 链、SQL 模板串 concat、
  Web 属性链等已抽查验证）；
- native 密钥只在 libentry.so 可见（abc 级负样本成立）；`Math.random` 在 IR 中为 `Math."random"`。

